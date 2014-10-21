/** @jsx React.DOM */
var React = require('react');

var cx = require('react/lib/cx');

var u = require('./utils');

var CalendarDay = React.createClass({
  propTypes: {
    date: u.propTypeMoment,
    today: u.propTypeMoment
  },
  render: function() {
    var today = this.props.today;
    var date = this.props.date;
    return (
      <td className={cx({
        'today': today.isSame(date, 'day')
      })}>
        {date.format('D')}
      </td>
    );
  }
});

module.exports = CalendarDay;
