import moment from 'moment';
import createView from './View';
import { week } from '../constants/views';

function changeDate(date) {
  return moment(date).add('1', 'week');
}

function dateRange(date, config = {}) {
  return {
    start: moment(date).day(config.startOfWeek),
    end: moment(date).day(config.endOfWeek),
  };
}

createView(dateRange, changeDate, week)('div');
