import React from 'react';
import Standard from '../molecules/standard';
import Compact from '../molecules/compact';
import ModernStandard from '../molecules/modern_standard';
import ModernCompact from '../molecules/modern_compact';
import Classic from '../molecules/classic';
import InlineCompact from '../molecules/inline_compact';

var LocalistView = function LocalistView(props) {
  var component;
  var events = props.events,
      page = props.page,
      loading = props.loading;
  var format = props.format,
      filterby = props.filterby,
      wrapperclass = props.wrapperclass,
      listclass = props.listclass,
      itemclass = props.itemclass,
      hidedescription = props.hidedescription,
      truncatedescription = props.truncatedescription,
      hideimages = props.hideimages,
      hideaddcal = props.hideaddcal;

  if (loading) {
    return React.createElement("div", {
      className: "loader p-4"
    }, React.createElement("span", {
      className: "fa fa-spin fa-cog"
    }));
  }

  switch (format) {
    case 'standard':
      component = React.createElement(Standard, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    case 'compact':
      component = React.createElement(Compact, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    case 'modern_standard':
      component = React.createElement(ModernStandard, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    case 'modern_compact':
      component = React.createElement(ModernCompact, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    case 'inline_compact':
      component = React.createElement(InlineCompact, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    case 'classic':
      component = React.createElement(Classic, {
        key: page,
        events: events,
        filterby: filterby,
        wrapperclass: wrapperclass,
        listclass: listclass,
        itemclass: itemclass,
        hidedescription: hidedescription,
        truncatedescription: truncatedescription,
        hideimages: hideimages,
        hideaddcal: hideaddcal
      });
      break;

    default:
      break;
  }

  return component;
};

export default LocalistView;