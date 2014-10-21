var moment = require('moment');

/**
 * PropType validator for moment date objects
 */
exports.propTypeMoment = propTypeMoment;
function propTypeMoment(props, propName) {
  if (!moment.isMoment(props[propName])) {
    return new Error(
      'Expected ' + propName +
      ' to be moment'
    );
  }
}

/**
 * Split an array into an array of
 * equally sized arrays
 *
 * The last item may be less than `size` long
 */
exports.chunk = chunk;
function chunk(size, arr) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
