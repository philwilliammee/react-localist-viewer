import moment from "moment";

export function weekOfMonth(m) {
  // const firstWeek = m.week() - moment(m).startOf("month").week() + 1;
  // console.log(moment(firstWeek).format("YYYY-MM-DD hh:mm"));
  // return moment(firstWeek);
  var first = m.startOf("month").week();
  const firstDay = moment().week(first).day(0);
  console.log(firstDay.format("YYYY-MM-DD hh:mm"));
  return firstDay;
}

export function lastWeekOfMonth(m) {
  // const lastWeek = m.week() - moment(m).endOf("month").week() + 1;
  // console.log(moment(lastWeek).format("YYYY-MM-DD hh:mm"));
  // return moment(lastWeek);
  var last = m.endOf("month").week();
  const lastDay = moment().week(last).day(6);
  console.log(lastDay.format("YYYY-MM-DD hh:mm"));
  return lastDay;
}
