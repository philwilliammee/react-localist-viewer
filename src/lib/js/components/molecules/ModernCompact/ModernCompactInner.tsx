import * as React from "react";
import { Card as MuiCard, CardActions, Grid, Link, Theme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Truncate from "../../atoms/Truncate";
import { EventEvent, HideType } from "../../../../types/types";
import Tag from "../../atoms/Tag";
import { Box, SxProps } from "@mui/system";
import Time from "../../atoms/Time";
import { getEventTime } from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import { isNotHidden } from "../../../helpers/common";
import EventTitle from "../../atoms/EventTitle";

interface Props {
  dateFormat: string;
  timeFormat: string;
  title: string;
  description?: string;
  image: string;
  link: string;
  hidedescription: HideType;
  hideimages: HideType;
  truncatedescription: string;
  tags: string[];
  locationName: string;
  sx?: SxProps<Theme> | undefined;
  listClass?: string;
  event: EventEvent;
  hideaddcal?: HideType;
}
export default function ModernCompactInner(props: Props) {
  const {
    title,
    description,
    image,
    link,
    hidedescription,
    hideimages,
    truncatedescription,
    tags,
    listClass,
    hideaddcal,
    event,
  } = props;
  const eventTime = getEventTime(event);
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
      <Link href={link} sx={{ textDecoration: "none" }}>
        <CardActionArea>
          {!hideimages ? (
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                borderBottom: "5px solid",
                borderBottomColor: "secondary.main",
              }}
            />
          ) : (
            ""
          )}
          <CardContent>
            <Time event={event} />
            <Box sx={{ marginTop: 1, marginBottom: 1 }}>
              <EventTitle title={title} />
            </Box>
            <Typography
              component="p"
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {eventTime}{" "}
              {event.location_name ? `, ${event.location_name}` : ""}
            </Typography>
            <Typography color="text.primary">
              <Truncate
                description={description}
                hidedescription={hidedescription}
                truncatedescription={truncatedescription}
              />
            </Typography>
          </CardContent>
          {!tags.length ? (
            ""
          ) : (
            <CardActions>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </CardActions>
          )}
        </CardActionArea>
      </Link>
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
