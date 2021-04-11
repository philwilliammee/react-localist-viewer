import { EventElement, EventEvent, HideType } from "lib/types/types";
import React, { useContext } from "react";
import EventContext from "../../../../context/EventsContext";
import AgendaListView from "./AgendaInner";
import PropTypes from "prop-types";
import { getEventDate, getEventStart } from "lib/js/helpers/displayEvent";
import moment, { Moment } from "moment";

interface Props {
  events: EventElement[];
  dateContext: Moment;
  hideaddcal: HideType;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  // hidetime: HideType;
  setShowDialog: Function;
  setEventSelected: Function;
}

function AgendaList(props: Props) {
  const { setShowDialog, setEventSelected } = useContext(EventContext);

  if (props.events.length === 0) {
    return <p>There are no events in this range.</p>;
  }

  return (
    <section className="events-modern-compact modern" title="Events List">
      <div className="events-main-body">
        {props.events.map((event: EventElement) => (
          <div
            key={event.event.event_instances[0].event_instance.id}
            className="cwd-component cwd-card-grid"
          >
            <AgendaListView
              event={event.event}
              hideaddcal={props.hideaddcal}
              hidedescription={props.hidedescription}
              hideimages={props.hideimages}
              setEventSelected={setEventSelected}
              setShowDialog={setShowDialog}
              truncatedescription={props.truncatedescription}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgendaList;
