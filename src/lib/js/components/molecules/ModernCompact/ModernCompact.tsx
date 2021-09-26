import React from "react";
import ModernCompactInner from "./ModernCompactInner";
import {
  getClassItem,
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../helpers/displayEvent";
import { Props } from "../../organisms/LocalistView";

const ModernCompact = (props: Props) => {
  const { events, listclass, wrapperclass } = props;
  return (
    <section className={`rlv-modern-compact ${wrapperclass}`}>
      <div className={listclass}>
        {events.length > 0 ? (
          events.map((event) => {
            const key = getEventKey(event.event);
            const classList = getClassItem(event.event);
            return (
              <ModernCompactInner
                key={key}
                title={event.event.title}
                description={event.event.description}
                image={event.event.photo_url}
                link={event.event.localist_url}
                hidedescription={props.hidedescription}
                hideimages={props.hideimages}
                truncatedescription={props.truncatedescription}
                tags={event.event.tags}
                dateFormat={getEventStartMonthDayString(event.event)}
                timeFormat={getEventStartEndTimes(event.event)}
                locationName={event.event.location_name}
                listClass={classList}
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
