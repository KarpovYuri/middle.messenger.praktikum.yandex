import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { messagePageData } from '../../utils/bigData';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({ ...messagePageData });
  }

  init() {

    this.props.userCards.map((item: any, index: number) => (
      this.children[`userCard${index+1}`] = new UserCard(item)
    ));
    this.props.messages.map((item: any, index: number) => (
      this.children[`message${index+1}`] = new Message(item)
    ));
    this.children.button = new Button(this.props.button);
    this.children.linkAddChat = new Link(this.props.linkAddChat);
    this.children.linkProfile = new Link(this.props.linkProfile);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
