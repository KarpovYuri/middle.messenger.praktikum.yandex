import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { Error } from '../../components/Error/error';
import { NavLink } from '../../components/NavLink/navLink';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.chat = new Error({
      errorTitle: '404',
      errorDesc: 'Скоро здесь будет чатик'
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

  const chatPage = new ChatPage();
  document.querySelector('#app')!.append(chatPage.getContent()!);
  chatPage.dispatchComponentDidMount();
