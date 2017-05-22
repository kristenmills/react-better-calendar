import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Header from './components/Header';
import * as VIEWS from './views';
import { week } from './constants/views';
import mergeProps from './config';

export default class Calendar extends Component {

  static propTypes = {
    defaultView: PropTypes.oneOf(Object.keys(VIEWS)),
    defaultDate: PropTypes.instanceOf(moment),
  };

  static defaultProps = {
    defaultView: week,
    defaultDate: moment(),
    formats: {},
  };

  state = {
    View: VIEWS[this.props.defaultView],
    date: this.props.defaultDate,
    config: mergeProps(this.props),
  };

  handleDateChange = (type) => {
    const { View, date } = this.state;
    this.setState({ date: View.changeDate(type, date) });
  }

  render() {
    const { View, date, config } = this.state;
    return (
      <div className="react-better-calendar">
        <Header onDateChange={this.handleDateChange} View={View} date={date} config={config} />
      </div>
    );
  }
}
