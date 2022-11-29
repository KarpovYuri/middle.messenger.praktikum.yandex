import Block from '../../utils/Block';
import template from './indexPage.hbs';
import { NavLink } from '../../components/NavLink/navLink';
import './indexPage.sass';

export class IndexPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.linkSignin = new NavLink({
      url: '/signin.html',
      linkText: 'Авторизация'
    });

    this.children.linkSignup = new NavLink({
      url: '/signup.html',
      linkText: 'Регистрация'
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const homePage = new IndexPage();
  document.querySelector('#app')!.append(homePage.getContent()!);
  homePage.dispatchComponentDidMount();
