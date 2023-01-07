import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { ChatsList } from '../../components/ChatsList/chatsList';
import { chatPageData } from '../../utils/bigData';
import ChatsController from '../../controllers/ChatsController';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({ ...chatPageData });
  }

  init() {

    this.children.linkAddChat = new Link(this.props.linkAddChat);
    this.children.linkProfile = new Link(this.props.linkProfile);
    this.children.chatsList = new ChatsList({ isLoaded: false });
    this.props.messages.map((item: any, index: number) => (
      this.children[`message${index+1}`] = new Message(item)
    ));
    this.children.button = new Button(this.props.button);

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true
      })
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
