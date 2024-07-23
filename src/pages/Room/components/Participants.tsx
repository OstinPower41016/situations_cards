import { FC } from "react";

import { Box, Chip, ListItem, ListItemText, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import RoomStore from "../store/Room.store";
import getUserGameStatusText from "../utils/getUserGameStatusText";
import GameStore from "../store/Game.store";
import { GameUserStatus, UserStatus } from "src/interfaces/allTypes";

interface IParticipants {}

const Participants: FC<IParticipants> = (props) => {
	const data = RoomStore.room?.users.map((user) => {
		const userGame = GameStore.game?.usersGame.find((userGame) => userGame.userId === user.id);

		return {
			roomStatus: user.status,
			nickname: user.nickname,
			gameStatus: userGame?.status,
			score: userGame?.scrore,
		};
	});

	return (
		<Box
			style={{
				borderLeft: "1px solid white",
				padding: "10px 12px",
				// borderRadius: "8px",
				margin: "10px 12px",
			}}>
			<Typography>Участники:</Typography>
			<FixedSizeList height={400} width={300} itemSize={50} itemCount={data?.length ?? 0} itemData={data}>
				{renderRow}
			</FixedSizeList>
		</Box>
	);
};

function renderRow(props: ListChildComponentProps) {
	const { index, style } = props;
	const user: { roomStatus: UserStatus; nickname: string; gameStatus: GameUserStatus; score: number } = props.data[index];

	const getColorNickname = () => {
		if (user.roomStatus === UserStatus.IN_LOBBY) {
			return "white";
		}
		return "gray";
	};

	return (
		<ListItem style={style} key={index} component="div" disablePadding>
			<Typography>{user.score}</Typography>
			<Box width={10} />
			<ListItemText primary={<Typography color={getColorNickname()}>{user.nickname}</Typography>} />
			<Chip label={getUserGameStatusText(user.gameStatus)} variant="filled" color="success" size="small" />
		</ListItem>
	);
}

export default observer(Participants);
