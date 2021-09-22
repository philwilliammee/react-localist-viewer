import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import { Grid, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

interface ToolBarProps {
  children: React.ReactChild;
  prevMonth: Function;
  nextMonth: Function;
  today: Function;
  setView: (view: "month" | "day" | "list") => void;
  view: "month" | "day" | "list";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // background: none;
      whiteSpace: "nowrap",

      "&.active": {
        // @todo get this in theme
        textDecoration: "none",
        backgroundColor: theme.palette.primary.dark,
        boxShadow: "0px 2px 4px -1px",
      },

      "&:first-child:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },

      "&:last-child:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },

      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0,
      },
    },
  })
);

const Toolbar = (props: ToolBarProps) => {
  const { prevMonth, nextMonth, children, setView, view, today } = props;
  const classes = useStyles();
  return (
    <Grid container className="rlv-tool-bar" minHeight="50px">
      <Grid container alignItems="center" flex={1}>
        <Button
          classes={classes}
          variant="contained"
          onClick={(e) => {
            prevMonth();
          }}
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>

        <Button
          classes={classes}
          variant="contained"
          onClick={(e) => {
            today();
          }}
        >
          {" "}
          Today
        </Button>
        <Button
          classes={classes}
          variant="contained"
          onClick={(e) => {
            nextMonth();
          }}
          endIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </Grid>
      <Grid container justifyContent="center" flex={1} alignItems="center">
        {children}
      </Grid>
      <Grid container justifyContent="flex-end" alignItems="center" flex={1}>
        <Button
          classes={classes}
          variant="contained"
          className={view === "month" ? "active" : ""}
          onClick={() => {
            setView("month");
          }}
        >
          Month
        </Button>
        <Button
          classes={classes}
          variant="contained"
          className={view === "day" ? "active" : ""}
          onClick={() => {
            setView("day");
          }}
        >
          Day
        </Button>
        <Button
          classes={classes}
          variant="contained"
          className={view === "list" ? "active" : ""}
          onClick={() => {
            setView("list");
          }}
        >
          List
        </Button>
      </Grid>
    </Grid>
  );
};

export default Toolbar;
