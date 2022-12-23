import Block from '../../utils/Block';
import template from './notFoundPage.hbs';
import { Error } from '../../components/Error/error';
import { NavLink } from '../../components/NavLink/navLink';
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

    this.children.linkBack = new NavLink({
      url: '/index.html',
      linkText: 'Назад'
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
