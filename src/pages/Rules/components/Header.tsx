import React, { FC } from "react";
import styled from "styled-components";
import logoUrl from "../assets/logo.png";
import topologyUrl from "../assets/topology.png";
import cardsUrl from "../assets/image-header-cards.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IHeader {}

const Header: FC<IHeader> = (props) => {
	const navigate = useNavigate();

	const onPlayButtonClick = () => {
		navigate("/");
	};

	return (
		<HeaderComponent>
			<LogoImg src={logoUrl} />
			<TopologyImg src={topologyUrl} />
			<CardsImg src={cardsUrl} />
			<PlayButton onClick={onPlayButtonClick}> Играть</PlayButton>
		</HeaderComponent>
	);
};

export default Header;

const HeaderComponent = styled.div`
	width: 100%;
	height: 50vh;
	background: #c5a1fd;
	position: relative;
`;

const LogoImg = styled.img`
	position: absolute;
	left: 55px;
	top: 28px;
	z-index: 2;
	width: 20%;
`;

const TopologyImg = styled.img`
	position: absolute;
	right: 0;
	width: 50%;
	height: 100%;
`;

const CardsImg = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 30%;
`;

const PlayButton = styled(Button)`
	position: absolute;
	left: 128px;
	bottom: 74px;
	font-size: 3rem;
`;
