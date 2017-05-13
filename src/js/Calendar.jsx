import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Header from './components/Header';
import * as VIEWS from './views';

export default class Calendar extends Component {

  static propTypes = {
    defaultView: PropTypes.oneOf(Object.keys(VIEWS)),
    defaultDate: PropTypes.instanceOf(moment),
    formats: PropTypes.object,
  };

  static defaultProps = {
    defaultView: 'WEEK',
    defaultDate: moment(),
  };

  state = {
    View: VIEWS[this.props.defaultView],
    date: this.props.defaultDate,
  };

  handleDateChange = (type) => {
    const { View, date } = this.state;
    this.setState({ date: View.changeDate(type, date) });
  }

  render() {
    const { View, date } = this.state;
    return (
      <div className="react-better-calendar">
        <Header onDateChange={this.handleDateChange} view={View} date={date} />
        <View date={date} />
      </div>
    );
  }
}
