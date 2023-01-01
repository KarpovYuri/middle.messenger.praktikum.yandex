import API, { UserAPI, UpdateProfile } from '../api/UserAPI';
import AuthController from './AuthController';
import router from '../utils/Router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async updateProfile(data: UpdateProfile) {
    try {
      await this.api.updateProfile(data);
      await AuthController.fetchUser();
      router.go('/messenger');
    } catch (error: any) {
      console.error(error);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.fetchUser();
    } catch (error: any) {
      console.error(error);
    }
  }
}

export default new UserController();
