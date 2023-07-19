import type { FetchQueryOptions } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

// Define your error type according to your server response
export type IError = {
  error: string | { property: string; constraints: Record<string, string> }[];
  data?: { error: string; message: string; statusCode: number };
  code: number | string;
};

export interface FetchDetailOptions extends FetchQueryOptions<any, unknown, any, string[]> {
  queryKey: string[];
  apiUrl: string;
  customParams?: Record<string, unknown>;
  axiosConfig?: AxiosRequestConfig;
}

export interface FetchListOptions extends FetchQueryOptions<any, unknown, any, unknown[]> {
  queryKey: unknown[];
  apiUrl: string;
  customParams?: Record<string, unknown>;
  axiosConfig?: AxiosRequestConfig;
  omitKeys: string[];
}

export enum ROLES {
  PROVIDER,
  CONSUMER,
}

export enum Gender {
  MALE,
  FEMALE,
  UNANSWERED,
}

export type WebCookie = {
  accessToken: string;
  refreshToken: string;
  profile?: {
    email: string;
    status: string | ProfileStatus;
    _id: string;
  };
};

export enum BloodType {
  A = 'A',
  B = 'B',
  C = 'C',
  AB = 'AB',
}

export enum ExtraStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  INVITED = 'INVITED',
  REQUESTED = 'REQUESTED',
  REJECTED = 'REJECTED',
}

export enum ProfileStatus {
  /**
   * Created but not actived yet
   */
  TEMPORARY = 'TEMPORARY',

  /**
   * Active through email but not register yet
   */
  WAITING = 'PROFILE_WAITING',

  /**
   * After register through provider board register form
   */
  PENDING = 'PENDING',

  /**
   * Can access to user dashboard
   */
  APPROVED = 'APPROVED',

  /**
   * Can't access to user dashboard
   */
  UNAPPROVED = 'UNAPPROVED',
}
