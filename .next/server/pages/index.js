module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\pages\\index.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
    flexDirection: "column",
    height: "100%" // width: "20%",

  },
  logoImg: {
    width: "25%",
    height: "15%"
  },
  mainImg: {
    height: "90vh",
    borderRadius: "5px"
  },
  secondaryImg: {
    position: "absolute",
    borderRadius: "5px",
    marginLeft: "-25%",
    width: 450,
    height: 350
  },
  secondaryImgContainer: {},
  logoText: {
    marginTop: "10%",
    marginLeft: "5%"
  },
  text: {
    fontFamily: "Bodoni Moda",
    margin: "5% 0%"
  },
  textBtn: {
    fontFamily: "Bodoni Moda",
    fontSize: 12
  },
  contactInfo: {
    fontFamily: "Bodoni Moda",
    width: "650px",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1%"
  },
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
  btnWrapper: {
    display: "flex",
    alignItems: "center"
  },
  btnMain: {
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
    marginTop: "5%",
    "&:hover": {
      backgroundColor: "transparent",
      color: "black"
    }
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
    marginTop: "5%",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  },
  mainInfo: {
    height: 500,
    width: 550,
    background: "#B48D6E",
    position: "absolute",
    marginTop: "-5%",
    marginLeft: "-5%",
    borderRadius: "5px"
  }
}));
function ButtonAppBar() {
  const classes = useStyles();
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
          lineNumber: 129,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            className: classes.text,
            variant: "h2",
            children: "\u0421\u0422\u041E\u041B\u042F\u0420\u041D\u0410\u042F \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u041B\u0415\u0421\u0422\u041D\u0418\u0426\u0410 \u041F\u041B\u042E\u0421"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h5",
            className: classes.text,
            style: {
              width: "60%"
            },
            children: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u044B \u0437\u0430 \u0447\u0435\u0441\u0442\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.btnWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: classes.btnSecondary,
              style: {
                marginRight: "5%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                className: classes.textBtn,
                variant: "subtitle2",
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: classes.btnMain,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                className: classes.textBtn,
                variant: "subtitle2",
                children: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              variant: "h5",
              className: classes.number,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: classes.btnMain,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                className: classes.textBtn,
                variant: "subtitle2",
                children: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "../static/mainIMG.jpeg",
          className: classes.mainImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.secondaryImgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../static/mainTable.jpeg",
            className: classes.secondaryImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\pages\\index.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {}
}));
function Index() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYWluIiwiaGVpZ2h0IiwibG9nbyIsImZsZXhEaXJlY3Rpb24iLCJsb2dvSW1nIiwibWFpbkltZyIsImJvcmRlclJhZGl1cyIsInNlY29uZGFyeUltZyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInNlY29uZGFyeUltZ0NvbnRhaW5lciIsImxvZ29UZXh0IiwibWFyZ2luVG9wIiwidGV4dCIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJjb250YWN0SW5mbyIsImNvbnRhY3QiLCJtYXJnaW5SaWdodCIsIm51bWJlciIsImNvbG9yIiwiYnRuV3JhcHBlciIsImJ0bk1haW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJidG5TZWNvbmRhcnkiLCJtYWluSW5mbyIsImJhY2tncm91bmQiLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFD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QTtBQUFBLGdCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeE1EO0FBQ0E7QUFDQTtBQUVBLE1BQU1mLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3JDQyxNQUFJLEVBQUU7QUFEK0IsQ0FBWixDQUFELENBQTVCO0FBSWUsU0FBU3VDLEtBQVQsR0FBaUI7QUFDNUIsUUFBTUQsT0FBTyxHQUFHekMsU0FBUyxFQUF6QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFeUMsT0FBTyxDQUFDdEMsSUFBeEI7QUFBQSwyQkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0gsQzs7Ozs7Ozs7Ozs7QUNoQkQsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7fSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=