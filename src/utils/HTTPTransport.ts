import { queryString } from "./helpers";

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: METHOD;
  data?: unknown;
};

class HTTPTransport {

  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(url = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + url);
  }

  public post<Response = void>(url: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHOD.POST,
      data,
    });
  }

  public put<Response = void>(url: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHOD.PUT,
      data,
    });
  }

  public delete<Response>(url: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHOD.DELETE,
      data,
    });
  }

  private request<Response>(url: string, options: Options = { method: METHOD.GET }): Promise<Response> {
    const { method, data } = options;

    const stringified = (method === METHOD.GET)
      ? queryString(data as Record<string, string | number>) : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + stringified);

      xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
