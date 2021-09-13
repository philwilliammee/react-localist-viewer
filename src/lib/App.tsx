import React from "react";
import Localist from "./Localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import RlvTheme from "./js/components/Theme";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import MuiTheme from "./js/components/Theme/MuiTheme";
import { CssBaseline } from "@mui/material";

// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={MuiTheme}>
          <RlvTheme>
            <Localist {...props} />
          </RlvTheme>
        </ThemeProvider>
      </StyledEngineProvider>
    </EventsState>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
