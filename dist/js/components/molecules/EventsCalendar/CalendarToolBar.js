"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Toolbar = _interopRequireDefault(require("react-big-calendar/lib/Toolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CustomToolbar extends _Toolbar.default {
  viewNamesGroup(messages) {
    let viewNames = this.props.views;
    const view = this.props.view; // CD Add our List

    messages.list = "List";

    if (viewNames.length > 1) {
      return viewNames.map(name => /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        key: name,
        className: (0, _clsx.default)({
          "rbc-active": view === name
        }),
        onClick: this.view.bind(null, name)
      }, messages[name]));
    }
  }

}

var _default = CustomToolbar;
exports.default = _default;