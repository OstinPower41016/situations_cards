import React from "react";

import socket from "../socket";

const useDisconnect = () => {
	React.useEffect(
		() => () => {
			socket.disconnect();
		},
		[],
	);

	return null;
};

export default useDisconnect;
