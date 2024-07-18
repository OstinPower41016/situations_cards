import React from "react";
import socket from "src/config/socket";

type THook = () => [];

const useSocketData = <T,>(args: {topic: string}) => {
  const [socketData, setSocketData] = React.useState<T>();

  React.useEffect(() => {
    socket.on(args.topic, (data) => {
      setSocketData(data);
    });
  }, []);

  return socketData;
};

export default useSocketData;