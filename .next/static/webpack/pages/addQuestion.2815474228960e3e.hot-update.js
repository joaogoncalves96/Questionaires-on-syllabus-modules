"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addQuestion",{

/***/ "./src/components/AddQuestionsForm/AddQuestionsForm.jsx":
/*!**************************************************************!*\
  !*** ./src/components/AddQuestionsForm/AddQuestionsForm.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction AddQuestionsForm() {\n    _s();\n    //  const { onSubmit } = props;\n    var categoryareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var questionareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var answerareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var correctAnswerareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response, question;\n            return _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"http://localhost:3000/api/questions\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                category: categoryareaRef.current.value,\n                                questionTitle: questionareaRef.current.value,\n                                answers: answerareaRef.current.value,\n                                correctAnswers: correctAnswerareaRef.current.value\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        question = _ctx.sent;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //   if (response.ok) {\n        //       onSubmit(question);\n        //   }\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: [\n                    \"Category\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                selected: true,\n                                value: \"JavaScript\",\n                                children: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                value: \"React\",\n                                children: \"React\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                value: \"HTML\",\n                                children: \"HTML\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                value: \"CSS\",\n                                children: \"CSS\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: [\n                    \"question\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        ref: questionareaRef,\n                        name: \"questionTitle\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: [\n                    \"answers\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        ref: answerareaRef,\n                        name: \"answers\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 52,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: [\n                    \"correct answear\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        ref: correctAnswerareaRef,\n                        name: \"correctAnswers\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add question\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n                lineNumber: 61,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/AddQuestionsForm/AddQuestionsForm.jsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(AddQuestionsForm, \"+iTh0DYWhIjXUKNBJ1YjgsZ8lTk=\");\n_c = AddQuestionsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestionsForm);\nvar _c;\n$RefreshReg$(_c, \"AddQuestionsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRRdWVzdGlvbnNGb3JtL0FkZFF1ZXN0aW9uc0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUVTOztBQUVuRCxTQUFTRyxnQkFBZ0IsR0FBRzs7SUFDekIsK0JBQStCO0lBQy9CLElBQU1DLGVBQWUsR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBTUksZUFBZSxHQUFHSiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxJQUFNSyxhQUFhLEdBQUdMLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQU1NLG9CQUFvQixHQUFHTiw2Q0FBTSxDQUFDLElBQUksQ0FBQzthQUUxQk8sWUFBWSxDQUFDQyxDQUFDO2VBQWRELGFBQVk7O2FBQVpBLGFBQVk7UUFBWkEsYUFBWSxHQUEzQix3TUFBNEJDLENBQUMsRUFBRTtnQkFHdEJDLFFBQVEsRUFlUkMsUUFBUTs7Ozt3QkFqQmRGLENBQUMsQ0FBQ0csY0FBYyxFQUFFLENBQUM7OytCQUVJQyxLQUFLLENBQUUscUNBQW1DLEVBQUc7NEJBQ2pFQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsT0FBTyxFQUFFO2dDQUNOLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ3BDOzRCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUNsQkMsUUFBUSxFQUFFZixlQUFlLENBQUNnQixPQUFPLENBQUNDLEtBQUs7Z0NBQ3ZDQyxhQUFhLEVBQUVqQixlQUFlLENBQUNlLE9BQU8sQ0FBQ0MsS0FBSztnQ0FDNUNFLE9BQU8sRUFBRWpCLGFBQWEsQ0FBQ2MsT0FBTyxDQUFDQyxLQUFLO2dDQUNwQ0csY0FBYyxFQUFFakIsb0JBQW9CLENBQUNhLE9BQU8sQ0FBQ0MsS0FBSzs2QkFHcEQsQ0FBQzt5QkFDSixDQUFDOzt3QkFiSVgsUUFBUSxZQWFaOzsrQkFFcUJBLFFBQVEsQ0FBQ2UsSUFBSSxFQUFFOzt3QkFBaENkLFFBQVEsWUFBd0I7Ozs7OztRQUV0Qyx1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLE1BQU07U0FDUjtlQXZCY0gsYUFBWTs7SUF5QjNCLHFCQUNHLDhEQUFDa0IsTUFBSTtRQUFDQyxRQUFRLEVBQUVuQixZQUFZOzswQkFDekIsOERBQUNvQixPQUFLOztvQkFBQyxVQUVKO2tDQUFBLDhEQUFDQyxRQUFNOzswQ0FDSiw4REFBQ0MsUUFBTTtnQ0FBQ0MsUUFBUTtnQ0FBQ1YsS0FBSyxFQUFDLFlBQVk7MENBQUMsWUFBVTs7Ozs7b0NBQVM7MENBQ3ZELDhEQUFDUyxRQUFNO2dDQUFDVCxLQUFLLEVBQUMsT0FBTzswQ0FBQyxPQUFLOzs7OztvQ0FBUzswQ0FDcEMsOERBQUNTLFFBQU07Z0NBQUVULEtBQUssRUFBQyxNQUFNOzBDQUFDLE1BQUk7Ozs7O29DQUFTOzBDQUNuQyw4REFBQ1MsUUFBTTtnQ0FBQ1QsS0FBSyxFQUFDLEtBQUs7MENBQUMsS0FBRzs7Ozs7b0NBQVM7Ozs7Ozs0QkFDMUI7Ozs7OztvQkFDSjswQkFDUiw4REFBQ08sT0FBSzs7b0JBQUMsVUFFSjtrQ0FBQSw4REFBQ0ksVUFBUTt3QkFBQ0MsR0FBRyxFQUFFNUIsZUFBZTt3QkFBRTZCLElBQUksRUFBQyxlQUFlOzs7Ozs0QkFBRzs7Ozs7O29CQUNsRDswQkFDUiw4REFBQ04sT0FBSzs7b0JBQUMsU0FFSjtrQ0FBQSw4REFBQ0ksVUFBUTt3QkFBQ0MsR0FBRyxFQUFFM0IsYUFBYTt3QkFBRTRCLElBQUksRUFBQyxTQUFTOzs7Ozs0QkFBRzs7Ozs7O29CQUMxQzswQkFDUiw4REFBQ04sT0FBSzs7b0JBQUMsaUJBRUo7a0NBQUEsOERBQUNJLFVBQVE7d0JBQUNDLEdBQUcsRUFBRTFCLG9CQUFvQjt3QkFBRTJCLElBQUksRUFBQyxnQkFBZ0I7Ozs7OzRCQUFHOzs7Ozs7b0JBQ3hEOzBCQUVSLDhEQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxjQUFZOzs7OztvQkFBUzs7Ozs7O1lBQ3ZDLENBQ1I7Q0FDSjtHQTNEUWpDLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBNkR6QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkUXVlc3Rpb25zRm9ybS9BZGRRdWVzdGlvbnNGb3JtLmpzeD84YjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWRkUXVlc3Rpb25zRm9ybS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEFkZFF1ZXN0aW9uc0Zvcm0oKSB7XG4gICAvLyAgY29uc3QgeyBvblN1Ym1pdCB9ID0gcHJvcHM7XG4gICBjb25zdCBjYXRlZ29yeWFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG4gICBjb25zdCBxdWVzdGlvbmFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG4gICBjb25zdCBhbnN3ZXJhcmVhUmVmID0gdXNlUmVmKG51bGwpO1xuICAgY29uc3QgY29ycmVjdEFuc3dlcmFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcXVlc3Rpb25zYCwge1xuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeWFyZWFSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGU6IHF1ZXN0aW9uYXJlYVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgYW5zd2VyczogYW5zd2VyYXJlYVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgY29ycmVjdEFuc3dlcnM6IGNvcnJlY3RBbnN3ZXJhcmVhUmVmLmN1cnJlbnQudmFsdWUsXG5cbiAgICAgICAgICAgIC8vIHBvc3RlcklkOiBudW1iZXJcbiAgICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgLy8gICAgICAgb25TdWJtaXQocXVlc3Rpb24pO1xuICAgICAgLy8gICB9XG4gICB9XG4gIFxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiSmF2YVNjcmlwdFwiPkphdmFTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSZWFjdFwiPlJlYWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICA8b3B0aW9uICB2YWx1ZT1cIkhUTUxcIj5IVE1MPC9vcHRpb24+XG4gICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBxdWVzdGlvblxuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj17cXVlc3Rpb25hcmVhUmVmfSBuYW1lPVwicXVlc3Rpb25UaXRsZVwiIC8+XG4gICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgYW5zd2Vyc1xuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj17YW5zd2VyYXJlYVJlZn0gbmFtZT1cImFuc3dlcnNcIiAvPlxuICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIGNvcnJlY3QgYW5zd2VhclxuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj17Y29ycmVjdEFuc3dlcmFyZWFSZWZ9IG5hbWU9XCJjb3JyZWN0QW5zd2Vyc1wiIC8+XG4gICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgcXVlc3Rpb248L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFF1ZXN0aW9uc0Zvcm07XG4iXSwibmFtZXMiOlsiRm9ybUV2ZW50IiwidXNlUmVmIiwic3R5bGVzIiwiQWRkUXVlc3Rpb25zRm9ybSIsImNhdGVnb3J5YXJlYVJlZiIsInF1ZXN0aW9uYXJlYVJlZiIsImFuc3dlcmFyZWFSZWYiLCJjb3JyZWN0QW5zd2VyYXJlYVJlZiIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXNwb25zZSIsInF1ZXN0aW9uIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGVnb3J5IiwiY3VycmVudCIsInZhbHVlIiwicXVlc3Rpb25UaXRsZSIsImFuc3dlcnMiLCJjb3JyZWN0QW5zd2VycyIsImpzb24iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInNlbGVjdCIsIm9wdGlvbiIsInNlbGVjdGVkIiwidGV4dGFyZWEiLCJyZWYiLCJuYW1lIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddQuestionsForm/AddQuestionsForm.jsx\n");

/***/ })

});