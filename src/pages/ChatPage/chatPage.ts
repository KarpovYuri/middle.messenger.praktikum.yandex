import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { Link } from '../../components/Link/Link';
import { ChatsList } from '../../components/ChatsList/chatsList';
import { Chat } from '../../components/Chat/chat';
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
    this.children.chat = new Chat({});


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
