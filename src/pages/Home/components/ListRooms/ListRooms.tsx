import { List, ListItem, ListItemButton } from "@mui/material";
import React, { FC } from "react";
import { useQuery } from "react-query";
import socket from "src/config/socket";
import QueriesKeys from "src/constants/queriesKeys";
import useSocketData from "src/hooks/useSocketData";
import { IRoom } from "src/interfaces/IRoom";

interface IListRooms {}

const ListRooms: FC<IListRooms> = (props) => {
  const listRooms = useSocketData<IRoom[]>({ topic: "rooms" });

  return (
    <List>
      {listRooms?.map((room) => {
        return (
          <ListItem>
            <ListItemButton>{room.name}</ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListRooms;
