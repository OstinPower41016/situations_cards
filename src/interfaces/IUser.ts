export interface IUser {
  id: string;
  nickname: string;
  password?: string;
  guest: boolean;
}

export interface IUserUpdateDto {
  nickname: string;
}
