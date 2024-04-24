/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Common/Layout.jsx":
/*!**************************************!*\
  !*** ./components/Common/Layout.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Apps\\\\MVP-POC-Develop\\\\components\\\\Common\\\\Layout.jsx\",\n            lineNumber: 4,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Apps\\\\MVP-POC-Develop\\\\components\\\\Common\\\\Layout.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9MYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7c0JBQ0dIOzs7Ozs7Ozs7OztBQUlaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTVZQLy4vY29tcG9uZW50cy9Db21tb24vTGF5b3V0LmpzeD9lZGVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsImZpZWxkc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/Layout.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contentful_live_preview_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @contentful/live-preview/react */ \"@contentful/live-preview/react\");\n/* harmony import */ var _contentful_live_preview_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/live-preview/style.css */ \"./node_modules/@contentful/live-preview/dist/style.css\");\n/* harmony import */ var _contentful_live_preview_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_live_preview_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/css/bootstrap.min.css */ \"./assets/css/bootstrap.min.css\");\n/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_css_LineIcons_3_0_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/css/LineIcons.3.0.css */ \"./assets/css/LineIcons.3.0.css\");\n/* harmony import */ var _assets_css_LineIcons_3_0_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_LineIcons_3_0_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/css/tiny-slider.css */ \"./assets/css/tiny-slider.css\");\n/* harmony import */ var _assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_tiny_slider_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/css/glightbox.min.css */ \"./assets/css/glightbox.min.css\");\n/* harmony import */ var _assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/css/main.css */ \"./assets/css/main.css\");\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Common_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Layout */ \"./components/Common/Layout.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contentful_live_preview_react__WEBPACK_IMPORTED_MODULE_1__]);\n_contentful_live_preview_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n//Preview related\n\n\n\n\n\n\n\n\n\nfunction TmnasApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contentful_live_preview_react__WEBPACK_IMPORTED_MODULE_1__.ContentfulLivePreviewProvider, {\n        enableInspectorMode: pageProps.previewActive,\n        enableLiveUpdates: pageProps.previewActive,\n        locale: \"en-US\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Apps\\\\MVP-POC-Develop\\\\pages\\\\_app.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Apps\\\\MVP-POC-Develop\\\\pages\\\\_app.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"C:\\\\Apps\\\\MVP-POC-Develop\\\\pages\\\\_app.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TmnasApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjs7QUFDOEQ7QUFDbkM7QUFDTDtBQUNBO0FBQ0Y7QUFDRTtBQUNUO0FBQ21CO0FBRWpELFNBQVNFLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNKLHlGQUE2QkE7UUFDNUJLLHFCQUFxQkQsVUFBVUUsYUFBYTtRQUM1Q0MsbUJBQW1CSCxVQUFVRSxhQUFhO1FBQzFDRSxRQUFRO2tCQUNSO3NCQUNFLDRFQUFDUCxpRUFBTUE7MEJBQ0gsNEVBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0FBRUEsaUVBQWVGLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NVlAvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJldmlldyByZWxhdGVkXG5pbXBvcnQgeyBDb250ZW50ZnVsTGl2ZVByZXZpZXdQcm92aWRlciB9IGZyb20gJ0Bjb250ZW50ZnVsL2xpdmUtcHJldmlldy9yZWFjdCc7XG5pbXBvcnQgXCJAY29udGVudGZ1bC9saXZlLXByZXZpZXcvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIvYXNzZXRzL2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiL2Fzc2V0cy9jc3MvTGluZUljb25zLjMuMC5jc3NcIjtcbmltcG9ydCBcIi9hc3NldHMvY3NzL3Rpbnktc2xpZGVyLmNzc1wiO1xuaW1wb3J0IFwiL2Fzc2V0cy9jc3MvZ2xpZ2h0Ym94Lm1pbi5jc3NcIjtcbmltcG9ydCBcIi9hc3NldHMvY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0xheW91dCc7XG5cbmZ1bmN0aW9uIFRtbmFzQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250ZW50ZnVsTGl2ZVByZXZpZXdQcm92aWRlclxuICAgICAgZW5hYmxlSW5zcGVjdG9yTW9kZT17cGFnZVByb3BzLnByZXZpZXdBY3RpdmV9XG4gICAgICBlbmFibGVMaXZlVXBkYXRlcz17cGFnZVByb3BzLnByZXZpZXdBY3RpdmV9XG4gICAgICBsb2NhbGU9eydlbi1VUyd9PlxuICAgICAgPD5cbiAgICAgICAgPExheW91dD4gICAgICAgICAgXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC8+XG4gICAgPC9Db250ZW50ZnVsTGl2ZVByZXZpZXdQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUbW5hc0FwcFxuIl0sIm5hbWVzIjpbIkNvbnRlbnRmdWxMaXZlUHJldmlld1Byb3ZpZGVyIiwiTGF5b3V0IiwiVG1uYXNBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJlbmFibGVJbnNwZWN0b3JNb2RlIiwicHJldmlld0FjdGl2ZSIsImVuYWJsZUxpdmVVcGRhdGVzIiwibG9jYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./assets/css/LineIcons.3.0.css":
/*!**************************************!*\
  !*** ./assets/css/LineIcons.3.0.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./assets/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/glightbox.min.css":
/*!**************************************!*\
  !*** ./assets/css/glightbox.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/main.css":
/*!*****************************!*\
  !*** ./assets/css/main.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/tiny-slider.css":
/*!************************************!*\
  !*** ./assets/css/tiny-slider.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@contentful/live-preview/react":
/*!*************************************************!*\
  !*** external "@contentful/live-preview/react" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@contentful/live-preview/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@contentful"], () => (__webpack_exec__("./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();