(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BookDialog"],{

/***/ "./react/src/Book/components/BookDialog.js":
/*!*************************************************!*\
  !*** ./react/src/Book/components/BookDialog.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookDialog; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InputField */ "./react/src/Book/components/InputField.js");
/* harmony import */ var _DateField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DateField */ "./react/src/Book/components/DateField.js");
/* harmony import */ var _MySelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MySelect */ "./react/src/Book/components/MySelect.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function BookDialog(props) {
  var bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_11__["default"]();
  var defaultBook = {
    BookId: -1,
    Author: '',
    Title: '',
    ReleaseDate: '',
    ISBN: '',
    Count: '',
    AddDate: new Date(),
    ModifiedDate: '',
    BookGenreId: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(props.book ? props.book : defaultBook),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
      Book = _React$useState2[0],
      setBook = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState3, 2),
      BookGenres = _React$useState4[0],
      setBookGenres = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState5, 2),
      Error = _React$useState6[0],
      setError = _React$useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getBookGeneres() {
      return _getBookGeneres.apply(this, arguments);
    }

    function _getBookGeneres() {
      _getBookGeneres = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return bookService.getBookGenres();

              case 2:
                result = _context.sent;
                setBookGenres(result.map(function (item) {
                  return {
                    id: item.BookGenreId,
                    display: item.Name
                  };
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getBookGeneres.apply(this, arguments);
    }

    getBookGeneres();
  }, []);

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
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var update, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              update = props.book ? true : false;

              if (!update) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return bookService.update(Book);

            case 4:
              _context2.t0 = _context2.sent;
              _context2.next = 10;
              break;

            case 7:
              _context2.next = 9;
              return bookService.add(Book);

            case 9:
              _context2.t0 = _context2.sent;

            case 10:
              response = _context2.t0;

              if (!response.ModelState) {
                _context2.next = 14;
                break;
              }

              setError(response.ModelState);
              return _context2.abrupt("return");

            case 14:
              if (update) {
                setBook(_objectSpread({}, response));
              }

              if (props.onClose) props.onClose();
              if (props.onSubmit) props.onSubmit(response);
              if (!update) clearForm();

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: props.open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    disableBackdropClick: true,
    disableEscapeKeyDown: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "form-dialog-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_DateField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_DateField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "AddDate",
    label: "AddDate",
    error: Error,
    required: true,
    value: Book.AddDate,
    onChange: function onChange(date) {
      return setBook(_objectSpread({}, Book, {
        AddDate: date
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_DateField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "ModifiedDate",
    label: "ModifiedDate",
    error: Error,
    required: false,
    value: Book.ModifiedDate,
    onChange: function onChange(date) {
      return setBook(_objectSpread({}, Book, {
        ModifiedDate: date
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MySelect__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Genre",
    labelId: "labelGenre",
    id: "BookGenreId",
    required: true,
    error: Error,
    value: Book.BookGenreId,
    onChange: function onChange(value) {
      return setBook(_objectSpread({}, Book, {
        BookGenreId: value.target.value
      }));
    },
    items: BookGenres
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleSubmit,
    color: "primary"
  }, props.submitText))));
}

/***/ }),

/***/ "./react/src/Book/components/DateField.js":
/*!************************************************!*\
  !*** ./react/src/Book/components/DateField.js ***!
  \************************************************/
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
    required: props.required,
    error: hasError,
    helperText: hasError ? errorMsg : ''
  })));
}

/***/ }),

/***/ "./react/src/Book/components/InputField.js":
/*!*************************************************!*\
  !*** ./react/src/Book/components/InputField.js ***!
  \*************************************************/
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

