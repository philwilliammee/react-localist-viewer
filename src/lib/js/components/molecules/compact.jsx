import React from 'react';
import PropTypes from 'prop-types';
import {
    getTruncDesc,
    getEventDateCompact,
} from '../../helpers/displayEvent';
import AddCal from '../addCal'
import {
    EventTitle,
    EventDate,
    EventLocation,
    EventThumbnail,
    EventDescription,
} from '../partials';

const CompactInner = props => {
    const {
        event,
        hideaddcal,
        thumbnail,
        truncatedescription,
        itemclass,
        hidedescription,
        hideimages,
    } = props;
    if (!event.display) { event.display = ''};
    return (
        <div className={`views-row ${itemclass} ${event.display}`}>
            { hideimages === 'true'
                ? ''
                : <EventThumbnail
                    photoUrl={event.photo_url}
                    title={event.title}
                    thumbnail={thumbnail}
                    photoCrop='big'
                />}
            <div className="event-node node">
                <div className = 'events'>
                    <EventTitle title={event.title} url={event.localist_url} />
                    <EventLocation locationName={event.location_name} />
                    <EventDate date={getEventDateCompact(event)} />
                    <EventDescription
                        description={getTruncDesc(event, truncatedescription)}
                        title = {event.title}
                        url = {event.localist_url}
                        hidedescription = {hidedescription}
                    />
                    {
                        hideaddcal === 'true'
                            ? ''
                            : <AddCal event={event} />
                    }
                </div>
            </div>
        </div>
    )
}

CompactInner.propTypes = {
    event: PropTypes.object.isRequired,
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

const Compact = (props) => {
    const {
        events,
        filterby,
        hideaddcal,
        truncatedescription,
        thumbnail,
        itemclass,
        listclass,
        wrapperclass,
        hidedescription,
        hideimages,
    } = props;
    const thumbNailClass = (thumbnail === 'false') ? 'no-thumbnails' : '';
    return (
        <section className='standard compact' title="Events List">
            <div className="main-body">
                <div className={`events-listing ${thumbNailClass} compact ${wrapperclass}`}>
                    <div className={`events-list view-content ${listclass}`}>
                        {events.length > 0
                            ? events.map( event => {
                                return (
                                    <CompactInner
                                        key={event.event.id}
                                        event={event.event}
                                        filterby={filterby}
                                        hideaddcal={hideaddcal}
                                        truncatedescription={
                                            truncatedescription
                                        }
                                        thumbnail={thumbnail}
                                        itemclass={itemclass}
                                        hidedescription={hidedescription}
                                        hideimages={hideimages}
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

Compact.propTypes = {
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

Compact.defaultProps = {
    events: [],
    hideaddcal: 'false',
    truncatedescription: '150',
    thumbnail: 'true',
    wrapperclass: '',
    listclass: '',
    itemclass: '',
    hidedescription: 'false',
    hideimages: 'false',

};

export default Compact;
