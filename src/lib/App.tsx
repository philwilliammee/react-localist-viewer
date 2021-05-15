import React from "react";
import Localist from "./Localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import Theme from "./js/components/Theme";

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <Theme>
        <Localist {...props} />
      </Theme>
    </EventsState>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
