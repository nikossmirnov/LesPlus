webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Modal.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    // root: {
    //     margin: 0,
    //     padding: theme.spacing(2),
    // },
    // closeButton: {
    //     position: "absolute",
    //     right: theme.spacing(1),
    //     top: theme.spacing(1),
    //     color: theme.palette.grey[500],
    // },
    btn: {
      backgroundColor: "#B66D31",
      borderColor: "#B66D31",
      border: "1px solid",
      color: "white",
      height: "40px",
      display: "flex",
      justifyContent: "space-around",
      fontFamily: "Bodoni Moda",
      borderRadius: "20px",
      padding: "0% 7%",
      marginTop: "5%" // "&:hover": {
      //     backgroundColor: "white",
      //     color: "black",
      // },

    },
    textBtn: {
      fontFamily: "Bodoni Moda",
      fontSize: 12
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    item: {
      margin: "5%"
    }
  };
});

var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "h6",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this), onClose ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, _this) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"]);
function CustomizedDialogs(_ref) {
  _s();

  var title = _ref.title,
      style = _ref.style;
  console.log(title);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      name = _React$useState4[0],
      setName = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      email = _React$useState6[0],
      setEmail = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      phone = _React$useState8[0],
      setPhone = _React$useState8[1];

  var classes = useStyles();

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var data = {
    name: name,
    email: email,
    phone: phone
  };

  var handleClose = function handleClose() {
    setOpen(false);
    Object(emailjs_com__WEBPACK_IMPORTED_MODULE_15__["init"])("user_oHsSoeZSR0bCDigKvVYe7");
    emailjs_com__WEBPACK_IMPORTED_MODULE_15___default.a.send("service_z3c98r8", "template_6mhrn4n", data).then(function (response) {
      console.log(response.status, response.text);
    }, function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"] // variant='outlined'
    // color='primary'
    , {
      onClick: handleClickOpen,
      className: classes.btn,
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.textBtn,
        variant: "subtitle2",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open // style={{ margin: "5%" }}
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DialogTitle, {
        id: "customized-dialog-title",
        onClose: handleClose,
        style: {
          margin: "7% 0% 0% 0%"
        },
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        className: classes.form,
        autoComplete: "off",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], {
          id: "outlined-basic",
          label: "\u0418\u043C\u044F",
          variant: "outlined",
          className: classes.item,
          onChange: function onChange(e) {
            setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], {
          id: "outlined-basic",
          label: "\u041F\u043E\u0447\u0442\u0430",
          variant: "outlined",
          className: classes.item,
          onChange: function onChange(e) {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], {
          id: "outlined-basic",
          label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
          variant: "outlined",
          className: classes.item,
          onChange: function onChange(e) {
            setPhone(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DialogActions, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          autoFocus: true,
          onClick: handleClose,
          color: "primary",
          style: {
            color: "black"
          },
          type: "submit",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 9
  }, this);
}

_s(CustomizedDialogs, "w7PfdSTkOKqjY+Ez9mfYaIZyuI4=", false, function () {
  return [useStyles];
});

_c = CustomizedDialogs;

var _c;

$RefreshReg$(_c, "CustomizedDialogs");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidG4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlciIsImNvbG9yIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9udEZhbWlseSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJmb3JtIiwiZmxleERpcmVjdGlvbiIsIml0ZW0iLCJtYXJnaW4iLCJzdHlsZXMiLCJyb290Iiwic3BhY2luZyIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInBhbGV0dGUiLCJncmV5IiwiRGlhbG9nVGl0bGUiLCJ3aXRoU3R5bGVzIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJvbkNsb3NlIiwib3RoZXIiLCJEaWFsb2dDb250ZW50IiwiTXVpRGlhbG9nQ29udGVudCIsIkRpYWxvZ0FjdGlvbnMiLCJNdWlEaWFsb2dBY3Rpb25zIiwiQ3VzdG9taXplZERpYWxvZ3MiLCJ0aXRsZSIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJoYW5kbGVDbGlja09wZW4iLCJkYXRhIiwiaGFuZGxlQ2xvc2UiLCJpbml0IiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0ZXh0IiwiZXJyIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxPQUFHLEVBQUU7QUFDREMscUJBQWUsRUFBRSxTQURoQjtBQUVEQyxpQkFBVyxFQUFFLFNBRlo7QUFHREMsWUFBTSxFQUFFLFdBSFA7QUFJREMsV0FBSyxFQUFFLE9BSk47QUFLREMsWUFBTSxFQUFFLE1BTFA7QUFNREMsYUFBTyxFQUFFLE1BTlI7QUFPREMsb0JBQWMsRUFBRSxjQVBmO0FBUURDLGdCQUFVLEVBQUUsYUFSWDtBQVNEQyxrQkFBWSxFQUFFLE1BVGI7QUFVREMsYUFBTyxFQUFFLE9BVlI7QUFXREMsZUFBUyxFQUFFLElBWFYsQ0FZRDtBQUNBO0FBQ0E7QUFDQTs7QUFmQyxLQVhnQztBQTRCckNDLFdBQU8sRUFBRTtBQUNMSixnQkFBVSxFQUFFLGFBRFA7QUFFTEssY0FBUSxFQUFFO0FBRkwsS0E1QjRCO0FBZ0NyQ0MsUUFBSSxFQUFFO0FBQ0ZSLGFBQU8sRUFBRSxNQURQO0FBRUZTLG1CQUFhLEVBQUU7QUFGYixLQWhDK0I7QUFvQ3JDQyxRQUFJLEVBQUU7QUFDRkMsWUFBTSxFQUFFO0FBRE47QUFwQytCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXlDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDbkIsS0FBRDtBQUFBLFNBQVk7QUFDdkJvQixRQUFJLEVBQUU7QUFDRkYsWUFBTSxFQUFFLENBRE47QUFFRlAsYUFBTyxFQUFFWCxLQUFLLENBQUNxQixPQUFOLENBQWMsQ0FBZDtBQUZQLEtBRGlCO0FBS3ZCQyxlQUFXLEVBQUU7QUFDVEMsY0FBUSxFQUFFLFVBREQ7QUFFVEMsV0FBSyxFQUFFeEIsS0FBSyxDQUFDcUIsT0FBTixDQUFjLENBQWQsQ0FGRTtBQUdUSSxTQUFHLEVBQUV6QixLQUFLLENBQUNxQixPQUFOLENBQWMsQ0FBZCxDQUhJO0FBSVRoQixXQUFLLEVBQUVMLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUpFO0FBTFUsR0FBWjtBQUFBLENBQWY7O0FBYUEsSUFBTUMsV0FBVyxHQUFHQywyRUFBVSxDQUFDVixNQUFELENBQVYsQ0FBbUIsVUFBQ1csS0FBRCxFQUFXO0FBQUEsTUFDdENDLFFBRHNDLEdBQ0dELEtBREgsQ0FDdENDLFFBRHNDO0FBQUEsTUFDNUJDLE9BRDRCLEdBQ0dGLEtBREgsQ0FDNUJFLE9BRDRCO0FBQUEsTUFDbkJDLE9BRG1CLEdBQ0dILEtBREgsQ0FDbkJHLE9BRG1CO0FBQUEsTUFDUEMsS0FETyxzR0FDR0osS0FESDs7QUFFOUMsc0JBQ0kscUVBQUMscUVBQUQ7QUFBZ0IscUJBQWlCLE1BQWpDO0FBQWtDLGFBQVMsRUFBRUUsT0FBTyxDQUFDWjtBQUFyRCxLQUErRGMsS0FBL0Q7QUFBQSw0QkFDSSxxRUFBQyxxRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBLGdCQUEwQkg7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtFLE9BQU8sZ0JBQ0oscUVBQUMscUVBQUQ7QUFDSSxvQkFBVyxPQURmO0FBRUksZUFBUyxFQUFFRCxPQUFPLENBQUNWLFdBRnZCO0FBR0ksYUFBTyxFQUFFVyxPQUhiO0FBQUEsNkJBS0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESSxHQVFKLElBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQWhCbUIsQ0FBcEI7QUFrQkEsSUFBTUUsYUFBYSxHQUFHTiwyRUFBVSxDQUFDLFVBQUM3QixLQUFEO0FBQUEsU0FBWTtBQUN6Q29CLFFBQUksRUFBRTtBQUNGVCxhQUFPLEVBQUVYLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFEbUMsR0FBWjtBQUFBLENBQUQsQ0FBVixDQUlsQmUsdUVBSmtCLENBQXRCO0FBTUEsSUFBTUMsYUFBYSxHQUFHUiwyRUFBVSxDQUFDLFVBQUM3QixLQUFEO0FBQUEsU0FBWTtBQUN6Q29CLFFBQUksRUFBRTtBQUNGRixZQUFNLEVBQUUsQ0FETjtBQUVGUCxhQUFPLEVBQUVYLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBYyxDQUFkO0FBRlA7QUFEbUMsR0FBWjtBQUFBLENBQUQsQ0FBVixDQUtsQmlCLHdFQUxrQixDQUF0QjtBQU9lLFNBQVNDLGlCQUFULE9BQTZDO0FBQUE7O0FBQUEsTUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN4REMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBRHdELHdCQUVoQ0ksNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGZ0M7QUFBQTtBQUFBLE1BRWpEQyxJQUZpRDtBQUFBLE1BRTNDQyxPQUYyQzs7QUFBQSx5QkFJaENILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSmdDO0FBQUE7QUFBQSxNQUlqREcsSUFKaUQ7QUFBQSxNQUkzQ0MsT0FKMkM7O0FBQUEseUJBSzlCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUw4QjtBQUFBO0FBQUEsTUFLakRLLEtBTGlEO0FBQUEsTUFLMUNDLFFBTDBDOztBQUFBLHlCQU05QlAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FOOEI7QUFBQTtBQUFBLE1BTWpETyxLQU5pRDtBQUFBLE1BTTFDQyxRQU4wQzs7QUFReEQsTUFBTXJCLE9BQU8sR0FBR2xDLFNBQVMsRUFBekI7O0FBRUEsTUFBTXdELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQlAsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBSVEsSUFBSSxHQUFHO0FBQ1BQLFFBQUksRUFBSkEsSUFETztBQUVQRSxTQUFLLEVBQUxBLEtBRk87QUFHUEUsU0FBSyxFQUFMQTtBQUhPLEdBQVg7O0FBS0EsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QlQsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBVSw2REFBSSxDQUFDLDRCQUFELENBQUo7QUFFQUMsdURBQU8sQ0FBQ0MsSUFBUixDQUFhLGlCQUFiLEVBQWdDLGtCQUFoQyxFQUFvREosSUFBcEQsRUFBMERLLElBQTFELENBQ0ksVUFBVUMsUUFBVixFQUFvQjtBQUNoQm5CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZa0IsUUFBUSxDQUFDQyxNQUFyQixFQUE2QkQsUUFBUSxDQUFDRSxJQUF0QztBQUNILEtBSEwsRUFJSSxVQUFVQyxHQUFWLEVBQWU7QUFDWHRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZcUIsR0FBWjtBQUNILEtBTkw7QUFRSCxHQVpEOztBQWNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0VBQUQsQ0FDSTtBQUNBO0FBRko7QUFHSSxhQUFPLEVBQUVWLGVBSGI7QUFJSSxlQUFTLEVBQUV0QixPQUFPLENBQUMvQixHQUp2QjtBQUtJLFdBQUssRUFBRXdDLEtBTFg7QUFBQSw2QkFPSSxxRUFBQyxxRUFBRDtBQUFZLGlCQUFTLEVBQUVULE9BQU8sQ0FBQ25CLE9BQS9CO0FBQXdDLGVBQU8sRUFBQyxXQUFoRDtBQUFBLGtCQUNLMkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUkscUVBQUMsZ0VBQUQ7QUFDSSxhQUFPLEVBQUVnQixXQURiO0FBRUkseUJBQWdCLHlCQUZwQjtBQUdJLFVBQUksRUFBRVYsSUFIVixDQUlJO0FBSko7QUFBQSw4QkFNSSxxRUFBQyxXQUFEO0FBQ0ksVUFBRSxFQUFDLHlCQURQO0FBRUksZUFBTyxFQUFFVSxXQUZiO0FBR0ksYUFBSyxFQUFFO0FBQUV0QyxnQkFBTSxFQUFFO0FBQVYsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBYUk7QUFBTSxpQkFBUyxFQUFFYyxPQUFPLENBQUNqQixJQUF6QjtBQUErQixvQkFBWSxFQUFDLEtBQTVDO0FBQUEsZ0NBQ0kscUVBQUMsNERBQUQ7QUFDSSxZQUFFLEVBQUMsZ0JBRFA7QUFFSSxlQUFLLEVBQUMsb0JBRlY7QUFHSSxpQkFBTyxFQUFDLFVBSFo7QUFJSSxtQkFBUyxFQUFFaUIsT0FBTyxDQUFDZixJQUp2QjtBQUtJLGtCQUFRLEVBQUUsa0JBQUNnRCxDQUFELEVBQU87QUFDYmhCLG1CQUFPLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUkscUVBQUMsNERBQUQ7QUFDSSxZQUFFLEVBQUMsZ0JBRFA7QUFFSSxlQUFLLEVBQUMsZ0NBRlY7QUFHSSxpQkFBTyxFQUFDLFVBSFo7QUFJSSxtQkFBUyxFQUFFbkMsT0FBTyxDQUFDZixJQUp2QjtBQUtJLGtCQUFRLEVBQUUsa0JBQUNnRCxDQUFELEVBQU87QUFDYmQsb0JBQVEsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNIO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixFQWtCTyxHQWxCUCxlQW1CSSxxRUFBQyw0REFBRDtBQUNJLFlBQUUsRUFBQyxnQkFEUDtBQUVJLGVBQUssRUFBQyxpRkFGVjtBQUdJLGlCQUFPLEVBQUMsVUFIWjtBQUlJLG1CQUFTLEVBQUVuQyxPQUFPLENBQUNmLElBSnZCO0FBS0ksa0JBQVEsRUFBRSxrQkFBQ2dELENBQUQsRUFBTztBQUNiWixvQkFBUSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0g7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixlQTBDSSxxRUFBQyxhQUFEO0FBQUEsK0JBQ0kscUVBQUMsZ0VBQUQ7QUFDSSxtQkFBUyxNQURiO0FBRUksaUJBQU8sRUFBRVgsV0FGYjtBQUdJLGVBQUssRUFBQyxTQUhWO0FBSUksZUFBSyxFQUFFO0FBQUVuRCxpQkFBSyxFQUFFO0FBQVQsV0FKWDtBQUtJLGNBQUksRUFBQyxRQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFFSDs7R0F0R3VCa0MsaUI7VUFRSnpDLFM7OztLQVJJeUMsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE1Y2RmYzIxNDc3N2UxNTYzOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBNdWlEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XHJcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiZW1haWxqcy1jb21cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgLy8gcm9vdDoge1xyXG4gICAgLy8gICAgIG1hcmdpbjogMCxcclxuICAgIC8vICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIGNsb3NlQnV0dG9uOiB7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIC8vICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIC8vICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAvLyAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgLy8gfSxcclxuICAgIGJ0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1JVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbToge1xyXG4gICAgICAgIG1hcmdpbjogXCI1JVwiLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIGNsb3NlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ub3RoZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9NdWlEaWFsb2dUaXRsZT5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nQ29udGVudCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBEaWFsb2dBY3Rpb25zID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG59KSkoTXVpRGlhbG9nQWN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkRGlhbG9ncyh7IHRpdGxlLCBzdHlsZSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgaW5pdChcInVzZXJfb0hzU29lWlNSMGJDRGlnS3ZWWWU3XCIpO1xyXG5cclxuICAgICAgICBlbWFpbGpzLnNlbmQoXCJzZXJ2aWNlX3ozYzk4cjhcIiwgXCJ0ZW1wbGF0ZV82bWhybjRuXCIsIGRhdGEpLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdjdXN0b21pemVkLWRpYWxvZy10aXRsZSdcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXJnaW46IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9taXplZC1kaWFsb2ctdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjclIDAlIDAlIDAlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQn9C+0LvRg9GH0LjRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjiDRgdC/0LXRhtC40LDQu9C40YHRgtCwXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdvdXRsaW5lZC1iYXNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J9CY0LzRjydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nb3V0bGluZWQtYmFzaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSfQn9C+0YfRgtCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0n0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9