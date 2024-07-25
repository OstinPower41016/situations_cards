import { observer } from "mobx-react-lite";
import { FC } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import GameStore from "../store/Game.store";
import { GameStage } from "src/interfaces/allTypes";
import { Button } from "@mui/material";
import { useMutation } from "react-query";
import { nextRoundApi } from "../api/game.api";

interface INextRound {}

const NextRound: FC<INextRound> = (props) => {
	const nextRound = useMutation({
		mutationFn: nextRoundApi,
	});

	const isRoundEnded = GameStore.game?.stage === GameStage.ROUND_RESULTS;
	const isLeader = GameStore.userGame?.isLeader;
	const isVisibleNextRoundButton = isRoundEnded && isLeader;

	const onClickNextButton = () => {
		const gameId = GameStore.game?.id;

		if (!gameId) {
			throw new Error("gameId must be");
		}

		nextRound.mutateAsync({ body: { gameId: gameId! } });
	};

	return (
		<>
			{isVisibleNextRoundButton && (
				<Container>
					<Button onClick={onClickNextButton}> Следующий раунд</Button>
					<CustomCountdownCircleTimer
						size={40}
						strokeWidth={3}
						isPlaying
						duration={60}
						colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
						colorsTime={[7, 5, 2, 0]}>
						{({ remainingTime }) => remainingTime}
					</CustomCountdownCircleTimer>
				</Container>
			)}
		</>
	);
};

export default observer(NextRound);

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const CustomCountdownCircleTimer = styled(CountdownCircleTimer)`
	transform: scale(0.7) !important;
`;
