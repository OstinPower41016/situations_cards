import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import ListRooms from "./components/ListRooms/ListRooms";
import RoomCreateInputs from "./components/RoomCreateCard/RoomCreateInputs";
import RoomsButtons from "./components/RoomsButtons/RoomsButtons";
import useUpdateUserStatus from "./hooks/useUpdateUserStatus";
import HomeCreateRoomStore from "./store/HomeCreateRoomStore";

function Home() {
	useUpdateUserStatus();

	return (
		<>
			<Box height={100} />
			<ContentContainer>
				<RoomContainer>
					<ListRooms />
					{!HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomsButtons />}
				</RoomContainer>
				{HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomCreateInputs />}
			</ContentContainer>
		</>
	);
}

export default observer(Home);

// const Page = styled.div`
// 	display: grid;
// 	grid-template-areas:
// 		". header header"
// 		". main ."
// 		"footer footer footer";

// 	min-height: 100vh;
// `;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	grid-area: main;
`;

const RoomContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;
