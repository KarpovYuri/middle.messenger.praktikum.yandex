import Block from '../../utils/Block';
import template from './serverErrorPage.hbs';
import { Error } from '../../components/Error/error';
import { Link } from '../../components/Link/Link';
import './serverErrorPage.scss';

export class ServerErrorPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error500 = new Error({
      errorTitle: '500',
      errorDesc: 'Ошибка сервера'
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
