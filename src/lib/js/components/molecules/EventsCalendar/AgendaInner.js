import React, {useContext} from 'react';
import EventsContext from '../../../context/EventsContext'
import {ModernStandardInner} from '../ModernStandard'

const AgendaInner = props => {
    const { event } = props;
    const { events } = useContext(EventsContext);
    const fullEvent = events.find( e=>(e.event.id === event.id)).event
    if (!fullEvent) {
        return ""
    }
    return (
        <ModernStandardInner
            event={fullEvent}
            hideaddcal={'true'}
            truncatedescription={'500'}
            hidedescription={'false'}
            hideimages={'false'}
            hidetime={false}
        />
    )
}

export default AgendaInner;

