define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var MaterializeSideNav = (function () {
    function MaterializeSideNav(element) {
      _classCallCheck(this, _MaterializeSideNav);

      this.element = element;
    }

    _createClass(MaterializeSideNav, [{
      key: 'attached',
      value: function attached() {
        (0, _$['default'])(this.element).sideNav();
      }
    }]);

    var _MaterializeSideNav = MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.inject)(Element)(MaterializeSideNav) || MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.customAttribute)('md-size-nav')(MaterializeSideNav) || MaterializeSideNav;
    return MaterializeSideNav;
  })();

  exports.MaterializeSideNav = MaterializeSideNav;
});