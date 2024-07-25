import { Stack } from "@mui/material";
import styled from "styled-components";

import Participants from "./components/Participants";
import StartButton from "./components/StartButton";
import useSaveRoomData from "./hooks/useSaveRoomData";
import useSaveGameData from "./hooks/useSaveGameData";
import { observer } from "mobx-react-lite";
import GameStore from "./store/Game.store";
import { toJS } from "mobx";
import Question from "./components/Question";
import Answers from "./components/Answers";
import NextRound from "./components/NextRound";

function Room() {
	useSaveRoomData();
	useSaveGameData();

	return (
		<Container>
			<TopBodyContentContainer>
				<Question />
				<Participants />
			</TopBodyContentContainer>
			<Answers />
			<ButtonStartContainer>
				<StartButton />
				<NextRound />
			</ButtonStartContainer>
		</Container>
	);
}

export default observer(Room);

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 40px 16px;
`;

const ButtonStartContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
`;

const TopBodyContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
