import { createTheme } from "@mui/material";

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff",
					color: "#000",
					border: "2px solid #000",
					borderRadius: "30px",
					boxShadow: "6px 6px 0px #000",
					fontWeight: "900",
					textTransform: "none",
					padding: "10px 20px",
					"&:hover": {
						backgroundColor: "#fff",
						boxShadow: "8px 8px 0px #000",
					},

					"&:active": {
						backgroundColor: "#fff",
						boxShadow: "4px 4px 0px #000",
						transform: "translate(2px, 2px)",
					},
				},
			},
		},
	},
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#ff4081",
		},
		background: {
			default: "#fff",
		},
	},
	typography: {
		fontSize: 16,
		h1: {
			fontWeight: "bold",
		},
		h2: {
			fontWeight: "bold",
		},
		h3: {
			fontWeight: "bold",
		},
		h4: {
			fontWeight: "bold",
		},
		h5: {
			fontWeight: "bold",
		},
	},
	shadows: [
		"none",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
		"0px 4px 8px rgba(0, 0, 0, 0.5)",
	],
	shape: {
		borderRadius: 0,
	},
});

export default theme;
