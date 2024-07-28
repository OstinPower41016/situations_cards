import axios from "axios";
import eventEmitter from "src/services/eventEmitter/eventEmitter";
import Events from "src/services/eventEmitter/events";

console.log(import.meta.env.ENV )
const instance = axios.create({
	baseURL: import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_BACKEND : `http://${window.location.hostname}`,
	withCredentials: true,
});

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		const errMsg = error?.response?.data?.message;

		if (errMsg) {
			eventEmitter.emit(Events.apiError, { msg: errMsg });
		}

		return Promise.reject(error);
	},
);

export default instance;
