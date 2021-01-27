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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Footer.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
}));
function Footer() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, this);
}

/***/ }),

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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Header.js";






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
    height: "90vh",
    [theme.breakpoints.down("lg")]: {
      width: "80%"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%"
    }
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    height: "100%" // width: "20%",

  },
  logoImg: {
    width: "25%",
    height: "15%",
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  logoImgMob: {
    width: "25%"
  },
  mainImg: {
    height: "90vh",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  secondaryImg: {
    position: "absolute",
    marginLeft: "-27%",
    marginTop: "-12%",
    borderRadius: "5px",
    // marginLeft: "-25%",
    width: 450,
    height: 350,
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-37%",
      marginTop: "-10%"
    }
  },
  secondaryImgContainer: {},
  logoText: {
    marginTop: "10%",
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      marginTop: 0
    }
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
    width: "auto",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1%",
    zIndex: 1,
    marginLeft: "17%",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  contactInfoMob: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center" // width: "35%",
    // marginRight: "5%",

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
  mainInfo: {
    height: 450,
    width: 500,
    background: "#B48D6E",
    position: "absolute",
    marginTop: "-15%",
    marginLeft: "-7%",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  btnWhite: {
    color: "white" // "&:hover": {
    //     backgroundColor: "white",
    //     color: "black",
    // },

  },
  info: {
    margin: "15% 20%"
  },
  textInfo: {
    fontFamily: "Bodoni Moda",
    fontStyle: "bold",
    fontSize: 25,
    opacity: 0.8
  },
  // textInfoHeading: {
  //     opacity: 0.8,
  // },
  hr: {
    border: "1px solid #EEE8AA"
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
          // width={"80px"}
          // height={"200px"}
          src: "/../static/logo_transparent.png",
          className: classes.logoImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.contactInfoMob,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.logoImgMob,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
              width: "100px",
              height: "100px",
              src: "/static/logo_transparent.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contact,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              variant: "h5",
              className: classes.numberMob,
              children: "8 (903) 898-09-06"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.logoText,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            className: classes.text,
            variant: "h3",
            children: "\u0421\u0422\u041E\u041B\u042F\u0420\u041D\u0410\u042F \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u041B\u0415\u0421\u0422\u041D\u0418\u0426\u0410 \u041F\u041B\u042E\u0421"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
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
            lineNumber: 244,
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
              lineNumber: 252,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              to: "portfolio",
              smooth: true,
              duration: 1000,
              className: classes.btnMain,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                className: classes.btnWhite,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                  className: classes.textBtn,
                  variant: "subtitle2",
                  children: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
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
              lineNumber: 280,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Связаться с нами",
              style: {
                backgroundColor: "black",
                border: "1px solid black"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainImg,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
            src: "/static/mainIMG.jpeg",
            width: "1100px",
            height: "1600px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainInfo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.info,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              style: {
                opacity: 0.8
              },
              variant: "h4",
              children: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0438\u0434\u0435\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: classes.hr
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              className: classes.textInfo,
              variant: "subtitle2",
              children: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.secondaryImgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.secondaryImg,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
              width: "500px",
              height: "400px",
              src: "/static/mainTable.jpeg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Modal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
}));

