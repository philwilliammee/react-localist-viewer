import React from 'react';
import { render } from "react-dom";
import { LocalistComponent } from "./lib";

const App = () => (
  <LocalistComponent
      target= 'root'
      depts= ''
      entries= '3'
      daysahead= '-30'
      format= 'modern_compact'
      group= ''
      keyword= ''
      heading= 'Localist-Viewer'
      filterby= 'dept'
      calendarurl= '/3eventTestData.json'
      apikey= ''
      hideaddcal= ''
      hidedescription= ''
      truncatedescription= '250'
      hideimages= ''
      hidepagination = ''
      wrapperclass= "cwd-card-grid three-card"
      listclass= "cards"
      itemclass= "card"
      readmore= 'Read More »'
      url= 'https://philwilliammee.github.io/react-localist-viewer/'
  />
);

render(<App />, document.getElementById("root"));
