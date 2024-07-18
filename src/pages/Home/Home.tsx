import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListRooms from "./components/ListRooms/ListRooms";
import RoomsButtons from "./components/RoomsButtons/RoomsButtons";
import Header from "./components/Header/Header";
import { observer } from "mobx-react-lite";
import HomeCreateRoomStore from "./store/HomeCreateRoomStore";
import RoomCreateInputs from "./components/RoomCreateCard/RoomCreateInputs";

// const socket = io("http://localhost:3000");

function Home() {
  const navigate = useNavigate();

  const createRoom = () => {
    // socket.emit("createRoom");
    // socket.on("roomCreated", (roomId) => {
    //   navigate(`/room/${roomId}`);
    // });
  };

  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <ListRooms />
        <Divider orientation="vertical" flexItem textAlign="center" />
        {!HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomsButtons />}
        {HomeCreateRoomStore.isVisibleCreateRoomInputs && <RoomCreateInputs />}
      </ContentContainer>
    </Page>
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

const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
`;
