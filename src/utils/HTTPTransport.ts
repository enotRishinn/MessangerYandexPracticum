const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data: Record<string, any>): string {
  if (!data) {
    return '';
  }

  return (
    `?${
      Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')}`
  );
}

  interface Options {
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
class HTTPTransport {
  get(url: string, options: Options = {}) {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  post(url: string, options: Options = {}) {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  put(url: string, options: Options = {}) {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  delete(url: string, options: Options = {}) {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  // eslint-disable-next-line class-methods-use-this
  private request(url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> {
    const { method, headers = {}, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('Нет метода'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && data ? `${url}${queryStringify(data)}` : url);

      xhr.timeout = timeout;

      xhr.onload = () => resolve(xhr);
      xhr.onabort = () => reject(new Error('Request aborted'));
      xhr.onerror = () => reject(new Error('Request failed'));
      xhr.ontimeout = () => reject(new Error('Request timed out'));

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
