import React from 'react';
import moment from 'moment';

import createView from './View';
import { week } from '../constants/views';
import { NEXT, TODAY, PREV } from '../constants/date-selector';

function changeDate(type, date) {
  switch (type) {
    case NEXT:
      return moment(date).add('1', 'week');
    case TODAY:
      return moment();
    case PREV:
      return moment(date).subtract('1', 'week');
    default:
      return date;
  }
}

function dateRange(date, config) {
  const start = moment(date).day(config.startOfWeek);
  return {
    start,
    end: moment(start).add(6, 'days'),
  };
}

function display(date, config) {
  const range = dateRange(date, config);

  return config.formats.week.header(range, moment);
}

export default createView(dateRange, changeDate, display, week)(() => <div />);
