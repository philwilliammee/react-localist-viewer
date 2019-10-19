import axios from 'axios';
import moment from 'moment';

/**
 * Sets params and returns axios Promise.
 * options: https://developer.localist.com/doc/api#event-list
 */
export default (
    depts,
    entries,
    group,
    keyword,
    days,
    apikey,
    calendarurl,
    page,
) => {
    const params = {
        apikey,
        distinct: true,
        pp: entries,
        page,
        direction: days.startsWith("-") ? 'desc' : 'asc',
    };
    // Supports multiple departments with CSV string.
    if (depts && depts !== '0') {
        params.type = [];
        depts.split(',').forEach(item => {
            params.type.push(item.trim());
        });
    }
    if (group && group !== '0') {
        params.group_id = group;
    }
    // @tod add support for multiple keywords
    if (keyword && keyword !== '') {
        params.keyword = keyword;
    }

    if (days.startsWith("-")){
        params.start = moment()
            .add(parseInt(days), 'days')
            .format('YYYY-MM-DD')
        params.end = moment().format('YYYY-MM-DD')
    } else {
        params.days = days;
    }
    return axios.get(calendarurl, { params });
};
