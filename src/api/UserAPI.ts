import BaseAPI from './BaseAPI';

export interface UpdateProfile {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export interface SearchUser {
  login: string;
}
export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  search(data: SearchUser) {
    return this.http.post('/search', data);
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  updateProfile(data: UpdateProfile) {
    return this.http.put('/profile', data);
  }

  updatePassword(data: UpdatePassword) {
    return this.http.put('/password', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
