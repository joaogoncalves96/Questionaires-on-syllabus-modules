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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = // const [points, setPoints] = useState(0);\n    function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = // console.log(checked);\n    function handleSubmit(e) {\n        e.preventDefault();\n        setIsToggled(true);\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        // console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                abs(1);\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer, abs = props.abs;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 39,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: !isToggled && (possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 22\n                    }, _this);\n                }))\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 40,\n                columnNumber: 10\n            }, this),\n            isToggled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Correct answer is: \",\n                            answer1.map(function(answer) {\n                                return answer.text;\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"Y5dBKucz2etIlM5IE4g01OZ/Wv8=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBUXpCQyxhQUFhLEdBRnRCLDJDQUEyQztJQUUzQyxTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUZyQix3QkFBd0I7SUFFeEIsU0FBU0EsWUFBWSxDQUFDSixDQUFDLEVBQUU7UUFDdEJBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFLENBQUM7UUFDbkJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdQLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNTSxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSzttQkFBS0EsS0FBSyxDQUFDWCxLQUFLO1NBQUEsQ0FBQztRQUNsRCx3QkFBd0I7UUFFeEIsSUFBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE9BQU8sQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJSCxPQUFPLENBQUNHLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1BDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsT0FBTzthQUNULE1BQU07Z0JBQ0pBLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsT0FBTzthQUNUO1NBQ0g7S0FDSDs7SUE5QkQsSUFBUUMsS0FBSyxHQUFtQ3RCLEtBQUssQ0FBN0NzQixLQUFLLEVBQUVDLGVBQWUsR0FBa0J2QixLQUFLLENBQXRDdUIsZUFBZSxFQUFFQyxPQUFNLEdBQVV4QixLQUFLLENBQXJCd0IsTUFBTSxFQUFFSixHQUFHLEdBQUtwQixLQUFLLENBQWJvQixHQUFHO0lBRTNDLElBQThCdkIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU4vQyxPQU1pQixHQUFnQkEsR0FBYyxHQUE5QixFQU5qQixVQU02QixHQUFJQSxHQUFjLEdBQWxCO0lBQzFCLElBQWtDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUGpELFNBT21CLEdBQWtCQSxJQUFZLEdBQTlCLEVBUG5CLFlBT2lDLEdBQUlBLElBQVksR0FBaEI7SUFDOUIsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFScEQsU0FRbUIsR0FBa0JBLElBQWUsR0FBakMsRUFSbkIsWUFRaUMsR0FBSUEsSUFBZSxHQUFuQjtJQTRCOUIscUJBQ0csOERBQUNZLE1BQUk7UUFBQ2tCLFFBQVEsRUFBRXJCLFlBQVk7UUFBRXNCLFNBQVMsRUFBRTlCLHNGQUFtQjs7MEJBQ3pELDhEQUFDZ0MsSUFBRTtnQkFBQ0YsU0FBUyxFQUFFOUIsdUZBQW9COzBCQUFHd0IsS0FBSzs7Ozs7b0JBQU07MEJBQ2pELDhEQUFDVSxLQUFHO2dCQUFDSixTQUFTLEVBQUU5Qix5RkFBc0I7MEJBQ2xDLENBQUM0QixTQUFTLEtBQ1JILGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFUixHQUFHLENBQUMsU0FBQ1MsTUFBTSxFQUFLO29CQUM5QixxQkFDRyw4REFBQ1EsS0FBRzs7MENBQ0QsOERBQUNoQixPQUFLO2dDQUFDaUIsRUFBRSxFQUFFVCxNQUFNLENBQUNTLEVBQUU7Z0NBQUVDLElBQUksRUFBQyxPQUFPO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQzlCLEtBQUssRUFBRW1CLE1BQU07Z0NBQUVZLFFBQVEsRUFBRW5DLGFBQWE7Ozs7O3FDQUFJOzBDQUMzRiw4REFBQ29DLE9BQUs7MENBQUViLE1BQU07Ozs7O3FDQUFTOzt1QkFGaEJBLE1BQU0sQ0FBQ1MsRUFBRTs7Ozs2QkFHYixDQUNQO2lCQUNKLENBQUM7Ozs7O29CQUNGO1lBQ0xQLFNBQVMsaUJBQ1AsOERBQUNNLEtBQUc7O29CQUNBUCxTQUFTLEdBQUcsc0JBQVksR0FBTyxrQkFBYTtvQkFBRSxHQUFHO2tDQUM5Qyw4REFBQ2EsTUFBSTs7NEJBQUMscUJBQW1COzRCQUFDZCxPQUFNLENBQUNULEdBQUcsQ0FBQyxTQUFDUyxNQUFNO3VDQUFLQSxNQUFNLENBQUNlLElBQUk7NkJBQUEsQ0FBQzs7Ozs7OzRCQUFROzs7Ozs7b0JBQ2xFLGlCQUVOLDhEQUFDQyxRQUFNO2dCQUFDTixJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBRW5DLENBQ1I7Q0FDSjtHQXpESW5DLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CO0FBMEQ3QiwrREFBZUEsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb24uanN4P2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGFuc3dlciwgYWJzIH0gPSBwcm9wcztcblxuICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGUoXCJcIik7XG4gICBjb25zdCBbaXNUb2dnbGVkLCBzZXRJc1RvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgLy8gY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDApO1xuXG4gICBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICAgIHNldENoZWNrZWQoZS50YXJnZXQudmFsdWUpO1xuICAgfVxuICAgLy8gY29uc29sZS5sb2coY2hlY2tlZCk7XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRJc1RvZ2dsZWQodHJ1ZSk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgIGNvbnN0IGFuc3dlcnMgPSBpbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQudmFsdWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5zd2Vycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGFuc3dlcnNbaV0gPT09IGNoZWNrZWQpIHtcbiAgICAgICAgICAgIGFicygxKTtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25DYXJkfT5cbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblRpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zc2libGVBbnN3ZXJzfT5cbiAgICAgICAgICAgIHshaXNUb2dnbGVkICYmXG4gICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM/Lm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2Fuc3dlci5pZH0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImFuc3dlclwiIHZhbHVlPXthbnN3ZXJ9IG9uQ2hhbmdlPXtvblZhbHVlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnthbnN3ZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICB7aXNUb2dnbGVkID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIHtpc0NvcnJlY3QgPyBcIkNPUlJFQ1Qg4pyU77iPXCIgOiBcIklOQ09SUkVDVCDinYxcIn17XCIgXCJ9XG4gICAgICAgICAgICAgICA8c3Bhbj5Db3JyZWN0IGFuc3dlciBpczoge2Fuc3dlci5tYXAoKGFuc3dlcikgPT4gYW5zd2VyLnRleHQpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNob2ljZVF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRJc1RvZ2dsZWQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwiYWJzIiwic2V0SXNDb3JyZWN0IiwidGl0bGUiLCJwb3NzaWJsZUFuc3dlcnMiLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJpc1RvZ2dsZWQiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInF1ZXN0aW9uQ2FyZCIsImgzIiwicXVlc3Rpb25UaXRsZSIsImRpdiIsImlkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3BhbiIsInRleHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});