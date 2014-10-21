var React = require('react');
window.React = React;

var moment = require('moment');

var Calendar = require('./Calendar.jsx');

var fmt = 'YYYYMM';
var date = moment();

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
            changeDate: changeDate
        }),
        document.body
    );
}

window.onhashchange = readDate;
readDate();
