import Block from '../../utils/Block';
import template from './indexPage.hbs';
import { Title } from '../../components/Title/title';
import { NavLink } from '../../components/NavLink/navLink';
import './indexPage.scss';

export class IndexPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.title = new Title({
      title: 'Страницы'
    });

    this.children.linkSignin = new NavLink({
      url: '/signin.html',
      linkText: 'Авторизация'
    });

    this.children.linkSignup = new NavLink({
      url: '/signup.html',
      linkText: 'Регистрация'
    });

    this.children.linkProfile = new NavLink({
      url: '/profile.html',
      linkText: 'Профиль'
    });

    this.children.link404 = new NavLink({
      url: '/404.html',
      linkText: 'Ошибка 404'
    });

    this.children.link500 = new NavLink({
      url: '/500.html',
      linkText: 'Ошибка 500'
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const indexPage = new IndexPage();
  document.querySelector('#app')!.append(indexPage.getContent()!);
  indexPage.dispatchComponentDidMount();
