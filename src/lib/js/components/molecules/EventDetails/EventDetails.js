import React, { useContext } from "react";
import EventsContext from "../../../context/EventsContext";
import PropTypes from "prop-types";
import {
  getEventTime,
  getClassItem,
  getMonthHeader,
  getDisplayDate,
  getMonth,
  getDay,
  getEventDate,
  getEventFullTime,
} from "../../../helpers/displayEvent";
import AddCal from "../addCal";
import { EventImg, EventDate } from "../partials";
import Truncate from "../../atoms/Truncate";
import Time from "../../atoms/Time";
import "./EventStyle.css";

const AgendaInner = (props) => {
  let { event } = props;
  const { events } = useContext(EventsContext);
  event = events.find((e) => e.event.id === event.id).event;

  if (!event) {
    return "";
  }

  console.log(event);

  return (
    <section className="event-details">
      <div className="cwd-component">
        <div className="cwd-events-style">
          <div className="field title">
            <h3>{event.title}</h3>
          </div>
          <span>
            {getEventDate(event)} @ {getEventFullTime(event)}
          </span>
          <div className="field field-name-summary summary">
            <div>
              <div style={{ float: "left", paddingRight: "15px" }}>
                <EventImg
                  photoUrl={event.photo_url}
                  title={event.title}
                  hideimages={"false"}
                  photoCrop="big"
                />
              </div>
              <span dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
          </div>
          <AddCal event={event} hideaddcal="false" />
        </div>
      </div>
    </section>
  );
};

export default AgendaInner;
