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
      fontStyle: "bold"
    }),
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
        lineNumber: 148,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "../static/logo_transparent.png",
        alt: "heading",
        className: classes.headingLogo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
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
          lineNumber: 165,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
          lineNumber: 176,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
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
          lineNumber: 186,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
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
          lineNumber: 195,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
          lineNumber: 206,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01082011273.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01082011275.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/01102014843.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/100_2119.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/100_2122.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/P1030999.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/04092014830.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/26092012559.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01270.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01222.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC01248.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/17122014866.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC00192.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/DSC00162.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-38.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-34-35.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-34-39.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-32-04.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-36-26.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-31.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-35-18.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-33-03.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-39-03.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-40-39.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-40-57.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-41-32.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/photo_2021-01-05_18-41-41.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/buk.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/084.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/stairs/105.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }, this), kitchen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/4.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/2.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/1.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/kitchen/3.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 21
      }, this), other && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/4.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/5.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/6.jpeg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/furniture/3.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 21
      }, this), floor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.sliderItems,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/1.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/2.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/3.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/4.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.img,
          src: "../static/floor/5.JPG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW4iLCJoZWFkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVhZGluZ0xvZ28iLCJoZWlnaHQiLCJoZWFkaW5nVGV4dCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250U2l6ZSIsImJ0bldyYXBwZXIiLCJ0ZXh0QnRuIiwiYnRuTWFpbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic2xpZGVyIiwiaW1nIiwic2xpZGVySXRlbXMiLCJmbGV4V3JhcCIsIkJ1dHRvbkFwcEJhciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImxlcyIsInNldExlcyIsImtpdGNoZW4iLCJzZXRLaXRjaGVuIiwib3RoZXIiLCJzZXRPdGhlciIsImZsb29yIiwic2V0Rmxvb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTGVzIiwiaGFuZGxlS2l0Y2hlbiIsImhhbmRsZU90aGVyIiwiaGFuZGxlRmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBO0FBQ3pCQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLE1BRFA7QUFFQUMsYUFBTyxFQUFFLE1BRlQ7QUFHQUMsb0JBQWMsRUFBRSxRQUhoQjtBQUlBQyxnQkFBVSxFQUFFLFFBSlo7QUFLQUMsZUFBUyxFQUFFLE1BTFg7QUFNQUMsbUJB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QUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhDSixlQTZDSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdDSixlQWtESTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxESixlQXVESTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZESixlQTRESTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVESixlQWdFSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFSixlQXlFSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpFSixlQTZFSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdFSixlQWlGSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpGSixlQXFGSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJGSixlQTBGSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFGSixlQStGSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9GSixlQW9HSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBHSixlQXlHSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpHSixlQThHSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlHSixlQWtISTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxISixlQXNISTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRISixlQTBISTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFISixlQThISTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlISixlQWtJSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxJSixlQXNJSTtBQUNJLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ0osR0FEdkI7QUFFSSxhQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRJSixlQTBJSTtBQUNJLG1CQUFTLEVBQUVJLE9B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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIjtcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCI7XHJcbi8vIGltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9zdGF0aWMvaGVhZGluZy5wbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1MHZoXCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiNSVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNzAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIi01JVwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGhlYWRpbmdMb2dvOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjIlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE1JVwiLFxyXG4gICAgfSxcclxuICAgIGhlYWRpbmdUZXh0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgZm9udFNpemU6IDI1LFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYnRuV3JhcHBlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNzAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge30sXHJcbiAgICBidG5NYWluOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0I2NkQzMVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJCb2RvbmkgTW9kYVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgICBwYWRkaW5nOiBcIjQlIDEwJVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI1JVwiLFxyXG4gICAgICAgIC8vIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjY2RDMxXCIsXHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcbiAgICBzbGlkZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICB3aWR0aDogXCI4MHZ3XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjMlIGF1dG9cIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjIwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiMyUgMyVcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIzMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNsaWRlckl0ZW1zOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG5cclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjgwdndcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdGV4dEJ0bjoge1xyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2xlcywgc2V0TGVzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2tpdGNoZW4sIHNldEtpdGNoZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW290aGVyLCBzZXRPdGhlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmxvb3IsIHNldEZsb29yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsZXMpO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzZXRMZXMoIWxlcyk7XHJcbiAgICAvLyB9LCBbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVMZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzKHRydWUpO1xyXG4gICAgICAgIHNldEtpdGNoZW4oZmFsc2UpO1xyXG4gICAgICAgIHNldE90aGVyKGZhbHNlKTtcclxuICAgICAgICBzZXRGbG9vcihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlS2l0Y2hlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRMZXMoZmFsc2UpO1xyXG4gICAgICAgIHNldEtpdGNoZW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0T3RoZXIoZmFsc2UpO1xyXG4gICAgICAgIHNldEZsb29yKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVPdGhlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRMZXMoZmFsc2UpO1xyXG4gICAgICAgIHNldEtpdGNoZW4oZmFsc2UpO1xyXG4gICAgICAgIHNldE90aGVyKHRydWUpO1xyXG4gICAgICAgIHNldEZsb29yKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVGbG9vciA9ICgpID0+IHtcclxuICAgICAgICBzZXRMZXMoZmFsc2UpO1xyXG4gICAgICAgIHNldEtpdGNoZW4oZmFsc2UpO1xyXG4gICAgICAgIHNldE90aGVyKGZhbHNlKTtcclxuICAgICAgICBzZXRGbG9vcih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBpZD0ncG9ydGZvbGlvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ1RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LAgMjAg0LvQtdGCINGA0LDQsdC+0YLRiyDQvNGLINC90LDQutC+0L/QuNC70Lgg0LHQtdGB0YbQtdC90L3Ri9C5INCx0LDQs9Cw0LYg0L7Qv9GL0YLQsCDQuFxyXG4gICAgICAgICAgICAgICAgICAgINC90LDRg9GH0LjQu9C40YHRjCDQtNC10LvQsNGC0Ywg0LzQtdCx0LXQu9GMINGB0L4g0YHQvNGL0YHQu9C+0LxcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9sb2dvX3RyYW5zcGFyZW50LnBuZydcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2hlYWRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmdMb2dvfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5NYWlufVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBsZXMgPyBcIiNCNjZEMzFcIiA6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQm9C10YHRgtC90LjRhtGLINC/0L7QtCDQt9Cw0LrQsNC3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlS2l0Y2hlbn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGtpdGNoZW4gPyBcIiNCNjZEMzFcIiA6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0QnRufSB2YXJpYW50PSdzdWJ0aXRsZTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmtGD0YXQvdC4XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80LggKi99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuTWFpbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPdGhlcn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IG90aGVyID8gXCIjQjY2RDMxXCIgOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEJ0bn0gdmFyaWFudD0nc3VidGl0bGUyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtC+0LvRj9GA0L3Ri9C1INC40LfQtNC10LvQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bk1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmxvb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmbG9vciA/IFwiI0I2NkQzMVwiIDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRCdG59IHZhcmlhbnQ9J3N1YnRpdGxlMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LjQutC70LXQstC60LAg0L/QvtC70L7QslxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIHtsZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlckl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL21haW5JTUcuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8wMTA4MjAxMTI3My5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMDEwODIwMTEyNzUuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzAxMTAyMDE0ODQzLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8xMDBfMjExOS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMTAwXzIxMjIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9QMTAzMDk5OS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzA0MDkyMDE0ODMwLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8yNjA5MjAxMjU1OS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL0RTQzAxMjcwLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvRFNDMDEyMjIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9EU0MwMTI0OC5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzLzE3MTIyMDE0ODY2LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvRFNDMDAxOTIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL0RTQzAwMTYyLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zMS0yOS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMzLTM4LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTM0LTM1LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTM0LTM5LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTMyLTA0LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zNi0yNi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzMtMzEuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy9waG90b18yMDIxLTAxLTA1XzE4LTM1LTE4LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvcGhvdG9fMjAyMS0wMS0wNV8xOC0zMy0wMy5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtMzktMDMuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtNDAtMzkuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtNDAtNTcuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtNDEtMzIuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL3Bob3RvXzIwMjEtMDEtMDVfMTgtNDEtNDEuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvc3RhaXJzL2J1ay5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9zdGFpcnMvMDg0LkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL3N0YWlycy8xMDUuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7a2l0Y2hlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVySXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMva2l0Y2hlbi80LmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2tpdGNoZW4vMi5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMva2l0Y2hlbi8xLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMva2l0Y2hlbi8zLmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtvdGhlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVySXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZnVybml0dXJlLzQuanBlZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2Z1cm5pdHVyZS81LmpwZWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mdXJuaXR1cmUvNi5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZnVybml0dXJlLzEuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZnVybml0dXJlLzIuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZnVybml0dXJlLzMuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Zmxvb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlckl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2Zsb29yLzEuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZmxvb3IvMi5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4uL3N0YXRpYy9mbG9vci8zLkpQRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi4vc3RhdGljL2Zsb29yLzQuSlBHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuLi9zdGF0aWMvZmxvb3IvNS5KUEcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9