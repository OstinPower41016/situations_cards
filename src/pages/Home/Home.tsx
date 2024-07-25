import { Box, Divider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ListRooms from "./components/ListRooms/ListRooms";
import RoomCreateInputs from "./components/RoomCreateCard/RoomCreateInputs";
import RoomsButtons from "./components/RoomsButtons/RoomsButtons";
import HomeCreateRoomStore from "./store/HomeCreateRoomStore";
import useUpdateUserStatus from "./hooks/useUpdateUserStatus";

function Home() {
	useUpdateUserStatus();

	return (
		<>
			<Box height={100} />
			<ContentContainer>
				<ListRooms />
				<Divider orientation="vertical" flexItem textAlign="center" />
				{!HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomsButtons />}
				{HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomCreateInputs />}
			</ContentContainer>
		</>
	);
}

export default observer(Home);

const Page = styled.div`
	display: grid;
	grid-template-areas:
		". header header"
		". main ."
		"footer footer footer";

	min-height: 100vh;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	grid-area: main;
`;
