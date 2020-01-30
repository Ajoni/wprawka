(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BookDialog"],{

/***/ "./react/src/Book/components/BookDialog.jsx":
/*!**************************************************!*\
  !*** ./react/src/Book/components/BookDialog.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookDialog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/BookService */ "./react/src/Book/services/BookService.js");
/* harmony import */ var _Shared_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../Shared/components/Inputs/InputField */ "./react/src/Shared/components/Inputs/InputField.js");
/* harmony import */ var _Shared_components_Inputs_DateField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../Shared/components/Inputs/DateField */ "./react/src/Shared/components/Inputs/DateField.js");
/* harmony import */ var _Shared_components_Inputs_SelectField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../Shared/components/Inputs/SelectField */ "./react/src/Shared/components/Inputs/SelectField.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function BookDialog(props) {
  var bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_11__["default"]();
  var defaultBook = {
    BookId: -1,
    Author: '',
    Title: '',
    ReleaseDate: null,
    ISBN: '',
    Count: '',
    BookGenreId: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(props.book ? props.book : defaultBook),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
      Book = _React$useState2[0],
      setBook = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState3, 2),
      Error = _React$useState4[0],
      setError = _React$useState4[1];

  var clearForm = function clearForm() {
    setBook(defaultBook);
    setError(null);
  };

  var handleClose = function handleClose() {
    if (props.onClose) props.onClose();
    clearForm();
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var update, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              update = props.book ? true : false;

              if (!update) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return bookService.update(Book);

            case 4:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return bookService.add(Book);

            case 9:
              _context.t0 = _context.sent;

            case 10:
              response = _context.t0;

              if (!response.ModelState) {
                _context.next = 14;
                break;
              }

              setError(response.ModelState);
              return _context.abrupt("return");

            case 14:
              if (update) {
                setBook(_objectSpread({}, response));
              }

              if (props.onClose) props.onClose();
              if (props.onSubmit) props.onSubmit(response, props.book);
              if (!update) clearForm();

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: props.open,
    onClose: handleClose,
    onEnter: function onEnter() {
      return setBook(props.book ? props.book : defaultBook);
    },
    "aria-labelledby": "form-dialog-title",
    disableBackdropClick: true,
    disableEscapeKeyDown: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "form-dialog-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: Book.Author,
    onChange: function onChange(event) {
      return setBook(_objectSpread({}, Book, {
        Author: event.target.value
      }));
    },
    autoFocus: true,
    id: "Author",
    label: "Author",
    type: "text",
    required: true,
    error: Error
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: Book.Title,
    onChange: function onChange(event) {
      return setBook(_objectSpread({}, Book, {
        Title: event.target.value
      }));
    },
    id: "Title",
    label: "Title",
    type: "text",
    required: true,
    error: Error
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_DateField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "ReleaseDate",
    label: "ReleaseDate",
    error: Error,
    required: false,
    value: Book.ReleaseDate,
    onChange: function onChange(date) {
      return setBook(_objectSpread({}, Book, {
        ReleaseDate: date
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: Book.ISBN,
    onChange: function onChange(event) {
      return setBook(_objectSpread({}, Book, {
        ISBN: event.target.value
      }));
    },
    error: Error,
    required: true,
    id: "ISBN",
    label: "ISBN",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: Book.Count,
    onChange: function onChange(event) {
      return setBook(_objectSpread({}, Book, {
        Count: event.target.value
      }));
    },
    error: Error,
    required: true,
    id: "Count",
    label: "Count",
    type: "number"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_components_Inputs_SelectField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Genre",
    labelId: "labelGenre",
    id: "BookGenreId",
    required: true,
    error: Error,
    items: props.bookGenres,
    value: Book.BookGenreId,
    onChange: function onChange(value) {
      return setBook(_objectSpread({}, Book, {
        BookGenreId: value.target.value,
        Genre: props.bookGenres.find(function (b) {
          return b.id === value.target.value;
        }).display
      }));
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleSubmit,
    color: "primary"
  }, props.submitText))));
}

/***/ }),

