import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../styles/index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import ErrorToast from "src/components/ErrorToast/ErrorToast";

interface IAppProviders {
  children: JSX.Element;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    staleTime: 1 * (60 * 1000), // 1 min
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: 1,
  },
});

const AppProviders: FC<IAppProviders> = (props) => {
  return (
    <BrowserRouter basename={"/"}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <SnackbarProvider>
            <ErrorToast />
            <CssBaseline />
            {props.children}
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
