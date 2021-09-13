import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import "./ToolBar.scss";
import { Typography } from "@mui/material";

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
    <div className="rlv-tool-bar">
      <div className="links">
        <Button
          variant="contained"
          onClick={(e) => {
            prevMonth();
          }}
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={(e) => {
            today();
          }}
        >
          {" "}
          Today
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            nextMonth();
          }}
          endIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </div>
      <div className="header-title">
        <Typography variant="h2">{children}</Typography>
      </div>
      <div className="view">
        <Button
          variant="contained"
          className={view === "month" ? "active" : ""}
          onClick={() => {
            setView("month");
          }}
        >
          Month
        </Button>
        <Button
          variant="contained"
          className={view === "day" ? "active" : ""}
          onClick={() => {
            setView("day");
          }}
        >
          Day
        </Button>
        <Button
          variant="contained"
          className={view === "list" ? "active" : ""}
          onClick={() => {
            setView("list");
          }}
        >
          List
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