/***/ "./react/src/Shared/components/Inputs/DateField.js":
/*!*********************************************************!*\
  !*** ./react/src/Shared/components/Inputs/DateField.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateField; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");





function DateField(props) {
  var hasError = false;
  var errorMsg = '';

  if (props.error) {
    hasError = props.error["viewModel.".concat(props.id)] ? true : false;
    if (hasError) errorMsg = props.error["viewModel.".concat(props.id)].join();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "space-around"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["KeyboardDatePicker"], {
    disableToolbar: true,
    variant: "inline",
    margin: "normal",
    fullWidth: true,
    format: "dd/MM/yyyy",
    id: props.id,
    label: props.label,
    value: props.value,
    onChange: props.onChange,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    error: hasError,
    helperText: hasError ? errorMsg : ''
  })));
}

/***/ }),

/***/ "./react/src/Shared/components/Inputs/InputField.js":
/*!**********************************************************!*\
  !*** ./react/src/Shared/components/Inputs/InputField.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");



function InputField(props) {
  var hasError = false;
  var errorMsg = '';

  if (props.error) {
    hasError = props.error["viewModel.".concat(props.id)] ? true : false;
    if (hasError) errorMsg = props.error["viewModel.".concat(props.id)].join();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    required: props.required,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: props.value,
    onChange: props.onChange,
    autoFocus: props.autofocus,
    margin: "dense",
    fullWidth: true,
    id: props.id,
    label: props.label,
    type: props.type,
    error: hasError,
    required: props.required,
    helperText: hasError ? errorMsg : ''
  }));
}

/***/ }),

