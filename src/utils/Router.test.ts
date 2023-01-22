import Router, { BlockConstructable } from './Router'
import { expect } from 'chai';
import sinon from 'sinon';

describe('Тестируем Router', () => {

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  const getContentFake = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as BlockConstructable;

  it('.use() - Возврат экземпляра Router', () => {
    const result = Router.use('/', BlockMock);
    expect(result).to.eq(Router);
  });

  it('.use() - Переход на стартовую страницу', () => {
    Router
      .use('/', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('.back() - Переход назад по истории', () => {
    Router
      .use('/', BlockMock)
      .start();
    Router.back();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('.forward() - Переход вперед по истории', () => {
    Router
      .use('/', BlockMock)
      .start();
    Router.forward();

    expect(getContentFake.callCount).to.eq(1);
  });

});
