import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import "./Paginate.scss";

interface Props {
  hidepagination: HideType;
  total: number;
  handlePageClick: (data: { selected: number }) => void;
}

const Paginate = (props: Props) => {
  const { hidepagination, handlePageClick, total } = props;

  if (total < 2 || isHidden(hidepagination)) {
    return <></>;
  }

  return (
    <nav className="rlc-paginate">
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={total}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pager_items"
        activeClassName="is-active"
      />
    </nav>
  );
};

Paginate.propTypes = {
  hidepagination: PropTypes.oneOf(["true", "false", 1, 0, ""]).isRequired,
  total: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
