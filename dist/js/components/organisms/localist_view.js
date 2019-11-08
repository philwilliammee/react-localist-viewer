import React from 'react';
import Standard from '../molecules/standard';
import Compact from '../molecules/compact';
import ModernStandard from '../molecules/modern_standard';
import ModernCompact from '../molecules/modern_compact';
import InlineCompact from '../molecules/inline_compact';

var LocalistView = function LocalistView(props) {
  var component;
  var format = props.format,
      page = props.page,
      loading = props.loading;

  if (loading) {
    return React.createElement("div", {
      className: "loader p-4"
    }, React.createElement("span", {
      className: "fa fa-spin fa-cog"
    }));
  }

  switch (format) {
    case 'standard':
      component = React.createElement(Standard, Object.assign({
        key: page
      }, props));
      break;

    case 'compact':
      component = React.createElement(Compact, Object.assign({
        key: page
      }, props));
      break;

    case 'modern_standard':
      props.wrapperClassArray.push('singles');
      component = React.createElement(ModernStandard, Object.assign({
        key: page
      }, props));
      break;

    case 'modern_compact':
      props.wrapperClassArray.push('compact');
      component = React.createElement(ModernCompact, Object.assign({
        key: page
      }, props));
      break;

    case 'inline_compact':
      component = React.createElement(InlineCompact, Object.assign({
        key: page
      }, props));
      break;

    default:
      break;
  }

  return component;
};

export default LocalistView;