import { SigninPage } from './pages/SigninPage/signinPage';
import { SignupPage } from './pages/SignupPage/signupPage';
import { ProfilePage } from './pages/ProfilePage/profilePage';
import { ChatPage } from './pages/ChatPage/chatPage';
// import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
// import { ServerErrorPage } from './pages/serverErrorPage/serverErrorPage';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Signup = '/sign-up',
  Profile = '/settings',
  Chat = '/messenger',
  // Error404 = '/404',
  // Error500 = '/500'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, SigninPage)
    .use(Routes.Signup, SignupPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Chat, ChatPage)
    // .use(Routes.Error404, NotFoundPage)
    // .use(Routes.Error500, ServerErrorPage)

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