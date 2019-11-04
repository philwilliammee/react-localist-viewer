import React from 'react';
import PropTypes from 'prop-types';
import {
    getEventDate,
    getEventTime,
} from '../../helpers/displayEvent';

const ClassicInner = props => {
    const {event} = props;
    const eventTime = getEventTime(event);
    const date = getEventDate(event);
    const classList = event.itemClassArray.join(' ');
    return (
        <div className={`views-row ${classList}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 event-title-and-location">
                        <div>
                            <a href={event.localist_url}>{event.title}</a>
                        </div>
                        <div>
                            <span className="event-date">{date}</span>
                            -
                            {eventTime}{
                                event.location_name
                                    ? ` | ${event.location_name}`
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ClassicInner.propTypes = {
    event: PropTypes.object.isRequired,
};

const Classic= props =>{
    const {
        events,
        listclass,
        wrapperclass} = props;

    return (
        <div className={`view view-events view-id-events cuenergy-events ${wrapperclass}`}>
            <div className={`events-list view-content ${listclass}`}>
                {events.length > 0
                    ? events.map( event => {
                        return (
                            <ClassicInner
                                key={event.event.id}
                                event={event.event}
                            />
                        )
                    })
                    : <p>There are no upcomming events.</p>}
            </div>
        </div>
    );

}

Classic.propTypes = {
    events: PropTypes.array,
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
};

Classic.defaultProps = {
    events: [],
    wrapperclass: '',
    listclass: '',
};
export default Classic;
