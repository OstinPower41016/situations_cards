import { FC } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "src/components/Header/Header";
import styled from "styled-components";

import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";

interface IMainRouter {}

const MainRouter: FC<IMainRouter> = () => (
	<Page>
		<Header />
		<div style={{ gridArea: "main" }}>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/room/:roomId" element={<Room />} />
			</Routes>
		</div>
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
