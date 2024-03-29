import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (error: any) {
      console.error(error);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }

  async logout() {
    try {
      localStorage.removeItem('selectedChat');
      localStorage.removeItem('title');
      localStorage.removeItem('avatar');
      store.set('selectedChat', '');
      store.set('title', '');
      store.set('avatar', '');
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
