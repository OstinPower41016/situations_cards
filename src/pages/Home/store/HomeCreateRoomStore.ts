import { makeAutoObservable } from "mobx";

class HomeCreateRoomStore {
  isVisibleCreateRoomInputs = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsVisibleCreateRoomInputs = () => {
    this.isVisibleCreateRoomInputs = true;
  };
}

export default new HomeCreateRoomStore();
