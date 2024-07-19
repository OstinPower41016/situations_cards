import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_SOCKET, {
  transports: ["websocket"],
});

socket.on("connect", () => {});

socket.on("error", (msg) => {
  console.error(msg);
});

export default socket;
