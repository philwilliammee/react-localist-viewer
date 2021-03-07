import React from "react";
import { render } from "react-dom";
import { LocalistComponent } from "./lib";
import { AppProps } from "./lib/types/types";

let data: AppProps;
try {
  data = require("./local_settings.json");
} catch (error) {
  data = require("./example_local_settings.json");
}

const App = () => <LocalistComponent {...data} />;

render(<App />, document.getElementById("root"));
