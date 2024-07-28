import { FC } from "react";

import { Typography, Paper } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useMutation } from "react-query";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { selectBestAnswerApi } from "../api/game.api";
import GameStore from "../store/Game.store";
import RoomStore from "../store/Room.store";

interface ISelectBestAnswer {}

const SelectBestAnswer: FC<ISelectBestAnswer> = () => {
	const selectBestAnswer = useMutation({
		mutationFn: selectBestAnswerApi,
	});

	const onSelectAnswer = (args: { answerId: string }) => {
		const roomId = RoomStore.room?.id;

		if (!roomId) {
			throw new Error("Room must be specified");
		}

		selectBestAnswer.mutateAsync({
			body: {
				answerId: args.answerId,
				roomId: roomId,
			},
		});
	};

	return (
		<TransitionGroup component={Container}>
			{GameStore.game?.selectedAnswers?.map((answer) => {
				const isSelectedAnswer = answer.id === GameStore.game?.winnerAnswer?.id;

				return (
					<CSSTransition key={answer.id} timeout={500} classNames="question">
						<Card onClick={() => onSelectAnswer({ answerId: answer.id })} $isSelectedAnswer={isSelectedAnswer}>
							<Typography>{answer.description}</Typography>
						</Card>
					</CSSTransition>
				);
			})}
		</TransitionGroup>
	);
};

export default observer(SelectBestAnswer);

const Container = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;

	.answer-enter {
		opacity: 0;
	}
	.answer-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}
	.answer-exit {
		opacity: 1;
	}
	.answer-exit-active {
		opacity: 0;
		transition: opacity 500ms ease-out;
	}
`;

const Card = styled(Paper)<{ $isSelectedAnswer: boolean }>`
	padding: 20px;
	transition: all 0.5s;
	cursor: pointer;

	${(props) => {
		if (props.$isSelectedAnswer) {
			return css`
				box-shadow: 0px 0px 5px #0bffca;
			`;
		}
	}}
`;
