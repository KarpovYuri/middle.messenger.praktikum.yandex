import { SigninPage } from './pages/SigninPage/signinPage';
import { SignupPage } from './pages/SignupPage/signupPage';
import { ProfilePage } from './pages/ProfilePage/profilePage';
import { ChatPage } from './pages/ChatPage/chatPage';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Signup = '/sign-up',
  Profile = '/settings',
  Chat = '/messenger'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, SigninPage)
    .use(Routes.Signup, SignupPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Chat, ChatPage)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Signup:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
