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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                setScore(score + 1);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    var optionClicked = function optionClicked(isCorrect) {\n        if (isCorrect) {\n            setScore(score + 1);\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect1 = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    console.log(checked);\n    //     if (questionIndex + 1 < questions.length) {\n    //       setQuestionIndex(questionIndex + 1);\n    //     } else {\n    //       setShowFinalResult(true);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Current Score: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 52,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"radio\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect1 ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 53,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 64,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return optionClicked;\n                },\n                children: \"Next Question\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 67,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"3YHCp8DjPbOKtrIq+1vut+fnvwk=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBT3pCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0osQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNLLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR04sQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1LLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNWLEtBQUs7U0FBQSxDQUFDO1FBQ2xEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCLDBCQUEwQjtnQkFDMUJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPO2FBQ1QsTUFBTTtnQkFDSkYsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLE9BQU87YUFDVDtTQUNIO0tBQ0g7UUFFUUcsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLFNBQVMsRUFBRTtRQUMvQixJQUFJQSxTQUFTLEVBQUU7WUFDWkgsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDSDs7SUFwQ0QsSUFBUUcsS0FBSyxHQUE4QjFCLEtBQUssQ0FBeEMwQixLQUFLLEVBQUVDLGVBQWUsR0FBYTNCLEtBQUssQ0FBakMyQixlQUFlLEVBQUVDLE9BQU0sR0FBSzVCLEtBQUssQ0FBaEI0QixNQUFNO0lBRXRDLElBQThCL0IsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU4vQyxPQU1pQixHQUFnQkEsR0FBYyxHQUE5QixFQU5qQixVQU02QixHQUFJQSxHQUFjLEdBQWxCO0lBQzFCLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUGpELFVBT21CLEdBQWtCQSxJQUFZLEdBQTlCLEVBUG5CLFlBT2lDLEdBQUlBLElBQVksR0FBaEI7SUFDOUIsSUFBMEJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFSeEMsS0FRZSxHQUFjQSxJQUFXLEdBQXpCLEVBUmYsUUFReUIsR0FBSUEsSUFBVyxHQUFmO0lBS3RCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0lBNEJyQixrREFBa0Q7SUFDbEQsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLE1BQU07SUFFTixxQkFDRyw4REFBQ1osTUFBSTtRQUFDcUIsUUFBUSxFQUFFdkIsWUFBWTtRQUFFd0IsU0FBUyxFQUFFaEMsc0ZBQW1COzswQkFDekQsOERBQUNrQyxJQUFFOztvQkFBQyxpQkFBZTtvQkFBQ1QsS0FBSzs7Ozs7O29CQUFNOzBCQUMvQiw4REFBQ1UsSUFBRTtnQkFBQ0gsU0FBUyxFQUFFaEMsdUZBQW9COzBCQUFHNEIsS0FBSzs7Ozs7b0JBQU07MEJBQ2pELDhEQUFDUyxLQUFHO2dCQUFDTCxTQUFTLEVBQUVoQyx5RkFBc0I7O29CQUNsQzZCLGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFYixHQUFHLENBQUMsU0FBQ2MsTUFBTSxFQUFLO3dCQUMvQixxQkFDRyw4REFBQ08sS0FBRzs7OENBQ0QsOERBQUNwQixPQUFLO29DQUFDcUIsRUFBRSxFQUFFUixNQUFNLENBQUNRLEVBQUU7b0NBQUVDLElBQUksRUFBQyxPQUFPO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2pDLEtBQUssRUFBRXVCLE1BQU07b0NBQUVXLFFBQVEsRUFBRXRDLGFBQWE7Ozs7O3lDQUFJOzhDQUMzRiw4REFBQ3VDLE9BQUs7OENBQUVaLE1BQU07Ozs7O3lDQUFTOzsyQkFGaEJBLE1BQU0sQ0FBQ1EsRUFBRTs7OztpQ0FHYixDQUNQO3FCQUNKLENBQUM7a0NBQ0YsOERBQUNELEtBQUc7a0NBQUVWLFVBQVMsR0FBRyxzQkFBWSxHQUFPLGtCQUFhOzs7Ozs0QkFBTzs7Ozs7O29CQUNsRDswQkFDTiw4REFBQ2dCLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFROzBCQUFFLE9BRXZCOzs7OztvQkFBUzswQkFDVCw4REFBQ0ksUUFBTTtnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNbEIsYUFBYTtpQkFBQTswQkFBRSxlQUFhOzs7OztvQkFBUzs7Ozs7O1lBQ3hELENBQ1I7Q0FDSjtHQWxFSXpCLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CO0FBbUU3QiwrREFBZUEsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb24uanN4P2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGFuc3dlciB9ID0gcHJvcHM7XG5cbiAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgZnVuY3Rpb24gb25WYWx1ZUNoYW5nZShlKSB7XG4gICAgICBzZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgIH1cbiAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXJzID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IGlucHV0LnZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhbnN3ZXJzW2ldID09PSBjaGVja2VkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QodHJ1ZSk7XG4gICAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdChmYWxzZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgZnVuY3Rpb24gb3B0aW9uQ2xpY2tlZChpc0NvcnJlY3QpIHtcbiAgICAgIGlmIChpc0NvcnJlY3QpIHtcbiAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICB9XG4gICB9XG4gICAvLyAgICAgaWYgKHF1ZXN0aW9uSW5kZXggKyAxIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgLy8gICAgICAgc2V0UXVlc3Rpb25JbmRleChxdWVzdGlvbkluZGV4ICsgMSk7XG4gICAvLyAgICAgfSBlbHNlIHtcbiAgIC8vICAgICAgIHNldFNob3dGaW5hbFJlc3VsdCh0cnVlKTtcbiAgIC8vICAgICB9XG4gICAvLyAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDQ+Q3VycmVudCBTY29yZToge3Njb3JlfTwvaDQ+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7cG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXY+e2lzQ29ycmVjdCA/IFwiQ09SUkVDVCDinJTvuI9cIiA6IFwiSU5DT1JSRUNUIOKdjFwifTwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICBDaGVja1xuICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wdGlvbkNsaWNrZWR9Pk5leHQgUXVlc3Rpb248L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDaG9pY2VRdWVzdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNpbmdsZUNob2ljZVF1ZXN0aW9uIiwicHJvcHMiLCJvblZhbHVlQ2hhbmdlIiwiZSIsInNldENoZWNrZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImlucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbnN3ZXJzIiwibWFwIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJzZXRJc0NvcnJlY3QiLCJzZXRTY29yZSIsInNjb3JlIiwib3B0aW9uQ2xpY2tlZCIsImlzQ29ycmVjdCIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwiYW5zd2VyIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJxdWVzdGlvbkNhcmQiLCJoNCIsImgzIiwicXVlc3Rpb25UaXRsZSIsImRpdiIsImlkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});