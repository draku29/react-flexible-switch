require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var Label = (function (_React$Component) {
  _inherits(Label, _React$Component);

  function Label() {
    _classCallCheck(this, Label);

    _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Label, [{
    key: 'styles',
    value: function styles() {
      var offset = this.props.active ? { left: '20% ' } : { right: '20%' };

      return (0, _utils.merge)({
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
      }, offset);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        { style: this.styles(), className: 'react-flexible-switch-label' },
        this.props.active ? this.props.labels.on : this.props.labels.off
      );
    }
  }]);

  return Label;
})(_react2['default'].Component);

exports['default'] = Label;

Label.propTypes = {
  active: _react2['default'].PropTypes.bool,
  labels: _react2['default'].PropTypes.shape({
    on: _react2['default'].PropTypes.string,
    off: _react2['default'].PropTypes.string
  })
};
module.exports = exports['default'];

},{"./utils":2,"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.merge = merge;
exports.disableScroll = disableScroll;
exports.reEnableScroll = reEnableScroll;
var events = {
  touch: {
    start: 'touchstart',
    stop: 'touchend',
    move: 'touchmove'
  },
  mouse: {
    start: 'mousedown',
    stop: 'mouseup'
  }
};

exports.events = events;

function merge() {
  for (var _len = arguments.length, hashes = Array(_len), _key = 0; _key < _len; _key++) {
    hashes[_key] = arguments[_key];
  }

  return _extends.apply(undefined, [{}].concat(hashes));
}

function disableScroll() {
  document.addEventListener(events.touch.move, preventScroll, false);
}

function reEnableScroll() {
  document.removeEventListener(events.touch.move, preventScroll, false);
}

function preventScroll(e) {
  e.preventDefault();
}

},{}],"react-flexible-switch":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _utils = require('./utils');

