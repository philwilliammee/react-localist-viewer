import React from "react";
import { StandardProps } from "../../../../types/types";
import ModernStandardInner from "./ModernStandardInner";
import {
  getClassItem,
  getEventDate,
  getEventFullTime,
  getEventKey,
} from "../../../helpers/displayEvent";

const ModernStandard = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="rlv-modern-standard" title="Events List">
        <div className={wrapperClassList}>
          <div className={listClassList}>
            {events.length > 0 ? (
              events.map((event) => {
                const key = getEventKey(event.event);
                const classList = getClassItem(event.event);
                return (
                  <ModernStandardInner
                    key={key}
                    title={event.event.title}
                    description={event.event.description}
                    image={event.event.photo_url}
                    link={event.event.localist_url}
                    hidedescription={props.hidedescription}
                    hideimages={props.hideimages}
                    truncatedescription={props.truncatedescription}
                    tags={event.event.tags}
                    dateFormat={getEventDate(event.event)}
                    timeFormat={getEventFullTime(event.event)}
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
        </div>
    </section>
  );
};

export default ModernStandard;
