import { FC } from "react";

import DoneIcon from "@mui/icons-material/Done";
import { Box, Chip, CircularProgress, ListItem, ListItemText, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { GameUserStatus, UserStatus } from "src/interfaces/allTypes";

import GameStore from "../store/Game.store";
import RoomStore from "../store/Room.store";
import getUserGameStatusText from "../utils/getUserGameStatusText";

interface IParticipants {}

const Participants: FC<IParticipants> = () => {
	const data = RoomStore.room?.users
		.map((user) => {
			const userGame = GameStore.game?.usersGame.find((userGame) => userGame.userId === user.id);

			return {
				roomStatus: user.status,
				nickname: user.nickname,
				gameStatus: userGame?.status,
				score: userGame?.score,
			};
		})
		?.sort((a, b) => (b.score ?? 0) - (a.score ?? 0)); // TODO sorting on backend already exist

	return (
		<Box
			style={{
				borderLeft: "1px solid white",
				padding: "0px 12px 12px",
				margin: "0px 12px 12px",
			}}>
			<FixedSizeList height={400} width={350} itemSize={50} itemCount={data?.length ?? 0} itemData={data}>
				{renderRow}
			</FixedSizeList>
		</Box>
	);
};

function renderRow(props: ListChildComponentProps) {
	const { index, style } = props;
	const user: { roomStatus: UserStatus; nickname: string; gameStatus: GameUserStatus; score: number } = props.data[index];

	const userGameStatusIsWaitingOtherPersons = user.gameStatus === GameUserStatus.WAITING || user.gameStatus === GameUserStatus.READY;

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
			<ListItemText
				primary={
					<Typography style={{ width: "130px", overflow: "hidden", textOverflow: "ellipsis" }} color={getColorNickname()}>
						{user.nickname}
					</Typography>
				}
			/>
			{user.gameStatus && (
				<Chip
					label={getUserGameStatusText(user.gameStatus)}
					variant="filled"
					color={userGameStatusIsWaitingOtherPersons ? "success" : "info"}
					icon={
						userGameStatusIsWaitingOtherPersons ? (
							<DoneIcon />
						) : (
							<CircularProgress color="info" size={14} style={{ marginRight: "2px", marginLeft: "10px" }} />
						)
					}
					size="small"
				/>
			)}
		</ListItem>
	);
}

export default observer(Participants);
