import { makeAutoObservable } from "mobx";
import { IRoom } from "src/interfaces/IRoom";

import GameStore from "./Game.store";

class RoomStore {
	room: IRoom | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setRoom = (room: IRoom | undefined) => {
		if (room?.game) {
			GameStore.setGameId(room.game.id);
		}
		this.room = room;
	};
}

export default new RoomStore();
