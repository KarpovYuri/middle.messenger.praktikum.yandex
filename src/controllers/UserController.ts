import API, { UserAPI, UpdateProfile, UpdatePassword, SearchUser } from '../api/UserAPI';
import AuthController from './AuthController';
import router from '../utils/Router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async search(data: SearchUser) {
    try {
      const result = await this.api.search(data);
      return result;
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

  async updateProfile(data: UpdateProfile) {
    try {
      await this.api.updateProfile(data);
      await AuthController.fetchUser();
      router.go('/messenger');
    } catch (error: any) {
      console.error(error);
    }
  }

  async updatePassword(data: UpdatePassword) {
    try {
      await this.api.updatePassword(data);
      await AuthController.fetchUser();
      router.go('/settings');
    } catch (error: any) {
      console.error(error);
    }
  }
}

export default new UserController();
