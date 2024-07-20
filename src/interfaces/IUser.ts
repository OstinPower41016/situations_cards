type TUserStatus =
  | "OFFLINE"
  | "ONLINE"
  | "READY_TO_START"
  | "THINKING"
  | "READY_OTHER_PLAYERS";

export interface IUser {
  id: string;
  nickname: string;
  guest: boolean;
  status: TUserStatus;
}

export interface IUserUpdateDto {
  nickname?: string;
  status?: TUserStatus;
}
