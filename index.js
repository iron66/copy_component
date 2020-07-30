"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var copyAmount = _ref.copyAmount,
      children = _ref.children;
  return Array.apply(null, Array(+copyAmount)).map(function (_, idx) {
    return children(idx);
  });
};

exports["default"] = _default;
