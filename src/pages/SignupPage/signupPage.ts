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
    super({ signupPageData });
  }

  init() {
    this.children.title = new Title(this.props.signupPageData.title);
    this.props.signupPageData.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.signupPageData.button);
    this.children.formLink = new Link(this.props.signupPageData.formLink);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
