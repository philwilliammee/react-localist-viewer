import { Grid } from "@mui/material";
import React from "react";
import { StandardProps } from "../../../../types/types";
import Card from "../Card";

const Cards = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="events-modern-standard modern" title="Events List">
      <div>
        <div className={`rlv-component cwd-card-grid ${wrapperClassList}`}>
          <div className={listClassList}>
            <Grid container spacing={2}>
              {events.length > 0 ? (
                events.map((event) => {
                  return (
                    <Grid
                      item
                      key={event.event.event_instances[0].event_instance.id}
                    >
                      <Card
                        key={event.event.event_instances[0].event_instance.id}
                        title={event.event.title}
                        description={event.event.description}
                        image={event.event.photo_url}
                        link={event.event.localist_url}
                        hidedescription={props.hidedescription}
                        hideimages={props.hideimages}
                        truncatedescription={props.truncatedescription}
                        tags={event.event.tags}
                        // event={event.event}
                        // {...props}
                      />
                    </Grid>
                  );
                })
              ) : (
                <p>There are no upcoming events.</p>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
