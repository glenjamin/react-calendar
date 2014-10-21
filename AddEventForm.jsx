/** @jsx React.DOM */
var React = require('react');

var u = require('./utils');

var AddEventForm = React.createClass({
  propTypes: {
    date: u.propTypeMoment,
    addEvent: React.PropTypes.func,
    close: React.PropTypes.func,
  },
  getInitialState: function() {
    return { error: false };
  },
  formSubmit: function(e) {
    var event = {
      title: this.refs.title.getDOMNode().value,
      color: this.refs.color.getDOMNode().value
    };
    if (!event.title) {
      this.setState({
        error: "Title is required"
      });
    } else {
      this.props.addEvent(this.props.date, event);
      this.props.close();
    }
    return false;
  },
  formChanged: function(e) {
    this.setState({ error: false });
  },
  cancel: function(e) {
    this.props.close();
    return false;
  },
  render: function() {
    return (
<div className="add-event-overlay">
  <form className="add-event-form"
    onSubmit={this.formSubmit}
    onChange={this.formChanged}
  >
    <p className="form-title">
      {this.props.date.format('ddd D MMM YYYY')}
    </p>
    <label>
      Title
      <input type="text" ref="title" />
    </label>
    <label>
      Colour
      <select ref="color">
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Brown</option>
        <option>Purple</option>
      </select>
    </label>
    <div className="form-controls">
      <button type="submit">Add Event</button>
      <button onClick={this.cancel}>Cancel</button>
      {this.state.error &&
        <p className="error">{this.state.error}</p>}
    </div>
  </form>
</div>
    );
  }
});

module.exports = AddEventForm;
