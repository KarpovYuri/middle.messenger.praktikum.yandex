import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import template from './Link.hbs';
import  './Link.scss';

interface LinkProps extends PropsWithRouter {
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block {
  constructor(props: LinkProps) {
    super({
      events: {
        click: () => this.navigate()
      },
      ...props,
    });
  }

  navigate() {
    this.props.router.go(this.props.url);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
