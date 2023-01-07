import Block from '../../utils/Block';
import template from './chatsList.hbs';
import { ChatCard } from '../ChatCard/chatCard';
import { withStore } from '../../hocs/withStore';
import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import  './chatsList.scss';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
  }

  protected componentDidUpdate(_oldProps: ChatsListProps, _newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(_newProps);
    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new ChatCard({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id, data.title);
          }
        }
      });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props });
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
