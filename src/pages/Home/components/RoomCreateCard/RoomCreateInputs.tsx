import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useMutation } from "react-query";
import { createRoomApi } from "../../api/room.api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IRoomCreateCard {}

const RoomCreateCard: FC<IRoomCreateCard> = (props) => {
  const [roomName, setRoomName] = React.useState("");

  const createRoom = useMutation(createRoomApi);

  const onChangeRoomName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRoomName(e.target.value);
  };

  const onCreateRoom = () => {
    createRoom.mutateAsync({ body: { name: roomName } });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction={"column"} spacing={4}>
          <TextField
            id="standard-basic"
            label="Название комнаты"
            variant="standard"
            value={roomName}
            onChange={onChangeRoomName}
          />
          <Stack direction={"column"} spacing={4}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Настройки</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel control={<Switch />} label={"Приватная"} />
              </AccordionDetails>
            </Accordion>
            <Button variant="outlined" onClick={onCreateRoom}>
              Создать комнату
            </Button>
            {/* <Switch label /> */}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RoomCreateCard;
