import React from "react";

import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { updateUserNickNameApi } from "src/api/api.user";
import useSocketData from "src/hooks/useSocketData";
import { IRoom } from "src/interfaces/IRoom";

import RoomStore from "../store/Room.store";
import { UserStatus } from "src/interfaces/allTypes";

const useCurrentRoomData = () => {
	const { roomId } = useParams();
	const room = useSocketData<IRoom>({
		topic: `room/${roomId}`,
		data: { roomId },
	});

	const updateUser = useMutation({
		mutationFn: updateUserNickNameApi,
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
