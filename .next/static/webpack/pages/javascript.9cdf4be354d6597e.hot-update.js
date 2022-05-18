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

/***/ "./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx":
/*!********************************************************************!*\
  !*** ./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoiceQuestion.module.css */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.module.css\");\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MultiChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return {\n                value: input.value,\n                checked: input.checked\n            };\n        });\n        var selectedAnswers = answers.filter(function(answer) {\n            return answer.checked === true;\n        });\n        console.log(selectedAnswers);\n        for(var i = 0; i < correctAnswers.length; i++){\n            if (selectedAnswers.length !== correctAnswers.length) {\n                setIsCorrect(false);\n                console.log(\"incorrect\");\n                return;\n            }\n            if (correctAnswers[i] === selectedAnswers[i].value) {\n                console.log(\"correct\");\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, correctAnswers = props.correctAnswers;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    console.log(checked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 47,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"checkbox\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Correct answers are: \",\n                                    correctAnswers\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 16\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 62,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, this);\n}\n_s(MultiChoiceQuestion, \"Y5dBKucz2etIlM5IE4g01OZ/Wv8=\");\n_c = MultiChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiChoiceQuestion); //             <form onSubmit={handleSubmit} className={styles.checkboxes}>\n //                <ul>\n //                   {answers[questionIndex]?.map((answer, index) => (\n //                      <label>\n //                         <input\n //                            type=\"checkbox\"\n //                            //  name={answer.id}\n //                            value={answer}\n //                            onChange={() => handleCheckboxChange(answer)}\n //                         />\n //                         {answer}\n //                      </label>\n //                   ))}\n //                </ul>\n //                <button className={styles.nextQuestionButton} type=\"submit\">\n //                   Next Question\n //                </button>\n //             </form>\n //          </div>\n //       </div>\n //    )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"MultiChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUNVOztBQUV0RCxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQU94QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNSyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ25DLE9BQU87Z0JBQUVWLEtBQUssRUFBRVUsS0FBSyxDQUFDVixLQUFLO2dCQUFFVyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzthQUFFLENBQUM7U0FDeEQsQ0FBQztRQUVGLElBQU1DLGVBQWUsR0FBR0osT0FBTyxDQUFDSyxNQUFNLENBQUMsU0FBQ0MsTUFBTTttQkFBS0EsTUFBTSxDQUFDSCxPQUFPLEtBQUssSUFBSTtTQUFBLENBQUM7UUFDM0VJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixlQUFlLENBQUMsQ0FBQztRQUU3QixJQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0MsY0FBYyxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxDQUFFO1lBQzdDLElBQUlMLGVBQWUsQ0FBQ08sTUFBTSxLQUFLRCxjQUFjLENBQUNDLE1BQU0s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QkFBNkI7Q0FDN0IsbUNBQW1DO0NBQ25DLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCLDhFQUE4RTtDQUM5RSxrQ0FBa0M7Q0FDbEMsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFFBQVE7Q0FDUixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL011bHRpQ2hvaWNlUXVlc3Rpb24vTXVsdGlDaG9pY2VRdWVzdGlvbi5qc3g/YzZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL011bHRpQ2hvaWNlUXVlc3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNdWx0aUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGNvcnJlY3RBbnN3ZXJzIH0gPSBwcm9wcztcblxuICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGUoXCJcIik7XG4gICBjb25zdCBbaXNUb2dnbGVkLCBzZXRJc1RvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICAgIHNldENoZWNrZWQoZS50YXJnZXQudmFsdWUpO1xuICAgfVxuICAgY29uc29sZS5sb2coY2hlY2tlZCk7XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgIGNvbnN0IGFuc3dlcnMgPSBpbnB1dHMubWFwKChpbnB1dCkgPT4ge1xuICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGlucHV0LnZhbHVlLCBjaGVja2VkOiBpbnB1dC5jaGVja2VkIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRBbnN3ZXJzID0gYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmNoZWNrZWQgPT09IHRydWUpO1xuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRBbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3JyZWN0QW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKHNlbGVjdGVkQW5zd2Vycy5sZW5ndGggIT09IGNvcnJlY3RBbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgICAgaWYgKGNvcnJlY3RBbnN3ZXJzW2ldID09PSBzZWxlY3RlZEFuc3dlcnNbaV0udmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwb3NzaWJsZUFuc3dlcnM/Lm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2Fuc3dlci5pZH0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuc3dlclwiIHZhbHVlPXthbnN3ZXJ9IG9uQ2hhbmdlPXtvblZhbHVlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnthbnN3ZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIHtpc0NvcnJlY3QgPyBcIkNPUlJFQ1Qg4pyU77iPXCIgOiBcIklOQ09SUkVDVCDinYxcIn1cbiAgICAgICAgICAgICAgIDxzcGFuPkNvcnJlY3QgYW5zd2VycyBhcmU6IHtjb3JyZWN0QW5zd2Vyc308L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNob2ljZVF1ZXN0aW9uO1xuXG4vLyAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveGVzfT5cbi8vICAgICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICAgIHthbnN3ZXJzW3F1ZXN0aW9uSW5kZXhdPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBuYW1lPXthbnN3ZXIuaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGFuc3dlcil9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2Fuc3dlcn1cbi8vICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHRRdWVzdGlvbkJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuLy8gICAgICAgICAgICAgICAgICAgTmV4dCBRdWVzdGlvblxuLy8gICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgKX1cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTXVsdGlDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwib25WYWx1ZUNoYW5nZSIsImUiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VycyIsIm1hcCIsImlucHV0IiwiY2hlY2tlZCIsInNlbGVjdGVkQW5zd2VycyIsImZpbHRlciIsImFuc3dlciIsImNvbnNvbGUiLCJsb2ciLCJpIiwiY29ycmVjdEFuc3dlcnMiLCJsZW5ndGgiLCJzZXRJc0NvcnJlY3QiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImlzQ29ycmVjdCIsImlzVG9nZ2xlZCIsInNldElzVG9nZ2xlZCIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\n");

/***/ })

});