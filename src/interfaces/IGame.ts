import { GameStage, GameUserStatus, IAnswerEntity, IQuestionEntity } from "./allTypes";

export interface IGameDto {
	id: string;
	questions: IQuestionEntity[];
	round: number;
	stage: GameStage;
	usersGame: {
		id: string;
		userId: string;
		nickname: string;
		isLeader: boolean;
		scrore: number;
		status: GameUserStatus;
	}[];
}

export interface IUserGameDto {
	id: string;
	answers: IAnswerEntity[];
}
