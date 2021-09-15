import React from "react";
import Standard from "../molecules/Standard";
import Compact from "../molecules/Compact";
import ModernStandard from "../molecules/ModernStandard";
import ModernCompact from "../molecules/ModernCompact";
import InlineCompact from "../molecules/InlineCompact/InlineCompact";
import Calendar from "../molecules/Calendar";
import { EventElement, FilterBy, Format, HideType } from "../../../types/types";
import Loading from "../atoms/Loading";
import Cards from "../molecules/Cards";

export interface Props {
  events: EventElement[];
  format: Format;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  hideaddcal: HideType;
  filterby: FilterBy;
  wrapperclass: string;
  listclass: string;
  itemclass: string;
  page: number;
  loading: boolean;
  wrapperClassArray: string[];
  listClassArray: string[];
  api: string;
  depts?: string;
}

const LocalistView = (props: Props) => {
  let component;
  const { format, page, loading } = props;

  if (loading) {
    return <Loading />;
  }

  switch (format) {
    case "standard":
      component = <Standard key={page} {...props} />;
      break;

    case "compact":
      component = <Compact key={page} {...props} />;
      break;

    case "modern_standard":
      props.wrapperClassArray.push("singles");
      component = <ModernStandard key={page} {...props} />;
      break;

    case "modern_compact":
      props.wrapperClassArray.push("compact");
      component = <ModernCompact key={page} {...props} />;
      break;

    case "inline_compact":
      component = <InlineCompact key={page} {...props} />;
      break;

    case "calendar":
      component = <Calendar key={page} {...props} />;
      break;

    case "cards":
      component = <Cards key={page} {...props} />;
      break;

    default:
      component = <>Invalid Component Selected</>;
      break;
  }
  return component;
};

export default LocalistView;
