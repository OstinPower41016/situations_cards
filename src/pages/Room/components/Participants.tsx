import React, { FC } from "react";
import {
  Box,
  Chip,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { IUser } from "src/interfaces/IUser";
import RoomStore from "../store/Room.store";
import { observer } from "mobx-react-lite";

interface IParticipants {}

const Participants: FC<IParticipants> = (props) => {
  return (
    <Box
      style={{
        border: "1px solid white",
        padding: "10px 12px",
        borderRadius: "8px",
        margin: "10px 12px",
      }}
    >
      <Typography>Участники:</Typography>
      <FixedSizeList
        height={400}
        width={300}
        itemSize={50}
        itemCount={RoomStore.room?.participants.length ?? 0}
        itemData={RoomStore.room?.participants}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;
  const user: IUser = props.data[index];

  const getColorNickname = () => {
    if (user.status === "READY_TO_START") {
      return "white";
    } else {
      return "gray";
    }
  };

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemText
        primary={
          <Typography color={getColorNickname()}>{user.nickname}</Typography>
        }
      />
    </ListItem>
  );
}

export default observer(Participants);
