import Block from '../../utils/Block';
import template from './chatCard.hbs';
import { withStore } from '../../hocs/withStore';
import { ChatInfo } from '../../api/ChatsAPI';
import  './chatCard.scss'

interface ChatCardProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatInfo;
  events: {
    click: () => void;
  }
}

class ChatCardBase extends Block {
  constructor(props: ChatCardProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, isSelected: this.props.id === this.props.selectedChat?.id});
  }
}

export const withSelectedChat = withStore(state => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));

export const ChatCard = withSelectedChat(ChatCardBase);