const styles = theme => ({
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
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
      variant: "h6",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined), onClose ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, undefined) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, undefined);
});
const DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default.a);
const DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a);
function CustomizedDialogs({
  title,
  style
}) {
  console.log(title);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [phone, setPhone] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  let data = {
    name,
    email,
    phone
  };

  const handleClose = () => {
    setOpen(false);
    Object(emailjs_com__WEBPACK_IMPORTED_MODULE_12__["init"])("user_oHsSoeZSR0bCDigKvVYe7");
    emailjs_com__WEBPACK_IMPORTED_MODULE_12___default.a.send("service_z3c98r8", "template_6mhrn4n", data).then(function (response) {
      console.log(response.status, response.text);
    }, function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a // variant='outlined'
    // color='primary'
    , {
      onClick: handleClickOpen,
      className: classes.btn,
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open // style={{ margin: "5%" }}
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DialogTitle, {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.form,
        autoComplete: "off",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
          id: "outlined-basic",
          label: "\u0418\u043C\u044F",
          variant: "outlined",
          className: classes.item,
          onChange: e => {
            setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
          id: "outlined-basic",
          label: "\u041F\u043E\u0447\u0442\u0430",
          variant: "outlined",
          className: classes.item,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
          id: "outlined-basic",
          label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
          variant: "outlined",
          className: classes.item,
          onChange: e => {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DialogActions, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

/***/ }),

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
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
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Slider.js";




 // import Heading from "../static/heading.png";


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30vh",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "5%",
      width: "90%"
    }
  },
  heading: {
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "-5%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  headingLogo: {
    width: "22%",
    height: "15%"
  },
  headingText: {
    fontFamily: "Bodoni Moda",
    fontStyle: "bold",
    fontSize: 25,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      fontFamily: "Bodoni Moda",
      fontStyle: "bold",
      display: "none"
    }
  },
  headingTextMob: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      fontFamily: "Bodoni Moda",
      fontWeight: 500
    }
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  textBtn: {},
  btnMain: {
    backgroundColor: "white",
    borderColor: "#B66D31",
    border: "1px solid",
    color: "black",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Bodoni Moda",
    borderRadius: 3,
    padding: "4% 10%",
    marginTop: "5%" // "&:hover": {
    //     backgroundColor: "#B66D31",
    //     color: "black",
    // },

  },
  slider: {
    display: "flex",
    justifyContent: "space-around",
    width: "80vw",
    margin: "3% auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0
    }
  },
  img: {
    // width: "20%",
    // height: "40%",
    margin: "1%",
    [theme.breakpoints.down("md")]: {// width: "30%",
    }
  },
  sliderItems: {
    display: "flex",
    justifyContent: "center",
    // alignItems: '',
    flexWrap: "wrap",
    height: "100%",
    width: "80vw",
    [theme.breakpoints.down("md")]: {
      width: "100vw"
    }
  },
  textBtn: {
    [theme.breakpoints.down("md")]: {
      fontSize: 10
    }
  }
}));
function ButtonAppBar() {
  const classes = useStyles();
  const {
    0: les,
    1: setLes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: kitchen,
    1: setKitchen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: other,
    1: setOther
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: floor,
    1: setFloor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  console.log(les); // useEffect(() => {
  //     setLes(!les);
  // }, []);

  const handleLes = () => {
    setLes(true);
    setKitchen(false);
    setOther(false);
    setFloor(false);
  };

  const handleKitchen = () => {
    setLes(false);
    setKitchen(true);
    setOther(false);
    setFloor(false);
  };

  const handleOther = () => {
    setLes(false);
    setKitchen(false);
    setOther(true);
    setFloor(false);
  };

  const handleFloor = () => {
    setLes(false);
    setKitchen(false);
    setOther(false);
    setFloor(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    id: "portfolio",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.heading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.headingText,
        children: "\u0417\u0430 20 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u044B \u043D\u0430\u043A\u043E\u043F\u0438\u043B\u0438 \u0431\u0435\u0441\u0446\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0433\u0430\u0436 \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u0430\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u0435\u0431\u0435\u043B\u044C \u0441\u043E \u0441\u043C\u044B\u0441\u043B\u043E\u043C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.headingTextMob,
        children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433. \u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435! \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/logo_transparent.png",
        alt: "heading",
        className: classes.headingLogo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.btnWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        onClick: handleLes,
        style: {
          backgroundColor: les ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        onClick: handleKitchen,
        style: {
          backgroundColor: kitchen ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041A\u0443\u0445\u043D\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain,
        onClick: handleOther,
        style: {
          backgroundColor: other ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain,
        onClick: handleFloor,
        style: {
          backgroundColor: floor ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0426\u0438\u043A\u043B\u0435\u0432\u043A\u0430 \u043F\u043E\u043B\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.slider,
      children: [les && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/mainIMG.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/01082011273.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/01082011275.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/P1030999.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/04092014830.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/26092012559.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/DSC01270.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/DSC01222.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/DSC01248.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-35-18.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-33-03.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-40-39.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-40-57.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-41-32.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-41-41.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/buk.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/084.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/105.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/01102014843.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/100_2119.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/100_2122.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/17122014866.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/DSC00192.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/stairs/DSC00162.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-33-38.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-34-35.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "450px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-34-39.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-32-04.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-36-26.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-33-31.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "550px",
            className: classes.img,
            src: "/static/stairs/photo_2021-01-05_18-39-03.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }, this), kitchen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/kitchen/4.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/kitchen/2.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 504,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/kitchen/1.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 512,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "300px",
            className: classes.img,
            src: "/static/kitchen/3.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 520,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 21
      }, this), other && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/furniture/4.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/furniture/5.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 542,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/furniture/6.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/furniture/1.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/furniture/2.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "350px",
            className: classes.img,
            src: "/static/furniture/3.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 21
      }, this), floor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/floor/1.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 587,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/floor/2.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 595,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/floor/3.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/floor/4.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 611,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
            width: "350px",
            height: "250px",
            className: classes.img,
            src: "/static/floor/5.JPG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


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
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\pages\\index.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {}
}));
function Index() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIkZvb3RlciIsImNsYXNzZXMiLCJtYWluIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibG9nbyIsImZsZXhEaXJlY3Rpb24iLCJsb2dvSW1nIiwibWFyZ2luTGVmdCIsImxvZ29JbWdNb2IiLCJtYWluSW1nIiwiYm9yZGVyUmFkaXVzIiwic2Vjb25kYXJ5SW1nIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJzZWNvbmRhcnlJbWdDb250YWluZXIiLCJsb2dvVGV4dCIsInRleHQiLCJmb250RmFtaWx5IiwibWFyZ2luIiwidGV4dEJ0biIsImZvbnRTaXplIiwiY29udGFjdEluZm8iLCJ6SW5kZXgiLCJjb250YWN0SW5mb01vYiIsInVwIiwiY29udGFjdCIsIm51bWJlciIsImNvbG9yIiwibnVtYmVyTW9iIiwiYnRuV3JhcHBlciIsImJ0bk1haW4iLCJib3JkZXJDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJidG5TZWNvbmRhcnkiLCJtYWluSW5mbyIsImJhY2tncm91bmQiLCJidG5XaGl0ZSIsImluZm8iLCJ0ZXh0SW5mbyIsImZvbnRTdHlsZSIsIm9wYWNpdHkiLCJociIsIkJ1dHRvbkFwcEJhciIsImJ0biIsImZvcm0iLCJpdGVtIiwic3R5bGVzIiwic3BhY2luZyIsImNsb3NlQnV0dG9uIiwicmlnaHQiLCJ0b3AiLCJwYWxldHRlIiwiZ3JleSIsIkRpYWxvZ1RpdGxlIiwid2l0aFN0eWxlcyIsInByb3BzIiwiY2hpbGRyZW4iLCJvbkNsb3NlIiwib3RoZXIiLCJEaWFsb2dDb250ZW50IiwiTXVpRGlhbG9nQ29udGVudCIsIkRpYWxvZ0FjdGlvbnMiLCJNdWlEaWFsb2dBY3Rpb25zIiwiQ3VzdG9taXplZERpYWxvZ3MiLCJ0aXRsZSIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJoYW5kbGVDbGlja09wZW4iLCJkYXRhIiwiaGFuZGxlQ2xvc2UiLCJpbml0IiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVhZGluZ0xvZ28iLCJoZWFkaW5nVGV4dCIsImhlYWRpbmdUZXh0TW9iIiwiZm9udFdlaWdodCIsInNsaWRlciIsImltZyIsInNsaWRlckl0ZW1zIiwiZmxleFdyYXAiLCJsZXMiLCJzZXRMZXMiLCJraXRjaGVuIiwic2V0S2l0Y2hlbiIsInNldE90aGVyIiwiZmxvb3IiLCJzZXRGbG9vciIsImhhbmRsZUxlcyIsImhhbmRsZUtpdGNoZW4iLCJoYW5kbGVPdGhlciIsImhhbmRsZUZsb29yIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsInciLCJwIiwic3JjU2V0Iiwic2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjIiwiaSIsInBhcnNlSW50IiwibG9hZCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJsZWZ0IiwiYm90dG9tIiwiYm94U2l6aW5nIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QUFBO0FBRmRIO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7O0FDckdELGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU12TixTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsTUFBSSxFQUFFO0FBRCtCLENBQVosQ0FBRCxDQUE1QjtBQUllLFNBQVMyTixLQUFULEdBQWlCO0FBQzVCLFFBQU1uTixPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVcsT0FBTyxDQUFDUixJQUF4QjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9ILEM7Ozs7Ozs7Ozs7O0FDcEJELDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzB2aFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PjwvZGl2PjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjkwdmhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcImxnXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgLy8gd2lkdGg6IFwiMjAlXCIsXHJcbiAgICB9LFxyXG4gICAgbG9nb0ltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjUlXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsb2dvSW1nTW9iOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjUlXCIsXHJcbiAgICB9LFxyXG4gICAgbWFpbkltZzoge1xyXG4gICAgICAgIGhlaWdodDogXCI5MHZoXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5SW1nOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0yNyVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTEyJVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAvLyBtYXJnaW5MZWZ0OiBcIi0yNSVcIixcclxuICAgICAgICB3aWR0aDogNDUwLFxyXG4gICAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJsZ1wiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItMzclXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCItMTAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnlJbWdDb250YWluZXI6IHt9LFxyXG4gICAgbG9nb1RleHQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1JVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjUlIDAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICB9LFxyXG4gICAgY29udGFjdEluZm86IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMSVcIixcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxNyVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3RJbmZvTW9iOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIC8vIHdpZHRoOiBcIjM1JVwiLFxyXG4gICAgICAgIC8vIG1hcmdpblJpZ2h0OiBcIjUlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIG51bWJlcjoge1xyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9LFxyXG4gICAgbnVtYmVyTW9iOiB7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICB9LFxyXG4gICAgYnRuV3JhcHBlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblxyXG4gICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIH0sXHJcbiAgICBidG5NYWluOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1JVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAlIDclXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGJ0blNlY29uZGFyeToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1JVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgbWFpbkluZm86IHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICB3aWR0aDogNTAwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI0I0OEQ2RVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0xNSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi03JVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ0bldoaXRlOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBtYXJnaW46IFwiMTUlIDIwJVwiLFxyXG4gICAgfSxcclxuICAgIHRleHRJbmZvOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgIH0sXHJcbiAgICAvLyB0ZXh0SW5mb0hlYWRpbmc6IHtcclxuICAgIC8vICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAvLyB9LFxyXG4gICAgaHI6IHtcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFRUU4QUFcIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9e1wiODBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9e1wiMjAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvLi4vc3RhdGljL2xvZ29fdHJhbnNwYXJlbnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3RJbmZvTW9ifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltZ01vYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIxMDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIxMDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5udW1iZXJNb2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOCAoOTAzKSA4OTgtMDktMDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSB2YXJpYW50PSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCi0J7Qm9Cv0KDQndCQ0K8g0JzQkNCh0KLQldCg0KHQmtCQ0K8g0JvQldCh0KLQndCY0KbQkCDQn9Cb0K7QoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INC70LXRgdGC0L3QuNGG0Ysg0LfQsCDRh9C10YHRgtC90YvQtSDQtNC10L3RjNCz0LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcItCf0L7Qu9GD0YfQuNGC0Ywg0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89J3BvcnRmb2xpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV2hpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7RgNGC0YTQvtC70LjQvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3RJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgY2xhc3NOYW1lPXtjbGFzc2VzLm51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOCAoOTAzKSA4OTgtMDktMDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcItCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5JbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9tYWluSU1HLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIxMTAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIxNjAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgb3BhY2l0eTogMC44IH19IHZhcmlhbnQ9J2g0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LzQvtC20LXQvCDQstC+0L/Qu9C+0YLQuNGC0Ywg0LjQtNC10Lgg0LIg0YDQtdCw0LvRjNC90L7RgdGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzZXMuaHJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70L3Ri9C5INGG0LjQutC7INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCDQuCDRg9GB0LvRg9CzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCR0L7Qu9C10LUgMjAg0LvQtdGCINC90LAg0YDRi9C90LrQtSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9Cw0YDQsNC90YLQuNGPINCz0L7QtCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjUwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL21haW5UYWJsZS5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBNdWlEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XHJcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiZW1haWxqcy1jb21cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgLy8gcm9vdDoge1xyXG4gICAgLy8gICAgIG1hcmdpbjogMCxcclxuICAgIC8vICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIGNsb3NlQnV0dG9uOiB7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIC8vICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIC8vICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAvLyAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgLy8gfSxcclxuICAgIGJ0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwJSA3JVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1JVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgaXRlbToge1xyXG4gICAgICAgIG1hcmdpbjogXCI1JVwiLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIGNsb3NlQnV0dG9uOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ub3RoZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9NdWlEaWFsb2dUaXRsZT5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nQ29udGVudCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBEaWFsb2dBY3Rpb25zID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG59KSkoTXVpRGlhbG9nQWN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkRGlhbG9ncyh7IHRpdGxlLCBzdHlsZSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgaW5pdChcInVzZXJfb0hzU29lWlNSMGJDRGlnS3ZWWWU3XCIpO1xyXG5cclxuICAgICAgICBlbWFpbGpzLnNlbmQoXCJzZXJ2aWNlX3ozYzk4cjhcIiwgXCJ0ZW1wbGF0ZV82bWhybjRuXCIsIGRhdGEpLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdjdXN0b21pemVkLWRpYWxvZy10aXRsZSdcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXJnaW46IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9taXplZC1kaWFsb2ctdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjclIDAlIDAlIDAlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQn9C+0LvRg9GH0LjRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjiDRgdC/0LXRhtC40LDQu9C40YHRgtCwXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdvdXRsaW5lZC1iYXNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J9CY0LzRjydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nb3V0bGluZWQtYmFzaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSfQn9C+0YfRgtCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0n0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIjtcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCI7XHJcbi8vIGltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9zdGF0aWMvaGVhZGluZy5wbmdcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMzB2aFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjcwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCItNSVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nTG9nbzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjIyJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nVGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nVGV4dE1vYjoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBidG5XcmFwcGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCI3MCVcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnRuOiB7fSxcclxuICAgIGJ0bk1haW46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiNCUgMTAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjUlXCIsXHJcbiAgICAgICAgLy8gXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICAvLyAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIHNsaWRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjgwdndcIixcclxuICAgICAgICBtYXJnaW46IFwiMyUgYXV0b1wiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcbiAgICAgICAgLy8gd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiBcIjQwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxJVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBcIjMwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2xpZGVySXRlbXM6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAvLyBhbGlnbkl0ZW1zOiAnJyxcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcblxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiODB2d1wiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnRuOiB7XHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25BcHBCYXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbbGVzLCBzZXRMZXNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBba2l0Y2hlbiwgc2V0S2l0Y2hlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3RoZXIsIHNldE90aGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmbG9vciwgc2V0Rmxvb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxlcyk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldExlcyghbGVzKTtcclxuICAgIC8vIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUxlcyA9ICgpID0+IHtcclxuICAgICAgICBzZXRMZXModHJ1ZSk7XHJcbiAgICAgICAgc2V0S2l0Y2hlbihmYWxzZSk7XHJcbiAgICAgICAgc2V0T3RoZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldEZsb29yKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVLaXRjaGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExlcyhmYWxzZSk7XHJcbiAgICAgICAgc2V0S2l0Y2hlbih0cnVlKTtcclxuICAgICAgICBzZXRPdGhlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0Rmxvb3IoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZU90aGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExlcyhmYWxzZSk7XHJcbiAgICAgICAgc2V0S2l0Y2hlbihmYWxzZSk7XHJcbiAgICAgICAgc2V0T3RoZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0Rmxvb3IoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUZsb29yID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExlcyhmYWxzZSk7XHJcbiAgICAgICAgc2V0S2l0Y2hlbihmYWxzZSk7XHJcbiAgICAgICAgc2V0T3RoZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldEZsb29yKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGlkPSdwb3J0Zm9saW8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsCAyMCDQu9C10YIg0YDQsNCx0L7RgtGLINC80Ysg0L3QsNC60L7Qv9C40LvQuCDQsdC10YHRhtC10L3QvdGL0Lkg0LHQsNCz0LDQtiDQvtC/0YvRgtCwINC4XHJcbiAgICAgICAgICAgICAgICAgICAg0L3QsNGD0YfQuNC70LjRgdGMINC00LXQu9Cw0YLRjCDQvNC10LHQtdC70Ywg0YHQviDRgdC80YvRgdC70L7QvFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmdUZXh0TW9ifT5cclxuICAgICAgICAgICAgICAgICAgICDQn9C+0LvQvdGL0Lkg0YbQuNC60Lsg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstCwINC4INGD0YHQu9GD0LMuINCR0L7Qu9C10LUgMjAg0LvQtdGCINC90LAg0YDRi9C90LrQtSFcclxuICAgICAgICAgICAgICAgICAgICDQk9Cw0YDQsNC90YLQuNGPINCz0L7QtCFcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2hlYWRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmdMb2dvfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBsZXMgPyBcIiNCNjZEMzFcIiA6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQm9C10YHRgtC90LjRhtGLINC/0L7QtCDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlS2l0Y2hlbn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGtpdGNoZW4gPyBcIiNCNjZEMzFcIiA6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmtGD0YXQvdC4XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPdGhlcn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IG90aGVyID8gXCIjQjY2RDMxXCIgOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn0gdmFyaWFudD0nc3VidGl0bGUyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtC+0LvRj9GA0L3Ri9C1INC40LfQtNC10LvQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmxvb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmbG9vciA/IFwiI0I2NkQzMVwiIDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LjQutC70LXQstC60LAg0L/QvtC70L7QslxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIHtsZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlckl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvbWFpbklNRy5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI0NTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy8wMTA4MjAxMTI3My5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzLzAxMDgyMDExMjc1LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzL1AxMDMwOTk5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzLzA0MDkyMDE0ODMwLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzLzI2MDkyMDEyNTU5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvRFNDMDEyNzAuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvRFNDMDEyMjIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvRFNDMDEyNDguSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zNS0xOC5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI0NTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMzLTAzLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtNDAtMzkuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MC01Ny5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI0NTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTQxLTMyLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MS00MS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy9idWsuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvMDg0LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvMTA1LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvMDExMDIwMTQ4NDMuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy8xMDBfMjExOS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzLzEwMF8yMTIyLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvMTcxMjIwMTQ4NjYuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvRFNDMDAxOTIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvRFNDMDAxNjIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zMy0zOC5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjQ1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzQtMzUuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNDUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zNC0zOS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIyNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMyLTA0LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzYtMjYuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zMy0zMS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjU1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzktMDMuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtraXRjaGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL2tpdGNoZW4vNC5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMva2l0Y2hlbi8yLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMva2l0Y2hlbi8xLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMva2l0Y2hlbi8zLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge290aGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIyNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL2Z1cm5pdHVyZS80LmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIyNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL2Z1cm5pdHVyZS81LmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZnVybml0dXJlLzYuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMzUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMjUwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9mdXJuaXR1cmUvMS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZnVybml0dXJlLzIuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzNTBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvc3RhdGljL2Z1cm5pdHVyZS8zLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Zmxvb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlckl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZmxvb3IvMS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZmxvb3IvMi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZmxvb3IvMy5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZmxvb3IvNC5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjM1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9zdGF0aWMvZmxvb3IvNS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0KVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICdpbmhlcml0JyA6ICdoaWRkZW4nLFxuXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NsaWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7fSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8U2xpZGVyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8Rm9vdGVyIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=