import React from 'react';

export default (dateRange, changeDate, display, type) => (Component) => {
  const View = props => <Component {...props} />;

  View.changeDate = changeDate;
  View.dateRange = dateRange;
  View.display = display;
  View.type = type;
  View.displayName = `View(${type})`;

  return View;
};
