import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_BACKEND : `http://${window.location.hostname}`, {
	transports: ["websocket"],
	path: "/ws"
});

socket.on("connect", () => undefined);

socket.on("error", (msg) => {
	console.error(msg);
});

export default socket;
