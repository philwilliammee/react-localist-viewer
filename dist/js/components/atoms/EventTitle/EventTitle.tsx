import { Link, Typography, TypographyProps } from "@mui/material";
import { createMarkup } from "../../../helpers/common";
import React from "react";

interface EventTitleProps {
  title: string;
  url?: string;
  variant?: TypographyProps["variant"];
}

const EventTitle = (props: EventTitleProps) => {
  const { title, url, variant } = props;
  const markup = createMarkup(title);
  if (url) {
    return (
      <Title variant={variant || "h4"}>
        <Link
          href={url}
          className="event-title"
          sx={{
            textDecoration: "none",
            "&:hover, :focus": {
              textDecoration: "underline",
            },
          }}
          dangerouslySetInnerHTML={markup}
        />
      </Title>
    );
  }

  return (
    <Title variant={variant || "h4"}>
      <span dangerouslySetInnerHTML={markup} />
    </Title>
  );
};

const Title = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: TypographyProps["variant"];
}) => {
  return (
    <Typography component="h3" variant={variant} className="rlv-event-title">
      {children}
    </Typography>
  );
};

export default EventTitle;
export { Title };
