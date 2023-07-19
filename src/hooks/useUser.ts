import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import useFetch from 'hooks/useFetch';
import authQuery from 'models/auth';
import type { IUser } from 'models/auth/type';
import Helper from 'utils/helpers';

export interface Options<TQueryFnData = unknown, TData = TQueryFnData>
  extends Omit<UseQueryOptions<TQueryFnData, unknown, TData, QueryKey>, 'queryFn' | 'queryKey'> {
  customParams?: Record<string, unknown>;
}

const useUser = (options?: Options<IUser>) => {
  const { enabled = true, ...otherOptions } = options || {};
  const webCookie = Helper.getWebCookie();

  return useFetch<IUser>({
    ...authQuery.currentUser,
    enabled: enabled && !!webCookie?.accessToken,
    staleTime: Infinity,
    ...otherOptions,
  });
};

export default useUser;
