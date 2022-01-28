import React from "react";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import { Pagination } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

interface Props {
  hidepagination: HideType;
  total: number;
  handlePageClick: (event: React.ChangeEvent<unknown>, page: number) => void;
}

// Sadly override cwd theme.
const useStyles = makeStyles(() =>
  createStyles({
    ul: {
      "& li": {
        margin: 0,
      },
    },
  })
);

const Paginate = (props: Props) => {
  const { hidepagination, handlePageClick, total } = props;
  const classes = useStyles();
  if (total < 2 || isHidden(hidepagination)) {
    return <></>;
  }

  return (
    <Pagination
      classes={classes}
      className="rlv-paginate"
      count={total}
      onChange={(e, p) => {
        handlePageClick(e, p);
      }}
      variant="outlined"
      shape="rounded"
      sx={{
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
        paddingTop: 2,
      }}
    />
  );
};

export default Paginate;
