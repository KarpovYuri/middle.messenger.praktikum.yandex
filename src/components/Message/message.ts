import Block from '../../utils/Block';
import template from './message.hbs';
import  './message.scss';

type MessageProps = {
  messageClassModifier: string;
  messageTimeClassModifier: string;
  message: string;
  timeMessage: string;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
