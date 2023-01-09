import { SigninPage } from './pages/SigninPage/signinPage';
import { SignupPage } from './pages/SignupPage/signupPage';
import { ProfilePage } from './pages/ProfilePage/profilePage';
import { ChatPage } from './pages/ChatPage/chatPage';
import { PasswordPage } from './pages/PasswordPage/passwordPage';
import { AddUserPage } from './pages/AddUserPage/addUserPage';
import { DeleteUserPage } from './pages/DeleteUserPage/deleteUserPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { ServerErrorPage } from './pages/serverErrorPage/serverErrorPage';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Signup = '/sign-up',
  Profile = '/settings',
  Chat = '/messenger',
  Password = '/password',
  AddUser = '/add-user',
  DeleteUser = '/delete-user',
  Error404 = '/404',
  Error500 = '/500'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, SigninPage)
    .use(Routes.Signup, SignupPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Chat, ChatPage)
    .use(Routes.Password, PasswordPage)
    .use(Routes.AddUser, AddUserPage)
    .use(Routes.DeleteUser, DeleteUserPage)
    .use(Routes.Error404, NotFoundPage)
    .use(Routes.Error500, ServerErrorPage)

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
      Router.go(Routes.Chat)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute
      && window.location.pathname != Routes.Error404
      && window.location.pathname != Routes.Error500)
    {
      Router.go(Routes.Index);
    }
  }

});
