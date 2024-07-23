import React, { FC } from "react";

import { Button } from "@mui/material";

import HomeCreateRoomStore from "../../store/HomeCreateRoomStore";

interface IRoomsButtons {}

const RoomsButtons: FC<IRoomsButtons> = (props) => (
	<Button onClick={HomeCreateRoomStore.setIsVisibleCreateRoomInputs}>Создать комнату</Button>
);

export default RoomsButtons;
