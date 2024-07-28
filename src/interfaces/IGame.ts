import { GameStage, GameUserStatus, IAnswerEntity, IQuestionEntity } from "./allTypes";

export interface IGameDto {
	id: string;
	questions: IQuestionEntity[];
	round: number;
	stage: GameStage;
	selectedQuestion: IQuestionEntity;
	selectedAnswers: IAnswerEntity[];
	winnerUserGameId: string;
	winnerAnswer: IAnswerEntity;
	usersGame: {
		id: string;
		userId: string;
		nickname: string;
		isLeader: boolean;
		score: number;
		status: GameUserStatus;
	}[];
}

export interface IUserGameDto {
	id: string;
	answers: IAnswerEntity[];
	isLeader: boolean;
	selectedAnswer: IAnswerEntity;
	gameId: string;
}
