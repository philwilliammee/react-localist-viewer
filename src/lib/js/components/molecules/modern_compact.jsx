import React from 'react';
import PropTypes from 'prop-types';
import {
    getAbbrMonth,
    getDay,
    getEventDate,
    getEventTime,
} from '../../helpers/displayEvent';
import AddCal from '../addCal'
import {EventThumbnail} from '../partials';
import Truncate from '../atoms/truncate';

const ModernCompactInner = props => {
    const {
        event,
        hideimages } = props;
    const eventTime = getEventTime(event);
    const classList = event.itemClassArray.join(' ');
    return (
        <div className={classList}>
            <div className="events">
                <a
                    href={event.localist_url}
                    className="group-link-wrapper field-group-link"
                >
                    <EventThumbnail
                        photoUrl={event.photo_url}
                        title={event.title}
                        hideimages={hideimages}
                        photoCrop='big'
                    />
                    <time
                        title={getEventDate(event)}
                        dateTime={eventTime}
                    >
                        <span className="month">{getAbbrMonth(event)}</span>
                        <span className="day">{getDay(event)}</span>
                    </time>
                    <div className="field title">
                        <h3>{event.title}</h3>
                    </div>
                    <div className="field meta">
                        <p>
                            {eventTime}{ event.location_name ? `, ${event.location_name}` : '' }
                        </p>
                    </div>
                    <div className="field field-name-summary summary">
                        <p>
                            <Truncate {...props} />
                        </p>
                    </div>
                </a>
                <AddCal {...props} />
            </div>
        </div>
    )
}

ModernCompactInner.propTypes = {
    event: PropTypes.object.isRequired,
    truncatedescription: PropTypes.string.isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
};


const ModernCompact= props =>{
    const {events, listClassArray, wrapperClassArray} = props;
    const wrapperClassList = wrapperClassArray.join(' ');
    const listClassList = listClassArray.join(' ');
    return (
        <section className='events-modern-compact modern' title="Events List">
            <div className="main-body">
                <div className={wrapperClassList}>
                    <div className={listClassList}>
                        {events.length > 0
                            ? events.map( event => {
                                return (
                                    <ModernCompactInner
                                        key={event.event.id}
                                        event={event.event}
                                        display={event.display}
                                        {...props}
                                    />
                                )
                            })
                            : <p>There are no upcomming events.</p>}
                    </div>
                </div>
            </div>
        </section>
    );

}

ModernCompact.propTypes = {
    events: PropTypes.array,
    filterby: PropTypes.string.isRequired,
    truncatedescription: PropTypes.string,
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    wrapperClassArray: PropTypes.array,
    listClassArray: PropTypes.array,
};

ModernCompact.defaultProps = {
    events: [],
    truncatedescription: '150',
    wrapperclass: '',
    listclass: '',
    wrapperClassArray: [],
    listClassArray: [],

};
export default ModernCompact;
