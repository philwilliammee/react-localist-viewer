import React from "react";
import { Link, Typography } from "@mui/material";

interface Props {
  heading: string;
  readmore: string;
  url: string;
}

const Heading = (props: Props) => {
  const { heading, readmore, url } = props;
  return (
    <Typography component="div" className="rlv-heading" gutterBottom>
      <HeadingMarkup heading={heading} />
      <ReadMore readmore={readmore} url={url} />
    </Typography>
  );
};

const HeadingMarkup = ({ heading }: { heading: string }) => {
  if (!heading) {
    return <></>;
  }
  return (
    <Typography variant="h2" sx={{ display: "inline-block" }}>
      {heading}
    </Typography>
  );
};

const ReadMore = ({ readmore, url }: { readmore: string; url: string }) => {
  if (!readmore || !url) {
    return <></>;
  }
  return (
    <Link
      sx={{
        float: "right",
        textDecoration: "none",
      }}
      href={url}
    >
      {readmore}
    </Link>
  );
};

export default Heading;
export { HeadingMarkup, ReadMore };
