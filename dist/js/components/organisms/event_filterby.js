import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import buildEventWrapperFilters from '../../helpers/buildEventWrapperFilters';
import { removeElement, addUniqueElement } from '../../helpers/common';
import { getTypeIds, getGroupId, getDepartmentIds } from '../../helpers/displayEvent';
import { FilterButton } from '../molecules/partials';
/**
 * @param {obj} props The props.
 */

var EventFilters = function EventFilters(props) {
  var handleEventFilter = props.handleEventFilter,
      filterby = props.filterby,
      events = props.events;
  var filterButtons = buildEventWrapperFilters(events, filterby);

  var _useState = useState('filterAll'),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  if (filterby === 'none') {
    return '';
  }

  var applyFilter = function applyFilter(obj) {
    events.forEach(function (event) {
      var ids = getTypeIds(event.event);
      var departmentIds = getDepartmentIds(event.event);
      var groupId = getGroupId(event.event);

      if (obj.name === 'filterAll') {
        event.event.itemClassArray = removeElement(event.event.itemClassArray, 'fadeOut');
      } else if (filterby === 'type' && ids.includes(obj.id)) {
        event.event.itemClassArray = removeElement(event.event.itemClassArray, 'fadeOut');
      } else if (filterby === 'dept' && departmentIds.includes(obj.id)) {
        event.event.itemClassArray = removeElement(event.event.itemClassArray, 'fadeOut');
      } else if (filterby === 'group' && groupId === obj.id) {
        event.event.itemClassArray = removeElement(event.event.itemClassArray, 'fadeOut');
      } else {
        addUniqueElement(event.event.itemClassArray, 'fadeOut');
      }
    });
    handleEventFilter(events);
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
  })), filterButtons.map(function (obj) {
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