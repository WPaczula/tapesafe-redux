export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserId {
  name: string;
  value: string;
}

export interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  id: IUserId;
  name: IUserName;
  email: string;
  phone: string;
  picture: IUserPicture;
}
