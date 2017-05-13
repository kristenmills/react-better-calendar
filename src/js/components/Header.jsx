import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DateSelector from './DateSelector';
import * as VIEWS from '../views';

export default class Header extends Component {
  static propTypes = {
    onDateChange: PropTypes.func.isRequired,
    View: PropTypes.oneOf(Object.values(VIEWS)).isRequired,
    date: PropTypes.instanceOf(moment).isRequired,
    formats: PropTypes.shape({
      header: PropTypes.object,
    }).isRequired,
  };

  display = () => {
    const { View, date, format, config } = this.props;

    const dateRange = View.dateRange(date, config);
  }

  render() {
    const { onDateChange } = this.props;

    return (
      <div className="header">
        <DateSelector onDateChange={onDateChange} />
        <h1 className="header--date">
          {this.display()}
        </h1>
        <div className="view-selector" />
      </div>
    );
  }
}
