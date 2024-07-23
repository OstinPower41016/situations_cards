import apiClient from "src/api/api.client";

export type TGameStartApi = (args: { body: { roomId: string } }) => Promise<any>;

export const gameStartApi: TGameStartApi = async (args) => {
	try {
		const res = await apiClient.post(`game/start`, args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};
