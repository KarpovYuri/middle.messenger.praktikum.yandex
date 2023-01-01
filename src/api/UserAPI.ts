import BaseAPI from './BaseAPI';

export interface UpdateProfile {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}
export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateProfile(data: UpdateProfile) {
    return this.http.put('/profile', data);
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
