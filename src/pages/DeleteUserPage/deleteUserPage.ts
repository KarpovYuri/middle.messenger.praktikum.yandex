import Block from '../../utils/Block';
import template from './deleteUserPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { deleteUserPageData } from '../../utils/bigData';
import handleSubmit from '../../utils/handleSubmit';
import validateForm from '../../utils/validateForm';
import ChatsController from '../../controllers/ChatsController';
import './deleteUserPage.scss';

interface deleteUserProps {
  getUsers: [];
}

export class DeleteUserPage extends Block {
  constructor() {
    super({ ...deleteUserPageData, getUsers: [] });
  }

  async init() {
    this.children.title = new Title({
      title: `${this.props.title.title} ${localStorage.title} #${localStorage.selectedChat}`
    });
    this.children.deleteBtn = new Button({
      ...this.props.deleteBtn,
      events: {
        click: (evt: Event) => {
          const data = handleSubmit(evt);
          console.log(data)
          ChatsController.deleteUserToChat({
            users: Object.values(data),
            chatId: localStorage.getItem('selectedChat')
          });
        }
      }
    });
    this.children.link = new Link(this.props.link);
    this.props.getUsers = await ChatsController.getUserFromChat(localStorage.selectedChat);
  }

  componentDidUpdate(_oldProps: deleteUserProps, _newProps: deleteUserProps): boolean {
    this.children.getUsers = this.getUsers(_newProps);
    return true;
  }

  getUsers(props: deleteUserProps) {
    return props.getUsers.map(data => {
      return new Input({
        ...data as any,
        checkBox: true,
        events: {
          change: (evt: Event) => validateForm(evt.target as HTMLInputElement)
        }
      });
    })
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
