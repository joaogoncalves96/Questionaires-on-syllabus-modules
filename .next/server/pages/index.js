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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Login/Login.module.css":
/*!***********************************************!*\
  !*** ./src/components/Login/Login.module.css ***!
  \***********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login\": \"Login_login__KitXG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25haXJlcy1vbi1zeWxsYWJ1cy1tb2R1bGVzLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4ubW9kdWxlLmNzcz9jZWNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luXCI6IFwiTG9naW5fbG9naW5fX0tpdFhHXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Login/Login.module.css\n");

/***/ }),

/***/ "./src/components/Login/Login.jsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _databaseUsers_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../databaseUsers.json */ \"./databaseUsers.json\");\n\n\n\n\nfunction Login() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: usernameError , 1: setUsernameError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: passwordError , 1: setPasswordError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: sucessLogin , 1: setSucessLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleUsernameChange = (e)=>{\n        setSucessLogin(\"\");\n        setUsernameError(\" \");\n        setUsername(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setSucessLogin(\"\");\n        setPasswordError(\" \");\n        setPassword(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(username, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n        autoComplete: \"off\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Username\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"text\",\n                placeholder: \"Enter your username\",\n                value: username,\n                onChange: handleUsernameChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 44,\n                columnNumber: 42\n            }, this),\n            usernameError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),\n                children: usernameError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 45,\n                columnNumber: 22\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"password\",\n                placeholder: \"Enter your password\",\n                value: password,\n                onChange: handlePasswordChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 52,\n                columnNumber: 42\n            }, this),\n            passwordError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),\n                children: passwordError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 53,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/ZDYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvZ2luLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YWJhc2VVc2VycyBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2VVc2Vycy5qc29uXCI7XG5cblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VybmFtZUVycm9yLCBzZXRVc2VybmFtZUVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0W3N1Y2Vzc0xvZ2luLCBzZXRTdWNlc3NMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN1Y2Vzc0xvZ2luKCcnKTtcbiAgICBzZXRVc2VybmFtZUVycm9yKCcgJyk7XG4gICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3VjZXNzTG9naW4oJycpO1xuICAgIHNldFBhc3N3b3JkRXJyb3IoJyAnKTtcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICBjb25zb2xlLmxvZyh1c2VybmFtZSwgcGFzc3dvcmQpO1xuICB9O1xuICAgIFxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICByZXF1aXJlZFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJuYW1lQ2hhbmdlfS8+PGJyPjwvYnI+XG4gICAgIHt1c2VybmFtZUVycm9yJiY8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57dXNlcm5hbWVFcnJvcn08L2Rpdj59XG4gICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICByZXF1aXJlZFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX0vPjxicj48L2JyPlxuICAgICAgIHtwYXNzd29yZEVycm9yJiY8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57cGFzc3dvcmRFcnJvcn08L2Rpdj59XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PkxvZ2luPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJkYXRhYmFzZVVzZXJzIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVFcnJvciIsInNldFVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJzdWNlc3NMb2dpbiIsInNldFN1Y2Vzc0xvZ2luIiwiaGFuZGxlVXNlcm5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImxvZ2luIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJiciIsImRpdiIsImVycm9yIiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Login/Login.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login/Login */ \"./src/components/Login/Login.jsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/index.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/index.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/index.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2lCO0FBRS9CLFNBQVNFLElBQUksR0FBRztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNILGtEQUFJOzBCQUNILDRFQUFDSSxPQUFLOzhCQUFDLE1BQUk7Ozs7O3dCQUFROzs7OztvQkFDZDswQkFDUCw4REFBQ0gsK0RBQUs7Ozs7b0JBQUc7Ozs7OztZQUNMLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYWlyZXMtb24tc3lsbGFidXMtbW9kdWxlcy8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW4vTG9naW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMb2dpbiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMb2dpbiIsIkhvbWUiLCJkaXYiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./databaseUsers.json":
/*!****************************!*\
  !*** ./databaseUsers.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"users":[{"username":"asd123","password":"asd"},{"username":"asd1234","password":"asd"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();