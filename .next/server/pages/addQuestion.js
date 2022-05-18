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
exports.id = "pages/addQuestion";
exports.ids = ["pages/addQuestion"];
exports.modules = {

/***/ "./src/components/AddQuestionsForm/AddQuestionsForm.jsx":
/*!**************************************************************!*\
  !*** ./src/components/AddQuestionsForm/AddQuestionsForm.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction AddQuestionsForm() {\n    //  const { onSubmit } = props;\n    const questionareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const answerareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        const response = await fetch(`http://localhost:3000/api/questions`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                questionTitle: questionareaRef.current.value,\n                answers: answerareaRef.current.value\n            })\n        });\n        const question = await response.json();\n    //   if (response.ok) {\n    //       onSubmit(question);\n    //   }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"question\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ref: questionareaRef,\n                        name: \"questionTitle\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"answers\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ref: answerareaRef,\n                        name: \"answers\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add question\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddQuestionsForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRRdWVzdGlvbnNGb3JtL0FkZFF1ZXN0aW9uc0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFFUztBQUduRCxTQUFTRyxnQkFBZ0IsR0FBRztJQUN6QiwrQkFBK0I7SUFFOUIsTUFBTUMsZUFBZSxHQUFHSCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxNQUFNSSxhQUFhLEdBQUdKLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBR2xDLGVBQWVLLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO1FBQzNCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBQ2hFQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUVsQkMsYUFBYSxFQUFFWixlQUFlLENBQUNhLE9BQU8sQ0FBQ0MsS0FBSztnQkFDNUNDLE9BQU8sRUFBRWQsYUFBYSxDQUFDWSxPQUFPLENBQUNDLEtBQUs7YUFFdEMsQ0FBQztTQUNMLENBQUM7UUFFRixNQUFNRSxRQUFRLEdBQUksTUFBTVgsUUFBUSxDQUFDWSxJQUFJLEVBQUU7SUFFekMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixNQUFNO0tBQ1A7SUFFRCxxQkFDSSw4REFBQ0MsTUFBSTtRQUFDQyxRQUFRLEVBQUVqQixZQUFZOzswQkFDeEIsOERBQUNrQixPQUFLOztvQkFBRSxVQUVKO2tDQUFBLDhEQUFDQyxVQUFRO3dCQUFDQyxHQUFHLEVBQUV0QixlQUFlO3dCQUFFdUIsSUFBSSxFQUFDLGVBQWU7Ozs7OzRCQUFHOzs7Ozs7b0JBQ25EOzBCQUNSLDhEQUFDSCxPQUFLOztvQkFBRSxTQUVKO2tDQUFBLDhEQUFDQyxVQUFRO3dCQUFDQyxHQUFHLEVBQUVyQixhQUFhO3dCQUFFc0IsSUFBSSxFQUFDLFNBQVM7Ozs7OzRCQUFHOzs7Ozs7b0JBQzNDOzBCQUVSLDhEQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxjQUFZOzs7OztvQkFBUzs7Ozs7O1lBR3hDLENBQ1Q7Q0FDTDtBQUVELGlFQUFlMUIsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFpcmVzLW9uLXN5bGxhYnVzLW1vZHVsZXMvLi9zcmMvY29tcG9uZW50cy9BZGRRdWVzdGlvbnNGb3JtL0FkZFF1ZXN0aW9uc0Zvcm0uanN4PzhiOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BZGRRdWVzdGlvbnNGb3JtLm1vZHVsZS5jc3NcIjtcblxuXG5mdW5jdGlvbiBBZGRRdWVzdGlvbnNGb3JtKCkge1xuICAgLy8gIGNvbnN0IHsgb25TdWJtaXQgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgcXVlc3Rpb25hcmVhUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGFuc3dlcmFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3F1ZXN0aW9uc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXG4gICAgICAgICAgICAgICBxdWVzdGlvblRpdGxlOiBxdWVzdGlvbmFyZWFSZWYuY3VycmVudC52YWx1ZSwgXG4gICAgICAgICAgICAgICBhbnN3ZXJzOiBhbnN3ZXJhcmVhUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgLy8gcG9zdGVySWQ6IG51bWJlclxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgIC8vICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyAgICAgICBvblN1Ym1pdChxdWVzdGlvbik7XG4gICAgICAvLyAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCA+XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXtxdWVzdGlvbmFyZWFSZWZ9IG5hbWU9XCJxdWVzdGlvblRpdGxlXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgPlxuICAgICAgICAgICAgICAgIGFuc3dlcnNcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXthbnN3ZXJhcmVhUmVmfSBuYW1lPVwiYW5zd2Vyc1wiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBxdWVzdGlvbjwvYnV0dG9uPlxuXG5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFF1ZXN0aW9uc0Zvcm07Il0sIm5hbWVzIjpbIkZvcm1FdmVudCIsInVzZVJlZiIsInN0eWxlcyIsIkFkZFF1ZXN0aW9uc0Zvcm0iLCJxdWVzdGlvbmFyZWFSZWYiLCJhbnN3ZXJhcmVhUmVmIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXN0aW9uVGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJhbnN3ZXJzIiwicXVlc3Rpb24iLCJqc29uIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ0ZXh0YXJlYSIsInJlZiIsIm5hbWUiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddQuestionsForm/AddQuestionsForm.jsx\n");

/***/ }),

/***/ "./src/pages/addQuestion.jsx":
/*!***********************************!*\
  !*** ./src/pages/addQuestion.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AddQuestionsForm_AddQuestionsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddQuestionsForm/AddQuestionsForm */ \"./src/components/AddQuestionsForm/AddQuestionsForm.jsx\");\n\n\n\nfunction addQuestion() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"HTML\"\n                }, void 0, false, {\n                    fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/addQuestion.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/addQuestion.jsx\",\n                lineNumber: 7,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddQuestionsForm_AddQuestionsForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/addQuestion.jsx\",\n                lineNumber: 11,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/addQuestion.jsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addQuestion);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2tEO0FBRS9FLFNBQVNFLFdBQVcsR0FBRztJQUNwQixxQkFDRyw4REFBQ0MsS0FBRzs7MEJBQ0QsOERBQUNILGtEQUFJOzBCQUNGLDRFQUFDSSxPQUFLOzhCQUFDLE1BQUk7Ozs7O3dCQUFROzs7OztvQkFDZjswQkFFUCw4REFBQ0gscUZBQWdCOzs7O29CQUFHOzs7Ozs7WUFDakIsQ0FDUDtDQUNKO0FBQ0QsaUVBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYWlyZXMtb24tc3lsbGFidXMtbW9kdWxlcy8uL3NyYy9wYWdlcy9hZGRRdWVzdGlvbi5qc3g/YzQ4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQWRkUXVlc3Rpb25zRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRRdWVzdGlvbnNGb3JtL0FkZFF1ZXN0aW9uc0Zvcm1cIjtcblxuZnVuY3Rpb24gYWRkUXVlc3Rpb24oKSB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhUTUw8L3RpdGxlPlxuICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgey8qIDxoMT5IVE1MPC9oMT4gKi99XG4gICAgICAgICA8QWRkUXVlc3Rpb25zRm9ybSAvPlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgYWRkUXVlc3Rpb247XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFkZFF1ZXN0aW9uc0Zvcm0iLCJhZGRRdWVzdGlvbiIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/addQuestion.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/addQuestion.jsx"));
module.exports = __webpack_exports__;

})();