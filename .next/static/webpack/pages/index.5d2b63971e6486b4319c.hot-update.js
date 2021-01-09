webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\pages\\index.js",
    _s = $RefreshSig$();



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    main: {
      width: "60%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "90vh"
    },
    logo: {
      display: "flex",
      height: "100%" // width: "20%",

    },
    logoImg: {
      width: "25%",
      height: "15%"
    },
    mainImg: {
      height: "90vh"
    },
    logoText: {}
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
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "123safdsgsdf"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dasdasdsadas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/mainIMG.jpeg",
        className: classes.mainImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1haW4iLCJoZWlnaHQiLCJsb2dvIiwibG9nb0ltZyIsIm1haW5JbWciLCJsb2dvVGV4dCIsIkJ1dHRvbkFwcEJhciIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLE1BREw7QUFFRkMsYUFBTyxFQUFFLE1BRlA7QUFHRkMsb0JBQWMsRUFBRSxRQUhkO0FBSUZDLGdCQUFVLEVBQUU7QUFKVixLQUQrQjtBQU9yQ0MsUUFBSSxFQUFFO0FBQ0ZKLFdBQUssRUFBRSxLQURMO0FBRUZDLGFBQU8sRUFBRSxNQUZQO0FBR0ZDLG9CQUFjLEVBQUUsY0FIZDtBQUlGQyxnQkFBVSxFQUFFLFFBSlY7QUFLRkUsWUFBTSxFQUFFO0FBTE4sS0FQK0I7QUFjckNDLFFBQUksRUFBRTtBQUNGTCxhQUFPLEVBQUUsTUFEUDtBQUVGSSxZQUFNLEVBQUUsTUFGTixDQUdGOztBQUhFLEtBZCtCO0FBbUJyQ0UsV0FBTyxFQUFFO0FBQ0xQLFdBQUssRUFBRSxLQURGO0FBRUxLLFlBQU0sRUFBRTtBQUZILEtBbkI0QjtBQXVCckNHLFdBQU8sRUFBRTtBQUNMSCxZQUFNLEVBQUU7QUFESCxLQXZCNEI7QUEwQnJDSSxZQUFRLEVBQUU7QUExQjJCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBNkJlLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1osSUFBeEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVksT0FBTyxDQUFDUCxJQUF4QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRU8sT0FBTyxDQUFDTCxJQUF4QjtBQUFBLGdDQUNJO0FBQ0ksYUFBRyxFQUFDLGdDQURSO0FBRUksbUJBQVMsRUFBRUssT0FBTyxDQUFDSjtBQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFFSSxPQUFPLENBQUNGLFFBQXhCO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFXSTtBQUFLLFdBQUcsRUFBQyx3QkFBVDtBQUFrQyxpQkFBUyxFQUFFRSxPQUFPLENBQUNIO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBcEJ1QkUsWTtVQUNKZCxTOzs7S0FESWMsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDJiNjM5NzFlNjQ4NmI0MzE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAvLyB3aWR0aDogXCIyMCVcIixcclxuICAgIH0sXHJcbiAgICBsb2dvSW1nOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjUlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE1JVwiLFxyXG4gICAgfSxcclxuICAgIG1haW5JbWc6IHtcclxuICAgICAgICBoZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgfSxcclxuICAgIGxvZ29UZXh0OiB7fSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29JbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4xMjNzYWZkc2dzZGY8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5kYXNkYXNkc2FkYXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvbWFpbklNRy5qcGVnJyBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=