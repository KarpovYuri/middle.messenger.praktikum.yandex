import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport';
import { expect } from 'chai';

describe('Тестируем HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests.length = 0;
  })

  it('.get() - Отправка GET запроса', () => {
    instance.get('/user');
    const [request] = requests;
    expect(request.method).to.eq('GET');
  });

  it('.post() - Отправка POST запроса', () => {
    instance.post('/user');
    const [request] = requests;
    expect(request.method).to.eq('POST');
  });

  it('.delete() - Отправка DELETE запроса', () => {
    instance.delete('/user');
    const [request] = requests;
    expect(request.method).to.eq('DELETE');
  });

  it('.put() - Отправка PUT запроса', () => {
    instance.put('/user');
    const [request] = requests;
    expect(request.method).to.eq('PUT');
  });

});
