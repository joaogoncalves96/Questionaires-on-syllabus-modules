"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/javascript",{

/***/ "./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n    };\n    var onValueChange = function onValueChange(e) {\n        setState;\n        console.log(e.target.value);\n    };\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 22,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 22\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 19\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 23,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7QUFFdkQsU0FBU0csb0JBQW9CLENBQUNDLEtBQUssRUFBRTs7UUFHekJDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7UUFDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNHLE1BQU07UUFDckIsSUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFNQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLEtBQUs7bUJBQUtBLEtBQUssQ0FBQ0MsS0FBSztTQUFBLENBQUM7UUFDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQztLQUN2QjtRQUVRTSxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ2QsQ0FBQyxFQUFFO1FBQ3ZCZSxRQUFRO1FBQ1JILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixDQUFDLENBQUNHLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDLENBQUM7S0FDOUI7SUFiRCxJQUFRSyxLQUFLLEdBQThCbEIsS0FBSyxDQUF4Q2tCLEtBQUssRUFBRUMsZUFBZSxHQUFhbkIsS0FBSyxDQUFqQ21CLGVBQWUsRUFBRUMsT0FBTSxHQUFLcEIsS0FBSyxDQUFoQm9CLE1BQU07SUFldEMscUJBQ0csOERBQUNoQixNQUFJO1FBQUNpQixRQUFRLEVBQUVwQixZQUFZO1FBQUVxQixTQUFTLEVBQUV4QixzRkFBbUI7OzBCQUN6RCw4REFBQzBCLElBQUU7Z0JBQUNGLFNBQVMsRUFBRXhCLHVGQUFvQjswQkFBR29CLEtBQUs7Ozs7O29CQUFNOzBCQUNqRCw4REFBQ1EsS0FBRztnQkFBQ0osU0FBUyxFQUFFeEIseUZBQXNCOzBCQUNsQ3FCLGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFUixHQUFHLENBQUMsU0FBQ1MsTUFBTSxFQUFLO29CQUMvQixxQkFDRyw4REFBQ00sS0FBRzs7MENBQ0QsOERBQUNkLE9BQUs7Z0NBQUNlLEVBQUUsRUFBRVAsTUFBTSxDQUFDTyxFQUFFO2dDQUFFQyxJQUFJLEVBQUMsT0FBTztnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7Z0NBQUNoQixLQUFLLEVBQUVPLE1BQU07Z0NBQUVVLFFBQVEsRUFBRWQsYUFBYTs7Ozs7cUNBQUk7MENBQzNGLDhEQUFDZSxPQUFLOzBDQUNGWCxNQUFNOzs7OztxQ0FFRjs7dUJBTERBLE1BQU0sQ0FBQ08sRUFBRTs7Ozs2QkFNYixDQUNQO2lCQUNKLENBQUM7Ozs7O29CQUNDOzBCQUNOLDhEQUFDSyxRQUFNO2dCQUFDSixJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBQ2hDLENBQ1I7Q0FDSjtBQW5DUTdCLEtBQUFBLG9CQUFvQjtBQW9DN0IsK0RBQWVBLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNob2ljZVF1ZXN0aW9uL1NpbmdsZUNob2ljZVF1ZXN0aW9uLmpzeD9kMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2luZ2xlQ2hvaWNlUXVlc3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVDaG9pY2VRdWVzdGlvbihwcm9wcykge1xuICAgY29uc3QgeyB0aXRsZSwgcG9zc2libGVBbnN3ZXJzLCBhbnN3ZXIgfSA9IHByb3BzO1xuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXJzID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IGlucHV0LnZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuICAgfVxuXG4gICBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICAgIHNldFN0YXRlXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3NzaWJsZUFuc3dlcnN9PlxuICAgICAgICAgICAge3Bvc3NpYmxlQW5zd2Vycz8ubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17YW5zd2VyLmlkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5zd2VyXCIgdmFsdWU9e2Fuc3dlcn0gb25DaGFuZ2U9e29uVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5zd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+e3N1Y2Vzc0Fuc3dlciA/IFwiY29ycmVjdFwiIDogXCJpbmNvcnJlY3RcIn08L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2hvaWNlUXVlc3Rpb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInRhcmdldCIsImlucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbnN3ZXJzIiwibWFwIiwiaW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvblZhbHVlQ2hhbmdlIiwic2V0U3RhdGUiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});