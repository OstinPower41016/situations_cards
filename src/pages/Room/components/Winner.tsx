import { FC } from "react";
import GameStore from "../store/Game.store";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

interface IWinner {}

const Winner: FC<IWinner> = (props) => {
	const winnerNickName = !!GameStore.game?.winnerUserGameId
		? GameStore.game?.usersGame.find((ug) => ug.id === GameStore.game?.winnerUserGameId)?.nickname
		: "";

	return (
		<>
			{winnerNickName && (
				<Container>
					<Typography color={"#00a4ff"}>{winnerNickName}</Typography>
					<Box width={8} />
					<Typography>выиграл! 🎉🔥🙌</Typography>
				</Container>
			)}
		</>
	);
};

export default Winner;

const Container = styled.div`
	display: flex;
	align-items: center;
`;
