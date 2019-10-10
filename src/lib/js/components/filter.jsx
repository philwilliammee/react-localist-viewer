import React, { useState }  from 'react';
import PropTypes from 'prop-types';

import {
    getTypeIds,
    getGroupId,
    getDepartmentIds,
} from '../helpers/displayEvent';

import { FilterButton } from './partials';

/**
 * @todo ad target id to data filter string.
 * @param {obj} props The props.
 */
const EventFilters = props => {
    const {filterObjs, handleEventFilter, filterby, events} = props;
    const filterKeys = Object.keys(filterObjs);
    const [active, setActive] = useState('filterAll');
    if (filterby === 'none'){
        return '';
    }
    const applyFilter = obj => {
        if (obj.name === 'filterAll'){
            handleEventFilter(events);
        } else {
            const filters = events.filter( event => {
                const ids = getTypeIds(event.event);
                const departmentIds = getDepartmentIds(event.event);
                const groupId = getGroupId(event.event);
                if (filterby === 'type' && ids.includes(obj.id)){
                    return event;
                }if (filterby === 'dept' && departmentIds.includes(obj.id)){
                    return event;
                } if (filterby === 'group' && groupId === (obj.id)){
                    return event;
                }
                return null;
            })
            handleEventFilter(filters);
        }
    }

    return (
        <div className="events-filters-wrap">
            <h3 className="hidden">Show:</h3>
            <ul className="events-filters">
                <li key='filterAll' >
                    <FilterButton
                        filterId= "filterAll"
                        active= {active}
                        name= "All Events"
                        clickHandler= {()=>{
                            const obj = {id:'filterAll', name:'filterAll'};
                            applyFilter(obj);
                            setActive('filterAll')
                        }}
                    />
                </li>
                {filterKeys.map(key => {
                    const obj = filterObjs[key];
                    const {id, name} = obj;
                    const filterId = `filter${id}`
                    return (
                        <li key={id} >
                            <FilterButton
                                filterId= {filterId}
                                active= {active}
                                name= {name}
                                clickHandler= {()=>{
                                    applyFilter(obj);
                                    setActive(filterId);
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

EventFilters.propTypes = {
    // Filterby will have shape of uniquefiltername:{id:integer, name:string, filterby:string}.
    filterObjs: PropTypes.object.isRequired,
    handleEventFilter: PropTypes.func.isRequired,
    filterby: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
}

export default EventFilters
