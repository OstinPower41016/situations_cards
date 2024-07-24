import { FC } from "react";

import { Button } from "@mui/material";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useMutation, useQuery } from "react-query";
import { getUserMeApi } from "src/api/api.user";
import QueriesKeys from "src/constants/queriesKeys";

import RoomStore from "../store/Room.store";
import { gameStartApi } from "../api/game.api";
import GameStore from "../store/Game.store";

interface IStartButton {}

const StartButton: FC<IStartButton> = (props) => {
	const userMe = useQuery({
		queryFn: getUserMeApi,
		queryKey: [QueriesKeys.userMe],
	});

	// const isLeader = userMe.data?.isLeader

	const startGame = useMutation({
		mutationFn: () => gameStartApi({ body: { roomId: RoomStore.room!.id } }),
	});

	const isRoomReadyToStart = RoomStore.room?.status === "READY_TO_START";
	const isVisibleButton = RoomStore.room?.users[0].id === userMe.data?.id && !GameStore.game;

	const isDisabledButton = !isRoomReadyToStart;

	const onStartGame = async () => {
		startGame.mutateAsync();
	};

	return (
		<>
			{isVisibleButton && (
				<Button onClick={onStartGame} variant="contained">
					Начать
				</Button>
			)}
		</>
	);
};

export default observer(StartButton);
