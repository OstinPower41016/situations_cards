import { FC } from "react";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";
import Rules from "src/pages/Rules/Rules";

interface IMainRouter {}

const MainRouter: FC<IMainRouter> = () => (
	<Page>
		<Routes>
			<Route path={"/rules"} index element={<Rules />} />
			<Route path="/" element={<Home />} />
			<Route path="/room/:roomId" element={<Room />} />
		</Routes>
	</Page>
);

export default MainRouter;

const Page = styled.div`
	display: grid;
	grid-template-areas:
		"header"
		"main"
		"footer";
	grid-template-rows: 90px 1fr auto;

	min-height: 100vh;
`;
