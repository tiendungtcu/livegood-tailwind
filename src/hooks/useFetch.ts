import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import api from 'utils/api';

export interface Options<TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>
  extends Omit<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, 'queryFn' | 'queryKey'> {
  queryKey: QueryKey;
  apiUrl: string;
  customParams?: Record<string, unknown>;
  method?: string;
}

const useFetch = <TQueryFnData = unknown, TData = TQueryFnData, TError = unknown>(
  options: Options<TQueryFnData, TData, TError>,
) => {
  const { isReady } = useRouter();
  const { queryKey, apiUrl, customParams, method = 'get', ...otherOptions } = options;

  const fetchData = async () => {
    switch (method) {
      case 'patch': {
        const { data } = await api.patch(apiUrl, customParams);
        return data;
      }
      default: {
        const { data } = await api.get(apiUrl, { params: customParams });
        return data;
      }
    }
  };

  return useQuery(queryKey, fetchData, {
    enabled: isReady,
    ...otherOptions,
  });
};

export default useFetch;
