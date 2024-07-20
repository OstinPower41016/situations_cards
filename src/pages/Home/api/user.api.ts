import apiClient from "src/api/api.client";
import { IUser } from "src/interfaces/IUser";

export type TGetUserMeApi = () => Promise<IUser>;

export const getUserMeApi: TGetUserMeApi = async () => {
  try {
    const res = await apiClient.get(`/user/me`);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
