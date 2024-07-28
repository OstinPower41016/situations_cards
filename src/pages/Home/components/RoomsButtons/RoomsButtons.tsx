import { FC } from "react";

import { Button } from "@mui/material";

import HomeCreateRoomStore from "../../store/HomeCreateRoomStore";

interface IRoomsButtons {}

const RoomsButtons: FC<IRoomsButtons> = () => (
	<Button variant="outlined" onClick={HomeCreateRoomStore.setIsVisibleCreateRoomInputs}>
		Создать комнату
	</Button>
);

export default RoomsButtons;