/***/ "./react/src/Book/components/MySelect.js":
/*!***********************************************!*\
  !*** ./react/src/Book/components/MySelect.js ***!
  \***********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9zcmMvQm9vay9jb21wb25lbnRzL0Jvb2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3Qvc3JjL0Jvb2svY29tcG9uZW50cy9EYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3Qvc3JjL0Jvb2svY29tcG9uZW50cy9JbnB1dEZpZWxkLmpzIiwid2VicGFjazovLy8uL3JlYWN0L3NyYy9Cb29rL2NvbXBvbmVudHMvTXlTZWxlY3QuanMiXSwibmFtZXMiOlsiQm9va0RpYWxvZyIsInByb3BzIiwiYm9va1NlcnZpY2UiLCJCb29rU2VydmljZSIsImRlZmF1bHRCb29rIiwiQm9va0lkIiwiQXV0aG9yIiwiVGl0bGUiLCJSZWxlYXNlRGF0ZSIsIklTQk4iLCJDb3VudCIsIkFkZERhdGUiLCJEYXRlIiwiTW9kaWZpZWREYXRlIiwiQm9va0dlbnJlSWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYm9vayIsIkJvb2siLCJzZXRCb29rIiwiQm9va0dlbnJlcyIsInNldEJvb2tHZW5yZXMiLCJFcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZ2V0Qm9va0dlbmVyZXMiLCJnZXRCb29rR2VucmVzIiwicmVzdWx0IiwibWFwIiwiaXRlbSIsImlkIiwiZGlzcGxheSIsIk5hbWUiLCJjbGVhckZvcm0iLCJoYW5kbGVDbG9zZSIsIm9uQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJ1cGRhdGUiLCJhZGQiLCJyZXNwb25zZSIsIk1vZGVsU3RhdGUiLCJvblN1Ym1pdCIsIm9wZW4iLCJ0aXRsZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkYXRlIiwic3VibWl0VGV4dCIsIkRhdGVGaWVsZCIsImhhc0Vycm9yIiwiZXJyb3JNc2ciLCJlcnJvciIsImpvaW4iLCJEYXRlRm5zVXRpbHMiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJJbnB1dEZpZWxkIiwiYXV0b2ZvY3VzIiwidHlwZSIsIlNlbGVjdEZpZWxkIiwiaXRl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S0FBSyxDQUFDdUQ7QUFGeEMsS0FHS3ZELEtBQUssQ0FBQzZELEtBQU4sQ0FBWWxDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPa0MsQ0FBUDtBQUFBLFdBQ2IsMkRBQUMsa0VBQUQ7QUFBVSxTQUFHLEVBQUVBLENBQWY7QUFBa0IsY0FBUSxFQUFFQSxDQUE1QjtBQUErQixXQUFLLEVBQUVsQyxJQUFJLENBQUNDO0FBQTNDLE9BQWdERCxJQUFJLENBQUNFLE9BQXJELENBRGE7QUFBQSxHQUFoQixDQUhMLENBSEksRUFTSG1CLFFBQVEsSUFBSSwyREFBQyx3RUFBRCxRQUFpQkEsUUFBUSxHQUFHQyxRQUFILEdBQWMsRUFBdkMsQ0FUVCxDQUFSO0FBWUgsQyIsImZpbGUiOiJCb29rRGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcblxyXG5pbXBvcnQgQm9va1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQm9va1NlcnZpY2UnO1xyXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnO1xyXG5pbXBvcnQgRGF0ZUZpZWxkIGZyb20gJy4vRGF0ZUZpZWxkJztcclxuaW1wb3J0IE15U2VsZWN0IGZyb20gJy4vTXlTZWxlY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEaWFsb2cocHJvcHMpIHtcclxuICAgIGNvbnN0IGJvb2tTZXJ2aWNlID0gbmV3IEJvb2tTZXJ2aWNlKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0Qm9vayA9ICh7XHJcbiAgICAgICAgQm9va0lkOiAtMSxcclxuICAgICAgICBBdXRob3I6ICcnLFxyXG4gICAgICAgIFRpdGxlOiAnJyxcclxuICAgICAgICBSZWxlYXNlRGF0ZTogJycsXHJcbiAgICAgICAgSVNCTjogJycsXHJcbiAgICAgICAgQ291bnQ6ICcnLFxyXG4gICAgICAgIEFkZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgTW9kaWZpZWREYXRlOiAnJyxcclxuICAgICAgICBCb29rR2VucmVJZDogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0Jvb2ssIHNldEJvb2tdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuYm9vayA/IHByb3BzLmJvb2sgOiBkZWZhdWx0Qm9vayk7XHJcbiAgICBjb25zdCBbQm9va0dlbnJlcywgc2V0Qm9va0dlbnJlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va0dlbmVyZXMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvb2tTZXJ2aWNlLmdldEJvb2tHZW5yZXMoKTtcclxuICAgICAgICAgICAgc2V0Qm9va0dlbnJlcyhyZXN1bHQubWFwKGl0ZW0gPT4gKHsgaWQ6IGl0ZW0uQm9va0dlbnJlSWQsIGRpc3BsYXk6IGl0ZW0uTmFtZSB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRCb29rR2VuZXJlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb29rKGRlZmF1bHRCb29rKTtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpO1xyXG4gICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGUgPSBwcm9wcy5ib29rID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdXBkYXRlID8gYXdhaXQgYm9va1NlcnZpY2UudXBkYXRlKEJvb2spIDogYXdhaXQgYm9va1NlcnZpY2UuYWRkKEJvb2spO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5Nb2RlbFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHJlc3BvbnNlLk1vZGVsU3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHNldEJvb2soeyAuLi5yZXNwb25zZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5vbkNsb3NlKVxyXG4gICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgaWYgKHByb3BzLm9uU3VibWl0KVxyXG4gICAgICAgICAgICBwcm9wcy5vblN1Ym1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKCF1cGRhdGUpXHJcbiAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17cHJvcHMub3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCIgZGlzYWJsZUJhY2tkcm9wQ2xpY2s9e3RydWV9IGRpc2FibGVFc2NhcGVLZXlEb3duPXt0cnVlfSA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPntwcm9wcy50aXRsZX08L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e0Jvb2suQXV0aG9yfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRCb29rKHsgLi4uQm9vaywgQXV0aG9yOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJBdXRob3JcIiBsYWJlbD1cIkF1dGhvclwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtFcnJvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17Qm9vay5UaXRsZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIFRpdGxlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVGl0bGVcIiBsYWJlbD1cIlRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Vycm9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlRmllbGQgaWQ9XCJSZWxlYXNlRGF0ZVwiIGxhYmVsPVwiUmVsZWFzZURhdGVcIiBlcnJvcj17RXJyb3J9IHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0Jvb2suUmVsZWFzZURhdGV9IG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIFJlbGVhc2VEYXRlOiBkYXRlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtCb29rLklTQk59IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEJvb2soeyAuLi5Cb29rLCBJU0JOOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtFcnJvcn0gcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiSVNCTlwiIGxhYmVsPVwiSVNCTlwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17Qm9vay5Db3VudH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIENvdW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtFcnJvcn0gcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ291bnRcIiBsYWJlbD1cIkNvdW50XCIgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVGaWVsZCBpZD1cIkFkZERhdGVcIiBsYWJlbD1cIkFkZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17RXJyb3J9IHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Qm9vay5BZGREYXRlfSBvbkNoYW5nZT17KGRhdGUpID0+IHNldEJvb2soeyAuLi5Cb29rLCBBZGREYXRlOiBkYXRlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlRmllbGQgaWQ9XCJNb2RpZmllZERhdGVcIiBsYWJlbD1cIk1vZGlmaWVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtFcnJvcn0gcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Qm9vay5Nb2RpZmllZERhdGV9IG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIE1vZGlmaWVkRGF0ZTogZGF0ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlTZWxlY3QgbGFiZWw9XCJHZW5yZVwiIGxhYmVsSWQ9XCJsYWJlbEdlbnJlXCIgaWQ9XCJCb29rR2VucmVJZFwiIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17RXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Qm9vay5Cb29rR2VucmVJZH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Qm9vayh7IC4uLkJvb2ssIEJvb2tHZW5yZUlkOiB2YWx1ZS50YXJnZXQudmFsdWUgfSl9IGl0ZW1zPXtCb29rR2VucmVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Ym1pdFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7XHJcbiAgICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICAgIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRmllbGQocHJvcHMpIHtcclxuICAgIHZhciBoYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdmFyIGVycm9yTXNnID0gJyc7XHJcbiAgICBpZiAocHJvcHMuZXJyb3IpIHtcclxuICAgICAgICBoYXNFcnJvciA9IHByb3BzLmVycm9yW2B2aWV3TW9kZWwuJHtwcm9wcy5pZH1gXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoaGFzRXJyb3IpXHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gcHJvcHMuZXJyb3JbYHZpZXdNb2RlbC4ke3Byb3BzLmlkfWBdLmpvaW4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyIHZhcmlhbnQ9XCJpbmxpbmVcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCIgaWQ9e3Byb3BzLmlkfSBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2hhc0Vycm9yID8gZXJyb3JNc2cgOiAnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHMpIHtcclxuICAgIHZhciBoYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdmFyIGVycm9yTXNnID0gJyc7XHJcbiAgICBpZiAocHJvcHMuZXJyb3IpIHtcclxuICAgICAgICBoYXNFcnJvciA9IHByb3BzLmVycm9yW2B2aWV3TW9kZWwuJHtwcm9wcy5pZH1gXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZihoYXNFcnJvcilcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSBwcm9wcy5lcnJvcltgdmlld01vZGVsLiR7cHJvcHMuaWR9YF0uam9pbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICg8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfSBmdWxsV2lkdGg+XHJcbiAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgYXV0b0ZvY3VzPXtwcm9wcy5hdXRvZm9jdXN9IG1hcmdpbj1cImRlbnNlXCIgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH0gbGFiZWw9e3Byb3BzLmxhYmVsfSB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICBlcnJvcj17aGFzRXJyb3J9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgaGVscGVyVGV4dD17aGFzRXJyb3IgPyBlcnJvck1zZyA6Jyd9XHJcbiAgICAgICAgLz5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0RmllbGQocHJvcHMpIHtcclxuICAgIHZhciBoYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdmFyIGVycm9yTXNnID0gJyc7XHJcbiAgICBpZiAocHJvcHMuZXJyb3IpIHtcclxuICAgICAgICBoYXNFcnJvciA9IHByb3BzLmVycm9yW2B2aWV3TW9kZWwuJHtwcm9wcy5pZH1gXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoaGFzRXJyb3IpXHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gcHJvcHMuZXJyb3JbYHZpZXdNb2RlbC4ke3Byb3BzLmlkfWBdLmpvaW4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuICg8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfSBlcnJvcj17aGFzRXJyb3J9IGZ1bGxXaWR0aD5cclxuXHJcbiAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ7cHJvcHMuaWR9XCI+e3Byb3BzLmxhYmVsfTwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9e3Byb3BzLmlkfSBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfT5cclxuICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aX0gdGFiSW5kZXg9e2l9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5kaXNwbGF5fTwvTWVudUl0ZW0+KSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAge2hhc0Vycm9yICYmIDxGb3JtSGVscGVyVGV4dD57aGFzRXJyb3IgPyBlcnJvck1zZyA6ICcnfTwvRm9ybUhlbHBlclRleHQ+fVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9