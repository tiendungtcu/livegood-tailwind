/* eslint-disable import/no-cycle */

import type { NotificationProps } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import type { IListItem } from 'hooks/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import process from 'process';
import type { ReactNode } from 'react';

import type { WebCookie } from './type';

const Helper = {
  getWebCookie: (req?: NextApiRequest, res?: NextApiResponse) => {
    const cookies = JSON.parse(
      (getCookie(`${process.env.PROJECT_NAME}-web-cookie`, req && res ? { req, res } : {}) ||
        '{}') as string,
    ) as WebCookie;
    return cookies;
  },

  setToken: (data: WebCookie, remember?: boolean, options?: OptionsType): void => {
    setCookie(`${process.env.PROJECT_NAME}-web-cookie`, data, {
      domain: process.env.NEXT_PUBLIC_SHARED_COOKIE_DOMAIN,
      path: '/',
      ...options,
      maxAge: remember ? Number(process.env.SESSION_TIME ?? 7776000) : undefined,
    });
  },
  removeWebCookie: (): void =>
    deleteCookie(`${process.env.PROJECT_NAME}-web-cookie`, {
      domain: process.env.NEXT_PUBLIC_SHARED_COOKIE_DOMAIN,
      path: '/',
    }),
  convertObjectToOptions: (obj: Record<string, string>): IListItem[] => {
    return Object.keys(obj).map((key) => ({
      id: key,
      name: obj[key] as string,
    }));
  },
  getTokenConfig: (req: unknown, res: unknown) => {
    const cookies = Helper.getWebCookie(req as NextApiRequest, res as NextApiResponse);
    const { accessToken } = cookies;
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  },
  formatUrl: (url: string) => {
    if (typeof url !== 'string') {
      return undefined;
    }
    return url.startsWith('https://') || url.startsWith('http://') ? url : `http://${url}`;
  },
  convertArrayToEntities: (array: IListItem[]) => {
    const ids: string[] = [];
    const entities = (array || []).reduce((acc, cur) => {
      ids.push(cur.id);
      return { ...acc, [cur.id]: cur };
    }, {});
    return {
      ids,
      entities,
    };
  },
  getYouTubeVideoIdFromUrl: (url: string) => {
    // Our regex pattern to look for a youTube ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    // Match the url with the regex
    const match = url.match(regExp);
    // Return the result
    return match && match[2]?.length === 11 ? match[2] : undefined;
  },
  addComma: (value: string | number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),

  notification: (
    message: ReactNode,
    status: 'success' | 'error' | 'warning',
    notification?: NotificationProps,
  ) => {
    const StatusColor = {
      success: 'teal',
      error: 'red',
      warning: 'yellow',
    };
    return notifications.show({
      id: `${new Date().getTime()}`,
      message,
      autoClose: 5000,
      color: StatusColor[status],
      ...notification,
    });
  },

  redirectToProviderBoard: (route?: string | string[]) => {
    window.location.href = `${process.env.NEXT_PUBLIC_PROVIDER_BOARD_DOMAIN}${route || ''}`;
  },
};

export default Helper;
