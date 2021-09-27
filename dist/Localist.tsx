import React, { useState, useContext } from "react";
import Heading from "./js/components/organisms/Heading";
import Paginate from "./js/components/organisms/Paginate/Paginate";
import LocalistView from "./js/components/organisms/LocalistView";
import EventFilters from "./js/components/organisms/EventFilterBy";
import EventsContext from "./js/context/EventsContext";
import { AppProps } from "./types/types";
import { Box } from "@mui/system";
import useApi from "./js/hooks/useApi";
import { initDateRange } from "./js/components/molecules/Calendar/dateUtils";

const dateRange = initDateRange();

/**
 * Localist Component
 */
const Localist = (props: AppProps) => {
  const { events, filteredEvents } = useContext(EventsContext);
  const [currentPage, setCurrentPage] = useState(props.page || 1);
  const { isLoading: loading, llPage } = useApi(props, currentPage, dateRange);

  function handlePageClick(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  return (
    <Box className="rlv-localist">
      <Heading
        heading={props.heading || ""}
        readmore={props.readmore || ""}
        url={props.url || ""}
      />
      <EventFilters
        key={currentPage}
        events={events}
        filterby={props.filterby}
      />
      <LocalistView
        // removed key for filters.
        {...props}
        events={filteredEvents}
        page={currentPage || 1}
        loading={loading}
        hidedescription={props.hidedescription || ""}
        hideimages={props.hideimages || ""}
        hideaddcal={props.hideaddcal || ""}
        wrapperclass={props.wrapperclass || ""}
        listclass={props.listclass || ""}
        itemclass={props.itemclass || ""}
      />
      <Paginate
        hidepagination={props.hidepagination || ""}
        total={llPage.total}
        handlePageClick={handlePageClick}
      />
    </Box>
  );
};

export default Localist;
