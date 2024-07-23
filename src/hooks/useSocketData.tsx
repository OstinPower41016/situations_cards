import React from "react";

import socket from "src/config/socket/socket";

const useSocketData = <T,>(args: {
	topic: string;
	emitTopic?: string;
	// @ts-ignore
	data?: Record<string, any>;
	enabled?: boolean;
}) => {
	const { enabled = true } = args;

	const [socketData, setSocketData] = React.useState<T>();

	React.useEffect(() => {
		if (!enabled) {
			return;
		}
		socket.on(args.topic, (data) => {
			setSocketData(data);
		});

		socket.emit(args.emitTopic ?? args.topic, args.data);
	}, [enabled]);

	return socketData;
};

export default useSocketData;
