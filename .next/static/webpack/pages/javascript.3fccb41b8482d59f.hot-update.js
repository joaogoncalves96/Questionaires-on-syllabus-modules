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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoiceQuestion.module.css */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.module.css\");\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MultiChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return {\n                value: input.value,\n                checked: input.checked\n            };\n        });\n        console.log(answers);\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, correctAnswers = props.correctAnswers;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    console.log(checked);\n    // const handleCheckboxChange = (data) => {\n    //    const isChecked = checkedCheckboxes.some((checkedCheckbox) => checkedCheckbox.value === data.value);\n    //    if (isChecked) {\n    //       setCheckedCheckboxes(checkedCheckboxes.filter((checkedCheckbox) => checkedCheckbox.value !== data.value));\n    //    } else {\n    //       setCheckedCheckboxes(checkedCheckboxes.concat(data));\n    //    }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"checkbox\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(MultiChoiceQuestion, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = MultiChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiChoiceQuestion); //             <form onSubmit={handleSubmit} className={styles.checkboxes}>\n //                <ul>\n //                   {answers[questionIndex]?.map((answer, index) => (\n //                      <label>\n //                         <input\n //                            type=\"checkbox\"\n //                            //  name={answer.id}\n //                            value={answer}\n //                            onChange={() => handleCheckboxChange(answer)}\n //                         />\n //                         {answer}\n //                      </label>\n //                   ))}\n //                </ul>\n //                <button className={styles.nextQuestionButton} type=\"submit\">\n //                   Next Question\n //                </button>\n //             </form>\n //          </div>\n //       </div>\n //    )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"MultiChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUNVOztBQUV0RCxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQU14QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNSyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ25DLE9BQU87Z0JBQUVWLEtBQUssRUFBRVUsS0FBSyxDQUFDVixLQUFLO2dCQUFFVyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzthQUFFLENBQUM7U0FDeEQsQ0FBQztRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7S0FDdkI7O0lBbEJELElBQVFNLEtBQUssR0FBc0NuQixLQUFLLENBQWhEbUIsS0FBSyxFQUFFQyxlQUFlLEdBQXFCcEIsS0FBSyxDQUF6Q29CLGVBQWUsRUFBRUMsY0FBYyxHQUFLckIsS0FBSyxDQUF4QnFCLGNBQWM7SUFFOUMsSUFBOEJ4QixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTi9DLE9BTWlCLEdBQWdCQSxHQUFjLEdBQTlCLEVBTmpCLFVBTTZCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQakQsU0FPbUIsR0FBa0JBLElBQVksR0FBOUIsRUFQbkIsWUFPaUMsR0FBSUEsSUFBWSxHQUFoQjtJQUs5Qm9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMsQ0FBQztJQVlyQiwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLHNCQUFzQjtJQUN0QixtSEFBbUg7SUFDbkgsY0FBYztJQUNkLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsS0FBSztJQUVMLHFCQUNHLDhEQUFDUixNQUFJO1FBQUNnQixRQUFRLEVBQUVsQixZQUFZO1FBQUVtQixTQUFTLEVBQUUzQixxRkFBbUI7OzBCQUN6RCw4REFBQzZCLElBQUU7Z0JBQUNGLFNBQVMsRUFBRTNCLHNGQUFvQjswQkFBR3FCLEtBQUs7Ozs7O29CQUFNOzBCQUNqRCw4REFBQ1UsS0FBRzs7b0JBQ0FULGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFTixHQUFHLENBQUMsU0FBQ2dCLE1BQU0sRUFBSzt3QkFDL0IscUJBQ0csOERBQUNELEtBQUc7OzhDQUNELDhEQUFDZCxPQUFLO29DQUFDZ0IsRUFBRSxFQUFFRCxNQUFNLENBQUNDLEVBQUU7b0NBQUVDLElBQUksRUFBQyxVQUFVO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQzVCLEtBQUssRUFBRXlCLE1BQU07b0NBQUVJLFFBQVEsRUFBRWpDLGFBQWE7Ozs7O3lDQUFJOzhDQUM5Riw4REFBQ2tDLE9BQUs7OENBQUVMLE1BQU07Ozs7O3lDQUFTOzsyQkFGaEJBLE1BQU0sQ0FBQ0MsRUFBRTs7OztpQ0FHYixDQUNQO3FCQUNKLENBQUM7a0NBQ0YsOERBQUNGLEtBQUc7a0NBQUVQLFNBQVMsR0FBRyxzQkFBWSxHQUFPLGtCQUFhOzs7Ozs0QkFBTzs7Ozs7O29CQUNsRDswQkFDTiw4REFBQ2MsUUFBTTtnQkFBQ0osSUFBSSxFQUFDLFFBQVE7MEJBQUMsT0FBSzs7Ozs7b0JBQVM7Ozs7OztZQUNoQyxDQUNSO0NBQ0o7R0EvQ0lqQyxtQkFBbUI7QUFBbkJBLEtBQUFBLG1CQUFtQjtBQWlENUIsK0RBQWVBLG1CQUFtQixFQUFDLENBRW5DLDJFQUEyRTtDQUMzRSxzQkFBc0I7Q0FDdEIsc0VBQXNFO0NBQ3RFLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsNkNBQTZDO0NBQzdDLGtEQUFrRDtDQUNsRCw0Q0FBNEM7Q0FDNUMsMkVBQTJFO0NBQzNFLDZCQUE2QjtDQUM3QixtQ0FBbUM7Q0FDbkMsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsOEVBQThFO0NBQzlFLGtDQUFrQztDQUNsQywyQkFBMkI7Q0FDM0Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXVsdGlDaG9pY2VRdWVzdGlvbi9NdWx0aUNob2ljZVF1ZXN0aW9uLmpzeD9jNmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTXVsdGlDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE11bHRpQ2hvaWNlUXVlc3Rpb24ocHJvcHMpIHtcbiAgIGNvbnN0IHsgdGl0bGUsIHBvc3NpYmxlQW5zd2VycywgY29ycmVjdEFuc3dlcnMgfSA9IHByb3BzO1xuXG4gICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgZnVuY3Rpb24gb25WYWx1ZUNoYW5nZShlKSB7XG4gICAgICBzZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgIH1cbiAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXJzID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgIHJldHVybiB7IHZhbHVlOiBpbnB1dC52YWx1ZSwgY2hlY2tlZDogaW5wdXQuY2hlY2tlZCB9O1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzKTtcbiAgIH1cblxuICAgLy8gY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgLy8gICAgY29uc3QgaXNDaGVja2VkID0gY2hlY2tlZENoZWNrYm94ZXMuc29tZSgoY2hlY2tlZENoZWNrYm94KSA9PiBjaGVja2VkQ2hlY2tib3gudmFsdWUgPT09IGRhdGEudmFsdWUpO1xuICAgLy8gICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgLy8gICAgICAgc2V0Q2hlY2tlZENoZWNrYm94ZXMoY2hlY2tlZENoZWNrYm94ZXMuZmlsdGVyKChjaGVja2VkQ2hlY2tib3gpID0+IGNoZWNrZWRDaGVja2JveC52YWx1ZSAhPT0gZGF0YS52YWx1ZSkpO1xuICAgLy8gICAgfSBlbHNlIHtcbiAgIC8vICAgICAgIHNldENoZWNrZWRDaGVja2JveGVzKGNoZWNrZWRDaGVja2JveGVzLmNvbmNhdChkYXRhKSk7XG4gICAvLyAgICB9XG4gICAvLyB9O1xuXG4gICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25DYXJkfT5cbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblRpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXY+e2lzQ29ycmVjdCA/IFwiQ09SUkVDVCDinJTvuI9cIiA6IFwiSU5DT1JSRUNUIOKdjFwifTwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DaGVjazwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlDaG9pY2VRdWVzdGlvbjtcblxuLy8gICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hlc30+XG4vLyAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICB7YW5zd2Vyc1txdWVzdGlvbkluZGV4XT8ubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgbmFtZT17YW5zd2VyLmlkfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZShhbnN3ZXIpfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0UXVlc3Rpb25CdXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbi8vICAgICAgICAgICAgICAgICAgIE5leHQgUXVlc3Rpb25cbi8vICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICl9XG4vLyA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk11bHRpQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJwb3NzaWJsZUFuc3dlcnMiLCJjb3JyZWN0QW5zd2VycyIsImlzQ29ycmVjdCIsInNldElzQ29ycmVjdCIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiYW5zd2VyIiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\n");

/***/ })

});