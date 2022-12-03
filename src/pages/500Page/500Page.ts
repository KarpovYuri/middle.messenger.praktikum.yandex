import Block from '../../utils/Block';
import template from './500Page.hbs';
import { Error } from '../../components/Error/error';
import { NavLink } from '../../components/NavLink/navLink';
import './500Page.scss';

export class ErrorPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error500 = new Error({
      errorTitle: '500',
      errorDesc: 'Ошибка сервера'
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
