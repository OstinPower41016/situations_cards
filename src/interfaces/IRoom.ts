import { IGameDto } from "./IGame";
import { IUser } from "./IUser";

type TRoomStatus = "CREATED" | "READY_TO_START" | "IN_GAME" | "INACTIVE";

export interface IRoomCreateDto {
	name: string;
}

export interface IRoom {
	id: string;
	name: string;
	private: boolean;
	status: TRoomStatus;
	users: IUser[];
	game?: IGameDto | null;
}
