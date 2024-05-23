(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-edit-js"],{

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.edit.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.edit.js ***!
  \***************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (doc, React, ReactDOM, ibexa) {
  var SELECTOR_FIELD = '.ibexa-field-edit--ezlandingpage';
  var SELECTOR_INPUT = '.ibexa-data-source__input';
  var pageBuilderContainer = doc.querySelector('#ibexa-pb-app-root');
  var pageBuilderRoot = ReactDOM.createRoot(pageBuilderContainer);
  // eslint-disable-next-line
  var infobar = new ibexa.modules.InfoBar();
  var initValidators = function initValidators(pageBuilder) {
    var validator = new ibexa.EzLandingPageValidator({
      classInvalid: 'is-invalid',
      pageBuilder: pageBuilder,
      fieldSelector: SELECTOR_FIELD,
      eventsMap: [{
        selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
      }]
    });
    var layoutValidator = new ibexa.EzLandingPageLayoutValidator({
      classInvalid: 'is-invalid',
      pageBuilder: pageBuilder,
      fieldSelector: SELECTOR_FIELD,
      eventsMap: [{
        selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
        eventName: 'change',
        callback: 'validateLayout',
        errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
      }]
    });
    validator.init();
    layoutValidator.init();
    ibexa.fieldTypeValidators = ibexa.fieldTypeValidators ? [].concat(_toConsumableArray(ibexa.fieldTypeValidators), [validator, layoutValidator]) : [validator, layoutValidator];
  };
  pageBuilderRoot.render(React.createElement(ibexa.modules.PageBuilder, _objectSpread(_objectSpread({}, ibexa.pageBuilder.config), {}, {
    ref: initValidators
  })));
})(window.document, window.React, window.ReactDOM, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.edit.js"));
/******/ }
]);