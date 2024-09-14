import { FC } from "react";

import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "../styles/index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";
import ErrorToast from "src/components/ErrorToast/ErrorToast";
import theme from "src/config/theme/theme";
import queryClient from "src/config/query/queryClient";

interface IAppProviders {
	children: JSX.Element;
}

const AppProviders: FC<IAppProviders> = (props) => (
	<BrowserRouter basename={"/"}>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<SnackbarProvider autoHideDuration={3000}>
					<ErrorToast />
					<CssBaseline />
					{props.children}
				</SnackbarProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</BrowserRouter>
);

export default AppProviders;
