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
      fontSize: 25,
      opacity: 0.8
    },
    textInfoHeading: {
      opacity: 0.8
    },
    hr: {
      color: "black"
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
          lineNumber: 200,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfoMob,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/logo_transparent.png",
            className: classes.logoImgMob
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              variant: "h5",
              className: classes.numberMob,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: classes.text,
            variant: "h3",
            children: "\u0421\u0422\u041E\u041B\u042F\u0420\u041D\u0410\u042F \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u041B\u0415\u0421\u0422\u041D\u0418\u0426\u0410 \u041F\u041B\u042E\u0421"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
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
            lineNumber: 231,
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
              lineNumber: 239,
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
                  lineNumber: 252,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
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
              lineNumber: 267,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Связаться с нами",
              style: {
                backgroundColor: "black"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../static/mainIMG.jpeg",
          className: classes.mainImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.info,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfoHeading,
              variant: "h4",
              children: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0438\u0434\u0435\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: classes.hr
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.secondaryImgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/mainTable.jpeg",
            className: classes.secondaryImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1haW4iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJsb2dvIiwiZmxleERpcmVjdGlvbiIsImxvZ29JbWciLCJsb2dvSW1nTW9iIiwibWFpbkltZyIsImJvcmRlclJhZGl1cyIsInNlY29uZGFyeUltZyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInNlY29uZGFyeUltZ0NvbnRhaW5lciIsImxvZ29UZXh0IiwibWFyZ2luVG9wIiwidGV4dCIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJjb250YWN0SW5mbyIsImNvbnRhY3RJbmZvTW9iIiwidXAiLCJjb250YWN0IiwibWFyZ2luUmlnaHQiLCJudW1iZXIiLCJjb2xvciIsIm51bWJlck1vYiIsImJ0bldyYXBwZXIiLCJidG5NYWluIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwiYnRuU2Vjb25kYXJ5IiwibWFpbkluZm8iLCJiYWNrZ3JvdW5kIiwiYnRuV2hpdGUiLCJpbmZvIiwidGV4dEluZm8iLCJmb250U3R5bGUiLCJvcGFjaXR5IiwidGV4dEluZm9IZWFkaW5nIiwiaHIiLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxNQURMO0FBRUZDLGFBQU8sRUFBRSxNQUZQO0FBR0ZDLG9C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LGNBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVJSDs7R0ExSXVCbUMsWTtVQUNKckQsUzs7O0tBRElxRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZWQ5M2JkMmE3NTIxYmMyMzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibGdcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAvLyB3aWR0aDogXCIyMCVcIixcclxuICAgIH0sXHJcbiAgICBsb2dvSW1nOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjUlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE1JVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbG9nb0ltZ01vYjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxyXG4gICAgfSxcclxuICAgIG1haW5JbWc6IHtcclxuICAgICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeUltZzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTI1JVwiLFxyXG4gICAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcImxnXCIpXToge1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi0zMyVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeUltZ0NvbnRhaW5lcjoge30sXHJcbiAgICBsb2dvVGV4dDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMCVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjUlXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBtYXJnaW46IFwiNSUgMCVcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0QnRuOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgIH0sXHJcbiAgICBjb250YWN0SW5mbzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICB3aWR0aDogXCI2NTBweFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMSVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3RJbmZvTW9iOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjM1JVwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjUlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIG51bWJlcjoge1xyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9LFxyXG4gICAgbnVtYmVyTW9iOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICB9LFxyXG4gICAgYnRuV3JhcHBlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblxyXG4gICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIH0sXHJcbiAgICBidG5NYWluOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1JVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAlIDclXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGJ0blNlY29uZGFyeToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1JVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgbWFpbkluZm86IHtcclxuICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgICB3aWR0aDogNTUwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI0I0OEQ2RVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi01JVwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTUlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYnRuV2hpdGU6IHtcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICAgIG1hcmdpbjogXCIyMCVcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0SW5mbzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICB9LFxyXG4gICAgdGV4dEluZm9IZWFkaW5nOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgfSxcclxuICAgIGhyOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbG9nb190cmFuc3BhcmVudC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdEluZm9Nb2J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1nTW9ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm51bWJlck1vYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ICg5MDMpIDg5OC0wOS0wNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9IHZhcmlhbnQ9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0KLQntCb0K/QoNCd0JDQryDQnNCQ0KHQotCV0KDQodCa0JDQryDQm9CV0KHQotCd0JjQptCQINCf0JvQrtChXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmtCw0YfQtdGB0YLQstC10L3QvdGL0LUg0LvQtdGB0YLQvdC40YbRiyDQt9CwINGH0LXRgdGC0L3Ri9C1INC00LXQvdGM0LPQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wi0J/QvtC70YPRh9C40YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0ncG9ydGZvbGlvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtGA0YLRhNC+0LvQuNC+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdEluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjbGFzc05hbWU9e2NsYXNzZXMubnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ICg5MDMpIDg5OC0wOS0wNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wi0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbWFpbklNRy5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkltZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SW5mb0hlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC80L7QttC10Lwg0LLQvtC/0LvQvtGC0LjRgtGMINC40LTQtdC4INCyINGA0LXQsNC70YzQvdC+0YHRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjbGFzc2VzLmhyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9C90YvQuSDRhtC40LrQuyDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LAg0Lgg0YPRgdC70YPQsy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkdC+0LvQtdC1IDIwINC70LXRgiDQvdCwINGA0YvQvdC60LUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPQsNGA0LDQvdGC0LjRjyDQs9C+0LQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUltZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL21haW5UYWJsZS5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==