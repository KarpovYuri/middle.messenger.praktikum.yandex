import Block from '../../utils/Block';
import template from './addUserPage.hbs';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { addUserPageData } from '../../utils/bigData';
import handleSubmit from '../../utils/handleSubmit';
import UserController from '../../controllers/UserController';
import validateForm from '../../utils/validateForm';
import ChatsController from '../../controllers/ChatsController';
import './addUserPage.scss';

interface addUserProps {
  findUsers: [];
}

export class AddUserPage extends Block {
  constructor() {
    super({ ...addUserPageData, findUsers: [] });
  }

  init() {
    this.props.titleChat = localStorage.title;
    this.props.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.findBtn = new Button({
      ...this.props.findBtn,
      events: {
        click: async (evt: Event) => {
          let data = handleSubmit(evt);
          this.props.findUsers = await UserController.search(data);
        }
      }
    });
    this.children.addBtn = new Button({
      ...this.props.addBtn,
      events: {
        click: (evt: Event) => {
          const data = handleSubmit(evt);
          delete data.login;
          ChatsController.addUserToChat({
            users: Object.values(data),
            chatId: localStorage.selectedChat
          });
        }
      }
    });
    this.children.link = new Link(this.props.link);
    this.children.findUsers = this.findUsers(this.props);
  }

  componentDidUpdate(_oldProps: addUserProps, _newProps: addUserProps): boolean {
    this.children.findUsers = this.findUsers(_newProps);
    return true;
  }

  findUsers(props: addUserProps) {
    return props.findUsers.map(data => {
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
