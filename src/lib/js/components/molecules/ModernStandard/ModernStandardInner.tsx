import * as React from "react";
import { Card as MuiCard, CardActions, Grid, Theme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Truncate from "../../atoms/Truncate";
import { Department, EventEvent, HideType } from "../../../../types/types";
import Tag from "../../atoms/Tag";

import { Box, SxProps } from "@mui/system";
import Time from "../../atoms/Time";
import { getEventTime } from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import { isNotHidden } from "../../../helpers/common";
import EventTitle from "../../atoms/EventTitle";
import EventImage from "../../atoms/EventImage";

interface Props {
  dateFormat: string;
  timeFormat: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  hidedescription: HideType;
  hideimages: HideType;
  truncatedescription: string;
  tags: string[];
  locationName: string;
  sx?: SxProps<Theme> | undefined;
  listClass?: string;
  event: EventEvent;
  hideaddcal?: HideType;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function ModernStandardInner(props: Props) {
  const { link, listClass, hideaddcal, handleClick } = props;

  return (
    <MuiCard
      sx={{
        borderRadius: "0px",
        boxShadow: "none",
        border: "0",
        mb: 2,
      }}
      className={listClass}
      raised={false}
    >
      {link ? (
        <CardActionArea href={link}>
          <CustomCardContent {...props} />
        </CardActionArea>
      ) : (
        <></>
      )}

      {!link && handleClick ? (
        <CardActionArea onClick={handleClick}>
          <CustomCardContent {...props} />
        </CardActionArea>
      ) : (
        <></>
      )}

      {isNotHidden(hideaddcal) ? (
        <CardActions>
          <Grid container>
            <Grid item flex={1} />
            <Grid item>
              <AddCal {...props} />
            </Grid>
          </Grid>
        </CardActions>
      ) : (
        ""
      )}
    </MuiCard>
  );
}

function CustomCardContent(props: Props) {
  const {
    title,
    description,
    image,
    hidedescription,
    hideimages,
    truncatedescription,
    event,
  } = props;
  const eventTime = getEventTime(event);
  const tagStr = (eventTypes: Department[]) => {
    let spanStr;
    if (eventTypes) {
      spanStr = eventTypes.map((element) => {
        return <Tag key={element.id}>{element.name}</Tag>;
      });
    }
    return spanStr;
  };
  return (
    <Grid
      container
      direction="row"
      justifyItems="space-evenly"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Time event={event} />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 1, marginBottom: 1 }}>
        <EventTitle title={title} />
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" variant="body2" color="text.secondary" pb={1}>
          {eventTime} {event.location_name ? `, ${event.location_name}` : ""}
          {/* {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))} */}
          {tagStr(event.filters.event_types)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="text.primary"
          sx={{
            "img.rlv-event-image": {
              float: "left",
              margin: "0 20px 0px 0px",
              objectFit: "cover",
              objectPosition: "100% 0",
              width: "200px",
              height: "150px",
            },
          }}
        >
          {!hideimages ? (
            <EventImage title={event.title} photoUrl={image} />
          ) : (
            ""
          )}
          <Truncate
            description={description}
            hidedescription={hidedescription}
            truncatedescription={truncatedescription}
          />
        </Typography>
      </Grid>
      {/* clear fix */}
      <Box
        sx={{
          clear: "both",
          display: "table",
        }}
      />
      <CardContent></CardContent>
    </Grid>
  );
}
