import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import localistApiConnector from './js/services/localistApiConnector';
import Heading from './js/components/organisms/heading';
import Paginate from './js/components/organisms/paginate';
import LocalistView from './js/components/organisms/localist_view';
import EventFilters from './js/components/organisms/event_filterby';
import { isHidden } from './js/helpers/common';

/**
 * Localist Component
 * @todo reset filters on pagination load.
 * @todo implement class lists for all components.
 */
const Localist = props => {
    const [events, setEvents] = useState([])
    const [llPage, setLlPage] = useState({ current: props.page, size: 1, total: 1 })
    const [page, setPage] = useState(props.page)
    const [loading, setLoading] = useState(true)

    let wrapperClassArray = props.wrapperclass.split(' ');
    if (isHidden(props.hideimages)) {
        wrapperClassArray.push('no-thumbnails')
    }
    const classes = ['events-listing'];
    wrapperClassArray = wrapperClassArray.concat(classes);
    const listClassArray = props.listclass.split(' ');
    listClassArray.push('events-list');

    const getEvents = useCallback(async () => {
        setTimeout(() => {
            if (llPage.current !== page) { setLoading(true) }
        }, 400)
        const itemClassArray = props.itemclass.split(' ').concat(['event-node']);
        let res = await localistApiConnector({ page, ...props });
        res.data.events.forEach(event => {
            event.event.itemClassArray = [...itemClassArray];
        })
        setEvents(res.data.events)
        setLlPage(res.data.page)
        setLoading(false)
    }, [page, props, llPage])


    useEffect(() => { getEvents() }, [page])

    function handlePageClick(data) {
        const newPage = data.selected + 1;
        setPage(newPage)
    }

    function handleEventFilter(events) {
        setEvents(events)
    }

    return (
        <div>
            <Heading
                heading={props.heading}
                readmore={props.readmore}
                url={props.url}
            />
            <EventFilters
                key={page}
                events={events}
                handleEventFilter={handleEventFilter}
                filterby={props.filterby}
            />
            <LocalistView
                events={events}
                page={page}
                loading={loading}
                wrapperClassArray={wrapperClassArray}
                listClassArray={listClassArray}
                {...props}
            />
            <Paginate
                hidepagination={props.hidepagination}
                total={llPage.total}
                handlePageClick={handlePageClick}
            />
        </div>
    );

}

Localist.propTypes = {
    calendarurl: PropTypes.string.isRequired,
    entries: PropTypes.string,
    daysahead: PropTypes.string,
    depts: PropTypes.string,
    group: PropTypes.string,
    keyword: PropTypes.string,
    format: PropTypes.oneOf([
        'standard',
        'compact',
        'modern_compact',
        'modern_standard',
        'inline_compact'
    ]),
    apikey: PropTypes.string,
    truncatedescription: PropTypes.string.isRequired,
    heading: PropTypes.string,
    hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hidepagination: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    filterby: PropTypes.oneOf([
        'group',
        'dept',
        'type',
        'none',
    ]),
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    itemclass: PropTypes.string,
    page: PropTypes.number,
    readmore: PropTypes.string,
    url: PropTypes.string,
};


Localist.defaultProps = {
    depts: '0',
    group: '0',
    keyword: '',
    entries: '3',
    format: 'standard',
    apikey: '',
    daysahead: '365',
    heading: '',
    filterby: 'group',
    hidedescription: 'false',
    hideimages: 'false',
    hidepagination: 'true',
    hideaddcal: 'false',
    wrapperclass: '',
    listclass: '',
    itemclass: '',
    page: 1,
    readmore: '',
    url: '',
};

export default Localist;
