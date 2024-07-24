import { Typography, Paper } from "@mui/material";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import GameStore from "../store/Game.store";
import { observer } from "mobx-react-lite";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface ISelectBestAnswer {}

const SelectBestAnswer: FC<ISelectBestAnswer> = (props) => {
	const onSelectAnswer = (args: any) => {};

	return (
		<TransitionGroup component={Container}>
			{GameStore.game?.selectedAnswers?.map((answer) => {
				const isSelectedAnswer = answer.id === GameStore.userGame?.selectedAnswer?.id;

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

	${(props) => {
		if (props.$isSelectedAnswer) {
			return css`
				box-shadow: 0px 0px 12px #0bffca;
			`;
		}
	}}
`;
