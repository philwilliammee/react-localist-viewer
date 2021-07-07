import React from "react";
import Localist from "./Localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import Theme from "./js/components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "./js/components/Theme/MuiTheme";

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <Theme>
        <ThemeProvider theme={MuiTheme}>
          <Localist {...props} />
        </ThemeProvider>
      </Theme>
    </EventsState>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
