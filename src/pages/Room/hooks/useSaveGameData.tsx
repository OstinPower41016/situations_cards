import useSocketData from "src/hooks/useSocketData";
import GameStore from "../store/Game.store";
import React from "react";
import { useQuery } from "react-query";
import { getUserMeApi } from "src/api/api.user";
import QueriesKeys from "src/constants/queriesKeys";
import { IGameDto, IUserGameDto } from "src/interfaces/IGame";
import RoomStore from "../store/Room.store";

type THook = () => [];

const useSaveGameData: THook = () => {
	const userMe = useQuery({
		queryFn: getUserMeApi,
		queryKey: [QueriesKeys.userMe],
	});

	const game = useSocketData<IGameDto>({
		topic: `game/${RoomStore.room?.id}`,
		emitTopic: "joinGame",
		data: { roomId: RoomStore.room?.id },
		enabled: !!RoomStore.room?.id,
	});

	const userGame = useSocketData<IUserGameDto>({
		topic: `game/userGame/${userMe.data?.id}`,
		emitTopic: "joinUserToGame",
		enabled: !!game?.id && !!userMe.data?.id,
		dependencies: GameStore.game?.round ?? 0,
	});

	React.useEffect(() => {
		if (game) {
			GameStore.setGame(game);
		}
	}, [game]);

	React.useEffect(() => {
		if (userGame) {
			GameStore.setUserGame(userGame);
		}
	}, [userGame]);

	return [];
};

export default useSaveGameData;
