import {
    getGroupName,
    getGroupId,
} from './displayEvent';

/**
 * Gets the filter types and creates an object of filters to be used as buttons.
 * @param {obj} event The localist event.
 */
const buildEventWrapperFilters = (events, filterby) => {
    const filters = {};
    events.forEach( eventObj => {
        const {event} = eventObj
        const groupName = getGroupName(event);
        const groupId = getGroupId(event);
        if (
            filterby === 'type' &&
            event.filters.event_types
        ) {
            const types = event.filters.event_types
            types.forEach( type =>{
                filters[type.name] = {
                    id: type.id,
                    name: type.name,
                };
            })

        } else if (
            filterby === 'dept' &&
            event.filters.departments
        ) {
            const {departments} = event.filters
            departments.forEach( department => {
                filters[department.name] = {
                    id: department.id,
                    name: department.name,
                };
            })
        } else if (
            filterby === 'group' &&
            groupName !== ''
        ) {
            filters[groupName] = {
                id: groupId,
                name: groupName,
            };
        }
    })
    return filters

};

export default buildEventWrapperFilters
