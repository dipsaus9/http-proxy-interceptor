import type { FetchResponse } from './FetchResponse';

export function createHttpClient(baseURL: string, baseConfig?: Partial<Omit<RequestInit, 'body'>>) {
  return {
    async get<T>(
      endPoint: string,
      config?: HttpConfig,
    ): Promise<FetchResponse<T>> {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'GET',
      });
    },
    async post<T>(
      endPoint: string,
      config?: HttpConfig,
    ): Promise<FetchResponse<T>> {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'POST',
      });
    },
    async put<T>(
      endPoint: string,
      config?: HttpConfig,
    ): Promise<FetchResponse<T>> {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'PUT',
      });
    },
    async delete<T>(
      endPoint: string,
      config?: HttpConfig,
    ): Promise<FetchResponse<T>> {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'DELETE',
      });
    },
  };
}

export type HttpConfig = Partial<Omit<RequestInit, 'method'>>;

export type HttpClient = ReturnType<typeof createHttpClient>;
