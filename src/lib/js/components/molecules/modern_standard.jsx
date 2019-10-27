import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    getTruncDesc,
    getAbbrMonth,
    getDay,
    getEventDate,
    getEventTime,
} from '../../helpers/displayEvent';
import EventFilters from '../filter';
import AddCal from '../addCal'
import buildEventWrapperFilters from '../../helpers/buildEventWrapperFilters';
import {EventImg} from '../partials';

const ModernStandardInner = props => {
    const {
        event,
        hideaddcal,
        hideimages,
        truncatedescription,
        itemclass,
        hidedescription,
    }
         = props;

    /**
     *
     * @param {obj} eventTypes An array of events.
     * @return {string} Html string
     */
    const tagStr = eventTypes => {
        let spanStr;
        if (eventTypes) {
            spanStr = eventTypes.map(element => {
                return <span key={element.id} className="inline-events-type">{element.name}</span>
            });
        }
        return spanStr;
    };

    const eventTime = getEventTime(event);

    return (
        <div className={`card event-node ${itemclass}`}>
            <div className="events">
                <a
                    href={event.localist_url}
                    className="group-link-wrapper field-group-link"
                >
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
                            {tagStr(event.filters.event_types)}
                        </p>
                    </div>
                    <div className="field field-name-summary summary">
                        <p>
                            <EventImg
                                photoUrl={event.photo_url}
                                title={event.title}
                                hideimages = {hideimages}
                                photoCrop='big'
                            />
                            { hidedescription !== 'true'
                                ? `${getTruncDesc(event, truncatedescription)} read more`
                                : ''}
                        </p>
                    </div>
                </a>
                {
                    hideaddcal !== 'true'
                        ? <AddCal event={event} />
                        : ''
                }
            </div>

        </div>
    )
}

ModernStandardInner.propTypes = {
    event: PropTypes.object.isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
    truncatedescription: PropTypes.string.isRequired,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
    itemclass: PropTypes.string.isRequired,
};

const ModernStandard= props =>{
    const {
        events,
        filterby,
        hideaddcal,
        truncatedescription,
        hideimages,
        itemclass,
        listclass,
        wrapperclass,
        hidedescription,
    } = props;
    const [filterEvents, handleEventFilter] = useState(events);
    const filterObjs = buildEventWrapperFilters(events, filterby);
    const thumbNailClass = (hideimages === 'true') ? 'no-thumbnails' : '';
    return (
        <section className='events-modern-standard modern' title="Events List">
            <div className="main-body">
                <div className={`cwd-component cwd-card-grid three-card singles events-listing ${thumbNailClass} ${wrapperclass}`}>
                    <EventFilters
                        filterObjs={filterObjs}
                        events={events}
                        handleEventFilter={handleEventFilter}
                        filterby={filterby}
                    />
                    <div className={`events-list view-content ${listclass}`}>
                        {filterEvents.length > 0
                            ? filterEvents.map( event => {
                                return (
                                    <ModernStandardInner
                                        key={event.event.id}
                                        event={event.event}
                                        filterby={filterby}
                                        hideaddcal={hideaddcal}
                                        truncatedescription={
                                            truncatedescription
                                        }
                                        hidedescription = {hidedescription}
                                        hideimages={hideimages}
                                        itemclass={itemclass}
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

ModernStandard.propTypes = {
    events: PropTypes.array,
    filterby: PropTypes.string.isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    truncatedescription: PropTypes.string,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    itemclass: PropTypes.string,
};

ModernStandard.defaultProps = {
    events: [],
    hideaddcal: 'false',
    truncatedescription: '250',
    hideimages: 'false',
    wrapperclass: '',
    listclass: '',
    itemclass: '',
    hidedescription: 'false',

};
export default ModernStandard;
