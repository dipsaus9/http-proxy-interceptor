import type { FetchResponse } from './FetchResponse';

export function createHttpClient(baseURL: string, baseConfig?: Partial<Omit<RequestInit, 'body'>>): HttpClient {
  return {
    get(endPoint, config?) {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'GET',
      });
    },
    post(endPoint, config) {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'POST',
      });
    },
    put(endPoint, config) {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'PUT',
      });
    },
    delete(endPoint, config) {
      return fetch(`${baseURL}${endPoint}`, {
        ...baseConfig,
        ...config,
        method: 'DELETE',
      });
    },
  };
}

export type HttpConfig = Partial<Omit<RequestInit, 'method'>>;


export type HttpCall = <T>(endPoint: string, config?: HttpConfig) => Promise<FetchResponse<T>>;

export type HttpClient = {
  get: HttpCall
  post: HttpCall
  put: HttpCall
  delete: HttpCall
};
