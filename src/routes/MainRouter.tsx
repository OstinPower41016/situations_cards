import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";

interface IMainRouter {}

const MainRouter: FC<IMainRouter> = (props) => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
};

export default MainRouter;
