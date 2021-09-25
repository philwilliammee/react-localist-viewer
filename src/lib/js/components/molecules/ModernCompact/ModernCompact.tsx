import React from "react";
import { StandardProps } from "../../../../types/types";
import ModernCompactInner from "./ModernCompactInner";
import {
  getClassItem,
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../helpers/displayEvent";

const ModernCompact = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className={`rlv-modern-compact ${wrapperClassList}`}>
      <div className={listClassList}>
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
