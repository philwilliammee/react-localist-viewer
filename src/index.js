import React from "react";
import { render } from "react-dom";
import { LocalistComponent } from "./lib";
import EventsState from "./lib/js/context/EventState";

let data;
try {
  data = require("./local_settings.json");
} catch (error) {
  data = require("./example_local_settings.json");
}

const App = () => (
  <EventsState>
    <LocalistComponent {...data} />
  </EventsState>
);

render(<App />, document.getElementById("root"));
