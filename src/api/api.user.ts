import { IUserUpdateDto, IUser } from "src/interfaces/IUser";

import apiClient from "./api.client";

export type TUpdateUserApi = (args: { body: IUserUpdateDto }) => Promise<IUser>;

export const updateUserApi: TUpdateUserApi = async (args) => {
	try {
		const res = await apiClient.patch("/user/me/update", args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export type TGetUserMeApi = () => Promise<IUser>;

export const getUserMeApi: TGetUserMeApi = async () => {
	try {
		const res = await apiClient.get("/user/me");

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};
