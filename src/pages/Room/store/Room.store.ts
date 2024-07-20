import { makeAutoObservable } from "mobx";
import { IRoom } from "src/interfaces/IRoom";
import { IUser } from "src/interfaces/IUser";

class RoomStore {
  room: IRoom | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setRoom = (room: IRoom | undefined) => {
    this.room = room;
  };
}

export default new RoomStore();
