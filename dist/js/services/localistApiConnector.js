import axios from 'axios';
import moment from 'moment';
/**
 * Sets params and returns axios Promise.
 * options: https://developer.localist.com/doc/api#event-list
 */

export default (function (depts, entries, group, keyword, days, apikey, calendarurl, page) {
  var params = {
    apikey: apikey,
    distinct: true,
    pp: entries,
    page: page,
    direction: days.startsWith("-") ? 'desc' : 'asc'
  }; // Supports multiple departments with CSV string.

  if (depts && depts !== '0') {
    params.type = [];
    depts.split(',').forEach(function (item) {
      params.type.push(item.trim());
    });
  }

  if (group && group !== '0') {
    params.group_id = group;
  } // @tod add support for multiple keywords


  if (keyword && keyword !== '') {
    params.keyword = keyword;
  }

  if (days.startsWith("-")) {
    params.start = moment().add(parseInt(days), 'days').format('YYYY-MM-DD');
    params.end = moment().format('YYYY-MM-DD');
  } else {
    params.days = days;
  }

  console.log(params);
  return axios.get(calendarurl, {
    params: params
  });
});