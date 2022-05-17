"use strict";
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
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./src/components/Auth/SessionContext.tsx":
/*!************************************************!*\
  !*** ./src/components/Auth/SessionContext.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SessionContext\": () => (/* binding */ SessionContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SessionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoL1Nlc3Npb25Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsY0FBYyxpQkFBR0Qsb0RBQWEsQ0FBQyxJQUFJLENBQUM7QUFFaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFpcmVzLW9uLXN5bGxhYnVzLW1vZHVsZXMvLi9zcmMvY29tcG9uZW50cy9BdXRoL1Nlc3Npb25Db250ZXh0LnRzeD82OWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2Vzc2lvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgeyBTZXNzaW9uQ29udGV4dCB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Auth/SessionContext.tsx\n");

/***/ }),

/***/ "./src/pages/profile.tsx":
/*!*******************************!*\
  !*** ./src/pages/profile.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Auth_SessionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Auth/SessionContext */ \"./src/components/Auth/SessionContext.tsx\");\n\n\n\n\n\nfunction Profile() {\n    const session = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Auth_SessionContext__WEBPACK_IMPORTED_MODULE_4__.SessionContext);\n    const handleLogout = ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/profile.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/profile.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/profile.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/profile.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/profile.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0k7QUFDRTtBQUNnQztBQUluRSxTQUFTSSxPQUFPLEdBQUc7SUFDZixNQUFNQyxPQUFPLEdBQUdILGlEQUFVLENBQUNDLDJFQUFjLENBQUM7SUFDMUMsTUFBTUcsWUFBWSxHQUFHLElBQU07UUFDdkJMLHVEQUFXLENBQUMsUUFBUSxDQUFDO0tBQ3hCO0lBQ0QscUJBQ0ksOERBQUNPLEtBQUc7OzBCQUNBLDhEQUFDUixrREFBSTswQkFDTCw0RUFBQ1MsT0FBSzs4QkFBQyxTQUFPOzs7Ozt3QkFBUTs7Ozs7b0JBQ2Y7MEJBQ1AsOERBQUNDLElBQUU7O29CQUFDLFNBQ0o7a0NBQUEsOERBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRU4sWUFBWTtrQ0FBRSxRQUFNOzs7Ozs0QkFBUzs7Ozs7O29CQUFLOzs7Ozs7WUFDakQsQ0FDUjtDQUNMO0FBQ0QsaUVBQWVGLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYWlyZXMtb24tc3lsbGFidXMtbW9kdWxlcy8uL3NyYy9wYWdlcy9wcm9maWxlLnRzeD8xZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoL1Nlc3Npb25Db250ZXh0JztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0nO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnLi9hcGkvc2Vzc2lvbic7XG5cbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlByb2ZpbGU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgxPldlbGNvbWVcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwibmFtZXMiOlsiSGVhZCIsIlJvdXRlciIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsIlByb2ZpbGUiLCJzZXNzaW9uIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImRpdiIsInRpdGxlIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/profile.tsx"));
module.exports = __webpack_exports__;

})();