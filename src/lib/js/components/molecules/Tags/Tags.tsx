import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Tag from "../../atoms/Tag";

interface Props {
  tags?: string[];
}

const Tags = (props: Props) => {
  if (!props.tags || props.tags.length === 0) {
    return <></>;
  }
  return (
    <Stack className="tags" direction="row" flexWrap="wrap" alignItems="center">
      {props.tags.map((tag, index) => (
        <Box key={index} sx={{ padding: "6px" }}>
          <Tag>{tag}</Tag>
        </Box>
      ))}
    </Stack>
  );
};

export default Tags;
