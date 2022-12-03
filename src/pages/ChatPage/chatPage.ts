import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import { messagePageData } from '../../utils/bigData';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor(propsWithChildren: {}) {
    super({ propsWithChildren });
  }

  init() {

    this.props.propsWithChildren.userCards.map((item: any, index: number) => (
      this.children[`userCard${index+1}`] = new UserCard(item)
    ));
    this.props.propsWithChildren.messages.map((item: any, index: number) => (
      this.children[`message${index+1}`] = new Message(item)
    ));
    this.children.button = new Button(this.props.propsWithChildren.button);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const chatPage = new ChatPage(messagePageData);
document.querySelector('#app')!.append(chatPage.getContent()!);
chatPage.dispatchComponentDidMount();
