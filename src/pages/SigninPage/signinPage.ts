import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { signinPageData } from '../../utils/bigData';
import './signinPage.scss';

export class SigninPage extends Block {
  constructor() {
    super({ ...signinPageData });
  }

  init() {
    this.props.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.button);
    this.children.link = new Link(this.props.link);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
