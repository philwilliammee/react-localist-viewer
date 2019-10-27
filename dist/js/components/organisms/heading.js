import React from 'react';

var Heading = function Heading(props) {
  var heading = props.heading,
      readmore = props.readmore,
      url = props.url;
  var renderHeading = heading ? React.createElement("h2", null, heading) : '';
  var renderReadmore = !readmore || !url ? '' : React.createElement("a", {
    className: "cwd_events_readmore",
    href: url
  }, readmore);
  return React.createElement("div", null, renderHeading, renderReadmore);
};

export default Heading;