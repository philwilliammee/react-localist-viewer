import React from "react";
import Localist from "./localist";
import EventsState from "./js/context/EventState";
import { AppProps } from "./types/types";

const App = (props: AppProps) => (
  <EventsState>
    <Localist {...props} />
  </EventsState>
);

export default App;
