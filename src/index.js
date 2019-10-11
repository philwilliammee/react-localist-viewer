import React from 'react';
import { render } from "react-dom";
import { LocalistComponent } from "./lib";

const App = () => (
  <LocalistComponent
      target= 'root'
      depts= ''
      entries= '3'
      daysahead= '-300'
      format= 'modern_compact'
      group= ''
      keyword= 'diversity'
      heading= 'Localist-Viewer'
      filterby= 'dept'
      calendarurl= '//events.cornell.edu/api/2.1/events'
      apikey= ''
      hideaddcal= ''
      hidedescription= ''
      truncatedescription= '250'
      hideimages= ''
      hidepagination = ''
      wrapperclass= "cwd-card-grid three-card"
      listclass= "cards"
      itemclass= "card"
      readmore= 'Read more'
      url= 'https://philwilliammee.github.io/localist-viewer/'
  />
);

render(<App />, document.getElementById("root"));
