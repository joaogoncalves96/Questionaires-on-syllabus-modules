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

/***/ "./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx":
/*!********************************************************************!*\
  !*** ./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrueOrFalseQuestion.module.css */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.module.css\");\n/* harmony import */ var _TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction TrueOrFalseQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = // console.log(checked);\n    function handleSubmit(e) {\n        e.preventDefault();\n        setIsToggled(true);\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        // console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                setPoints(1);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), points = ref3[0], setPoints = ref3[1];\n    // console.log(answer.map((answer) => answer.text));\n    // console.log(isToggled);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TrueOrFalseQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: !isToggled && (possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 22\n                    }, _this);\n                }))\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                lineNumber: 45,\n                columnNumber: 10\n            }, this),\n            isToggled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Correct answer is: \",\n                            answer1.map(function(answer) {\n                                return answer.text;\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 16\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Points:+\",\n                            points\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 86\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\",\n        lineNumber: 43,\n        columnNumber: 7\n    }, this);\n}\n_s(TrueOrFalseQuestion, \"U1MpMcJcnXGvu4FX2LigVT26pws=\");\n_c = TrueOrFalseQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrueOrFalseQuestion);\nvar _c;\n$RefreshReg$(_c, \"TrueOrFalseQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcnVlT3JGYWxzZVF1ZXN0aW9uL1RydWVPckZhbHNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNWOztBQUU1QyxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQVF4QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUZyQix3QkFBd0I7SUFFeEIsU0FBU0EsWUFBWSxDQUFDSixDQUFDLEVBQUU7UUFDdEJBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFLENBQUM7UUFDbkJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdQLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNTSxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSzttQkFBS0EsS0FBSyxDQUFDWCxLQUFLO1NBQUEsQ0FBQztRQUNsRCx3QkFBd0I7UUFFeEIsSUFBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJSCxPQUFPLENBQUNHLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCLDBCQUEwQjtnQkFDMUJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkJDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPO2FBQ1QsTUFBTTtnQkFDSkQsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLE9BQU87YUFDVDtTQUNIO0tBQ0g7O0lBaENELElBQVFFLEtBQUssR0FBOEJ0QixLQUFLLENBQXhDc0IsS0FBSyxFQUFFQyxlQUFlLEdBQWF2QixLQUFLLENBQWpDdUIsZUFBZSxFQUFFQyxPQUFNLEdBQUt4QixLQUFLLENBQWhCd0IsTUFBTTtJQUV0QyxJQUE4QjFCLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFOL0MsT0FNaUIsR0FBZ0JBLEdBQWMsR0FBOUIsRUFOakIsVUFNNkIsR0FBSUEsR0FBYyxHQUFsQjtJQUMxQixJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBqRCxTQU9tQixHQUFrQkEsSUFBWSxHQUE5QixFQVBuQixZQU9pQyxHQUFJQSxJQUFZLEdBQWhCO0lBQzlCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUnBELFNBUW1CLEdBQWtCQSxJQUFlLEdBQWpDLEVBUm5CLFlBUWlDLEdBQUlBLElBQWUsR0FBbkI7SUFDOUIsSUFBNEJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUMUMsTUFTZ0IsR0FBZUEsSUFBVyxHQUExQixFQVRoQixTQVMyQixHQUFJQSxJQUFXLEdBQWY7SUE2QnhCLG9EQUFvRDtJQUNwRCwwQkFBMEI7SUFFMUIscUJBQ0csOERBQUNXLE1BQUk7UUFBQ21CLFFBQVEsRUFBRXRCLFlBQVk7UUFBRXVCLFNBQVMsRUFBRWpDLHFGQUFtQjs7MEJBQ3pELDhEQUFDbUMsSUFBRTtnQkFBQ0YsU0FBUyxFQUFFakMsc0ZBQW9COzBCQUFHMEIsS0FBSzs7Ozs7b0JBQU07MEJBQ2pELDhEQUFDVyxLQUFHO2dCQUFDSixTQUFTLEVBQUVqQyx3RkFBc0I7MEJBQ2xDLENBQUM4QixTQUFTLEtBQ1JILGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFUixHQUFHLENBQUMsU0FBQ1MsTUFBTSxFQUFLO29CQUM5QixxQkFDRyw4REFBQ1MsS0FBRzs7MENBQ0QsOERBQUNqQixPQUFLO2dDQUFDa0IsRUFBRSxFQUFFVixNQUFNLENBQUNVLEVBQUU7Z0NBQUVDLElBQUksRUFBQyxPQUFPO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQy9CLEtBQUssRUFBRW1CLE1BQU07Z0NBQUVhLFFBQVEsRUFBRXBDLGFBQWE7Ozs7O3FDQUFJOzBDQUMzRiw4REFBQ3FDLE9BQUs7MENBQUVkLE1BQU07Ozs7O3FDQUFTOzt1QkFGaEJBLE1BQU0sQ0FBQ1UsRUFBRTs7Ozs2QkFHYixDQUNQO2lCQUNKLENBQUM7Ozs7O29CQUNGO1lBQ0xSLFNBQVMsaUJBQ1AsOERBQUNPLEtBQUc7O29CQUNBUixTQUFTLEdBQUcsc0JBQVksR0FBTyxrQkFBYTtvQkFBRSxHQUFHO2tDQUM5Qyw4REFBQ2MsTUFBSTs7NEJBQUMscUJBQW1COzRCQUFDZixPQUFNLENBQUNULEdBQUcsQ0FBQyxTQUFDUyxNQUFNO3VDQUFLQSxNQUFNLENBQUNnQixJQUFJOzZCQUFBLENBQUM7Ozs7Ozs0QkFBUTtvQkFBQSxHQUFDO2tDQUFBLDhEQUFDRCxNQUFJOzs0QkFBQyxVQUFROzRCQUFDWixNQUFNOzs7Ozs7NEJBQVE7Ozs7OztvQkFDaEcsaUJBRU4sOERBQUNjLFFBQU07Z0JBQUNOLElBQUksRUFBQyxRQUFROzBCQUFDLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFFbkMsQ0FDUjtDQUNKO0dBOURJcEMsbUJBQW1CO0FBQW5CQSxLQUFBQSxtQkFBbUI7QUErRDVCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcnVlT3JGYWxzZVF1ZXN0aW9uL1RydWVPckZhbHNlUXVlc3Rpb24uanN4PzkxMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UcnVlT3JGYWxzZVF1ZXN0aW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gVHJ1ZU9yRmFsc2VRdWVzdGlvbihwcm9wcykge1xuICAgY29uc3QgeyB0aXRsZSwgcG9zc2libGVBbnN3ZXJzLCBhbnN3ZXIgfSA9IHByb3BzO1xuXG4gICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgIGNvbnN0IFtpc1RvZ2dsZWQsIHNldElzVG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoMCk7XG5cbiAgIGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UoZSkge1xuICAgICAgc2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XG4gICB9XG4gICAvLyBjb25zb2xlLmxvZyhjaGVja2VkKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldElzVG9nZ2xlZCh0cnVlKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgY29uc3QgYW5zd2VycyA9IGlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC52YWx1ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYW5zd2Vyc1tpXSA9PT0gY2hlY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KHRydWUpO1xuICAgICAgICAgICAgc2V0UG9pbnRzKDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdChmYWxzZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLy8gY29uc29sZS5sb2coYW5zd2VyLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCkpO1xuICAgLy8gY29uc29sZS5sb2coaXNUb2dnbGVkKTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7IWlzVG9nZ2xlZCAmJlxuICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAge2lzVG9nZ2xlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICB7aXNDb3JyZWN0ID8gXCJDT1JSRUNUIOKclO+4j1wiIDogXCJJTkNPUlJFQ1Qg4p2MXCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgPHNwYW4+Q29ycmVjdCBhbnN3ZXIgaXM6IHthbnN3ZXIubWFwKChhbnN3ZXIpID0+IGFuc3dlci50ZXh0KX08L3NwYW4+IDxzcGFuPlBvaW50czore3BvaW50c308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DaGVjazwvYnV0dG9uPlxuICAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBUcnVlT3JGYWxzZVF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJ1ZU9yRmFsc2VRdWVzdGlvbiIsInByb3BzIiwib25WYWx1ZUNoYW5nZSIsImUiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldElzVG9nZ2xlZCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VycyIsIm1hcCIsImlucHV0IiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJzZXRJc0NvcnJlY3QiLCJzZXRQb2ludHMiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsImlzQ29ycmVjdCIsImlzVG9nZ2xlZCIsInBvaW50cyIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzcGFuIiwidGV4dCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\n");

/***/ })

});