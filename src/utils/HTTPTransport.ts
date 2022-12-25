enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Data = Record<string, string | number>;

type Options = {
  method: METHOD;
  data?: unknown;
};

const queryString = (data: Data) => {
  if (data) {
    return Object.entries(data).reduce((accumulator, [key, currentValue], currentIndex, array) => {
      return `${accumulator}${key}=${currentValue}${currentIndex < array.length - 1 ? '&' : ''}`;
    }, '?');
  }
  return '';
}

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

  public put<Response = void>(url: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHOD.PUT,
      data,
    });
  }

  public delete<Response>(url: string): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHOD.DELETE,
    });
  }

  private request<Response>(url: string, options: Options = {method: METHOD.GET}): Promise<Response> {
    const { method, data } = options;

    const stringified = (method === METHOD.GET)
      ? queryString(data as Data) : '';

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

      xhr.onabort = () => reject({reason: 'abort'});
      xhr.onerror = () => reject({reason: 'network error'});
      xhr.ontimeout = () => reject({reason: 'timeout'});

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        const data2 = {login: "gsdfgsfdg", password: "ggsfgsdfg"}
        xhr.send(JSON.stringify(data2));
      }
    });
  };
}

export default HTTPTransport;
