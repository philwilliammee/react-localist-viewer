import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { getTypeIds, getGroupId, getDepartmentIds } from '../helpers/displayEvent';
import { FilterButton } from './partials';
/**
 * @todo ad target id to data filter string.
 * @param {obj} props The props.
 */

var EventFilters = function EventFilters(props) {
  var filterObjs = props.filterObjs,
      handleEventFilter = props.handleEventFilter,
      filterby = props.filterby,
      events = props.events;
  var filterKeys = Object.keys(filterObjs);

  var _useState = useState('filterAll'),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  if (filterby === 'none') {
    return '';
  }

  var applyFilter = function applyFilter(obj) {
    if (obj.name === 'filterAll') {
      handleEventFilter(events);
    } else {
      var filters = events.filter(function (event) {
        var ids = getTypeIds(event.event);
        var departmentIds = getDepartmentIds(event.event);
        var groupId = getGroupId(event.event);

        if (filterby === 'type' && ids.includes(obj.id)) {
          return event;
        }

        if (filterby === 'dept' && departmentIds.includes(obj.id)) {
          return event;
        }

        if (filterby === 'group' && groupId === obj.id) {
          return event;
        }

        return null;
      });
      handleEventFilter(filters);
    }
  };

  return React.createElement("div", {
    className: "events-filters-wrap"
  }, React.createElement("h3", {
    className: "hidden"
  }, "Show:"), React.createElement("ul", {
    className: "events-filters"
  }, React.createElement("li", {
    key: "filterAll"
  }, React.createElement(FilterButton, {
    filterId: "filterAll",
    active: active,
    name: "All Events",
    clickHandler: function clickHandler() {
      var obj = {
        id: 'filterAll',
        name: 'filterAll'
      };
      applyFilter(obj);
      setActive('filterAll');
    }
  })), filterKeys.map(function (key) {
    var obj = filterObjs[key];
    var id = obj.id,
        name = obj.name;
    var filterId = "filter".concat(id);
    return React.createElement("li", {
      key: id
    }, React.createElement(FilterButton, {
      filterId: filterId,
      active: active,
      name: name,
      clickHandler: function clickHandler() {
        applyFilter(obj);
        setActive(filterId);
      }
    }));
  })));
};

export default EventFilters;