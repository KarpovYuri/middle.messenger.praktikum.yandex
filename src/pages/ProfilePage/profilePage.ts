import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { profilePageData } from '../../utils/bigData';
import './profilePage.scss';

export class ProfilePage extends Block {
  constructor() {
    super({ profilePageData });
  }

  init() {
    this.children.title = new Title(this.props.profilePageData.title);
    this.props.profilePageData.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.profilePageData.button);
    this.children.link = new Link(this.props.profilePageData.link);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
