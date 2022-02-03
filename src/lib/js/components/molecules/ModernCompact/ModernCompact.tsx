import React from "react";
import ModernCompactInner from "./ModernCompactInner";
import {
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../helpers/displayEvent";
import { ViewProps } from "../../../../types/types";

const ModernCompact = (props: ViewProps) => {
  const { events, listclass, wrapperclass } = props;
  return (
    <section className={`rlv-modern-compact ${wrapperclass}`}>
      <div className={listclass}>
        {events.length > 0 ? (
          events.map((event) => {
            const key = getEventKey(event.event);
            return (
              <ModernCompactInner
                key={key}
                title={event.event.title}
                description={event.event.description}
                image={event.event.photo_url}
                photoCrop="big"
                link={event.event.localist_url}
                hidedescription={props.hidedescription}
                hideimages={props.hideimages}
                truncatedescription={props.truncatedescription}
                tags={event.event.tags}
                dateFormat={getEventStartMonthDayString(event.event)}
                timeFormat={getEventStartEndTimes(event.event)}
                locationName={event.event.location_name}
                listClass={props.listclass}
                event={event.event}
                hideaddcal={props.hideaddcal}
              />
            );
          })
        ) : (
          <p>There are no upcoming events.</p>
        )}
      </div>
    </section>
  );
};

export default ModernCompact;
