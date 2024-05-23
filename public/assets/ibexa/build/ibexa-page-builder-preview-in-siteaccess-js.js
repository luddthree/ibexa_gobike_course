(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-preview-in-siteaccess-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/sidebar/btn/location.edit.js":
/*!*****************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/sidebar/btn/location.edit.js ***!
  \*****************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function (global, doc, ibexa, bootstrap, Routing) {
  var editActions = doc.querySelectorAll('.ibexa-extra-actions--edit, .ibexa-extra-actions--edit-user');
  var resetRadioButtons = function resetRadioButtons(btns) {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };
  var addDraft = function addDraft(form) {
    form.submit();
    bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
  };
  var redirectToUserEdit = function redirectToUserEdit(languageCode, contentId, form) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ibexa.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };
  var onModalHidden = function onModalHidden(btns) {
    resetRadioButtons(btns);
    var event = new CustomEvent('ibexa-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };
  var attachModalListeners = function attachModalListeners(wrapper, form, btns) {
    var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
    var conflictModal = doc.querySelector('#version-draft-conflict-modal');
    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft.bind(null, form), false);
    }
    wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });
    if (conflictModal) {
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hidden.bs.modal', onModalHidden.bind(null, btns));
      conflictModal.addEventListener('shown.bs.modal', function () {
        return ibexa.helpers.tooltips.parse();
      });
    }
  };
  var showModal = function showModal(form, btns, modalHtml) {
    var wrapper = doc.querySelector('.ibexa-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper, form, btns);
  };
  var changeHandler = function changeHandler(form, btns, event) {
    var contentIdInput = form.querySelector('.ibexa-extra-actions__form-field--content-info');
    var locationInput = form.querySelector('.ibexa-extra-actions__form-field--location');
    var contentId = contentIdInput.value;
    var locationId = locationInput.value;
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal.bind(null, form, btns));
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode, contentId, form);
          return;
        }
        form.submit();
      }
    });
  };
  var attachEventsToEditActionsWidget = function attachEventsToEditActionsWidget(container) {
    var btns = _toConsumableArray(container.querySelectorAll('.form-check [type="radio"]'));
    var form = container.querySelector('form');
    btns.forEach(function (btn) {
      return btn.addEventListener('change', changeHandler.bind(null, form, btns), false);
    });
  };
  _toConsumableArray(editActions).forEach(attachEventsToEditActionsWidget);
})(window, window.document, window.ibexa, window.bootstrap, window.Routing);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/btn/location.edit.js"));
/******/ }
]);