import { Stack } from "@mui/material";

import styled from "styled-components";
import Participants from "./components/Participants";
import useSaveRoomData from "./hooks/useSaveRoomData";

function Room() {
  useSaveRoomData();

  return (
    <Container>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <Participants />
      </Stack>
    </Container>
  );
}

export default Room;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
