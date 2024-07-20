import React from "react";
import socket from "src/config/socket/socket";

const useSocketData = <T,>(args: {
  topic: string;
  emitTopic?: string;
  data?: Record<string, any>;
}) => {
  const [socketData, setSocketData] = React.useState<T>();

  React.useEffect(() => {
    socket.on(args.topic, (data) => {
      setSocketData(data);
    });

    socket.emit(args.emitTopic ?? args.topic, args.data);
  }, []);

  return socketData;
};

export default useSocketData;
