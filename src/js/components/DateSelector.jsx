import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const NEXT = 'Next';
export const PREV = 'Previous';
export const TODAY = 'Today';

export default class DateSelector extends Component {

  static propTypes = {
    onDateChange: PropTypes.func.isRequired,
  };

  onDateChange = type => () => this.props.onDateChange(type);

  render() {
    return (
      <ul classNaame="date-selector">
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
