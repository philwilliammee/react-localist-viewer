import React from "react";

interface ToolBarProps {
  children: React.ReactChild;
  prevMonth: Function;
  nextMonth: Function;
  today: Function;
  setView: (view: "month" | "day" | "list") => void;
  view: "month" | "day" | "list";
}

const Toolbar = (props: ToolBarProps) => {
  const { prevMonth, nextMonth, children, setView, view, today } = props;
  return (
    <div className="toolbar">
      <div className="links">
        <button
          onClick={(e) => {
            prevMonth();
          }}
        >
          <i className="prev fa fa-fw fa-chevron-left"></i> Back
        </button>

        <button
          onClick={(e) => {
            today();
          }}
        >
          {" "}
          Today
        </button>
        <button
          onClick={(e) => {
            nextMonth();
          }}
        >
          Next <i className="prev fa fa-fw fa-chevron-right"></i>
        </button>
      </div>
      <div className="header-title">
        <h3>{children}</h3>
      </div>
      <div className="view">
        <button
          className={view === "month" ? "active" : ""}
          onClick={() => {
            setView("month");
          }}
        >
          Month
        </button>
        <button
          className={view === "day" ? "active" : ""}
          onClick={() => {
            setView("day");
          }}
        >
          Day
        </button>
        <button
          className={view === "list" ? "active" : ""}
          onClick={() => {
            setView("list");
          }}
        >
          List
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
