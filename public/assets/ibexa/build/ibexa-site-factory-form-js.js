(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-site-factory-form-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/admin.card.toggle.group.js":
/*!***************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/admin.card.toggle.group.js ***!
  \***************************************************************************/
/***/ (() => {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ibexa-card__body-display-toggler');
  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ibexa-card--toggle-group').classList.toggle('ibexa-card--collapsed');
  };
  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };
  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ibexa-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./public/bundles/ibexaadminui/js/scripts/edit.header.js":
/*!***************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/edit.header.js ***!
  \***************************************************************/
/***/ (() => {

(function (global, doc) {
  var SCROLL_POSITION_TO_FIT = 50;
  var HEADER_RIGHT_MARGIN = 50;
  var MIN_HEIGHT_DIFF_FOR_FITTING_HEADER = 150;
  var headerNode = doc.querySelector('.ibexa-edit-header');
  var contentNode = doc.querySelector('.ibexa-edit-content');
  if (!headerNode || !contentNode) {
    return;
  }
  var _headerNode$getBoundi = headerNode.getBoundingClientRect(),
    expandedHeaderHeight = _headerNode$getBoundi.height;
  var scrolledContent = doc.querySelector('.ibexa-edit-content > :first-child');
  var fitEllipsizedTitle = function fitEllipsizedTitle() {
    var headerBottomRowNode = headerNode.querySelector('.ibexa-edit-header__row--bottom');
    var titleNode = headerBottomRowNode.querySelector('.ibexa-edit-header__name--ellipsized');
    var firstMenuEntryNode = headerNode.querySelector('.ibexa-context-menu .ibexa-context-menu__item');
    var _titleNode$getBoundin = titleNode.getBoundingClientRect(),
      titleNodeLeft = _titleNode$getBoundin.left,
      titleNodeWidth = _titleNode$getBoundin.width;
    var _firstMenuEntryNode$g = firstMenuEntryNode.getBoundingClientRect(),
      firstMenuEntryNodeLeft = _firstMenuEntryNode$g.left;
    var bottomRowNodeWidthNew = firstMenuEntryNodeLeft - titleNodeLeft;
    var titleNodeWidthNew = bottomRowNodeWidthNew - HEADER_RIGHT_MARGIN;
    headerBottomRowNode.style.width = "".concat(bottomRowNodeWidthNew, "px");
    if (titleNodeWidth > titleNodeWidthNew) {
      titleNode.style.width = "".concat(titleNodeWidthNew, "px");
    }
  };
  var fitHeader = function fitHeader(event) {
    var _scrolledContent$getB = scrolledContent.getBoundingClientRect(),
      formHeight = _scrolledContent$getB.height;
    var contentHeightWithExpandedHeader = formHeight + expandedHeaderHeight;
    var heightDiffBetweenWindowAndContent = contentHeightWithExpandedHeader - global.innerHeight;
    if (heightDiffBetweenWindowAndContent < MIN_HEIGHT_DIFF_FOR_FITTING_HEADER) {
      return;
    }
    var scrollTop = event.currentTarget.scrollTop;
    var shouldHeaderBeSlim = scrollTop > SCROLL_POSITION_TO_FIT;
    headerNode.classList.toggle('ibexa-edit-header--slim', shouldHeaderBeSlim);
    if (shouldHeaderBeSlim) {
      fitEllipsizedTitle();
    }
  };
  contentNode.addEventListener('scroll', fitHeader, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.design.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.design.js ***!
  \*********************************************************************************/
/***/ (() => {

(function (global, doc) {
  var designItems = doc.querySelectorAll('.ibexa-sf-design-layouts__item');
  var siteSkeletonWrapper = doc.querySelector('.ibexa-site-factory-form-site-skeleton');
  var siteSkeleton = doc.querySelector('.ibexa-site-factory-form-site-skeleton__widget');
  var setSelectedTheme = function setSelectedTheme(event) {
    var siteSkeletonVisibleMethod = event.currentTarget.dataset.siteSkeleton ? 'remove' : 'add';
    var siteSkeletonValueMethod = event.currentTarget.dataset.siteSkeleton ? 'setAttribute' : 'removeAttribute';
    designItems.forEach(function (design) {
      return design.classList.remove('ibexa-sf-design-layouts__item--selected');
    });
    event.currentTarget.classList.add('ibexa-sf-design-layouts__item--selected');
    event.currentTarget.closest('.ibexa-sf-design-layouts').querySelector('select').value = event.currentTarget.dataset.id;
    if (siteSkeletonWrapper) {
      siteSkeletonWrapper.classList[siteSkeletonVisibleMethod]('ibexa-site-factory-form-site-skeleton--is-hidden');
    }
    if (siteSkeleton) {
      siteSkeleton.querySelector("input.form-check-input")[siteSkeletonValueMethod]('checked', 'checked');
    }
  };
  designItems.forEach(function (design) {
    return design.addEventListener('click', setSelectedTheme);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.languages.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.languages.js ***!
  \************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, ibexa) {
  var languagesDraggable = [];
  var initLanguagesWidget = function initLanguagesWidget(publicAccessDomainNode) {
    var languageWidget = publicAccessDomainNode.querySelector('.ibexa-sf-edit-widget--public-access-languages');
    var languagePopupMenuElement = languageWidget.querySelector('.ibexa-popup-menu');
    var languagePopupMenuToggleBtn = languageWidget.querySelector('.ibexa-sf-form-languages__language-popup-trigger');
    var dragabbleWidgetContainer = publicAccessDomainNode.querySelector('.ibexa-sf-form-languages');
    new ibexa.core.PopupMenu({
      popupMenuElement: languagePopupMenuElement,
      triggerElement: languagePopupMenuToggleBtn,
      onItemClick: addNewLanguage
    });
    initDraggable(dragabbleWidgetContainer);
  };
  var initDraggable = function initDraggable(widgetContainer) {
    var itemsContainer = widgetContainer.querySelector('.ibexa-sf-form-languages__items');
    var draggable = new CollectionDraggable({
      widgetContainer: widgetContainer,
      itemsContainer: itemsContainer,
      selectorItem: '.ibexa-sf-form-languages-item',
      selectorPlaceholder: '.ibexa-sf-form-languages-item-placeholder'
    });
    languagesDraggable.push(draggable);
    draggable.init();
  };
  var recreateInput = function recreateInput(widget) {
    var input = widget.querySelector('.ibexa-sf-form-languages__input');
    var items = widget.querySelectorAll('.ibexa-sf-form-languages-item');
    var inputValue = _toConsumableArray(items).map(function (item) {
      return item.dataset.languageCode;
    }).join(', ');
    input.value = inputValue;
  };
  var deleteLanguage = function deleteLanguage(event) {
    var languageWidget = event.currentTarget.closest('.ibexa-sf-form-languages');
    var languageItem = event.currentTarget.closest('.ibexa-sf-form-languages-item');
    languageItem.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:start-removing'));
    languageItem.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:end-removing', {
      detail: {
        callback: function callback() {
          recreateInput(languageWidget);
          updateBtnsLanguagePopup(languageWidget);
        }
      }
    }));
  };
  var addNewLanguage = function addNewLanguage(event) {
    var languageWidget = event.currentTarget.closest('.ibexa-sf-form-languages');
    var languageCode = event.currentTarget.dataset.languageCode;
    var languageName = event.currentTarget.textContent.trim();
    var languagesListContainer = languageWidget.querySelector('.ibexa-sf-form-languages__items');
    var languageItemTemplate = languagesListContainer.dataset.template;
    languageItemTemplate = languageItemTemplate.replace(/__language_name__/g, languageName).replace(/__language_code__/g, languageCode);
    var range = doc.createRange();
    var languageItemHtml = range.createContextualFragment(languageItemTemplate);
    var deleteBtn = languageItemHtml.querySelector('.ibexa-sf-form-languages__delete-language-btn');
    deleteBtn.addEventListener('click', deleteLanguage, false);
    languagesListContainer.append(languageItemHtml);
    languagesDraggable.forEach(function (draggable) {
      var items = languagesListContainer.querySelectorAll('.ibexa-sf-form-languages-item');
      var addedItem = items[items.length - 1];
      draggable.reinit();
      draggable.triggerHighlight(addedItem);
    });
    recreateInput(languageWidget);
    updateBtnsLanguagePopup(languageWidget);
  };
  var updateBtnsLanguagePopup = function updateBtnsLanguagePopup(languageWidget) {
    var languageItems = languageWidget.querySelector('.ibexa-sf-form-languages__items');
    var langaugesPopupMenuBtns = languageWidget.querySelectorAll('.ibexa-popup-menu .ibexa-popup-menu__item-content');
    var triggerPopupBtn = languageWidget.querySelector('.ibexa-sf-form-languages__language-popup-trigger');
    langaugesPopupMenuBtns.forEach(function (btn) {
      var languageCode = btn.dataset.languageCode;
      var existsLanguageInList = !!languageItems.querySelector("[data-language-code=\"".concat(languageCode, "\"]"));
      var btnContainer = btn.closest('.ibexa-popup-menu__item');
      btn.toggleAttribute('disabled', existsLanguageInList);
      btnContainer.classList.toggle('ibexa-popup-menu__item--hidden', existsLanguageInList);
    });
    var areAllLanguagesAdded = _toConsumableArray(langaugesPopupMenuBtns).every(function (btn) {
      var btnContainer = btn.parentNode;
      return btnContainer.classList.contains('ibexa-popup-menu__item--hidden');
    });
    triggerPopupBtn.toggleAttribute('disabled', areAllLanguagesAdded);
  };
  var CollectionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    function CollectionDraggable(config) {
      var _this;
      _classCallCheck(this, CollectionDraggable);
      _this = _callSuper(this, CollectionDraggable, [config]);
      _this.widgetContainer = config.widgetContainer;
      return _this;
    }
    _inherits(CollectionDraggable, _ibexa$core$Draggable);
    return _createClass(CollectionDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "onDrop", this).call(this);
        recreateInput(this.widgetContainer);
      }
    }]);
  }(ibexa.core.Draggable);
  doc.body.addEventListener('ibexa.sf.added-public-access', function (event) {
    initLanguagesWidget(event.detail.widget);
  });
  doc.querySelectorAll('.ibexa-sf-form-languages__delete-language-btn').forEach(function (deleteBtn) {
    deleteBtn.addEventListener('click', deleteLanguage, false);
  });
  doc.querySelectorAll('.ibexa-sf-public-access__list-item').forEach(initLanguagesWidget);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.parent.location.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.parent.location.js ***!
  \******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var selectParentLocationWidget = null;
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var designItems = doc.querySelectorAll('.ibexa-sf-design-layouts__item');
  var parentLocationIdInput = doc.querySelector('.ibexa-sf-parent-location input');
  var parentLocationWidgetContainer = doc.querySelector('.ibexa-sf-parent-location');
  var openUdwBtn = doc.querySelector('.ibexa-sf-parent-location__btn-select-path');
  var udwContainer = doc.querySelector('#react-udw');
  var udwRoot = null;
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Choose Location")*/'select_location.label', {}, 'ibexa_site_factory_ui');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: selectPath,
      onCancel: cancelSelect,
      title: title
    }, config)));
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var cancelSelect = function cancelSelect() {
    return closeUDW();
  };
  var selectPath = function selectPath(items) {
    var _items = _slicedToArray(items, 1),
      _items$ = _items[0],
      locationId = _items$.id,
      pathString = _items$.pathString;
    findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
      var item = {
        id: locationId,
        name: buildBreadcrumbsString(data)
      };
      selectParentLocationWidget.addItems([item], true);
    });
    closeUDW();
  };
  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "udw-locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans( /*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
      idList: idList.join(',')
    }, 'ibexa_universal_discovery_widget');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (id) {
      return id;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };
  var buildBreadcrumbsString = function buildBreadcrumbsString(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };
  var changeParentLocationIdByDesign = function changeParentLocationIdByDesign(event) {
    if (!parentLocationWidgetContainer) {
      return;
    }
    var parentLocationId = event.currentTarget.dataset.parentLocationId;
    if (!parentLocationId) {
      return;
    }
    var parentLocationBreadcrumbs = doc.querySelector("option[data-parent-location=\"".concat(parentLocationId, "\"]")).dataset.parentLocationBreadcrumbs;
    var itemsToAdd = [];
    if (parentLocationId && parentLocationBreadcrumbs) {
      itemsToAdd.push({
        id: parentLocationId,
        name: parentLocationBreadcrumbs
      });
    }
    if (parentLocationIdInput) {
      selectParentLocationWidget.addItems(itemsToAdd, true);
    }
  };
  designItems.forEach(function (design) {
    return design.addEventListener('click', changeParentLocationIdByDesign, false);
  });
  if (openUdwBtn) {
    openUdwBtn.addEventListener('click', openUDW, false);
  }
  if (parentLocationWidgetContainer) {
    selectParentLocationWidget = new ibexa.core.TagViewSelect({
      fieldContainer: doc.querySelector('.ibexa-sf-parent-location')
    });
  }
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.public.access.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.public.access.js ***!
  \****************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_CHECKBOX = '.ibexa-sf-sections__public-access-checkbox';
  var createBtn = doc.querySelector('.ibexa-btn--create-public-access');
  var deleteBtn = doc.querySelector('.ibexa-btn--delete-public-access');
  var toggleDeleteBtnDisabledState = function toggleDeleteBtnDisabledState() {
    var checkboxes = doc.querySelectorAll("".concat(SELECTOR_CHECKBOX, ":checked"));
    deleteBtn.toggleAttribute('disabled', !checkboxes.length);
  };
  var createPublicAccess = function createPublicAccess() {
    var list = doc.querySelector('.ibexa-sf-public-access__list');
    var counter = list.dataset.widgetCounter;
    var newWidget = list.dataset.prototype;
    newWidget = newWidget.replace(/__name__/g, counter);
    counter++;
    var htmlWidget = doc.createRange().createContextualFragment(newWidget);
    htmlWidget.querySelector(SELECTOR_CHECKBOX).addEventListener('change', toggleDeleteBtnDisabledState, false);
    doc.body.dispatchEvent(new CustomEvent('ibexa.sf.added-public-access', {
      detail: {
        widget: htmlWidget
      }
    }));
    list.dataset.widgetCounter = counter;
    list.prepend(htmlWidget);
  };
  var deletePublicAccess = function deletePublicAccess() {
    var checkboxes = doc.querySelectorAll("".concat(SELECTOR_CHECKBOX, ":checked"));
    checkboxes.forEach(function (checkbox) {
      return checkbox.closest('.ibexa-sf-public-access__list-item').remove();
    });
    deleteBtn.setAttribute('disabled', true);
  };
  var updateDomainName = function updateDomainName(event) {
    var domainName = event.currentTarget.value;
    var labelNode = event.currentTarget.closest('.ibexa-sf-public-access__list-item').querySelector('.ibexa-collapse__header-label');
    labelNode.innerHTML = domainName;
  };
  createBtn.addEventListener('click', createPublicAccess, false);
  deleteBtn.addEventListener('click', deletePublicAccess, false);
  doc.querySelectorAll(SELECTOR_CHECKBOX).forEach(function (checkbox) {
    checkbox.addEventListener('change', toggleDeleteBtnDisabledState, false);
  });
  doc.querySelectorAll('.ibexa-input--domain-name').forEach(function (domainNameInput) {
    domainNameInput.addEventListener('keyup', updateDomainName, false);
  });
  doc.body.addEventListener('ibexa.sf.added-public-access', function (event) {
    var domainNameInput = event.detail.widget.querySelector('.ibexa-input--domain-name');
    domainNameInput.addEventListener('keyup', updateDomainName, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.validate.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.validate.js ***!
  \***********************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, Translator) {
  var siteEditForms = doc.querySelectorAll('form[name="site_create"], form[name="site_update"]');
  var validPublicAccesses = function validPublicAccesses(form) {
    var arePublicAccessessValid = true;
    var publicAccessContainer = form.querySelector('.ibexa-sf-public-access');
    var publicAccessListContainer = form.querySelector('.ibexa-sf-public-access__list');
    var errorContainer = form.querySelector('.ibexa-sf-public-access__error');
    var publicAccesses = publicAccessListContainer.querySelectorAll('.ibexa-sf-public-access__list-item');
    var hasPublicAccesses = publicAccesses.length > 0;
    var errorText = Translator.trans( /*@Desc("Please add a correct public access")*/'form.validate.error.public.access', {}, 'ibexa_site_factory_ui');
    _toConsumableArray(publicAccesses).forEach(function (publicAccess) {
      var hasEmptyFields = _toConsumableArray(publicAccess.querySelectorAll('input[required="required"]')).some(function (input) {
        return input.value === '';
      });
      publicAccess.classList.remove('is-invalid');
      if (hasEmptyFields) {
        publicAccess.classList.add('is-invalid');
        arePublicAccessessValid = false;
      }
    });
    if (!hasPublicAccesses || !arePublicAccessessValid) {
      errorContainer.innerText = errorText;
      publicAccessContainer.classList.add('is-invalid');
      return false;
    }
    publicAccessContainer.classList.remove('is-invalid');
    errorContainer.innerText = '';
    return true;
  };
  var validWidgets = function validWidgets(form) {
    var areWidgetsValid = true;
    var widgets = _toConsumableArray(form.querySelectorAll('.ibexa-sf-edit-widget:not(.ibexa-sf-edit-widget--information-only)'));
    widgets.forEach(function (widget) {
      var input = widget.querySelector('.form-control');
      var errorContainer = widget.querySelector('.ibexa-field-edit__error');
      widget.classList.remove('is-invalid');
      input.classList.remove('is-invalid');
      if (errorContainer) {
        errorContainer.innerText = '';
      }
      if (input.hasAttribute('required') && input.value === '') {
        var fieldName = widget.querySelector('.ibexa-label').innerText;
        var errorText = Translator.trans( /*@Desc("%fieldName% Field is required")*/'form.validate.error', {
          fieldName: fieldName
        }, 'ibexa_site_factory_ui');
        areWidgetsValid = false;
        widget.classList.add('is-invalid');
        input.classList.add('is-invalid');
        if (errorContainer) {
          errorContainer.innerText = errorText;
        }
      }
    });
    return areWidgetsValid;
  };
  var validateForm = function validateForm(event) {
    var form = event.currentTarget;
    var areWidgetsValid = validWidgets(form);
    var arePublicAccessesValid = validPublicAccesses(form);
    var isFormValid = areWidgetsValid && arePublicAccessesValid;
    if (!isFormValid) {
      event.preventDefault();
    }
  };
  siteEditForms.forEach(function (editForm) {
    editForm.addEventListener('submit', validateForm, false);
  });
})(window, window.document, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/admin.card.toggle.group.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/edit.header.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.public.access.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.design.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.languages.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.validate.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/form.parent.location.js"));
/******/ }
]);