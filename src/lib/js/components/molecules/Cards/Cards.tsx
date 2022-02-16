import React from "react";
import { Grid } from "@mui/material";
import {
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../helpers/displayEvent";
import ModernCompactInner from "../ModernCompact/ModernCompactInner";
import { ViewProps } from "../../../../types/types";

const Cards = (props: ViewProps) => {
  const { events, listclass, wrapperclass } = props;
  return (
    <section className="rlv-cards">
      <div className={wrapperclass}>
        <Grid container spacing={2}>
          {events.length > 0 ? (
            events.map((event) => {
              const key = getEventKey(event.event);
              return (
                <Grid item key={key} className={listclass} xs={12} md={4}>
                  <ModernCompactInner
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
                    itemClass={props.itemclass}
                    event={event.event}
                    hideaddcal={props.hideaddcal}
                  />
                </Grid>
              );
            })
          ) : (
            <p>There are no upcoming events.</p>
          )}
        </Grid>
      </div>
    </section>
  );
};

export default Cards;
