import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./config/socket/socket.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
