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
      opacity: 0.5
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
          lineNumber: 194,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfoMob,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/logo_transparent.png",
            className: classes.logoImgMob
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              variant: "h5",
              className: classes.numberMob,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: classes.text,
            variant: "h3",
            children: "\u0421\u0422\u041E\u041B\u042F\u0420\u041D\u0410\u042F \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u041B\u0415\u0421\u0422\u041D\u0418\u0426\u0410 \u041F\u041B\u042E\u0421"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
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
            lineNumber: 225,
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
              lineNumber: 233,
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
                  lineNumber: 246,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
              lineNumber: 261,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Связаться с нами",
              style: {
                backgroundColor: "black"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../static/mainIMG.jpeg",
          className: classes.mainImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.info,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"] // className={classes.textInfo}
            , {
              variant: "h4",
              children: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0438\u0434\u0435\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.secondaryImgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/mainTable.jpeg",
            className: classes.secondaryImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 191,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1haW4iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJsb2dvIiwiZmxleERpcmVjdGlvbiIsImxvZ29JbWciLCJsb2dvSW1nTW9iIiwibWFpbkltZyIsImJvcmRlclJhZGl1cyIsInNlY29uZGFyeUltZyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInNlY29uZGFyeUltZ0NvbnRhaW5lciIsImxvZ29UZXh0IiwibWFyZ2luVG9wIiwidGV4dCIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJjb250YWN0SW5mbyIsImNvbnRhY3RJbmZvTW9iIiwidXAiLCJjb250YWN0IiwibWFyZ2luUmlnaHQiLCJudW1iZXIiLCJjb2xvciIsIm51bWJlck1vYiIsImJ0bldyYXBwZXIiLCJidG5NYWluIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwiYnRuU2Vjb25kYXJ5IiwibWFpbkluZm8iLCJiYWNrZ3JvdW5kIiwiYnRuV2hpdGUiLCJpbmZvIiwidGV4dEluZm8iLCJmb250U3R5bGUiLCJvcGFjaXR5IiwiQnV0dG9uQXBwQmFyIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsTUFETDtBQUVGQyxhQUFPLEVBQUUsTUFGUDtBQUdGQyxvQkFBYyxFQUFFLFFBSGQ7QUFJRkMsZ0JB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SyxxQkFBUyxFQUFFUSxPQUFPLENBQUNMLElBQXhCO0FBQUEsb0NBQ0kscUVBQUMsNERBQUQsQ0FDSTtBQURKO0FBRUkscUJBQU8sRUFBQyxJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixlQVFJLHFFQUFDLDREQUFEO0FBQ0ksdUJBQVMsRUFBRUssT0FBTyxDQUFDSixRQUR2QjtBQUVJLHFCQUFPLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSixlQWNJLHFFQUFDLDREQUFEO0FBQ0ksdUJBQVMsRUFBRUksT0FBTyxDQUFDSixRQUR2QjtBQUVJLHFCQUFPLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkSixlQW9CSSxxRUFBQyw0REFBRDtBQUNJLHVCQUFTLEVBQUVJLE9BQU8sQ0FBQ0osUUFEdkI7QUFFSSxxQkFBTyxFQUFDLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJKLGVBeURJO0FBQUssbUJBQVMsRUFBRUksT0FBTyxDQUFDL0IscUJBQXhCO0FBQUEsaUNBQ0k7QUFDSSxlQUFHLEVBQUMsMEJBRFI7QUFFSSxxQkFBUyxFQUFFK0IsT0FBTyxDQUFDbEM7QUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1SUg7O0dBMUl1QmlDLFk7VUFDSm5ELFM7OztLQURJbUQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTk0ZjMxNDYxZTgxZTI2ZTQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcImxnXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgLy8gd2lkdGg6IFwiMjAlXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nb0ltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZ29JbWdNb2I6IHtcclxuICAgICAgICB3aWR0aDogXCIyNSVcIixcclxuICAgIH0sXHJcbiAgICBtYWluSW1nOiB7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnlJbWc6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0yNSVcIixcclxuICAgICAgICB3aWR0aDogNDUwLFxyXG4gICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJsZ1wiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItMzMlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnlJbWdDb250YWluZXI6IHt9LFxyXG4gICAgbG9nb1RleHQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1JVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjUlIDAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICB9LFxyXG4gICAgY29udGFjdEluZm86IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNjUwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjElXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0SW5mb01vYjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIzNSVcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCI1JVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSxcclxuICAgIG51bWJlck1vYjoge1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgfSxcclxuICAgIGJ0bldyYXBwZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cclxuICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICB9LFxyXG4gICAgYnRuTWFpbjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNSVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgLy8gXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcbiAgICBidG5TZWNvbmRhcnk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCUgNyVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiNSVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIG1haW5JbmZvOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgd2lkdGg6IDU1MCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNCNDhENkVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItNSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi01JVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ0bldoaXRlOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBtYXJnaW46IFwiMjAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dEluZm86IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICBmb250U2l6ZTogMjUsXHJcbiAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29JbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0SW5mb01vYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2xvZ29fdHJhbnNwYXJlbnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29JbWdNb2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubnVtYmVyTW9ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDggKDkwMykgODk4LTA5LTA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb1RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0gdmFyaWFudD0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQotCe0JvQr9Cg0J3QkNCvINCc0JDQodCi0JXQoNCh0JrQkNCvINCb0JXQodCi0J3QmNCm0JAg0J/Qm9Cu0KFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCa0LDRh9C10YHRgtCy0LXQvdC90YvQtSDQu9C10YHRgtC90LjRhtGLINC30LAg0YfQtdGB0YLQvdGL0LUg0LTQtdC90YzQs9C4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLQn9C+0LvRg9GH0LjRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPSdwb3J0Zm9saW8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0YDRgtGE0L7Qu9C40L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0SW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDggKDkwMykgODk4LTA5LTA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9tYWluSU1HLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QvNC+0LbQtdC8INCy0L7Qv9C70L7RgtC40YLRjCDQuNC00LXQuCDQsiDRgNC10LDQu9GM0L3QvtGB0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70L3Ri9C5INGG0LjQutC7INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCDQuCDRg9GB0LvRg9CzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCR0L7Qu9C10LUgMjAg0LvQtdGCINC90LAg0YDRi9C90LrQtSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9Cw0YDQsNC90YLQuNGPINCz0L7QtCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbWFpblRhYmxlLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9