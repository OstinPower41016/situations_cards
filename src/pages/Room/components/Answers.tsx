import { FC } from "react";
import GameStore from "../store/Game.store";
import { observer } from "mobx-react-lite";
import { Paper, Typography } from "@mui/material";
import styled, { css } from "styled-components";
import { useMutation } from "react-query";
import { selectAnswerApi } from "../api/game.api";
import RoomStore from "../store/Room.store";

interface IAnswers {}

const Answers: FC<IAnswers> = (props) => {
	const isLeader = GameStore.userGame?.isLeader;

	const selectAnswer = useMutation({
		mutationFn: selectAnswerApi,
	});

	const onSelectAnswer = (args: { answerId: string }) => {
		const roomId = RoomStore.room?.id;

		if (!roomId) {
			throw new Error("Room must be specified");
		}

		selectAnswer.mutateAsync({
			body: {
				roomId: roomId,
				answerId: args.answerId,
			},
		});
	};

	return (
		<Container>
			{!isLeader &&
				GameStore.userGame?.answers?.map((answer) => {
					const isSelectedAnswer = answer.id === GameStore.userGame?.selectedAnswer?.id;

					return (
						<Card onClick={() => onSelectAnswer({ answerId: answer.id })} $isSelectedAnswer={isSelectedAnswer}>
							<Typography>{answer.description}</Typography>
						</Card>
					);
				})}
		</Container>
	);
};

export default observer(Answers);

const Container = styled.div`
	display: flex;
	gap: 20px;
`;

const Card = styled(Paper)<{ $isSelectedAnswer: boolean }>`
	padding: 20px;
	transition: all 0.5s;
	cursor: pointer;

	${(props) => {
		if (props.$isSelectedAnswer) {
			return css`
				box-shadow: 0px 0px 12px #0bffca;
			`;
		}
	}}
`;
