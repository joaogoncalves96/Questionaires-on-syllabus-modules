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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                setScore(score + 1);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    var optionClicked = function optionClicked(isCorrect) {\n        if (isCorrect) {\n            setScore(score + 1);\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect1 = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    console.log(checked);\n    //     if (questionIndex + 1 < questions.length) {\n    //       setQuestionIndex(questionIndex + 1);\n    //     } else {\n    //       setShowFinalResult(true);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Current Score: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 52,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"radio\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect1 ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 53,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: function() {\n                    return opt;\n                },\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 64,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"3YHCp8DjPbOKtrIq+1vut+fnvwk=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBT3pCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0osQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNLLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR04sQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1LLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNWLEtBQUs7U0FBQSxDQUFDO1FBQ2xEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCLDBCQUEwQjtnQkFDMUJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPO2FBQ1QsTUFBTTtnQkFDSkYsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLE9BQU87YUFDVDtTQUNIO0tBQ0g7UUFFUUcsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLFNBQVMsRUFBRTtRQUMvQixJQUFJQSxTQUFTLEVBQUU7WUFDWkgsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDSDs7SUFwQ0QsSUFBUUcsS0FBSyxHQUE4QjFCLEtBQUssQ0FBeEMwQixLQUFLLEVBQUVDLGVBQWUsR0FBYTNCLEtBQUssQ0FBakMyQixlQUFlLEVBQUVDLE9BQU0sR0FBSzVCLEtBQUssQ0FBaEI0QixNQUFNO0lBRXRDLElBQThCL0IsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU4vQyxPQU1pQixHQUFnQkEsR0FBYyxHQUE5QixFQU5qQixVQU02QixHQUFJQSxHQUFjLEdBQWxCO0lBQzFCLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUGpELFVBT21CLEdBQWtCQSxJQUFZLEdBQTlCLEVBUG5CLFlBT2lDLEdBQUlBLElBQVksR0FBaEI7SUFDOUIsSUFBMEJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFSeEMsS0FRZSxHQUFjQSxJQUFXLEdBQXpCLEVBUmYsUUFReUIsR0FBSUEsSUFBVyxHQUFmO0lBS3RCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0lBNEJyQixrREFBa0Q7SUFDbEQsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLE1BQU07SUFFTixxQkFDRyw4REFBQ1osTUFBSTtRQUFDcUIsUUFBUSxFQUFFdkIsWUFBWTtRQUFFd0IsU0FBUyxFQUFFaEMsc0ZBQW1COzswQkFDekQsOERBQUNrQyxJQUFFOztvQkFBQyxpQkFBZTtvQkFBQ1QsS0FBSzs7Ozs7O29CQUFNOzBCQUMvQiw4REFBQ1UsSUFBRTtnQkFBQ0gsU0FBUyxFQUFFaEMsdUZBQW9COzBCQUFHNEIsS0FBSzs7Ozs7b0JBQU07MEJBQ2pELDhEQUFDUyxLQUFHO2dCQUFDTCxTQUFTLEVBQUVoQyx5RkFBc0I7O29CQUNsQzZCLGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFYixHQUFHLENBQUMsU0FBQ2MsTUFBTSxFQUFLO3dCQUMvQixxQkFDRyw4REFBQ08sS0FBRzs7OENBQ0QsOERBQUNwQixPQUFLO29DQUFDcUIsRUFBRSxFQUFFUixNQUFNLENBQUNRLEVBQUU7b0NBQUVDLElBQUksRUFBQyxPQUFPO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2pDLEtBQUssRUFBRXVCLE1BQU07b0NBQUVXLFFBQVEsRUFBRXRDLGFBQWE7Ozs7O3lDQUFJOzhDQUMzRiw4REFBQ3VDLE9BQUs7OENBQUVaLE1BQU07Ozs7O3lDQUFTOzsyQkFGaEJBLE1BQU0sQ0FBQ1EsRUFBRTs7OztpQ0FHYixDQUNQO3FCQUNKLENBQUM7a0NBQ0YsOERBQUNELEtBQUc7a0NBQUVWLFVBQVMsR0FBRyxzQkFBWSxHQUFPLGtCQUFhOzs7Ozs0QkFBTzs7Ozs7O29CQUNsRDswQkFDTiw4REFBQ2dCLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFRO2dCQUFDSyxPQUFPLEVBQUU7MkJBQU1DLEdBQUc7aUJBQUE7MEJBQUUsT0FBSzs7Ozs7b0JBQVM7Ozs7OztZQUNwRCxDQUNSO0NBQ0o7R0EvREk1QyxvQkFBb0I7QUFBcEJBLEtBQUFBLG9CQUFvQjtBQWdFN0IsK0RBQWVBLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNob2ljZVF1ZXN0aW9uL1NpbmdsZUNob2ljZVF1ZXN0aW9uLmpzeD9kMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2luZ2xlQ2hvaWNlUXVlc3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaW5nbGVDaG9pY2VRdWVzdGlvbihwcm9wcykge1xuICAgY29uc3QgeyB0aXRsZSwgcG9zc2libGVBbnN3ZXJzLCBhbnN3ZXIgfSA9IHByb3BzO1xuXG4gICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgIGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UoZSkge1xuICAgICAgc2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XG4gICB9XG4gICBjb25zb2xlLmxvZyhjaGVja2VkKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgY29uc3QgYW5zd2VycyA9IGlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYW5zd2Vyc1tpXSA9PT0gY2hlY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KHRydWUpO1xuICAgICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QoZmFsc2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGZ1bmN0aW9uIG9wdGlvbkNsaWNrZWQoaXNDb3JyZWN0KSB7XG4gICAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgICAgfVxuICAgfVxuICAgLy8gICAgIGlmIChxdWVzdGlvbkluZGV4ICsgMSA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgIC8vICAgICAgIHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpO1xuICAgLy8gICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICBzZXRTaG93RmluYWxSZXN1bHQodHJ1ZSk7XG4gICAvLyAgICAgfVxuICAgLy8gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGg0PkN1cnJlbnQgU2NvcmU6IHtzY29yZX08L2g0PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3NzaWJsZUFuc3dlcnN9PlxuICAgICAgICAgICAge3Bvc3NpYmxlQW5zd2Vycz8ubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17YW5zd2VyLmlkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5zd2VyXCIgdmFsdWU9e2Fuc3dlcn0gb25DaGFuZ2U9e29uVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2Fuc3dlcn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2Pntpc0NvcnJlY3QgPyBcIkNPUlJFQ1Qg4pyU77iPXCIgOiBcIklOQ09SUkVDVCDinYxcIn08L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gb3B0fT5DaGVjazwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNob2ljZVF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsInNldElzQ29ycmVjdCIsInNldFNjb3JlIiwic2NvcmUiLCJvcHRpb25DbGlja2VkIiwiaXNDb3JyZWN0IiwidGl0bGUiLCJwb3NzaWJsZUFuc3dlcnMiLCJhbnN3ZXIiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInF1ZXN0aW9uQ2FyZCIsImg0IiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwib3B0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});