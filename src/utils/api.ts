import type { AxiosHeaders } from 'axios';
import axios from 'axios';
import get from 'lodash/get';
import authQuery from 'models/auth';

import { CUSTOM_LANG_DEFAULT } from './const';
import Helper from './helpers';
import HttpStatus from './httpStatus';
import queryClient from './queryClient';

let isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: unknown, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const api = axios.create({
  baseURL: process.env.API_SERVER_BASE_URL,
});

api.interceptors.request.use((config) => {
  const webCookie = Helper.getWebCookie();
  if (config.headers) {
    if (webCookie?.accessToken && !config.headers.Authorization) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${webCookie?.accessToken}`);
    }
    // (config.headers as AxiosHeaders).set(
    //   'Accept-Timezone',
    //   Intl.DateTimeFormat().resolvedOptions().timeZone,
    // );
    (config.headers as AxiosHeaders).set('x-custom-lang', CUSTOM_LANG_DEFAULT);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  ({ message, response, config }) => {
    const webCookie = Helper.getWebCookie();
    const originalRequest = config;

    const refreshToken = webCookie?.refreshToken;
    if (
      (response?.status === HttpStatus.UNAUTHORIZED && !refreshToken) ||
      (response?.status === HttpStatus.INTERNAL_SERVER_ERROR &&
        response?.data?.error === 'REFRESH_TOKEN_FAILED')
    ) {
      Helper.removeWebCookie();
      queryClient
        .getQueryCache()
        .findAll(['currentUser'])
        .forEach((query) => query.setData(undefined));
    }
    if (
      response?.status === HttpStatus.UNAUTHORIZED &&
      response?.data?.statusCode === 5002 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        api
          .post(authQuery.refresh.apiUrl, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          })
          .then(({ data }) => {
            Helper.setToken({ ...webCookie, accessToken: data.accessToken }, true);

            api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            processQueue(null, data.accessToken);
            resolve(api(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    if (response?.status === HttpStatus.UNAUTHORIZED) {
      Helper.removeWebCookie();
      queryClient
        .getQueryCache()
        .findAll(['currentUser'])
        .forEach((query) => query.setData(undefined));
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      data: get(response, 'data.data') || get(response, 'data'),
      error: get(response, 'data.error.message') || get(response, 'data.message') || message,
      code: get(response, 'data.code', response?.status || -1),
    });
  },
);

export default api;
