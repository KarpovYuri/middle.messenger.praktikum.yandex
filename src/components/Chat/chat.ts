import Block from '../../utils/Block';
import template from './chat.hbs';
import { Message } from '../Message/message';
import { Input } from '../Input/input';
import { Button } from '../Button/button';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../hocs/withStore';
import { chatData } from '../../utils/bigData';
import ChatsController from '../../controllers/ChatsController';
import  './chat.scss'

interface ChatProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
  title: string;
}

class ChatBase extends Block {
  constructor(props: ChatProps) {
    super({ ...props, ...chatData });
  }
  protected init() {
    this.children.messages = this.createMessages(this.props);

    this.children.input = new Input(this.props.input);

    this.children.button = new Button({
      ...this.props.sendBtn,
      events: {
        click: (evt: Event) => {
          evt.preventDefault();
          const input =this.children.input as Input;
          const message = input.getValue();
          input.setValue('');
          MessagesController.sendMessage(this.props.selectedChat!, message);
        }
      }
    });

    this.children.deleteChatBtn = new Button({
      ...this.props.deleteChatBtn,
      events: {
        click: () => {
          ChatsController.delete(this.props.selectedChat);
        }
      }
    });
  }

  protected componentDidUpdate(_oldProps: ChatProps, _newProps: ChatProps): boolean {
    this.children.messages = this.createMessages(_newProps);

    return true;
  }

  private createMessages(props: ChatProps) {
    return props.messages.map(data => {
      return new Message({...data, isMine: props.userId === data.user_id });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
      title: undefined
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    title: state.title
  };
});

export const Chat = withSelectedChatMessages(ChatBase);
