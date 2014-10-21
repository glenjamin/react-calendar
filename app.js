var React = require('react');
window.React = React;

var moment = require('moment');

var CalendarMonth = require('./CalendarMonth.jsx');

React.renderComponent(
  CalendarMonth({ today: moment() }),
  document.body
);
