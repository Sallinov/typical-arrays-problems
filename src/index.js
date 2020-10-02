exports.min = function min(array) {
  return find_element('<', array);
}
exports.max = function max(array) {
  return find_element('>', array);
}
exports.avg = function avg(array) {
  let result = 0;
  if (array && array.length > 0) {
    array.forEach((elem) => result += elem);
    result /= array.length;
  }
  return result;
}
function find_element(sign, array) {
  let result = 0;
  if (array && array.length > 0) {
    array.forEach((elem) => result = eval(elem + sign + result) ? elem : result);
  }
  return result;
}