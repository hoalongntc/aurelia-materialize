System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, $, MaterializeSideNav;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      MaterializeSideNav = (function () {
        function MaterializeSideNav(element) {
          _classCallCheck(this, _MaterializeSideNav);

          this.element = element;
        }

        _createClass(MaterializeSideNav, [{
          key: 'attached',
          value: function attached() {
            $(this.element).sideNav();
          }
        }]);

        var _MaterializeSideNav = MaterializeSideNav;
        MaterializeSideNav = inject(Element)(MaterializeSideNav) || MaterializeSideNav;
        MaterializeSideNav = customAttribute('md-size-nav')(MaterializeSideNav) || MaterializeSideNav;
        return MaterializeSideNav;
      })();

      _export('MaterializeSideNav', MaterializeSideNav);
    }
  };
});