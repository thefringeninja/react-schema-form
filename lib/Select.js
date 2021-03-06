'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.onSelected = function (event) {
            var currentValue = event.target.value;
            _this.setState({ currentValue: currentValue });
            _this.props.onChangeValidate(event);
        };

        _this.state = {
            currentValue: (0, _utils.getValueFromModel)(_this.props.model, _this.props.form.key) || ''
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            var form = this.props.form;

            var menuItems = form.titleMap.map(function (item, idx) {
                return _react2.default.createElement(
                    _MenuItem2.default,
                    { key: idx, value: item.value },
                    item.name
                );
            });
            return _react2.default.createElement(
                _FormControl2.default,
                { fullWidth: true },
                _react2.default.createElement(
                    _InputLabel2.default,
                    null,
                    form.title
                ),
                _react2.default.createElement(
                    _Select2.default,
                    {
                        value: this.state.currentValue || '',
                        placeholder: form.title,
                        disabled: form.readonly,
                        onChange: this.onSelected },
                    menuItems
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props) {
            if (props.model && props.form.key) {
                return {
                    currentValue: (0, _utils.getValueFromModel)(props.model, props.form.key)
                };
            }
        }
    }]);

    return Select;
}(_react.Component);

exports.default = (0, _ComposedComponent2.default)(Select);