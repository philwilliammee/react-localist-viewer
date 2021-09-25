import {
  EventElement,
  HideType,
  StandardProps,
} from "../../../../../types/types";
import React, { useContext } from "react";
import EventContext from "../../../../context/EventsContext";
import { Moment } from "moment";
import {
  getClassItem,
  getEventStartMonthDayString,
  getEventStartEndTimes,
  getEventKey,
} from "../../../../helpers/displayEvent";
import ModernStandardInner from "../../ModernStandard/ModernStandardInner";
import { Stack } from "@mui/material";

interface Props extends StandardProps {
  events: EventElement[];
  dateContext: Moment;
  hideaddcal: HideType;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  // hidetime: HideType;
  setShowDialog: Function;
  setEventSelected: Function;
  listClassArray: string[];
  wrapperClassArray: string[];
}

function AgendaList(props: Props) {
  const { setShowDialog, setEventSelected } = useContext(EventContext);

  if (props.events.length === 0) {
    return <p>There are no events in this range.</p>;
  }
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="rlv-modern-standard" title="Events List">
      <div className={wrapperClassList}>
        <Stack className={listClassList} spacing={2}>
          {events.length > 0 ? (
            events.map((event) => {
              const key = getEventKey(event.event);
              const classList = getClassItem(event.event);

              const handleOnClick = () => {
                setEventSelected(event.event);
                setShowDialog(true);
              };
              return (
                <ModernStandardInner
                  key={key}
                  description={event.event.description}
                  hidedescription={props.hidedescription}
                  hideimages={props.hideimages}
                  truncatedescription={props.truncatedescription}
                  tags={event.event.tags}
                  dateFormat={getEventStartMonthDayString(event.event)}
                  timeFormat={getEventStartEndTimes(event.event)}
                  listClass={classList}
                  event={event.event}
                  hideaddcal={props.hideaddcal}
                  handleClick={handleOnClick}
                />
              );
            })
          ) : (
            <p>There are no upcoming events.</p>
          )}
        </Stack>
      </div>
    </section>
  );
}

export default AgendaList;
