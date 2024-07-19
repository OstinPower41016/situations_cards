import apiClient from "src/api/api.client";
import { IUser, IUserUpdateDto } from "src/interfaces/IUser";

export type TGetUserMeApi = () => Promise<IUser>;

export const getUserMeApi: TGetUserMeApi = async () => {
  try {
    const res = await apiClient.get(`/user/me`);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export type TupdateUserNickNameApi = (args: {
  body: IUserUpdateDto;
}) => Promise<IUser>;

export const updateUserNickNameApi: TupdateUserNickNameApi = async (args) => {
  try {
    const res = await apiClient.patch(`/user/me/update`, args.body);

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
