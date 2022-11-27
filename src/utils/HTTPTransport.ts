import queryString = require('query-string');

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

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTPTransport {

  public get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  };

  public post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.POST });
  };

  public put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PUT });
  };

  public delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.DELETE });
  };

  request(url: string, options: Options): Promise<XMLHttpRequest> {
    const { method, data } = options;

    // Если метод = GET преобразовать data в query string
    const stringified = (method === METHOD.GET)
      ? queryString.stringify(data as Record<string, string | number>) : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + stringified);
      xhr.setRequestHeader('Content-Type', 'text/plain');

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
