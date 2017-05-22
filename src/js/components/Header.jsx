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
    config: PropTypes.object.isRequired,
  };

  display = () => {
    const { View, date, config } = this.props;
    return View.display(date, config);
  }

  render() {
    const { onDateChange } = this.props;

    return (
      <div className="header">
        <div className="header--date-selector-wrapper">
          <DateSelector onDateChange={onDateChange} />
        </div>
        <h1 className="header--date">
          {this.display()}
        </h1>
        <div className="header--view-selector-wrapper" >
          View Selector
        </div>
      </div>
    );
  }
}
