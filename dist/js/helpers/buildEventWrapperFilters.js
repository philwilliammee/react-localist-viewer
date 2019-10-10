import { getGroupName, getGroupId } from './displayEvent';
/**
 * @param {obj} event The localist event.
 */

var buildEventWrapperFilters = function buildEventWrapperFilters(events, filterby) {
  var filters = {}; // change this to foreach?

  events.map(function (eventObj) {
    var event = eventObj.event;
    var groupName = getGroupName(event);
    var groupId = getGroupId(event);

    if (filterby === 'type' && event.filters.event_types) {
      var types = event.filters.event_types;
      types.forEach(function (type) {
        filters[type.name] = {
          id: type.id,
          name: type.name,
          filterby: filterby
        };
      });
    } else if (filterby === 'dept' && event.filters.departments) {
      var departments = event.filters.departments;
      departments.forEach(function (department) {
        filters[department.name] = {
          id: department.id,
          name: department.name,
          filterby: filterby
        };
      });
    } else if (filterby === 'group' && groupName !== '') {
      filters[groupName] = {
        id: groupId,
        name: groupName,
        filterby: filterby
      };
    }
  });
  return filters;
};

export default buildEventWrapperFilters;