"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-dashboard-view-js"],{

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.view.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.view.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/dashboard.js */ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/services/dashboard.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

(function (global, doc, ibexa, Translator, _dashboardSelect$opti) {
  var dashboardBanner = doc.querySelector('.ibexa-db-banner');
  var bannerCloseBtn = doc.querySelector('.ibexa-db-banner__close-btn');
  var customizeDashboardDropdownBtn = doc.querySelector('.ibexa-db-header__customize-dashboard');
  var customizeDashboardInitialBtn = doc.querySelector('#customize-dashboard_customize');
  var popupBtns = _toConsumableArray(doc.querySelectorAll('.ibexa-multilevel-popup-menu__item-content'));
  var editDashboardDropdownBtn = doc.querySelector('.ibexa-db-header__edit-dashboard');
  var setActiveDashboardDropdownBtn = doc.querySelector('.ibexa-db-header__set-active-dashboard');
  var editDashboardInitialBtn = doc.querySelector('#content_edit_create');
  var changeActiveDashboardForm = doc.querySelector('form[name="dashboard_change_active"]');
  var dashboardSelect = doc.querySelector('#dashboard_change_active_location');
  var actionBtn = doc.querySelector('.ibexa-db-header__more');
  var customDashboardName = (_dashboardSelect$opti = dashboardSelect.options[0]) === null || _dashboardSelect$opti === void 0 ? void 0 : _dashboardSelect$opti.text;
  var handleCustomizeDashboard = function handleCustomizeDashboard() {
    customizeDashboardInitialBtn === null || customizeDashboardInitialBtn === void 0 || customizeDashboardInitialBtn.click();
  };
  var handleEditDashboard = function handleEditDashboard() {
    editDashboardInitialBtn === null || editDashboardInitialBtn === void 0 || editDashboardInitialBtn.click();
  };
  var handleSetActiveDashboard = function handleSetActiveDashboard() {
    changeActiveDashboardForm === null || changeActiveDashboardForm === void 0 || changeActiveDashboardForm.submit();
  };
  var initTooltipIfOverflow = function initTooltipIfOverflow(popup) {
    var label = popup.querySelector('.ibexa-btn__label');
    var popupContainer = popup.closest('.ibexa-popup-menu');
    if (label.scrollWidth < popupContainer.offsetWidth) {
      return;
    }
    popup.title = label.textContent;
    ibexa.helpers.tooltips.parse(popup);
  };
  var handleActionBtnClick = function handleActionBtnClick() {
    popupBtns.forEach(function (popupBtn) {
      return initTooltipIfOverflow(popupBtn);
    });
    actionBtn.removeEventListener('click', handleActionBtnClick);
  };
  var handleCloseBanner = function handleCloseBanner() {
    dashboardBanner.classList.add('ibexa-db-banner--hidden');
    (0,_services_dashboard_js__WEBPACK_IMPORTED_MODULE_0__.setDashboardHidden)();
  };
  if (editDashboardInitialBtn && !editDashboardDropdownBtn) {
    var switchToCustomLabel = Translator.trans( /*@Desc("Switch to %name%")*/'dashboard.switch_to_custom', {
      name: customDashboardName
    }, 'ibexa_dashboard');
    var label = setActiveDashboardDropdownBtn.querySelector('.ibexa-btn__label');
    label.textContent = switchToCustomLabel;
  }
  bannerCloseBtn === null || bannerCloseBtn === void 0 || bannerCloseBtn.addEventListener('click', handleCloseBanner, false);
  customizeDashboardDropdownBtn === null || customizeDashboardDropdownBtn === void 0 || customizeDashboardDropdownBtn.addEventListener('click', handleCustomizeDashboard, false);
  editDashboardDropdownBtn === null || editDashboardDropdownBtn === void 0 || editDashboardDropdownBtn.addEventListener('click', handleEditDashboard, false);
  setActiveDashboardDropdownBtn === null || setActiveDashboardDropdownBtn === void 0 || setActiveDashboardDropdownBtn.addEventListener('click', handleSetActiveDashboard, false);
  actionBtn === null || actionBtn === void 0 || actionBtn.addEventListener('click', handleActionBtnClick);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/services/dashboard.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/services/dashboard.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDashboardHidden: () => (/* binding */ setDashboardHidden)
/* harmony export */ });
var setDashboardHidden = function setDashboardHidden() {
  var url = window.Routing.generate('ibexa.dashboard.hide_banner');
  var request = new Request(url, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request)["catch"](function (error) {
    console.error(error);
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.view.js"));
/******/ }
]);