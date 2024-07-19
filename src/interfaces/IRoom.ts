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

  participants: string[];

  status: RoomStatus;
}
