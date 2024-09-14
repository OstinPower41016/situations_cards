import React, { FC } from "react";
import styled from "styled-components";

interface IFooter {}

const Footer: FC<IFooter> = (props) => {
	return <Container></Container>;
};

export default Footer;

const Container = styled.div`
	height: 140px;
	background: #fff;
`;
