import React from "react";
import { Grid, Link, Typography } from "@mui/material";

interface Props {
  heading: string;
  readmore: string;
  url: string;
}

const Heading = (props: Props) => {
  const { heading, readmore, url } = props;
  return (
    <Grid container className="rlv-heading" mb={2}>
      <Grid>
        <HeadingMarkup heading={heading} />
      </Grid>
      <Grid flexGrow={1} />
      <Grid>
        <ReadMore readmore={readmore} url={url} />
      </Grid>
    </Grid>
  );
};

const HeadingMarkup = ({ heading }: { heading: string }) => {
  if (!heading) {
    return <></>;
  }
  return <Typography variant="h2">{heading}</Typography>;
};

const ReadMore = ({ readmore, url }: { readmore: string; url: string }) => {
  if (!readmore || !url) {
    return <></>;
  }
  return (
    <Link sx={{ textDecoration: "none" }} href={url}>
      {readmore}
    </Link>
  );
};

export default Heading;
export { HeadingMarkup, ReadMore };
