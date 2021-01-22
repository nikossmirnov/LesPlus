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

var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Slider.js";


 // import Heading from "../static/heading.png";

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50vh",
    flexDirection: "column"
  },
  heading: {
    display: "flex",
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  headingLogo: {
    width: "25%",
    height: "15%"
  },
  headingText: {
    fontFamily: "Bodoni Moda",
    fontStyle: "bold",
    fontSize: 25,
    display: "flex"
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    justifyContent: "center"
  },
  textBtn: {},
  btnMain: {
    backgroundColor: "white",
    borderColor: "#B66D31",
    border: "1px solid",
    color: "black",
    height: "70px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Bodoni Moda",
    borderRadius: 3,
    padding: "5% 10%",
    marginTop: "5%",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  }
}));
function ButtonAppBar() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.heading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.headingText,
        children: "\u0417\u0430 20 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u044B \u043D\u0430\u043A\u043E\u043F\u0438\u043B\u0438 \u0431\u0435\u0441\u0446\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0433\u0430\u0436 \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u0430\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u0435\u0431\u0435\u043B\u044C \u0441\u043E \u0441\u043C\u044B\u0441\u043B\u043E\u043C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/logo_transparent.png",
        alt: "heading",
        className: classes.headingLogo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.btnWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041A\u0443\u0445\u043D\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: classes.btnMain,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0426\u0438\u043A\u043B\u0435\u0432\u043A\u0430 \u043F\u043E\u043B\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");

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
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYWluIiwiaGVpZ2h0IiwibG9nbyIsImZsZXhEaXJlY3Rpb24iLCJsb2dvSW1nIiwibWFpbkltZyIsImJvcmRlclJhZGl1cyIsInNlY29uZGFyeUltZyIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInNlY29uZGFyeUltZ0NvbnRhaW5lciIsImxvZ29UZXh0IiwibWFyZ2luVG9wIiwidGV4dCIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJ0ZXh0QnRuIiwiZm9udFNpemUiLCJjb250YWN0SW5mbyIsImNvbnRhY3QiLCJtYXJnaW5SaWdodCIsIm51bWJlciIsImNvbG9yIiwiYnRuV3JhcHBlciIsImJ0bk1haW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJidG5TZWNvbmRhcnkiLCJtYWluSW5mbyIsImJhY2tncm91bmQiLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIiwiaGVhZGluZyIsImhlYWRpbmdMb2dvIiwiaGVhZGluZ1RleHQiLCJmb250U3R5bGUiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q3RDLElBQXhCO0FBQUEsNEJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUgsQzs7Ozs7Ozs7Ozs7QUVsQkQsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NsaWRlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7fSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8U2xpZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vIGltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9zdGF0aWMvaGVhZGluZy5wbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1MHZoXCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nTG9nbzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1JVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nVGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIH0sXHJcbiAgICBidG5XcmFwcGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0QnRuOiB7fSxcclxuICAgIGJ0bk1haW46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjcwcHhcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIkJvZG9uaSBNb2RhXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiNSUgMTAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjUlXCIsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsCAyMCDQu9C10YIg0YDQsNCx0L7RgtGLINC80Ysg0L3QsNC60L7Qv9C40LvQuCDQsdC10YHRhtC10L3QvdGL0Lkg0LHQsNCz0LDQtiDQvtC/0YvRgtCwINC4XHJcbiAgICAgICAgICAgICAgICAgICAg0L3QsNGD0YfQuNC70LjRgdGMINC00LXQu9Cw0YLRjCDQvNC10LHQtdC70Ywg0YHQviDRgdC80YvRgdC70L7QvFxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2xvZ29fdHJhbnNwYXJlbnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0naGVhZGluZydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ0xvZ299XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQm9C10YHRgtC90LjRhtGLINC/0L7QtCDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCa0YPRhdC90LhcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0YLQvtC70Y/RgNC90YvQtSDQuNC30LTQtdC70LjRj1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LjQutC70LXQstC60LAg0L/QvtC70L7QslxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9