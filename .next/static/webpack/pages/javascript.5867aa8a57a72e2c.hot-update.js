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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    var handleClick = function handleClick() {\n        // return <div>{isCorrect ? \"CORRECT!\" : \"INCORRECT!\"}</div>;\n        if (isCorrect) {\n            return \"correct\";\n        } else {\n            console.log(\"incorrect\");\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    console.log(checked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 46,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 22\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 19\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 47,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleClick,\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 58,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBTXpCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0osQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNLLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR04sQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1LLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNWLEtBQUs7U0FBQSxDQUFDO1FBQ2xEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCLDBCQUEwQjtnQkFDMUJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsT0FBTzthQUNULE1BQU07Z0JBQ0pBLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsNEJBQTRCO2dCQUM1QixPQUFPO2FBQ1Q7U0FDSDtLQUNIO1FBRVFDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ3BCLDZEQUE2RDtRQUM3RCxJQUFJQyxTQUFTLEVBQUU7WUFDWixPQUFPLFNBQVMsQ0FBQztTQUNuQixNQUFNO1lBQ0pQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0g7O0lBckNELElBQVFPLEtBQUssR0FBOEJ4QixLQUFLLENBQXhDd0IsS0FBSyxFQUFFQyxlQUFlLEdBQWF6QixLQUFLLENBQWpDeUIsZUFBZSxFQUFFQyxPQUFNLEdBQUsxQixLQUFLLENBQWhCMEIsTUFBTTtJQUV0QyxJQUE4QjdCLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFOL0MsT0FNaUIsR0FBZ0JBLEdBQWMsR0FBOUIsRUFOakIsVUFNNkIsR0FBSUEsR0FBYyxHQUFsQjtJQUMxQixJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBqRCxTQU9tQixHQUFrQkEsSUFBWSxHQUE5QixFQVBuQixZQU9pQyxHQUFJQSxJQUFZLEdBQWhCO0lBSzlCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0lBK0JyQixxQkFDRyw4REFBQ1osTUFBSTtRQUFDbUIsUUFBUSxFQUFFckIsWUFBWTtRQUFFc0IsU0FBUyxFQUFFOUIsc0ZBQW1COzswQkFDekQsOERBQUNnQyxJQUFFO2dCQUFDRixTQUFTLEVBQUU5Qix1RkFBb0I7MEJBQUcwQixLQUFLOzs7OztvQkFBTTswQkFDakQsOERBQUNRLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRTlCLHlGQUFzQjswQkFDbEMyQixlQUFlLGFBQWZBLGVBQWUsV0FBSyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLGVBQWUsQ0FBRVgsR0FBRyxDQUFDLFNBQUNZLE1BQU0sRUFBSztvQkFDL0IscUJBQ0csOERBQUNNLEtBQUc7OzBDQUNELDhEQUFDakIsT0FBSztnQ0FBQ2tCLEVBQUUsRUFBRVAsTUFBTSxDQUFDTyxFQUFFO2dDQUFFQyxJQUFJLEVBQUMsT0FBTztnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7Z0NBQUM5QixLQUFLLEVBQUVxQixNQUFNO2dDQUFFVSxRQUFRLEVBQUVuQyxhQUFhOzs7OztxQ0FBSTswQ0FDM0YsOERBQUNvQyxPQUFLOzBDQUFFWCxNQUFNOzs7OztxQ0FBUzs7dUJBRmhCQSxNQUFNLENBQUNPLEVBQUU7Ozs7NkJBR2IsQ0FDUDtpQkFDSixDQUFDOzs7OztvQkFFQzswQkFDTiw4REFBQ0ssUUFBTTtnQkFBQ0osSUFBSSxFQUFDLFFBQVE7Z0JBQUNLLE9BQU8sRUFBRWpCLFdBQVc7MEJBQUUsT0FFNUM7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNSO0NBQ0o7R0EzRFF2QixvQkFBb0I7QUFBcEJBLEtBQUFBLG9CQUFvQjtBQTREN0IsK0RBQWVBLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNob2ljZVF1ZXN0aW9uL1NpbmdsZUNob2ljZVF1ZXN0aW9uLmpzeD9kMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2luZ2xlQ2hvaWNlUXVlc3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVDaG9pY2VRdWVzdGlvbihwcm9wcykge1xuICAgY29uc3QgeyB0aXRsZSwgcG9zc2libGVBbnN3ZXJzLCBhbnN3ZXIgfSA9IHByb3BzO1xuXG4gICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgZnVuY3Rpb24gb25WYWx1ZUNoYW5nZShlKSB7XG4gICAgICBzZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgIH1cbiAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXJzID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IGlucHV0LnZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhbnN3ZXJzW2ldID09PSBjaGVja2VkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgIC8vIHJldHVybiA8ZGl2Pntpc0NvcnJlY3QgPyBcIkNPUlJFQ1QhXCIgOiBcIklOQ09SUkVDVCFcIn08L2Rpdj47XG4gICAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICAgICByZXR1cm4gXCJjb3JyZWN0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3NzaWJsZUFuc3dlcnN9PlxuICAgICAgICAgICAge3Bvc3NpYmxlQW5zd2Vycz8ubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17YW5zd2VyLmlkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5zd2VyXCIgdmFsdWU9e2Fuc3dlcn0gb25DaGFuZ2U9e29uVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2Fuc3dlcn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7LyogPGRpdj57aXNDb3JyZWN0ID8gXCJDT1JSRUNUIVwiIDogXCJJTkNPUlJFQ1QhXCJ9PC9kaXY+ICovfVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICBDaGVja1xuICAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2hvaWNlUXVlc3Rpb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwib25WYWx1ZUNoYW5nZSIsImUiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VycyIsIm1hcCIsImlucHV0IiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwic2V0SXNDb3JyZWN0IiwiaGFuZGxlQ2xpY2siLCJpc0NvcnJlY3QiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});