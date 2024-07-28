import { UserStatus } from "./allTypes";
import { IAnswer } from "./IAnswer";
import { IQuestion } from "./IQuestion";
import { IRoom } from "./IRoom";

export interface IUser {
	id: string;
	nickname: string;
	guest: boolean;
	status: UserStatus;
	score: boolean | null;
	answers?: IAnswer[];
	questions?: IQuestion[];
	room?: IRoom;
	isLeader: boolean | null;
}

export interface IUserUpdateDto {
	nickname?: string;
	status?: UserStatus;
}
