import React from "react";
import Standard from "../molecules/Standard";
import ModernStandard from "../molecules/ModernStandard";
import ModernCompact from "../molecules/ModernCompact";
import InlineCompact from "../molecules/InlineCompact/InlineCompact";
import Calendar from "../molecules/Calendar";
import { AppProps, EventElement } from "../../../types/types";
import Loading from "../atoms/Loading";
import Cards from "../molecules/Cards";

export interface ViewProps extends AppProps {
  events: EventElement[];
  loading: boolean;
}

const LocalistView = (props: ViewProps) => {
  let component;
  const { format, page, loading } = props;

  if (loading) {
    return <Loading />;
  }

  switch (format) {
    case "standard":
      component = <Standard key={page} {...props} />;
      break;

    case "modern_standard":
      component = <ModernStandard key={page} {...props} />;
      break;

    case "modern_compact":
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
