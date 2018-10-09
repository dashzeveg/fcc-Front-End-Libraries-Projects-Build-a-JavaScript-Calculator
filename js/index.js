var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement(Calculator, null),
          React.createElement(Author, null)));


    } }]);return App;}(React.Component);var


Calculator = function (_React$Component2) {_inherits(Calculator, _React$Component2);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this2.state = { display: '0', expression: [], equal: '' };
    _this2.input = _this2.input.bind(_this2);return _this2;
  }_createClass(Calculator, [{ key: 'input', value: function input(

    e) {
      var dis = '0';
      var exp = [].concat(_toConsumableArray(this.state.expression));
      var eq = this.state.equal;

      if (e.target.getAttribute('value') == 'AC') {
        dis = '0';
        exp = [];
        eq = '';
      } else if (e.target.getAttribute('value') == '=') {

        if (exp.length !== 0 && exp[exp.length - 2] !== '=') {

          if (exp[exp.length - 1] == '/' || exp[exp.length - 1] == '*' ||
          exp[exp.length - 1] == '-' || exp[exp.length - 1] == '+')
          {
            exp.pop();
          }

          var exp1 = [].concat(_toConsumableArray(exp));

          for (var i = 0; i < exp1.length; i++) {
            if (exp1[i] == '/' || exp1[i] == '*') {
              exp1[i - 1] = eval(exp1[i - 1] + exp1[i] + exp1[i + 1]);
              exp1.splice(i, 2);
              i--;
            }
          }

          for (var _i = 0; _i < exp1.length; _i++) {
            if (exp1[_i] == '-' || exp1[_i] == '+') {
              exp1[_i - 1] = eval(exp1[_i - 1] + exp1[_i] + exp1[_i + 1]);
              exp1.splice(_i, 2);
              _i--;
            }
          }

          exp.push('=');
          exp.push(exp1[0]);

          dis = exp1[0];
          eq = '=';
        } else {
          dis = this.state.display;
        }

      } else {

        if (eq == '=') {
          exp = [this.state.expression[this.state.expression.length - 1]];
          eq = '';
        }

        if (exp.length == 0) {

          if (e.target.getAttribute('value') == '/' || e.target.getAttribute('value') == '*' ||
          e.target.getAttribute('value') == '-' || e.target.getAttribute('value') == '+') {

          } else {
            exp.push(e.target.getAttribute('value'));
            dis = exp[exp.length - 1];
          }

        } else {
          if (exp[exp.length - 1] == '/' || exp[exp.length - 1] == '*' ||
          exp[exp.length - 1] == '-' || exp[exp.length - 1] == '+') {

            if (e.target.getAttribute('value') == '/' || e.target.getAttribute('value') == '*' ||
            e.target.getAttribute('value') == '-' || e.target.getAttribute('value') == '+') {
              exp[exp.length - 1] = e.target.getAttribute('value');
            } else {

              if (e.target.getAttribute('value') == '.') {
                exp.push('0.');
              } else {
                exp.push(e.target.getAttribute('value'));
              }

            }

          } else {

            if (e.target.getAttribute('value') == '/' || e.target.getAttribute('value') == '*' ||
            e.target.getAttribute('value') == '-' || e.target.getAttribute('value') == '+') {
              exp.push(e.target.getAttribute('value'));

            } else {

              if (e.target.getAttribute('value') == '.') {

                if (exp[exp.length - 1].indexOf('.') == -1) {
                  exp[exp.length - 1] = exp[exp.length - 1] + e.target.getAttribute('value');
                }

              } else {

                if (exp[exp.length - 1] == '0') {
                  exp[exp.length - 1] = e.target.getAttribute('value');
                } else {
                  exp[exp.length - 1] = exp[exp.length - 1] + e.target.getAttribute('value');
                }

              }

            }

          }
          dis = exp[exp.length - 1];
        }
      }

      this.setState({ display: dis, expression: [].concat(_toConsumableArray(exp)), equal: eq });

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'container' },
          React.createElement('div', { className: 'expression' }, this.state.expression.join('')),
          React.createElement('div', { className: 'display', id: 'display' }, this.state.display),
          React.createElement('div', { className: 'box clear', id: 'clear', onClick: this.input, value: 'AC' }, 'AC'),
          React.createElement('div', { className: 'box divide', id: 'divide', onClick: this.input, value: '/' }, '/'),
          React.createElement('div', { className: 'box multiply', id: 'multiply', onClick: this.input, value: '*' }, 'x'),
          React.createElement('div', { className: 'box seven', id: 'seven', onClick: this.input, value: '7' }, '7'),
          React.createElement('div', { className: 'box eight', id: 'eight', onClick: this.input, value: '8' }, '8'),
          React.createElement('div', { className: 'box nine', id: 'nine', onClick: this.input, value: '9' }, '9'),
          React.createElement('div', { className: 'box subtract', id: 'subtract', onClick: this.input, value: '-' }, '-'),
          React.createElement('div', { className: 'box four', id: 'four', onClick: this.input, value: '4' }, '4'),
          React.createElement('div', { className: 'box five', id: 'five', onClick: this.input, value: '5' }, '5'),
          React.createElement('div', { className: 'box six', id: 'six', onClick: this.input, value: '6' }, '6'),
          React.createElement('div', { className: 'box add', id: 'add', onClick: this.input, value: '+' }, '+'),
          React.createElement('div', { className: 'box one', id: 'one', onClick: this.input, value: '1' }, '1'),
          React.createElement('div', { className: 'box two', id: 'two', onClick: this.input, value: '2' }, '2'),
          React.createElement('div', { className: 'box three', id: 'three', onClick: this.input, value: '3' }, '3'),
          React.createElement('div', { className: 'box equals', id: 'equals', onClick: this.input, value: '=' }, '='),
          React.createElement('div', { className: 'box zero', id: 'zero', onClick: this.input, value: '0' }, '0'),
          React.createElement('div', { className: 'box decimal', id: 'decimal', onClick: this.input, value: '.' }, '.')));


    } }]);return Calculator;}(React.Component);var


Author = function (_React$Component3) {_inherits(Author, _React$Component3);function Author() {_classCallCheck(this, Author);return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));}_createClass(Author, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'author' }, 'Designed and Coded By', React.createElement('br', null), React.createElement('a', { target: '_blank', href: 'https://codepen.io/dashzeveg' }, 'Dashzeveg')));

    } }]);return Author;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));