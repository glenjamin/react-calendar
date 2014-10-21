/*eslint-env browser*/
var React = require('react');
window.React = React;

var moment = require('moment');

var Calendar = require('./Calendar.jsx');

var fmt = 'YYYYMM';
var date = moment();
var events = {
  20141022: [
    { title: 'Dry run @ work', color: 'green' }
  ],
  20141028: [
    { title: 'Hey! Stac', color: 'blue' },
    { title: 'PySheff', color: 'purple' }
  ],
  20141029: [
    { title: 'NodeUpNorth', color: 'red' }
  ],
  20141105: [
    { title: 'Bonfire Night', color: 'orange' }
  ],
  20141121: [
    { title: 'Poker Game', color: 'darkgreen' }
  ],
  20141225: [
    { title: 'Christmas', color: 'brown' }
  ]
};
var recurringEvents = [
  function defshef(date) {
    if (date.isoWeekday() != 2) return false;
    var d = date.clone();
    var m = d.month();
    if (
      d.subtract(7, 'days').month() == m &&
      d.subtract(7, 'days').month() != m
    ) {
      return {
        title: "(def shef)", color: "darkgrey"
      };
    }
    return false;
  }
];
function recurring(date) {
  return recurringEvents.map(function(check) {
    return check(date);
  }).filter(function(x) { return x; });
}

function addEvent(date, event) {
    var key = date.format('YYYYMMDD');
    events[key] = events[key] || [];
    events[key].push(event);
    redraw();
}

function readDate() {
    var ymd = window.location.hash.substring(1);
    var m = moment(ymd, fmt);
    if (m.isValid()) {
        date = m;
    }
    redraw();
}

function changeDate(newDate) {
    var m = moment(newDate);
    window.location.hash = '#' + m.format(fmt);
    readDate();
}

function redraw() {
    React.renderComponent(
        Calendar({
            date: date,
            today: moment(),
            events: events,
            recurring: recurring,
            changeDate: changeDate,
            addEvent: addEvent
        }),
        document.body
    );
}

window.onhashchange = readDate;
readDate();