var Switch = (function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);

    this.onActivateButton = this.onActivateButton.bind(this);
    this.onSlideEnd = this.onSlideEnd.bind(this);
    this.onSlideStart = this.onSlideStart.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.isTouchDevice = window['ontouchstart'] !== undefined;

    this.state = { sliding: false, value: this.props.value };
  }

  _createClass(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListener();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value === undefined) {
        return;
      }

      if (nextProps.value !== this.state.value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.value != prevState.value) {
        this.props.onChange(this.state.value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }, {
    key: 'addListener',
    value: function addListener() {
      if (this.isTouchDevice) {
        document.addEventListener(_utils.events.touch.start, this.onSlideStart, false);
        document.addEventListener(_utils.events.touch.stop, this.onSlideEnd, false);
      } else {
        document.addEventListener(_utils.events.mouse.start, this.onSlideStart, false);
        document.addEventListener(_utils.events.mouse.stop, this.onSlideEnd, false);
      }
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      if (this.isTouchDevice) {
        document.removeEventListener(_utils.events.touch.start, this.onSlideStart, false);
        document.removeEventListener(_utils.events.touch.stop, this.onSlideEnd, false);
      } else {
        document.removeEventListener(_utils.events.mouse.start, this.onSlideStart, false);
        document.removeEventListener(_utils.events.mouse.stop, this.onSlideEnd, false);
      }
    }
  }, {
    key: 'onActivateButton',
    value: function onActivateButton() {
      this.setState({ value: !this.state.value });
    }
  }, {
    key: 'onSlideEnd',
    value: function onSlideEnd() {
      if (this.props.locked) {
        return;
      }

      if (this.state.sliding) {
        this.setState({ sliding: false, value: !this.state.value });
        (0, _utils.reEnableScroll)();
      }
    }
  }, {
    key: 'onSlideStart',
    value: function onSlideStart(e) {
      if (this.props.locked) {
        return;
      }

      if (e.target == this.refs.circle || e.target == this.refs['switch']) {
        this.setState({ sliding: true });
        (0, _utils.disableScroll)();
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave(e) {
      this.onSlideEnd(e);
    }
  }, {
    key: 'classes',
    value: function classes() {
      return (0, _classnames2['default'])('react-flexible-switch', { 'react-flexible-switch--sliding': this.state.sliding }, { 'react-flexible-switch--active': this.state.value }, { 'react-flexible-switch--inactive': !this.state.value });
    }
  }, {
    key: 'switchStyles',
    value: function switchStyles() {
      var switchStyles = this.switchStylesProps();
      return (0, _utils.merge)({ borderRadius: switchStyles.width / 2 }, switchStyles);
    }
  }, {
    key: 'translationStyle',
    value: function translationStyle() {
      var circleStyles = this.circleStylesProps();
      var switchStyles = this.switchStyles();

      var offset = switchStyles.width - circleStyles.diameter;
      var translation = this.state.value ? offset : 0;

      if (this.state.sliding && this.state.value) {
        translation -= circleStyles.diameter / 4 + switchStyles.padding / 4;
      }

      return {
        transform: 'translateX(' + translation + 'px)'
      };
    }
  }, {
    key: 'backgroundStyle',
    value: function backgroundStyle() {
      var circleStyles = this.circleStylesProps();
      var backgroundColor = this.state.value ? circleStyles.onColor : circleStyles.offColor;
      return { backgroundColor: backgroundColor };
    }
  }, {
    key: 'circleStylesProps',
    value: function circleStylesProps() {
      return (0, _utils.merge)(defaultCircleStyles, this.props.circleStyles);
    }
  }, {
    key: 'switchStylesProps',
    value: function switchStylesProps() {
      return (0, _utils.merge)(defaultSwitchStyles, this.props.switchStyles);
    }
  }, {
    key: 'circleDimensionsStyle',
    value: function circleDimensionsStyle() {
      var switchStyles = this.switchStyles();
      var circleStyles = this.circleStylesProps();
      var width = this.state.sliding ? circleStyles.diameter + circleStyles.diameter / 4 : circleStyles.diameter;
      return { width: width, height: circleStyles.diameter };
    }
  }, {
    key: 'circleStyles',
    value: function circleStyles() {
      return (0, _utils.merge)(this.circleDimensionsStyle(), this.backgroundStyle(), this.translationStyle(), this.circleStylesProps());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        { style: this.switchStyles(),
          className: this.classes(),
          ref: 'switch',
          onMouseLeave: this.onMouseLeave },
        _react2['default'].createElement(_Label2['default'], { active: this.state.value, labels: this.props.labels, ref: 'label' }),
        _react2['default'].createElement('span', { style: this.circleStyles(), className: 'circle', ref: 'circle' }),
        _react2['default'].createElement('button', {
          disabled: this.props.locked,
          onClick: this.onActivateButton,
          style: hiddenButtonStyles,
          type: 'button',
          ref: 'button'
        })
      );
    }
  }]);

  return Switch;
})(_react2['default'].Component);

var defaultSwitchStyles = {
  width: 80,
  padding: 4,
  border: '1px solid #CFCFCF',
  display: 'flex',
  position: 'relative',
  backgroundColor: 'white',
  boxSizing: 'content-box'
};

var defaultCircleStyles = {
  diameter: 35,
  borderRadius: 35,
  display: 'block',
  transition: 'transform 200ms, width 200ms, background-color 200ms',
  onColor: '#70D600',
  offColor: '#CFCFCF'
};

var hiddenButtonStyles = {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  color: 'transparent',
  height: '100%',
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  width: '100%'
};

Switch.propTypes = {
  value: _react2['default'].PropTypes.bool,

  circleStyles: _react2['default'].PropTypes.shape({
    onColor: _react2['default'].PropTypes.string,
    offColor: _react2['default'].PropTypes.string,
    diameter: _react2['default'].PropTypes.number
  }),

  labels: _react2['default'].PropTypes.shape({
    on: _react2['default'].PropTypes.string,
    off: _react2['default'].PropTypes.string
  }),

  locked: _react2['default'].PropTypes.bool,

  onChange: _react2['default'].PropTypes.func,

  switchStyles: _react2['default'].PropTypes.shape({
    width: _react2['default'].PropTypes.number
  })
};

Switch.defaultProps = {
  onChange: function onChange() {},
  circleStyles: defaultCircleStyles,
  switchStyles: defaultSwitchStyles,
  labels: { on: '', off: '' },
  locked: false
};

exports['default'] = Switch;
module.exports = exports['default'];

},{"./Label":1,"./utils":2,"classnames":undefined,"react":undefined}]},{},[]);
