import apiClient from "src/api/api.client";

export type TGameStartApi = (args: { body: { roomId: string } }) => Promise<void>;

export const gameStartApi: TGameStartApi = async (args) => {
	try {
		const res = await apiClient.post(`game/start`, args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export type TSelectGameQuestionApi = (args: { body: { questionId: string; roomId: string } }) => Promise<void>;

export const selectGameQuestionApi: TSelectGameQuestionApi = async (args) => {
	try {
		const res = await apiClient.patch(`game/select-question`, args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export type TSelectAnswerApi = (args: { body: { answerId: string; roomId: string } }) => Promise<void>;

export const selectAnswerApi: TSelectAnswerApi = async (args) => {
	try {
		const res = await apiClient.patch(`game/select-answer`, args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export type TSelectBestAnswerApi = (args: { body: { answerId: string; roomId: string } }) => Promise<void>;

export const selectBestAnswerApi: TSelectBestAnswerApi = async (args) => {
	try {
		const res = await apiClient.patch(`game/select-best-answer`, args.body);

		return res.data;
	} catch (error) {
		return Promise.reject(error);
	}
};
