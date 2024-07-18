export interface IUser {
  id: string;
  nickname: string;
  guest: boolean;
}

export interface IUserUpdateDto {
  nickname: string;
}
