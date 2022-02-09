export interface FetchResponse<T> extends Response {
  json(): Promise<T>;
  clone(): FetchResponse<T>;
}
