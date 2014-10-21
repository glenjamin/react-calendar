/** @jsx React.DOM */
var React = require('react');

var u = require('./utils');

var CalendarMonth = require('./CalendarMonth.jsx');
var AddEventForm = require('./AddEventForm.jsx');

var Calendar = React.createClass({
  propTypes: {
    today: u.propTypeMoment,
    date: u.propTypeMoment,
    events: React.PropTypes.object,
    recurring: React.PropTypes.func,
    changeDate: React.PropTypes.func,
    addEvent: React.PropTypes.func
  },
  getInitialState: function() {
    return { adding: false };
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
  selectDay: function(date) {
    this.setState({ adding: date });
  },
  hideForm: function() {
    this.setState({ adding: false });
  },
  render: function() {
    return (
<div className="container">
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
      events={this.props.events}
      recurring={this.props.recurring}
      selectDay={this.selectDay}
    />

  </table>

  {this.state.adding &&
    <AddEventForm
      date={this.state.adding}
      addEvent={this.props.addEvent}
      close={this.hideForm}
    />
  }

</div>
    );
  }
});

module.exports = Calendar;
