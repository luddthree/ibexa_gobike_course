(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-client-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/PersonalizationClient.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/PersonalizationClient.js ***!
  \**********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PersonalizationClient = /*#__PURE__*/function () {
  "use strict";

  function PersonalizationClient() {
    _classCallCheck(this, PersonalizationClient);
  }
  return _createClass(PersonalizationClient, [{
    key: "ping",
    value:
    /**
     * Sends notification ping.
     *
     * @method ping
     * @param {String} url
     */
    function ping(url) {
      var request = new Request(url);
      this.sendRequest(request);
    }

    /**
     * Sends request.
     *
     * @method sendRequest
     * @param {Request} request
     */
  }, {
    key: "sendRequest",
    value: function sendRequest(request) {
      if (false === request instanceof Request) {
        throw new TypeError("Parameter request must be instance of Request. ".concat(_typeof(request), " given"));
      }
      return fetch(request).then(function (response) {
        if (!response.ok) {
          throw new Error("Response was not properly. Status: ".concat(response.status, ", StatusText: ").concat(response.statusText));
        }
        return response;
      })["catch"](function (error) {
        throw new Error("Response error: ".concat(error.message));
      });
    }
  }]);
}();
window.PersonalizationClient = PersonalizationClient;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/PersonalizationClient.js"));
/******/ }
]);