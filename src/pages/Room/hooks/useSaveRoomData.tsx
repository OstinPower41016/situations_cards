import React from "react";

import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { updateUserApi } from "src/api/api.user";
import useSocketData from "src/hooks/useSocketData";
import { UserStatus } from "src/interfaces/allTypes";
import { IRoom } from "src/interfaces/IRoom";

import RoomStore from "../store/Room.store";

const useCurrentRoomData = () => {
	const { roomId } = useParams();
	const room = useSocketData<IRoom>({
		topic: `room/${roomId}`,
		emitTopic: "joinToRoom",
		data: { roomId },
	});

	const updateUser = useMutation({
		mutationFn: updateUserApi,
	});

	React.useEffect(() => {
		updateUser.mutateAsync({
			body: {
				status: UserStatus.IN_LOBBY,
			},
		});

		return () => {
			updateUser.mutateAsync({
				body: {
					status: UserStatus.ONLINE,
				},
			});

			RoomStore.setRoom(undefined);
		};
	}, []);

	React.useEffect(() => {
		RoomStore.setRoom(room);
	}, [room]);

	return room;
};

export default useCurrentRoomData;
