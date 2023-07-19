import { notifications } from '@mantine/notifications';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';
import { useTranslations } from 'next-intl';
import api from 'utils/api';

interface Options<TData, TVariables, TError>
  extends Omit<UseMutationOptions<TVariables, TError, TData>, 'mutationFn'> {
  apiUrl: string | ((params?: TData) => string);
  method?: string;
  defaultToast?: boolean;
  successMessage?: string;
  axiosConfig?: AxiosRequestConfig;
}

const useMutate = <TData = unknown, TVariables = unknown, TError = unknown>(
  options: Options<TData, TVariables, TError>,
) => {
  const {
    apiUrl,
    defaultToast,
    method = 'post',
    successMessage,
    axiosConfig,
    ...otherOptions
  } = options;
  const t = useTranslations();
  return useMutation(
    async (params?: TData) => {
      // This hook is focusing on these these methods,
      const url = typeof apiUrl === 'string' ? apiUrl : apiUrl(params);
      switch (method) {
        case 'put': {
          const { data } = await api.put(url, params, axiosConfig);
          return data;
        }
        case 'delete': {
          const { data } = await api.delete(url, {
            data: params,
            ...axiosConfig,
          });
          return data;
        }
        case 'patch': {
          const { data } = await api.patch(url, params, axiosConfig);
          return data;
        }
        default: {
          const { data } = await api.post(url, params, axiosConfig);
          return data;
        }
      }
    },
    {
      onSuccess: () => {
        if (defaultToast || successMessage) {
          // Config show your success toast here
          notifications.show({
            id: successMessage || t('validation.completed'),
            message: successMessage || t('validation.completed'),
            color: 'green',
          });
        }
      },
      ...otherOptions,
    },
  );
};

export default useMutate;
