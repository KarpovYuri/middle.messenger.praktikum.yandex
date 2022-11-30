import Block from '../../utils/Block';
import template from './userCard.hbs';
import  './userCard.scss';

type UserCardProps = {
  userName: string;
  lastMessage: string;
  dateLastMessage: string;
  qtyUnreadMessage: string;
}

export class UserCard extends Block<UserCardProps> {
  constructor(props: UserCardProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
