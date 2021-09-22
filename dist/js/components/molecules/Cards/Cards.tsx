import { Grid } from "@mui/material";
import React from "react";
import { StandardProps } from "../../../../types/types";
import Card from "../Card";
import {
  getEventDate,
  getEventFullTime,
  getEventKey,
} from "../../../helpers/displayEvent";

const Cards = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="rlv-cards">
      <div className={wrapperClassList}>
        <Grid container spacing={2}>
          {events.length > 0 ? (
            events.map((event) => {
              const key = getEventKey(event.event);
              return (
                <Grid item key={key} className={listClassList}>
                  <Card
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
                    sx={{ maxWidth: 365 }}
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
