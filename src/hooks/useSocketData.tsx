import React from "react";

import socket from "src/config/socket/socket";

const useSocketData = <T,>(args: {
	topic: string;
	emitTopic?: string;
	// @ts-ignore
	data?: Record<string, any>;
	enabled?: boolean;
	dependencies?: any;
}) => {
	const { enabled = true } = args;

	const [socketData, setSocketData] = React.useState<T>();

	const onSocketReceivedData = (data: any) => {
		setSocketData(data);
	};

	React.useEffect(() => {
		if (!enabled) {
			return;
		}
		socket.on(args.topic, onSocketReceivedData);

		socket.emit(args.emitTopic ?? args.topic, args.data);

		return () => {
			socket.off(args.topic, onSocketReceivedData);
		};
	}, [enabled, args.dependencies]);

	return socketData;
};

export default useSocketData;
