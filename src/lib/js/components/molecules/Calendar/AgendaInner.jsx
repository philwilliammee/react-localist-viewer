import React, {useContext} from 'react';
import EventsContext from '../../../context/EventsContext'
import {ModernStandardInner} from '../modern_standard'

const AgendaInner = props => {
    const { event } = props;
    const { events } = useContext(EventsContext);
    const fullEvent = events.find( e=>(e.event.id === event.id)).event
    if (!fullEvent) {
        return ""
    }
    console.log(fullEvent)

    return (
        <ModernStandardInner
            event={fullEvent}
            hideaddcal={'true'}
            truncatedescription={'150'}
            hidedescription={'false'}
            hideimages={'false'}
            hidetime={true}
        />
    )
}

export default AgendaInner;

