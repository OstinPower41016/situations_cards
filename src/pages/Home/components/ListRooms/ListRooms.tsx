import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FC } from "react";
import useSocketData from "src/hooks/useSocketData";
import { IRoom } from "src/interfaces/IRoom";
import Login from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useMutation, useQuery } from "react-query";
import QueriesKeys from "src/constants/queriesKeys";
import { getUserMeApi } from "../../api/user.api";
import { addUserToRoomApi, removeUserFromRoomApi } from "../../api/room.api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ListRooms.css"; // Add CSS for the animations
import { useNavigate } from "react-router-dom";

interface IListRooms {}

const ListRooms: FC<IListRooms> = (props) => {
  const navigate = useNavigate();

  const listRooms = useSocketData<IRoom[]>({
    topic: "rooms",
  });

  const removeUserFromRoom = useMutation({
    mutationFn: removeUserFromRoomApi,
  });

  const addUserToRoom = useMutation({
    mutationFn: addUserToRoomApi,
  });

  const userMe = useQuery({
    queryFn: getUserMeApi,
    queryKey: [QueriesKeys.userMe],
  });

  const isUserInRoom = (room: IRoom) => {
    if (!userMe.data) {
      return false;
    }

    return room.participants?.map((user) => user.id).includes(userMe.data?.id);
  };

  const getButtonExitEnterText = (isCurrentRoomIncludesUser: boolean) => {
    return isCurrentRoomIncludesUser ? "Покинуть комнату" : "Войти в комнату";
  };

  return (
    <Content>
      <TransitionGroup component={null}>
        {listRooms?.map((room) => {
          const isCurrentRoomIncludesUser = isUserInRoom(room);
          const isVisibleNavigateToLobbyButton =
            isCurrentRoomIncludesUser && room.participants.length >= 3;

          const onRemoveUserFromRoom = (e: React.MouseEvent) => {
            e.stopPropagation();
            removeUserFromRoom.mutateAsync({ path: { roomId: room.id } });
          };

          const onAddUserToRoom = () => {
            addUserToRoom.mutateAsync({ path: { roomId: room.id } });
          };

          return (
            <CSSTransition
              key={room.id}
              timeout={500}
              classNames="room"
              style={{ width: "400px" }}
            >
              <CustomListItem>
                <ContentItem elevation={4}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={4}
                        width="100%"
                        style={{ paddingLeft: "8px" }}
                      >
                        <Typography>{room.name}</Typography>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <CustomBadge
                            badgeContent={room.participants?.length ?? 0}
                            color={"primary"}
                          >
                            <AccountCircleIcon fontSize="small" />
                          </CustomBadge>
                          {isCurrentRoomIncludesUser && (
                            <IconButton onClick={onRemoveUserFromRoom}>
                              <PersonRemoveIcon fontSize="small" />
                            </IconButton>
                          )}
                          {!isCurrentRoomIncludesUser && (
                            <IconButton onClick={onAddUserToRoom}>
                              <PersonAddAltIcon fontSize="small" />
                            </IconButton>
                          )}
                        </Stack>
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Stack direction={"row"} spacing={4}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={
                            isCurrentRoomIncludesUser
                              ? onRemoveUserFromRoom
                              : onAddUserToRoom
                          }
                        >
                          {getButtonExitEnterText(isCurrentRoomIncludesUser)}
                        </Button>
                        {isVisibleNavigateToLobbyButton && (
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => navigate(`/room/${room.id}`)}
                          >
                            Перейти в лобби
                          </Button>
                        )}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </ContentItem>
              </CustomListItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Content>
  );
};

export default ListRooms;

const ContentItem = styled(Paper)(({ theme }) => {
  return {
    textAlign: "center",
    background: "transparent",
    flexGrow: 1,
    boxShadow: "0px 0px 4px 0px rgba(255,255,255,1)",
  };
});

const Content = styled(Paper)(({ theme }) => {
  return {
    ...theme.typography.body2,
    minHeight: "400px",
    boxShadow: "0px 0px 4px 0px rgba(255,255,255,1)",
  };
});

const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    minWidth: "16px",
    height: "16px",
    fontSize: "0.75rem",
    padding: "0 4px",
  },
}));

const CustomListItem = styled(ListItem)`
  width: 400px;
`;
