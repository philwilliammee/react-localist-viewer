import React from 'react';
import ReactPaginate from 'react-paginate';

var Paginate = function Paginate(props) {
  var hidepagination = props.hidepagination,
      handlePageClick = props.handlePageClick,
      total = props.total;

  if (total < 2 || hidepagination === 'true') {
    return '';
  }

  return React.createElement("nav", {
    className: "pager"
  }, React.createElement(ReactPaginate, {
    previousLabel: "previous",
    nextLabel: "next",
    breakLabel: "...",
    breakClassName: "break-me",
    pageCount: total,
    marginPagesDisplayed: 1,
    pageRangeDisplayed: 3,
    onPageChange: handlePageClick,
    containerClassName: "pager_items",
    subContainerClassName: "pager__item",
    activeClassName: "is-active"
  }));
};

export default Paginate;