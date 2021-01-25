webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");



var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Header.js",
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _main, _secondaryImg;

  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    main: (_main = {
      width: "60%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "90vh"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_main, theme.breakpoints.down("lg"), {
      width: "80%"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_main, theme.breakpoints.down("md"), {
      width: "100%",
      height: "100%"
    }), _main),
    logo: {
      display: "flex",
      flexDirection: "column",
      height: "100%" // width: "20%",

    },
    logoImg: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: "25%",
      height: "15%"
    }, theme.breakpoints.down("md"), {
      display: "none"
    }),
    logoImgMob: {
      width: "25%"
    },
    mainImg: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      height: "90vh",
      borderRadius: "5px"
    }, theme.breakpoints.down("md"), {
      display: "none"
    }),
    secondaryImg: (_secondaryImg = {
      position: "absolute",
      borderRadius: "5px",
      marginLeft: "-25%",
      width: 450,
      height: 350
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_secondaryImg, theme.breakpoints.down("md"), {
      display: "none"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_secondaryImg, theme.breakpoints.down("lg"), {
      marginLeft: "-33%"
    }), _secondaryImg),
    secondaryImgContainer: {},
    logoText: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: "10%",
      marginLeft: "5%"
    }, theme.breakpoints.down("md"), {
      marginTop: 0
    }),
    text: {
      fontFamily: "Bodoni Moda",
      margin: "5% 0%"
    },
    textBtn: {
      fontFamily: "Bodoni Moda",
      fontSize: 12
    },
    contactInfo: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontFamily: "Bodoni Moda",
      width: "650px",
      position: "absolute",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "1%"
    }, theme.breakpoints.down("md"), {
      display: "none"
    }),
    contactInfoMob: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    contact: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "35%",
      marginRight: "5%"
    },
    number: {
      color: "white"
    },
    numberMob: {
      color: "black",
      fontSize: 15
    },
    btnWrapper: {
      display: "flex",
      alignItems: "center" // justifyContent: "space-between",

    },
    btnMain: {
      marginLeft: "5%",
      backgroundColor: "black",
      borderColor: "black",
      border: "1px solid",
      color: "white",
      height: "40px",
      display: "flex",
      justifyContent: "space-around",
      fontFamily: "Bodoni Moda",
      borderRadius: "20px",
      padding: "0% 7%",
      marginTop: "10px" // "&:hover": {
      //     backgroundColor: "transparent",
      //     color: "black",
      // },

    },
    btnSecondary: {
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
    mainInfo: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      height: 500,
      width: 550,
      background: "#B48D6E",
      position: "absolute",
      marginTop: "-5%",
      marginLeft: "-5%",
      borderRadius: "5px"
    }, theme.breakpoints.down("md"), {
      display: "none"
    }),
    btnWhite: {
      color: "white" // "&:hover": {
      //     backgroundColor: "white",
      //     color: "black",
      // },

    },
    info: {
      margin: "20%"
    },
    textInfo: {
      fontFamily: "Bodoni Moda",
      fontStyle: "bold",
      fontSize: 25
    }
  };
});
function ButtonAppBar() {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.logo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../static/logo_transparent.png",
          className: classes.logoImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfoMob,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/logo_transparent.png",
            className: classes.logoImgMob
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              variant: "h5",
              className: classes.numberMob,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: classes.text,
            variant: "h3",
            children: "\u0421\u0422\u041E\u041B\u042F\u0420\u041D\u0410\u042F \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u041B\u0415\u0421\u0422\u041D\u0418\u0426\u0410 \u041F\u041B\u042E\u0421"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            variant: "h5",
            className: classes.text,
            style: {
              width: "60%"
            },
            children: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u044B \u0437\u0430 \u0447\u0435\u0441\u0442\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.btnWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Получить консультацию",
              style: {
                backgroundColor: "#B66D31"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
              to: "portfolio",
              smooth: true,
              duration: 1000,
              className: classes.btnMain,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                className: classes.btnWhite,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
                  className: classes.textBtn,
                  variant: "subtitle2",
                  children: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              variant: "h5",
              className: classes.number,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Связаться с нами",
              style: {
                backgroundColor: "black"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../static/mainIMG.jpeg",
          className: classes.mainImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.info,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"] // className={classes.textInfo}
            , {
              variant: "h4",
              children: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0438\u0434\u0435\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.secondaryImgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/mainTable.jpeg",
            className: classes.secondaryImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 9
  }, this);
}

_s(ButtonAppBar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ButtonAppBar;

var _c;

$RefreshReg$(_c, "ButtonAppBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1haW4iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJsb2dvIiwiZmxleERpcmVjdGlvbiIsImxvZ29JbWciLCJsb2dvSW1nTW9iIiwibWFpbkltZyIsImJvcmRlclJhZGl1cyIsInNlY29uZGFyeUltZyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInNlY29uZGFyeUltZ0NvbnRhaW5lciIsImxvZ29UZXh0IiwibWFyZ2luVG9wIiwidGV4dCIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJjb250YWN0SW5mbyIsImNvbnRhY3RJbmZvTW9iIiwidXAiLCJjb250YWN0IiwibWFyZ2luUmlnaHQiLCJudW1iZXIiLCJjb2xvciIsIm51bWJlck1vYiIsImJ0bldyYXBwZXIiLCJidG5NYWluIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwiYnRuU2Vjb25kYXJ5IiwibWFpbkluZm8iLCJiYWNrZ3JvdW5kIiwiYnRuV2hpdGUiLCJpbmZvIiwidGV4dEluZm8iLCJmb250U3R5bGUiLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxNQURMO0FBRUZDLGFBQU8sRUFBRSxNQUZQO0FBR0ZDLG9CQUFjLEVBQUUsUUFIZDtBQUlGQyxnQkFBVSxFQUFFO0FB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QUEsb0NBQ0kscUVBQUMsNERBQUQsQ0FDSTtBQURKO0FBRUkscUJBQU8sRUFBQyxJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixlQVFJLHFFQUFDLDREQUFEO0FBQ0ksdUJBQVMsRUFBRUksT0FBTyxDQUFDSCxRQUR2QjtBQUVJLHFCQUFPLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSixlQWNJLHFFQUFDLDREQUFEO0FBQ0ksdUJBQVMsRUFBRUcsT0FBTyxDQUFDSCxRQUR2QjtBQUVJLHFCQUFPLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkSixlQW9CSSxxRUFBQyw0REFBRDtBQUNJLHVCQUFTLEVBQUVHLE9BQU8sQ0FBQ0gsUUFEdkI7QUFFSSxxQkFBTyxFQUFDLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJKLGVBeURJO0FBQUssbUJBQVMsRUFBRUcsT0FBTyxDQUFDOUIscUJBQXhCO0FBQUEsaUNBQ0k7QUFDSSxlQUFHLEVBQUMsMEJBRFI7QUFFSSxxQkFBUyxFQUFFOEIsT0FBTyxDQUFDakM7QUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1SUg7O0dBMUl1QmdDLFk7VUFDSmxELFM7OztLQURJa0QsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjMyMTJiN2EzZTVjOTk0MDdkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcImxnXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgLy8gd2lkdGg6IFwiMjAlXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nb0ltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZ29JbWdNb2I6IHtcclxuICAgICAgICB3aWR0aDogXCIyNSVcIixcclxuICAgIH0sXHJcbiAgICBtYWluSW1nOiB7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnlJbWc6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0yNSVcIixcclxuICAgICAgICB3aWR0aDogNDUwLFxyXG4gICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJsZ1wiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItMzMlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnlJbWdDb250YWluZXI6IHt9LFxyXG4gICAgbG9nb1RleHQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1JVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjUlIDAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICB9LFxyXG4gICAgY29udGFjdEluZm86IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNjUwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjElXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0SW5mb01vYjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIzNSVcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCI1JVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSxcclxuICAgIG51bWJlck1vYjoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgfSxcclxuICAgIGJ0bldyYXBwZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cclxuICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICB9LFxyXG4gICAgYnRuTWFpbjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNSVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgLy8gXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcbiAgICBidG5TZWNvbmRhcnk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCUgNyVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiNSVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIG1haW5JbmZvOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNCNDhENkVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItNSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi01JVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ0bldoaXRlOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBtYXJnaW46IFwiMjAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dEluZm86IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25BcHBCYXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2xvZ29fdHJhbnNwYXJlbnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3RJbmZvTW9ifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbG9nb190cmFuc3BhcmVudC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltZ01vYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5udW1iZXJNb2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOCAoOTAzKSA4OTgtMDktMDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSB2YXJpYW50PSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCi0J7Qm9Cv0KDQndCQ0K8g0JzQkNCh0KLQldCg0KHQmtCQ0K8g0JvQldCh0KLQndCY0KbQkCDQn9Cb0K7QoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INC70LXRgdGC0L3QuNGG0Ysg0LfQsCDRh9C10YHRgtC90YvQtSDQtNC10L3RjNCz0LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcItCf0L7Qu9GD0YfQuNGC0Ywg0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89J3BvcnRmb2xpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV2hpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7RgNGC0YTQvtC70LjQvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3RJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgY2xhc3NOYW1lPXtjbGFzc2VzLm51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOCAoOTAzKSA4OTgtMDktMDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcItCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL21haW5JTUcuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5JbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC80L7QttC10Lwg0LLQvtC/0LvQvtGC0LjRgtGMINC40LTQtdC4INCyINGA0LXQsNC70YzQvdC+0YHRgtGMLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70L3Ri9C5INGG0LjQutC7INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCDQuCDRg9GB0LvRg9CzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCR0L7Qu9C10LUgMjAg0LvQtdGCINC90LAg0YDRi9C90LrQtSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9Cw0YDQsNC90YLQuNGPINCz0L7QtCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbWFpblRhYmxlLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9