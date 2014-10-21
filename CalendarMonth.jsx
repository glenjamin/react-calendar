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
    today: u.propTypeMoment,
    events: React.PropTypes.object,
    recurring: React.PropTypes.func,
    selectDay: React.PropTypes.func
  },
  render: function() {

    var today = this.props.today;
    var date = this.props.date;
    var events = this.props.events;
    var recurring = this.props.recurring;
    var selectDay = this.props.selectDay;

    var start = date.clone().startOf('month');
    var monthDays = date.daysInMonth();
    var daySkip = start.isoWeekday() - 1;

    var days = [].concat(
      _.times(daySkip, function(n) {
        return <td key={-1 * n} />;
      }),
      _.times(monthDays, function(n) {
        var date = start.clone().add(n, 'days');
        var dayEvents = [].concat(
          events[date.format('YYYYMMDD')] || [],
          recurring(date)
        );
        return <CalendarDay
          key={n + 1}
          date={date}
          today={today}
          events={dayEvents}
          selectDay={selectDay}
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
