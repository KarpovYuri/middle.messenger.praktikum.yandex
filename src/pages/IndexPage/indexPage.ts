import Block from '../../utils/Block';
import template from './indexPage.hbs';
import { NavLink } from '../../components/NavLink/navLink';
import './indexPage.sass';

export class IndexPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.linkLogin = new NavLink({
      url: '/signin.html',
      linkText: 'Авторизация'
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const homePage = new IndexPage();
  document.querySelector('#app')!.append(homePage.getContent()!);
  homePage.dispatchComponentDidMount();
});
