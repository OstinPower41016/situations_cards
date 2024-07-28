import { makeAutoObservable } from "mobx";
import { IGameDto, IUserGameDto } from "src/interfaces/IGame";

class GameStore {
	gameId?: string = undefined;
	game: IGameDto | undefined = undefined;
	userGame: IUserGameDto | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setGameId = (gameId: string) => {
		this.gameId = gameId;
	};

	setGame = (game: IGameDto) => {
		this.game = game;
	};

	setUserGame = (userGame: IUserGameDto) => {
		this.userGame = userGame;
	};
}

export default new GameStore();
