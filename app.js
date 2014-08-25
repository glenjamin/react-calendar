var React = require('react');
window.React = React;

var moment = require('moment');

var Calendar = require('./Calendar.jsx');

React.renderComponent(
  Calendar({ today: moment() }),
  document.body
);
