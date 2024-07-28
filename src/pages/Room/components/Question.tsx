import { FC } from "react";

import { Box, Paper } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useMutation } from "react-query";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { IQuestionEntity } from "src/interfaces/allTypes";
import styled, { css } from "styled-components";

import { selectGameQuestionApi } from "../api/game.api";
import GameStore from "../store/Game.store";
import RoomStore from "../store/Room.store";

import SelectBestAnswer from "./SelectBestAnswer";
import Winner from "./Winner";

interface IQuestion {}

const Question: FC<IQuestion> = () => {
	const selectQuestion = useMutation({
		mutationFn: selectGameQuestionApi,
	});

	const onClickQuestionCard = (question: IQuestionEntity) => {
		const roomId = RoomStore.room?.id;

		if (!GameStore.userGame?.isLeader) {
			return;
		}

		if (!roomId) {
			throw new Error("Room must be specified");
		}

		selectQuestion.mutateAsync({
			body: {
				roomId: roomId,
				questionId: question.id,
			},
		});
	};

	return (
		<>
			<Container>
				<Box height={20} />
				<QuestionWinnerContainer>
					<TransitionGroup component={QuestionsContainer}>
						{GameStore.game?.questions?.map((question) => {
							const isSelectedQuestion = question.id === GameStore.game?.selectedQuestion?.id;

							if (GameStore.game?.selectedQuestion && GameStore.game?.selectedQuestion.id !== question.id) {
								return <></>;
							}
							return (
								<CSSTransition key={question.id} timeout={500} classNames="question">
									<CustomPaper $isSelectedQuestion={isSelectedQuestion} elevation={24} onClick={() => onClickQuestionCard(question)}>
										<p>{question.description}</p>
									</CustomPaper>
								</CSSTransition>
							);
						})}
					</TransitionGroup>
					<Winner />
				</QuestionWinnerContainer>
				{GameStore.game?.selectedAnswers && (
					<>
						<Box height={20} />
						<SelectBestAnswer />
					</>
				)}
			</Container>
		</>
	);
};

export default observer(Question);

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const QuestionsContainer = styled.div`
	display: flex;
	gap: 20px;
	padding-right: 80px;

	.question-enter {
		opacity: 0;
	}
	.question-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}
	.question-exit {
		opacity: 1;
	}
	.question-exit-active {
		opacity: 0;
		transition: opacity 500ms ease-out;
	}
`;

const CustomPaper = styled(Paper)<{ $isSelectedQuestion: boolean }>`
	padding: 20px;

	transition: all 0.5s;
	cursor: pointer;

	${(props) => {
		if (props.$isSelectedQuestion) {
			return css`
				box-shadow: 0px 0px 5px #0bffca;
			`;
		}
	}}
`;

const QuestionWinnerContainer = styled.div`
	display: flex;
	gap: 20px;
`;
