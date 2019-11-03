import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import buildEventWrapperFilters from '../../helpers/buildEventWrapperFilters';

import {
    getTypeIds,
    getGroupId,
    getDepartmentIds,
} from '../../helpers/displayEvent'

import { FilterButton } from '../partials';

/**
 * @todo ad target id to data filter string.
 * @param {obj} props The props.
 */
const EventFilters = props => {
    const {handleEventFilter, filterby, events} = props;
    const filterObjs = buildEventWrapperFilters(events, filterby);
    const filterKeys = Object.keys(filterObjs);
    const [active, setActive] = useState('filterAll');
    if (filterby === 'none'){
        return '';
    }
    const applyFilter = obj => {
        events.forEach(event => {
            const ids = getTypeIds(event.event);
            const departmentIds = getDepartmentIds(event.event);
            const groupId = getGroupId(event.event);
            if (obj.name === 'filterAll'){
                event.event.display = 'fadeIn';
            }
            else if (filterby === 'type' && ids.includes(obj.id)){
                event.event.display = 'fadeIn';
            }
            else if (filterby === 'dept' && departmentIds.includes(obj.id)){
                event.event.display = 'fadeIn';
            }
            else if (filterby === 'group' && groupId === (obj.id)){
                event.event.display = 'fadeIn';
            }
            else{
                event.event.display = 'fadeOut';
            }
        })
        handleEventFilter(events);
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
    handleEventFilter: PropTypes.func.isRequired,
    filterby: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
}

export default EventFilters
