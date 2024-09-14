import React, { FC } from "react";

import Header from "./components/Header";
import About from "./components/About/About";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

interface IRules {}

const Rules: FC<IRules> = (props) => {
	return (
		<div>
			<Header />
			<Box height={42} />
			<About />
			<Box height={92} />
			<Footer />
		</div>
	);
};

export default Rules;
