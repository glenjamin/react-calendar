/** @jsx React.DOM */
var React = require('react');

var u = require('./utils');

var CalendarMonth = require('./CalendarMonth.jsx');

var Calendar = React.createClass({
  propTypes: {
    today: u.propTypeMoment,
    date: u.propTypeMoment,
    changeDate: React.PropTypes.func
  },
  jumpToToday: function(e) {
    this.props.changeDate(this.props.today);
  },
  prevMonth: function(e) {
    this.props.changeDate(
      this.props.date.clone().subtract(1, 'month')
    );
    return false;
  },
  nextMonth: function(e) {
    this.props.changeDate(
      this.props.date.clone().add(1, 'month')
    );
    return false;
  },
  render: function() {
    return (
<table className="table">

  <caption>
    <button className="pull-left"
      onClick={this.prevMonth}>Prev</button>
    <button className="pull-right"
      onClick={this.nextMonth}>Next</button>

    <span className="clickable"
      onClick={this.jumpToToday}
    >
      {this.props.date.format("MMMM YYYY")}
    </span>
  </caption>

  <CalendarMonth
    today={this.props.today}
    date={this.props.date}
  />

</table>
    );
  }
});

module.exports = Calendar;
