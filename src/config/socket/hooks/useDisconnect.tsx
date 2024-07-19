import React from "react";
import socket from "../socket";

const useDisconnect = () => {
  React.useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default useDisconnect;
