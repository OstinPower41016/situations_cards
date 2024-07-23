import React, { FC } from "react";
import styled, { css } from "styled-components";
import GameStore from "../store/Game.store";
import { observer } from "mobx-react-lite";
import { Box, Paper, Typography } from "@mui/material";

interface IQuestion {}

const Question: FC<IQuestion> = (props) => {
	const leaderGame = GameStore.game?.usersGame.find((user) => user.isLeader);

	return (
		<Container>
			{leaderGame && <Typography>{leaderGame?.nickname} выбирает вопрос ...</Typography>}
			<Box height={20} />
			<QuestionsContainer>
				{GameStore.game?.questions?.map((question) => {
					return (
						<CustomPaper elevation={24}>
							<p>{question.description}</p>
						</CustomPaper>
					);
				})}
			</QuestionsContainer>
		</Container>
	);
};

export default observer(Question);

const MAX_CONTAINER_WIDTH = "700px";

const Container = styled.div``;

const QuestionsContainer = styled.div`
	display: flex;
	gap: 20px;
	padding-right: 80px;
`;

const CustomPaper = styled(Paper)`
	padding: 20px;
`;
