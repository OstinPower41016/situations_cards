import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";
import aboutText from "./constants/aboutText";

interface IAbout {}

const About: FC<IAbout> = (props) => {
	return (
		<Container>
			<TextBlock>
				<Typography variant="h2">Об игре</Typography>
				<Box height={24} />
				<ParagraphContainer>
					{aboutText.aboutText.map((text) => {
						return <Typography key={text}>{text}</Typography>;
					})}
				</ParagraphContainer>
			</TextBlock>
			<TextBlock>
				<Typography variant="h4">Как играть</Typography>
				<Box height={24} />
				<StepsList>
					{aboutText.howToPlayText.map((text) => {
						return (
							<Step key={text.stepHeader}>
								<StepHeader>{text.stepHeader}</StepHeader>
								<ul>
									{text.liItems.map((text) => {
										return (
											<HowToPlayLi key={text}>
												<Typography>{text}</Typography>
											</HowToPlayLi>
										);
									})}
								</ul>
							</Step>
						);
					})}
				</StepsList>
			</TextBlock>
		</Container>
	);
};

export default About;

const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const TextBlock = styled.div``;

const ParagraphContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StepsList = styled.ol`
	list-style: none;
	counter-reset: step-counter;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Step = styled.li`
	counter-increment: step-counter;
	position: relative;
	padding-left: 2.5rem;

	&::before {
		content: counter(step-counter);
		position: absolute;
		left: 0;
		top: 0;
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 50%;
		background-color: #000;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		font-weight: 700;
	}
`;

const StepHeader = styled.h2`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: #333;
`;

const HowToPlayLi = styled.li``;