/***/ "./react/src/Shared/components/Inputs/SelectField.js":
/*!***********************************************************!*\
  !*** ./react/src/Shared/components/Inputs/SelectField.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");







function SelectField(props) {
  var hasError = false;
  var errorMsg = '';

  if (props.error) {
    hasError = props.error["viewModel.".concat(props.id)] ? true : false;
    if (hasError) errorMsg = props.error["viewModel.".concat(props.id)].join();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    required: props.required,
    error: hasError,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "{props.id}"
  }, props.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelId: props.id,
    id: props.id,
    value: props.value,
    onChange: props.onChange
  }, props.items.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      tabIndex: i,
      value: item.id
    }, item.display);
  })), hasError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4__["default"], null, hasError ? errorMsg : ''));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvQm9vay9jb21wb25lbnRzL0Jvb2tEaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3JlYWN0L3NyYy9TaGFyZWQvY29tcG9uZW50cy9JbnB1dHMvRGF0ZUZpZWxkLmpzIiwid2VicGFjazovLy8uL3JlYWN0L3NyYy9TaGFyZWQvY29tcG9uZW50cy9JbnB1dHMvSW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvU2hhcmVkL2NvbXBvbmVudHMvSW5wdXRzL1NlbGVjdEZpZWxkLmpzIl0sIm5hbWVzIjpbIkJvb2tEaWFsb2ciLCJwcm9wcyIsImJvb2tTZXJ2aWNlIiwiQm9va1NlcnZpY2UiLCJkZWZhdWx0Qm9vayIsIkJvb2tJZCIsIkF1dGhvciIsIlRpdGxlIiwiUmVsZWFzZURhdGUiLCJJU0JOIiwiQ291bnQiLCJCb29rR2VucmVJZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJib29rIiwiQm9vayIsInNldEJvb2siLCJFcnJvciIsInNldEVycm9yIiwiY2xlYXJGb3JtIiwiaGFuZGxlQ2xvc2UiLCJvbkNsb3NlIiwiaGFuZGxlU3VibWl0IiwidXBkYXRlIiwiYWRkIiwicmVzcG9uc2UiLCJNb2RlbFN0YXRlIiwib25TdWJtaXQiLCJvcGVuIiwidGl0bGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGF0ZSIsImJvb2tHZW5yZXMiLCJHZW5yZSIsImZpbmQiLCJiIiwiaWQiLCJkaXNwbGF5Iiwic3VibWl0VGV4dCIsIkRhdGVGaWVsZCIsImhhc0Vycm9yIiwiZXJyb3JNc2ciLCJlcnJvciIsImpvaW4iLCJEYXRlRm5zVXRpbHMiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiSW5wdXRGaWVsZCIsInJlcXVpcmVkIiwiYXV0b2ZvY3VzIiwidHlwZSIsIlNlbGVjdEZpZWxkIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SyxDQUFDK0IsS0FGakI7QUFFd0IsWUFBUSxFQUFFL0IsS0FBSyxDQUFDK0M7QUFGeEMsS0FHSy9DLEtBQUssQ0FBQ3FELEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNiLDJEQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQWtCLGNBQVEsRUFBRUEsQ0FBNUI7QUFBK0IsV0FBSyxFQUFFRCxJQUFJLENBQUNsQjtBQUEzQyxPQUFnRGtCLElBQUksQ0FBQ2pCLE9BQXJELENBRGE7QUFBQSxHQUFoQixDQUhMLENBSEksRUFTSEcsUUFBUSxJQUFJLDJEQUFDLHdFQUFELFFBQWlCQSxRQUFRLEdBQUdDLFFBQUgsR0FBYyxFQUF2QyxDQVRULENBQVI7QUFZSCxDIiwiZmlsZSI6IkJvb2tEaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuXHJcbmltcG9ydCBCb29rU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Cb29rU2VydmljZSc7XHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4vLi4vLi4vU2hhcmVkL2NvbXBvbmVudHMvSW5wdXRzL0lucHV0RmllbGQnO1xyXG5pbXBvcnQgRGF0ZUZpZWxkIGZyb20gJy4vLi4vLi4vU2hhcmVkL2NvbXBvbmVudHMvSW5wdXRzL0RhdGVGaWVsZCc7XHJcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICcuLy4uLy4uL1NoYXJlZC9jb21wb25lbnRzL0lucHV0cy9TZWxlY3RGaWVsZCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0RpYWxvZyhwcm9wcykge1xyXG4gICAgY29uc3QgYm9va1NlcnZpY2UgPSBuZXcgQm9va1NlcnZpY2UoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRCb29rID0gKHtcclxuICAgICAgICBCb29rSWQ6IC0xLFxyXG4gICAgICAgIEF1dGhvcjogJycsXHJcbiAgICAgICAgVGl0bGU6ICcnLFxyXG4gICAgICAgIFJlbGVhc2VEYXRlOiBudWxsLFxyXG4gICAgICAgIElTQk46ICcnLFxyXG4gICAgICAgIENvdW50OiAnJyxcclxuICAgICAgICBCb29rR2VucmVJZDogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0Jvb2ssIHNldEJvb2tdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuYm9vayA/IHByb3BzLmJvb2sgOiBkZWZhdWx0Qm9vayk7XHJcbiAgICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm9vayhkZWZhdWx0Qm9vayk7XHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKTtcclxuICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0gcHJvcHMuYm9vayA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHVwZGF0ZSA/IGF3YWl0IGJvb2tTZXJ2aWNlLnVwZGF0ZShCb29rKSA6IGF3YWl0IGJvb2tTZXJ2aWNlLmFkZChCb29rKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuTW9kZWxTdGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihyZXNwb25zZS5Nb2RlbFN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRCb29rKHsgLi4ucmVzcG9uc2UgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xyXG4gICAgICAgIGlmIChwcm9wcy5vblN1Ym1pdClcclxuICAgICAgICAgICAgcHJvcHMub25TdWJtaXQocmVzcG9uc2UsIHByb3BzLmJvb2spO1xyXG4gICAgICAgIGlmICghdXBkYXRlKVxyXG4gICAgICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e3Byb3BzLm9wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBvbkVudGVyPXsoKSA9PiBzZXRCb29rKHByb3BzLmJvb2sgPyBwcm9wcy5ib29rIDogZGVmYXVsdEJvb2spfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIiBkaXNhYmxlQmFja2Ryb3BDbGljaz17dHJ1ZX0gZGlzYWJsZUVzY2FwZUtleURvd249e3RydWV9ID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17Qm9vay5BdXRob3J9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEJvb2soeyAuLi5Cb29rLCBBdXRob3I6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkF1dGhvclwiIGxhYmVsPVwiQXV0aG9yXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Vycm9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtCb29rLlRpdGxlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRCb29rKHsgLi4uQm9vaywgVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJUaXRsZVwiIGxhYmVsPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17RXJyb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVGaWVsZCBpZD1cIlJlbGVhc2VEYXRlXCIgbGFiZWw9XCJSZWxlYXNlRGF0ZVwiIGVycm9yPXtFcnJvcn0gcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Qm9vay5SZWxlYXNlRGF0ZX0gb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRCb29rKHsgLi4uQm9vaywgUmVsZWFzZURhdGU6IGRhdGUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e0Jvb2suSVNCTn0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIElTQk46IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Vycm9yfSByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJJU0JOXCIgbGFiZWw9XCJJU0JOXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtCb29rLkNvdW50fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRCb29rKHsgLi4uQm9vaywgQ291bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Vycm9yfSByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDb3VudFwiIGxhYmVsPVwiQ291bnRcIiB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0RmllbGQgbGFiZWw9XCJHZW5yZVwiIGxhYmVsSWQ9XCJsYWJlbEdlbnJlXCIgaWQ9XCJCb29rR2VucmVJZFwiIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17RXJyb3J9IGl0ZW1zPXtwcm9wcy5ib29rR2VucmVzfSB2YWx1ZT17Qm9vay5Cb29rR2VucmVJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEJvb2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQm9vaywgQm9va0dlbnJlSWQ6IHZhbHVlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbnJlOiBwcm9wcy5ib29rR2VucmVzLmZpbmQoYiA9PiBiLmlkID09PSB2YWx1ZS50YXJnZXQudmFsdWUpLmRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3VibWl0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0ICdkYXRlLWZucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHtcclxuICAgIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gICAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVGaWVsZChwcm9wcykge1xyXG4gICAgdmFyIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICB2YXIgZXJyb3JNc2cgPSAnJztcclxuICAgIGlmIChwcm9wcy5lcnJvcikge1xyXG4gICAgICAgIGhhc0Vycm9yID0gcHJvcHMuZXJyb3JbYHZpZXdNb2RlbC4ke3Byb3BzLmlkfWBdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChoYXNFcnJvcilcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSBwcm9wcy5lcnJvcltgdmlld01vZGVsLiR7cHJvcHMuaWR9YF0uam9pbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXIgdmFyaWFudD1cImlubGluZVwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIiBpZD17cHJvcHMuaWR9IGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtoYXNFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtoYXNFcnJvciA/IGVycm9yTXNnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzKSB7XHJcbiAgICB2YXIgaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIHZhciBlcnJvck1zZyA9ICcnO1xyXG4gICAgaWYgKHByb3BzLmVycm9yKSB7XHJcbiAgICAgICAgaGFzRXJyb3IgPSBwcm9wcy5lcnJvcltgdmlld01vZGVsLiR7cHJvcHMuaWR9YF0gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYoaGFzRXJyb3IpXHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gcHJvcHMuZXJyb3JbYHZpZXdNb2RlbC4ke3Byb3BzLmlkfWBdLmpvaW4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoPEZvcm1Db250cm9sIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH0gZnVsbFdpZHRoPlxyXG4gICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17cHJvcHMuYXV0b2ZvY3VzfSBtYXJnaW49XCJkZW5zZVwiIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9IGxhYmVsPXtwcm9wcy5sYWJlbH0gdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yfVxyXG4gICAgICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9e2hhc0Vycm9yID8gZXJyb3JNc2cgOicnfVxyXG4gICAgICAgIC8+XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdEZpZWxkKHByb3BzKSB7XHJcbiAgICB2YXIgaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIHZhciBlcnJvck1zZyA9ICcnO1xyXG4gICAgaWYgKHByb3BzLmVycm9yKSB7XHJcbiAgICAgICAgaGFzRXJyb3IgPSBwcm9wcy5lcnJvcltgdmlld01vZGVsLiR7cHJvcHMuaWR9YF0gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9yKVxyXG4gICAgICAgICAgICBlcnJvck1zZyA9IHByb3BzLmVycm9yW2B2aWV3TW9kZWwuJHtwcm9wcy5pZH1gXS5qb2luKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoPEZvcm1Db250cm9sIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH0gZXJyb3I9e2hhc0Vycm9yfSBmdWxsV2lkdGg+XHJcblxyXG4gICAgICAgIDxJbnB1dExhYmVsIGlkPVwie3Byb3BzLmlkfVwiPntwcm9wcy5sYWJlbH08L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPXtwcm9wcy5pZH0gaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l9IHRhYkluZGV4PXtpfSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0uZGlzcGxheX08L01lbnVJdGVtPikpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIHtoYXNFcnJvciAmJiA8Rm9ybUhlbHBlclRleHQ+e2hhc0Vycm9yID8gZXJyb3JNc2cgOiAnJ308L0Zvcm1IZWxwZXJUZXh0Pn1cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==