import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginate = (props) => {
    const {hidepagination, handlePageClick, total} = props

    if (total < 2 || hidepagination === 'true'){
        return '';
    }

    return (
        <nav className="pager">
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
                subContainerClassName="pager__item"
                activeClassName="is-active"
            />
        </nav>

    );
}

Paginate.propTypes = {
    hidepagination: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
