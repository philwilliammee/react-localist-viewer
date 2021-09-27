import React from "react";
import {
  getEventStartEndTimes,
  getEventStart,
} from "../../../helpers/displayEvent";
import { EventEvent } from "../../../../types/types";
import { createMarkup, truncateString } from "../../../helpers/common";
import { Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

interface Props {
  event: EventEvent;
}

const MoreInfo = ({ event }: Props) => {
  const theme = useTheme();
  const deptWebsite = event?.custom_fields?.dept_web_site
    ? event.custom_fields.dept_web_site
    : event.url;
  const { fontWeightMedium } = theme.typography;
  return (
    <Box
      className="rlv-more-info"
      sx={{
        bgcolor: theme.palette.grey[100],
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
      }}
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="h4" pb={2}>
            Details
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography fontWeight={fontWeightMedium}>When</Typography>
          <Typography variant="body2" gutterBottom>
            {moment(getEventStart(event)).format("MMMM D, YYYY")}
            <br />
            {getEventStartEndTimes(event)}
          </Typography>

          <Typography fontWeight={fontWeightMedium}>Where</Typography>
          <Typography variant="body2" gutterBottom>
            {event.location ? event.location : "NA"}
          </Typography>

          <Typography fontWeight={fontWeightMedium}>Room</Typography>
          <Typography variant="body2">
            {event.room_number ? event.room_number : "NA"}
          </Typography>
        </Grid>

        <Grid item md={6} xs={12}>
          <Typography fontWeight={fontWeightMedium}>Website</Typography>
          <Typography variant="body2" gutterBottom>
            {deptWebsite ? (
              <a href={deptWebsite}>{truncateString(deptWebsite, 60)}</a>
            ) : (
              "NA"
            )}
          </Typography>

          <Typography fontWeight={fontWeightMedium}>Contact E-Mail</Typography>
          <Typography variant="body2" gutterBottom>
            {event?.custom_fields?.contact_email ? (
              <a href={`mailto:${event?.custom_fields?.contact_email}`}>
                {event?.custom_fields?.contact_email}
              </a>
            ) : (
              "NA"
            )}
          </Typography>

          <Typography fontWeight={fontWeightMedium}>Zoom Link</Typography>
          <Typography variant="body2" className="zoom-link">
            {event.stream_url ? (
              <div dangerouslySetInnerHTML={createMarkup(event.stream_url)} />
            ) : (
              "NA"
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoreInfo;
