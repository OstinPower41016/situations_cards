import { Button } from "@mui/material";
import React, { FC } from "react";
import HomeCreateRoomStore from "../../store/HomeCreateRoomStore";

interface IRoomsButtons {}

const RoomsButtons: FC<IRoomsButtons> = (props) => {
  return (
    <Button onClick={HomeCreateRoomStore.setIsVisibleCreateRoomInputs}>
      Создать комнату
    </Button>
  );
};

export default RoomsButtons;
