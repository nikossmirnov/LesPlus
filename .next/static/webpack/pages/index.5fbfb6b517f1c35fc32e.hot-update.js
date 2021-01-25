webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
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
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\123\\Desktop\\LesPlus\\components\\Slider.js",
    _s = $RefreshSig$();





 // import Heading from "../static/heading.png";

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _headingTextMob;

  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50vh",
      flexDirection: "column"
    }, theme.breakpoints.down("md"), {
      margin: "5%",
      width: "90%"
    }),
    heading: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      width: "70%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "-5%"
    }, theme.breakpoints.down("md"), {
      width: "100%"
    }),
    headingLogo: {
      width: "22%",
      height: "15%"
    },
    headingText: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      fontFamily: "Bodoni Moda",
      fontStyle: "bold",
      fontSize: 25,
      display: "flex"
    }, theme.breakpoints.down("md"), {
      fontSize: 15,
      fontFamily: "Bodoni Moda",
      fontStyle: "bold",
      display: "none"
    }),
    headingTextMob: (_headingTextMob = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_headingTextMob, theme.breakpoints.up("md"), {
      display: "none"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_headingTextMob, theme.breakpoints.down("md"), {
      fontSize: 15,
      fontFamily: "Bodoni Moda",
      fontWeight: "bold"
    }), _headingTextMob),
    btnWrapper: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      alignItems: "center",
      width: "70%",
      justifyContent: "center"
    }, theme.breakpoints.down("md"), {
      width: "100%"
    }),
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
    slider: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      justifyContent: "space-around",
      width: "80vw",
      margin: "3% auto"
    }, theme.breakpoints.down("md"), {
      width: "100%",
      margin: 0
    }),
    img: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: "20%",
      height: "40%",
      margin: "3% 3%"
    }, theme.breakpoints.down("md"), {
      width: "30%"
    }),
    sliderItems: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      height: "100%",
      width: "80vw"
    }, theme.breakpoints.down("md"), {
      width: "100vw"
    })
  }, "textBtn", Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down("md"), {
    fontSize: 10
  }));
});
function ButtonAppBar() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      les = _useState[0],
      setLes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      kitchen = _useState2[0],
      setKitchen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      other = _useState3[0],
      setOther = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      floor = _useState4[0],
      setFloor = _useState4[1];

  console.log(les); // useEffect(() => {
  //     setLes(!les);
  // }, []);

  var handleLes = function handleLes() {
    setLes(true);
    setKitchen(false);
    setOther(false);
    setFloor(false);
  };

  var handleKitchen = function handleKitchen() {
    setLes(false);
    setKitchen(true);
    setOther(false);
    setFloor(false);
  };

  var handleOther = function handleOther() {
    setLes(false);
    setKitchen(false);
    setOther(true);
    setFloor(false);
  };

  var handleFloor = function handleFloor() {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        className: classes.headingText,
        children: "\u0417\u0430 20 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u044B \u043D\u0430\u043A\u043E\u043F\u0438\u043B\u0438 \u0431\u0435\u0441\u0446\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0433\u0430\u0436 \u043E\u043F\u044B\u0442\u0430 \u0438 \u043D\u0430\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u0435\u0431\u0435\u043B\u044C \u0441\u043E \u0441\u043C\u044B\u0441\u043B\u043E\u043C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        className: classes.headingTextMob,
        children: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433. \u0411\u043E\u043B\u0435\u0435 20 \u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435! \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0433\u043E\u0434!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/logo_transparent.png",
        alt: "heading",
        className: classes.headingLogo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.btnWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        onClick: handleLes,
        style: {
          backgroundColor: les ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.btnMain // style={{ marginRight: "5%" }}
        ,
        onClick: handleKitchen,
        style: {
          backgroundColor: kitchen ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u041A\u0443\u0445\u043D\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.btnMain,
        onClick: handleOther,
        style: {
          backgroundColor: other ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.btnMain,
        onClick: handleFloor,
        style: {
          backgroundColor: floor ? "#B66D31" : "white"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          className: classes.textBtn,
          variant: "subtitle2",
          children: "\u0426\u0438\u043A\u043B\u0435\u0432\u043A\u0430 \u043F\u043E\u043B\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.slider,
      children: [les && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/mainIMG.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01082011273.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01082011275.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01102014843.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/100_2119.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/100_2122.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/P1030999.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/04092014830.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/26092012559.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01270.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01222.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01248.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/17122014866.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC00192.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC00162.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-38.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-34-35.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-34-39.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-32-04.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-36-26.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-31.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-35-18.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-03.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-39-03.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-40-39.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-40-57.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-41-32.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-41-41.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/buk.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/084.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/105.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }, this), kitchen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/4.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/2.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/1.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/3.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 21
      }, this), other && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/4.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/5.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/6.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/3.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 21
      }, this), floor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/1.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/2.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/3.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/4.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/5.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 9
  }, this);
}

