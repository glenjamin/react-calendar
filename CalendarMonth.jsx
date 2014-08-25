/** @jsx React.DOM */
var React = require('react');

var _ = require('lodash');
var moment = require('moment');

var CalendarDay = require('./CalendarDay.jsx');

var u = require('./utils');

var weekdays = [
  'Mon', 'Tue', 'Wed',
 'Thu', 'Fri', 'Sat', 'Sun'
];

var CalendarMonth = React.createClass({
  propTypes: {
    date: u.propTypeMoment,
    today: u.propTypeMoment
  },
  render: function() {

    var today = this.props.today;
    var date = this.props.date;
    var start = date.clone().startOf('month');
    var monthDays = date.daysInMonth();
    var daySkip = start.isoWeekday() - 1;

    var days = [].concat(
      _.times(daySkip, function(n) {
        return <td key={-1 * n} />;
      }),
      _.times(monthDays, function(n) {
        return <CalendarDay
          key={n + 1}
          date={start.clone().add(n, 'days')}
          today={today}
        />;
      })
    );

    var weeks = u.chunk(7, days);

    return (
      <tbody>
        <tr>
          {weekdays.map(function(d) {
            return <th key={d}>{d}</th>;
          }.bind(this))}
        </tr>
        {weeks.map(function(week, i) {
          return <tr key={i}>{week}</tr>;
        })}
      </tbody>
    );
  }
});

module.exports = CalendarMonth;
