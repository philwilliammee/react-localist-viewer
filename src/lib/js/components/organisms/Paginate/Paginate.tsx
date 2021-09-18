import React from "react";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import { Pagination } from "@mui/material";

interface Props {
  hidepagination: HideType;
  total: number;
  handlePageClick: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Paginate = (props: Props) => {
  const { hidepagination, handlePageClick, total } = props;

  if (total < 2 || isHidden(hidepagination)) {
    return <></>;
  }

  return (
    <Pagination
      className="rlc-paginate"
      count={total}
      onChange={(e, p) => {
        handlePageClick(e, p);
      }}
      variant="outlined"
      shape="rounded"
      sx={{
        width: "100%",
        clear: "both", // @todo This should be able to go away after we fix floats
        borderTop: "1px solid",
        borderColor: "divider",
        paddingTop: 2,
      }}
    />
  );
};

export default Paginate;
