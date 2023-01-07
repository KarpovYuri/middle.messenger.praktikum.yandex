import Block from '../../utils/Block';
import template from './message.hbs';
import  './message.scss';

type MessageProps = {
  content: string;
  time: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super({ ...props, time: props.time.substring(11, 16) });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
