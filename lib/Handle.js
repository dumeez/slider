"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ToolTipComponent = function (_React$Component) {
  _inherits(ToolTipComponent, _React$Component);

  function ToolTipComponent(props) {
    _classCallCheck(this, ToolTipComponent);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  ToolTipComponent.prototype.render = function render() {
    if (this.props.touched) {
      return _react2["default"].createElement(
        "output",
        { className: "my-tooltip", style: { opacity: 0.9 } },
        this.props.value,
        " ",
        this.props.unit
      );
    }
    return _react2["default"].createElement(
      "output",
      { className: "my-tooltip", style: { opacity: 0 } },
      this.props.value,
      " ",
      this.props.unit
    );
  };

  return ToolTipComponent;
}(_react2["default"].Component);

var Handle = function (_React$Component2) {
  _inherits(Handle, _React$Component2);

  function Handle(props) {
    _classCallCheck(this, Handle);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = {
      isTooltipVisible: false
    };
    return _this2;
  }

  Handle.prototype.showTooltip = function showTooltip() {
    this.setState({
      isTooltipVisible: true
    });
  };

  Handle.prototype.hideTooltip = function hideTooltip() {
    this.setState({
      isTooltipVisible: false
    });
  };

  Handle.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var tipTransitionName = _props.tipTransitionName;
    var vertical = _props.vertical;
    var offset = _props.offset;
    var value = _props.value;
    var unit = _props.unit;
    var toolTipShow = _props.toolTipShow;


    var style = vertical ? { bottom: offset + "%" } : { left: offset + "%" };
    return _react2["default"].createElement(
      "div",
      { className: className, style: style,
        onMouseUp: this.showTooltip.bind(this),
        onMouseEnter: this.showTooltip.bind(this),
        onMouseLeave: this.hideTooltip.bind(this)
      },
      _react2["default"].createElement(ToolTipComponent, {
        value: this.props.value,
        unit: this.props.unit,
        touched: this.props.toolTipShow })
    );
  };

  return Handle;
}(_react2["default"].Component);

exports["default"] = Handle;


Handle.propTypes = {
  className: _react2["default"].PropTypes.string,
  vertical: _react2["default"].PropTypes.bool,
  offset: _react2["default"].PropTypes.number,
  tipTransitionName: _react2["default"].PropTypes.string,
  value: _react2["default"].PropTypes.number,
  unit: _react2["default"].PropTypes.string,
  toolTipShow: _react2["default"].PropTypes.bool
};
module.exports = exports['default'];