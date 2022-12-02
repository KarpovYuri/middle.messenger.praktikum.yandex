import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import handleSubmit from '../../utils/handleSubmit';
import { userCards } from '../../utils/bigData';
import { messages } from '../../utils/bigData';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({
      userCards,
      messages,
    });
  }

  init() {

    this.props.UserCard = this.props.userCards.map((card: any, index: number) => this.children[`userCard${index+1}`] = new UserCard(card));
    this.props.Message = this.props.messages.map((message: any, index: number) => this.children[`message${index+1}`] = new Message(message));

    this.children.button = new Button({
      label: '',
      className: 'message-enter__send-btn',
      type: 'submit',
      disabled: '',
      events: {
        click: (evt: Event) => handleSubmit(evt),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const chatPage = new ChatPage();
document.querySelector('#app')!.append(chatPage.getContent()!);
chatPage.dispatchComponentDidMount();
