import apiClient from "src/api/api.client";
import { IRoom, IRoomCreateDto } from "src/interfaces/IRoom";

export type TCreateRoomApi = (args: { body: IRoomCreateDto }) => Promise<void>;

export const createRoomApi: TCreateRoomApi = async (args) => {
  try {
    const res = await apiClient.post(`rooms/create`, args.body);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export type TAddUserToRoomApi = (args: {
  path: { roomId: string };
}) => Promise<IRoom>;

export const addUserToRoomApi: TAddUserToRoomApi = async (args) => {
  try {
    const res = await apiClient.patch(`rooms/${args.path.roomId}/add-user`);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export type TRemoveUserFromRoomApi = (args: {
  path: { roomId: string };
}) => Promise<IRoom>;

export const removeUserFromRoomApi: TRemoveUserFromRoomApi = async (args) => {
  try {
    const res = await apiClient.patch(`rooms/${args.path.roomId}/remove-user`);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
