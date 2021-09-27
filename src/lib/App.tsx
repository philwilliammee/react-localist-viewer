import React from "react";
import Localist from "./Localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import MuiTheme from "./js/components/Theme/MuiTheme";
import { CssBaseline, NoSsr } from "@mui/material";

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={MuiTheme}>
          <NoSsr>
            <Localist {...props} />
          </NoSsr>
        </ThemeProvider>
      </StyledEngineProvider>
    </EventsState>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
