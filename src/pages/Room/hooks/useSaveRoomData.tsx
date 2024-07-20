import React from "react";
import { useParams } from "react-router-dom";
import useSocketData from "src/hooks/useSocketData";
import { IRoom } from "src/interfaces/IRoom";
import RoomStore from "../store/Room.store";
import { updateUserNickNameApi } from "src/api/api.user";
import { useMutation } from "react-query";

const useCurrentRoomData = () => {
  let { roomId } = useParams();
  const room = useSocketData<IRoom>({
    topic: `room/${roomId}`,
    emitTopic: "room",
    data: { roomId },
  });

  const updateUser = useMutation({
    mutationFn: updateUserNickNameApi,
  });

  React.useEffect(() => {
    updateUser.mutateAsync({
      body: {
        status: "READY_TO_START",
      },
    });

    return () => {
      updateUser.mutateAsync({
        body: {
          status: "ONLINE",
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
