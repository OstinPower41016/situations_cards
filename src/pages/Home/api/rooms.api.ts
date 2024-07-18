import apiClient from "src/api/api.client";
import { IRoomCreateDto } from "src/interfaces/IRoom";

export type TCreateRoomApi = (args: { body: IRoomCreateDto }) => Promise<void>;

export const createRoomApi: TCreateRoomApi = async (args) => {
  try {
    const res = await apiClient.post(`rooms/create`, args.body);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// export type TGetAllRoomsApi = () => Promise<any>;

// export const getAllRoomsApi: TGetAllRoomsApi = async () => {
//   try {
//     const res = await apiClient.get(`rooms`);

//     return res.data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
