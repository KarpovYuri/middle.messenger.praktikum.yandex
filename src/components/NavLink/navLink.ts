import Block from '../../utils/Block';
import template from './navLink.hbs';
import  './navLink.scss';

type NavLinkProps = {
  url: string;
  linkText: string;
}

export class NavLink extends Block<NavLinkProps> {
  constructor(props: NavLinkProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
