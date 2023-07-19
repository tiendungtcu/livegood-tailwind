import { notifications } from '@mantine/notifications';
import type { Mutation } from '@tanstack/react-query';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import Router from 'next/router';
import Helper from 'utils/helpers';

import HttpStatus from './httpStatus';
import t from './translator';
import type { IError } from './type';

export const handleError = (
  error: IError,
  _: unknown,
  __?: unknown,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
) => {
  let errorMessage = typeof error.error === 'string' ? error.error : '';
  const errorCode = error.code;
  const errorError = error.data?.error;
  if (Array.isArray(error.error)) {
    const constraints = error.error[0]?.constraints;
    if (constraints && typeof constraints === 'object' && Object.keys(constraints).length > 0) {
      const firstConstraintError = Object.values(constraints)[0];
      if (firstConstraintError) {
        errorMessage = firstConstraintError;
      }
    }
  }

  if (errorMessage === 'Network Error') {
    errorMessage = t('validation.noNetwork');
  }
  if (mutation && mutation.meta) {
    const { notToastErrorCodes }: { notToastErrorCodes?: (number | string)[] } = mutation.meta;
    if (notToastErrorCodes && notToastErrorCodes.includes(errorCode)) {
      return;
    }
  }
  if (
    errorCode === HttpStatus.UNAUTHORIZED ||
    (errorCode === HttpStatus.INTERNAL_SERVER_ERROR && errorError === 'REFRESH_TOKEN_FAILED')
  ) {
    Helper.removeWebCookie();
    Router.push('/');
  } else {
    notifications.show({
      id: errorMessage,
      message: errorMessage,
      color: 'red',
    });
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing: true,
      refetchOnWindowFocus: false,
      retry: false,
      suspense: false,
      networkMode: 'offlineFirst',
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
  mutationCache: new MutationCache({
    onError: (error, query, context, mutation) =>
      handleError(error as IError, query, context, mutation),
  }),
  queryCache: new QueryCache({
    onError: (error, query) => handleError(error as IError, query),
  }),
});

// export const fetchDetail = ({
//   queryKey,
//   apiUrl,
//   customParams,
//   axiosConfig,
//   ...options
// }: FetchDetailOptions) => {
//   return queryClient.fetchQuery(
//     queryKey,
//     async () => {
//       const { data } = await api.get(apiUrl, {
//         params: customParams,
//         ...axiosConfig,
//       });
//       return data;
//     },
//     options,
//   );
// };

// export const fetchList = ({
//   queryKey,
//   apiUrl,
//   customParams,
//   axiosConfig,
//   omitKeys,
//   ...options
// }: FetchListOptions) => {
//   const queryParams = { ...(customParams || {}) };
//   if (!queryParams.limit) {
//     queryParams.limit = 10;
//   }
//   if (!queryParams.page) {
//     queryParams.page = 1;
//   }
//   if (omitKeys) {
//     omitKeys.forEach((key) => {
//       delete queryParams[key];
//     });
//   }
//   return queryClient.fetchQuery(
//     [...queryKey, queryParams],
//     async () => {
//       const { data } = await api.get(apiUrl, {
//         params: queryParams,
//         ...axiosConfig,
//       });
//       return data;
//     },
//     options,
//   );
// };
export default queryClient;
