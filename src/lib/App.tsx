import React from "react";
import Localist from "./localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <EventsState>
      <Localist {...props} />
    </EventsState>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);

export default App;
