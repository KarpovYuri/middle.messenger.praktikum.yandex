import Block from '../../utils/Block';
import template from './404Page.hbs';
import { Error } from '../../components/Error/error';
import { NavLink } from '../../components/NavLink/navLink';
import './404Page.scss';

export class ErrorPage extends Block {
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

  const errorPage = new ErrorPage();
  document.querySelector('#app')!.append(errorPage.getContent()!);
  errorPage.dispatchComponentDidMount();
