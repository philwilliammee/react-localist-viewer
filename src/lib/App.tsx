import React from "react";
import Localist from "./Localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <Localist {...props} />
    </EventsState>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
