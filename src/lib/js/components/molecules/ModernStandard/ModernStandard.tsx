import React from "react";
import ModernStandardInner from "./ModernStandardInner";
import {
  getClassItem,
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../helpers/displayEvent";
import { Stack } from "@mui/material";
import { ViewProps } from "../../organisms/LocalistView";

const ModernStandard = (props: ViewProps) => {
  const { events, wrapperclass, listclass } = props;

  return (
    <section className="rlv-modern-standard" title="Events List">
      <div className={wrapperclass}>
        <Stack spacing={2} className={listclass}>
          {events.length > 0 ? (
            events.map((event) => {
              const key = getEventKey(event.event);
              const classList = getClassItem(event.event);
              return (
                <ModernStandardInner
                  key={key}
                  description={event.event.description}
                  link={event.event.localist_url}
                  hidedescription={props.hidedescription}
                  hideimages={props.hideimages}
                  truncatedescription={props.truncatedescription}
                  tags={event.event.tags}
                  dateFormat={getEventStartMonthDayString(event.event)}
                  timeFormat={getEventStartEndTimes(event.event)}
                  listClass={classList}
                  event={event.event}
                  hideaddcal={props.hideaddcal}
                />
              );
            })
          ) : (
            <p>There are no upcoming events.</p>
          )}
        </Stack>
      </div>
    </section>
  );
};

export default ModernStandard;
