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

type OptionsWithoutMethod = Omit<Options, 'method'>;

const queryString = (data: Data) => {
  if (data) {
    return Object.entries(data).reduce((accumulator, [key, currentValue], currentIndex, array) => {
      return `${accumulator}${key}=${currentValue}${currentIndex < array.length - 1 ? '&' : ''}`;
    }, '?');
  }
  return '';
}

type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>
class HTTPTransport {

  public get: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: METHOD.GET })
  );

  public post: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: METHOD.POST })
  );

  public put: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: METHOD.PUT })
  );

  public delete: HTTPMethod = (url, options = {}) => (
    this.request(url, { ...options, method: METHOD.DELETE })
  );

  request(url: string, options: Options): Promise<XMLHttpRequest> {
    const { method, data } = options;

    const stringified = (method === METHOD.GET)
      ? queryString(data as Data) : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + stringified);
      xhr.setRequestHeader('Content-Type', 'text/plain');

      xhr.onload = function () {
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
