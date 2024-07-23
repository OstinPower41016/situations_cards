import React, { FC } from "react";
import GameStore from "../store/Game.store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Paper, Typography } from "@mui/material";
import styled from "styled-components";

interface IAnswers {}

const Answers: FC<IAnswers> = (props) => {
	return (
		<Container>
			{GameStore.userGame?.answers?.map((answer) => {
				return (
					<Card>
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

const Card = styled(Paper)`
	padding: 20px;
`;
