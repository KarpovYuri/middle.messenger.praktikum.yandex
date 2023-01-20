import Block from '../../utils/Block';
import template from './passwordPage.hbs';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { passwordPageData } from '../../utils/bigData';
import './passwordPage.scss';

export class PasswordPage extends Block {
  constructor() {
    super({ ...passwordPageData });
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
