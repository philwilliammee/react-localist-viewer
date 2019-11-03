import React from 'react';
import PropTypes from 'prop-types';
import {
    getTruncDesc,
    getEventTime,
    getEventType,
    getMonthHeader,
    getDisplayDate,
} from '../../helpers/displayEvent';
import AddCal from '../addCal'
import {
    EventTitle,
    EventDate,
    EventLocation,
    EventThumbnail,
    EventDescription,
    EventTypes,
} from '../partials';

const StandardInner = props => {
    const {
        event,
        filterby,
        hideaddcal,
        truncatedescription,
        thumbnail,
        itemclass,
        hidedescription,
        hideimages,
    } = props;

    return (
        <div className="views-row">
            <div className={`event-node node ${itemclass} ${event.display}`}>
                <div className = 'events'>
                    <div className="field title">
                        <EventTitle
                            title={event.title}
                            url={event.localist_url} />
                    </div>
                    <EventLocation locationName={event.location_name} />
                    <div>
                        <EventDate date={getEventTime(event)} />
                        <EventTypes
                            eventTypes={getEventType(event, filterby)} />
                    </div>
                    { hideimages === 'true'
                        ? ''
                        : <EventThumbnail
                            photoUrl={event.photo_url}
                            title={event.title}
                            thumbnail={thumbnail}
                            photoCrop='big'
                        />}
                    <EventDescription
                        description={getTruncDesc(event, truncatedescription)}
                        title = {event.title}
                        url = {event.localist_url}
                        hidedescription = {hidedescription}
                    />
                    { hideaddcal === 'true'
                        ? ''
                        : <AddCal event={event} />}
                </div>
            </div>
        </div>
    )
}

StandardInner.propTypes = {
    event: PropTypes.object.isRequired,
    filterby: PropTypes.string.isRequired,
    truncatedescription: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    itemclass: PropTypes.string.isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        .isRequired,
};

const Standard = (props) => {
    const {
        events,
        filterby,
        hideaddcal,
        truncatedescription,
        thumbnail,
        wrapperclass,
        listclass,
        itemclass,
        hidedescription,
        hideimages,
    } = props;
    const thumbNailClass = (thumbnail === 'false') ? 'no-thumbnails' : '';
    let lastMonth = '';
    let lastDay = '';

    const getMonth = event => {
        const month = getMonthHeader(event);
        if (lastMonth !== month) {
            lastMonth = month;
            return (
                <h3 className="month-header">{month}</h3>
            )
        }
        return '';
    }

    const getDay = (event, filterbyType) => {
        const displayDate = getDisplayDate(event, filterbyType);
        if (lastDay !== displayDate) {
            lastDay = displayDate;
            return (
                <h4 className="day-header">
                    <span className="fa fa-calendar-o"/>
                    {displayDate}
                </h4>
            )
        }
        return '';
    }

    return (
        <section className="standard" title="Events List">
            <div className="main-body">
                <div className={`events-listing ${thumbNailClass} ${wrapperclass}`}>
                    <div className={`events-list ${listclass}`}>
                        { events.length > 0
                            ? events.map( event => {
                                return (
                                    <div key={event.event.id}>
                                        {getMonth(event.event)}
                                        {getDay(event.event, filterby)}
                                        <StandardInner
                                            event={event.event}
                                            filterby={filterby}
                                            hideaddcal={hideaddcal}
                                            truncatedescription={
                                                truncatedescription
                                            }
                                            itemclass = {itemclass}
                                            thumbnail={thumbnail}
                                            hidedescription={hidedescription}
                                            hideimages={hideimages}
                                        />
                                    </div>
                                )})
                            : <p>There are no upcomming events.</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

Standard.propTypes = {
    events: PropTypes.array,
    filterby: PropTypes.string.isRequired,
    truncatedescription: PropTypes.string,
    thumbnail: PropTypes.string,
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    itemclass: PropTypes.string,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
};

Standard.defaultProps = {
    events: [],
    hideaddcal: 'true',
    truncatedescription: '250',
    thumbnail: 'true',
    wrapperclass: '',
    listclass: '',
    itemclass: '',
    hidedescription: 'false',
    hideimages: 'false',
};

export default Standard;
