/** @jsx React.DOM */
var React = require('react');

var cx = require('react/lib/cx');

var u = require('./utils');

var CalendarDay = React.createClass({
  propTypes: {
    date: u.propTypeMoment,
    today: u.propTypeMoment,
    events: React.PropTypes.array,
    selectDay: React.PropTypes.func
  },
  onDayClick: function() {
    this.props.selectDay(this.props.date);
  },
  render: function() {
    var today = this.props.today;
    var date = this.props.date;
    var events = this.props.events || [];
    return (
      <td onClick={this.onDayClick}
        className={cx({
          'today': today.isSame(date, 'day')
        })}
      >
        {date.format('D')}
        {events.map(function(event, i) {
          var style = {color: event.color};
          return (
            <div className="event"
              key={i} style={style}
            >
              {event.title}
            </div>
          );
        })}
      </td>
    );
  }
});

module.exports = CalendarDay;
