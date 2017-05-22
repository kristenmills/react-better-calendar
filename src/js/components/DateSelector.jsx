import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NEXT, PREV, TODAY } from '../constants/date-selector';

export default class DateSelector extends Component {

  static propTypes = {
    onDateChange: PropTypes.func.isRequired,
  };

  onDateChange = type => () => this.props.onDateChange(type);

  render() {
    return (
      <ul className="date-selector">
        <li className="date-selector--item">
          <button className="date-selctor--button" onClick={this.onDateChange(PREV)} >
            <i className="icon-prev" />
          </button>
        </li>
        <li className="date-selector--item">
          <button className="date-selctor--button" onClick={this.onDateChange(TODAY)} >
            Today
          </button>
        </li>
        <li className="date-selector--item">
          <button className="date-selctor--button" onClick={this.onDateChange(NEXT)} >
            <i className="icon-next" />
          </button>
        </li>
      </ul>
    );
  }
}
