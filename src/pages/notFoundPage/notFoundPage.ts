import Block from '../../utils/Block';
import template from './notFoundPage.hbs';
import { Error } from '../../components/Error/error';
import { Link } from '../../components/Link/Link';
import './notFoundPage.scss';

export class NotFoundPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error404 = new Error({
      errorTitle: '404',
      errorDesc: 'Страница не найдена'
    });

    this.children.linkBack = new Link({
      url: '/',
      urlText: 'Главная'
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
