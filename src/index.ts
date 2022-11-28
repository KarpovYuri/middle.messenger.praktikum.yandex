import { Signin } from './pages/Signin/index';


window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const signin = new Signin();

  root.append(signin.getContent()!);

  signin.dispatchComponentDidMount();
});
