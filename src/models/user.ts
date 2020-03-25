export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  id: UserId;
  name: UserName;
  email: string;
  phone: string;
  picture: UserPicture;
}
