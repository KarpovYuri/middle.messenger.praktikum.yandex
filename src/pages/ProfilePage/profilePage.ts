import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { profilePageData } from '../../utils/bigData';
import { withStore } from '../../hocs/withStore';
import './profilePage.scss';

class ProfilePageBase extends Block {
  constructor(props: {}) {
    super({ ...profilePageData, ...props });
  }

  init() {
    this.props.inputs.map((item: any) => {
      this.children[item.name] = new Input({ ...item, value: this.props[item.name] });
    });
    this.children.button = new Button(this.props.button);
    this.children.changePasswordLink = new Link(this.props.changePasswordLink);
    this.children.logoutLink = new Link(this.props.logoutLink);
    this.children.linkBack = new Link(this.props.linkBack);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const withUser = withStore((state) => ({ ...state.user }));
export const ProfilePage = withUser(ProfilePageBase);
