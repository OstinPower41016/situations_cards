import { IUser } from "./IUser";

export enum RoomStatus {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface IRoomCreateDto {
  name: string;
}

export interface IRoom {
  id: string;
  name: string;

  private: boolean;

  participants: IUser[];

  status: RoomStatus;
}
