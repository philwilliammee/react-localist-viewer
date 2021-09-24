import * as React from "react";
import {
  Card as MuiCard,
  CardActions,
  Grid,
  Stack,
  Theme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { EventEvent, HideType } from "../../../../types/types";
import { SxProps } from "@mui/system";
import Time from "../../atoms/Time";
import { getEventTime } from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import { isNotHidden } from "../../../helpers/common";
import EventTitle from "../../atoms/EventTitle";
import Tags from "../Tags";
import InlineImage from "../InlineImage/InlineImage";

interface Props {
  dateFormat: string;
  timeFormat: string;
  description?: string;
  hidedescription: HideType;
  hideimages: HideType;
  truncatedescription: string;
  link?: string;
  tags: string[];
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
  const { hidedescription, hideimages, truncatedescription, event } = props;
  const eventTime = getEventTime(event);
  return (
    <Stack spacing={1}>
      <Time event={event} />
      <EventTitle title={event.title} />
      <Typography component="p" variant="body2" color="text.secondary">
        {eventTime} {event.location_name ? `, ${event.location_name}` : ""}
      </Typography>
      <Tags tags={event.tags} />
      <InlineImage
        photoUrl={event.photo_url}
        title={event.title}
        hideimages={hideimages}
        photoCrop="big"
        description={event.description_text}
        hidedescription={hidedescription}
        truncatedescription={truncatedescription}
      />
    </Stack>
  );
}
