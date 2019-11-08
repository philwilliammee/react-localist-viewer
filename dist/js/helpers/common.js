import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
//@todo needs clean up Consider using undersore js.
// addClass
// removeClass
// contains
// toggle

/**
 * Removes an element from an array.
 * @param {Array} a The haystack
 * @param {String} e The needle to remove
 * @return {Array} a new array
 */
export var removeElement = function removeElement(a, e) {
  return a.filter(function (v) {
    return v !== e;
  });
};
export var addElement = function addElement(a, e) {
  return a.push(e);
};
/**
 * Adds a unique element to an array.
 * @param {Array} a
 * @param {string} e
 */

export var addUniqueElement = function addUniqueElement(a, e) {
  if (!a.includes(e)) {
    a.push(e);
  }
};
export var replaceElement = function replaceElement(a, e, n) {
  if (a.includes(e)) {
    a[a.indexOf(e)] = n;
  } else {
    a.push(n);
  }
};
/**
 * Returns a array of unique values.
 * @param {Array} a
 * @return {Array} Set of unique values
 */

export var unique = function unique(a) {
  return _toConsumableArray(new Set(a));
};
/**
 * Test to see if element should be displayed
 * @param {mixed} v string or integer.
 * @return {boolean}
 */

export var isHidden = function isHidden(v) {
  return v === 'true' || v === 1;
};