_s(ButtonAppBar, "h7ZVxJWL9CdN4TsElFBuT//S+yE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW4iLCJoZWFkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVhZGluZ0xvZ28iLCJoZWlnaHQiLCJoZWFkaW5nVGV4dCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250U2l6ZSIsImhlYWRpbmdUZXh0TW9iIiwidXAiLCJmb250V2VpZ2h0IiwiYnRuV3JhcHBlciIsInRleHRCdG4iLCJidG5NYWluIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJzbGlkZXIiLCJpbWciLCJzbGlkZXJJdGVtcyIsImZsZXhXcmFwIiwiQnV0dG9uQXBwQmFyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibGVzIiwic2V0TGVzIiwia2l0Y2hlbiIsInNldEtpdGNoZW4iLCJvdGhlciIsInNldE90aGVyIiwiZmxvb3IiLCJzZXRGbG9vciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMZXMiLCJoYW5kbGVLaXRjaGVuIiwiaGFuZGxlT3RoZXIiLCJoYW5kbGVGbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUE7QUFDekJDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsTUFEUDtBQUVBQyxhQUFPLEVBQUUsTUFGVDtBQUdBQyxvQkFBYyxFQUFFLFFBSGhCO0FBSUFDLGdCQUFV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QkosZUFxQkk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkosZUEwQkk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkosZUErQkk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkosZUFtQ0k7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0osZUF3Q0k7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Q0osZUE2Q0k7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q0osZUFrREk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREosZUF1REk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REosZUE0REk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1REosZUFnRUk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUosZUF5RUk7QUFDSSxtQkFBUyxFQUFFSSxPQUFP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QUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKLGVBYUk7QUFDSSxtQkFBUyxFQUFFSSxPQUFPLENBQUNKLEdBRHZCO0FBRUksYUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQWlCSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExTVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbVNIOztHQXZVdUJHLFk7VUFDSnJDLFM7OztLQURJcUMsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZmJmYjZiNTE3ZjFjMzVmYzMyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCI7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiO1xyXG4vLyBpbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vc3RhdGljL2hlYWRpbmcucG5nXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiNTB2aFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjcwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCItNSVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nTG9nbzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjIyJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxNSVcIixcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nVGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nVGV4dE1vYjoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ0bldyYXBwZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjcwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdG46IHt9LFxyXG4gICAgYnRuTWFpbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNCNjZEMzFcIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQm9kb25pIE1vZGFcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgICAgcGFkZGluZzogXCI0JSAxMCVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiNSVcIixcclxuICAgICAgICAvLyBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIC8vICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgc2xpZGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiODB2d1wiLFxyXG4gICAgICAgIG1hcmdpbjogXCIzJSBhdXRvXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgICB3aWR0aDogXCIyMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjMlIDMlXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzbGlkZXJJdGVtczoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB3aWR0aDogXCI4MHZ3XCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdG46IHtcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtsZXMsIHNldExlc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtraXRjaGVuLCBzZXRLaXRjaGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvdGhlciwgc2V0T3RoZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Zsb29yLCBzZXRGbG9vcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobGVzKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0TGVzKCFsZXMpO1xyXG4gICAgLy8gfSwgW10pO1xyXG4gICAgY29uc3QgaGFuZGxlTGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExlcyh0cnVlKTtcclxuICAgICAgICBzZXRLaXRjaGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRPdGhlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0Rmxvb3IoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUtpdGNoZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzKGZhbHNlKTtcclxuICAgICAgICBzZXRLaXRjaGVuKHRydWUpO1xyXG4gICAgICAgIHNldE90aGVyKGZhbHNlKTtcclxuICAgICAgICBzZXRGbG9vcihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlT3RoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzKGZhbHNlKTtcclxuICAgICAgICBzZXRLaXRjaGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRPdGhlcih0cnVlKTtcclxuICAgICAgICBzZXRGbG9vcihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlRmxvb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzKGZhbHNlKTtcclxuICAgICAgICBzZXRLaXRjaGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRPdGhlcihmYWxzZSk7XHJcbiAgICAgICAgc2V0Rmxvb3IodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gaWQ9J3BvcnRmb2xpbyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmdUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICDQl9CwIDIwINC70LXRgiDRgNCw0LHQvtGC0Ysg0LzRiyDQvdCw0LrQvtC/0LjQu9C4INCx0LXRgdGG0LXQvdC90YvQuSDQsdCw0LPQsNC2INC+0L/Ri9GC0LAg0LhcclxuICAgICAgICAgICAgICAgICAgICDQvdCw0YPRh9C40LvQuNGB0Ywg0LTQtdC70LDRgtGMINC80LXQsdC10LvRjCDRgdC+INGB0LzRi9GB0LvQvtC8XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ1RleHRNb2J9PlxyXG4gICAgICAgICAgICAgICAgICAgINCf0L7Qu9C90YvQuSDRhtC40LrQuyDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LAg0Lgg0YPRgdC70YPQsy4g0JHQvtC70LXQtSAyMCDQu9C10YIg0L3QsCDRgNGL0L3QutC1IVxyXG4gICAgICAgICAgICAgICAgICAgINCT0LDRgNCw0L3RgtC40Y8g0LPQvtC0IVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2xvZ29fdHJhbnNwYXJlbnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0naGVhZGluZydcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ0xvZ299XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxlc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGxlcyA/IFwiI0I2NkQzMVwiIDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCb0LXRgdGC0L3QuNGG0Ysg0L/QvtC0INC30LDQutCw0LdcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVLaXRjaGVufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjoga2l0Y2hlbiA/IFwiI0I2NkQzMVwiIDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCa0YPRhdC90LhcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qINCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuCAqL31cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU90aGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogb3RoZXIgPyBcIiNCNjZEMzFcIiA6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQodGC0L7Qu9GP0YDQvdGL0LUg0LjQt9C00LXQu9C40Y9cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGbG9vcn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGZsb29yID8gXCIjQjY2RDMxXCIgOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn0gdmFyaWFudD0nc3VidGl0bGUyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KbQuNC60LvQtdCy0LrQsCDQv9C+0LvQvtCyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAge2xlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVySXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvbWFpbklNRy5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzAxMDgyMDExMjczLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8wMTA4MjAxMTI3NS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMDExMDIwMTQ4NDMuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzEwMF8yMTE5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8xMDBfMjEyMi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL1AxMDMwOTk5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMDQwOTIwMTQ4MzAuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzI2MDkyMDEyNTU5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvRFNDMDEyNzAuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9EU0MwMTIyMi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL0RTQzAxMjQ4LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMTcxMjIwMTQ4NjYuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9EU0MwMDE5Mi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvRFNDMDAxNjIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMxLTI5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzMtMzguSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzQtMzUuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzQtMzkuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzItMDQuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTM2LTI2LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zMy0zMS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzUtMTguSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMzLTAzLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zOS0wMy5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MC0zOS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MC01Ny5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MS0zMi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC00MS00MS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvYnVrLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8wODQuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzEwNS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtraXRjaGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9raXRjaGVuLzQuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMva2l0Y2hlbi8yLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9raXRjaGVuLzEuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9raXRjaGVuLzMuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge290aGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZXJJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mdXJuaXR1cmUvNC5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZnVybml0dXJlLzUuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2Z1cm5pdHVyZS82LmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mdXJuaXR1cmUvMS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mdXJuaXR1cmUvMi5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mdXJuaXR1cmUvMy5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtmbG9vciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVySXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZmxvb3IvMS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mbG9vci8yLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2Zsb29yLzMuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZmxvb3IvNC5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mbG9vci81LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=