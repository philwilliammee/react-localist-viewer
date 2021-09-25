import React from "react";
import { getEventFullTime, getFullDate } from "../../../helpers/displayEvent";
import Grid from "../../atoms/Grid";
import { EventEvent } from "../../../../types/types";
import { createMarkup, truncateString } from "../../../helpers/common";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

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
        <Grid col={12}>
          <Typography variant="h4" pb={2}>
            Details
          </Typography>
        </Grid>
        <Grid col={6}>
          <Typography fontWeight={fontWeightMedium}>When</Typography>
          <Typography variant="body2" gutterBottom>
            {getFullDate(event)}
            <br />
            {getEventFullTime(event)}
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

        <Grid col={6}>
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
