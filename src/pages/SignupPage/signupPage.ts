import Block from '../../utils/Block';
import template from './signupPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { signupPageData } from '../../utils/bigData';
import './signupPage.scss';

export class SignupPage extends Block {
  constructor() {
    super({ ...signupPageData });
  }

  init() {
    this.children.title = new Title(this.props.title);
    this.props.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.button);
    this.children.link = new Link(this.props.link);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
