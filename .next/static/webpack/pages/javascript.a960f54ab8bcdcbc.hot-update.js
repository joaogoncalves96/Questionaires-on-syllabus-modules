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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoiceQuestion.module.css */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.module.css\");\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MultiChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return {\n                value: input.value,\n                checked: input.checked\n            };\n        });\n        console.log(answers);\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, correctAnswers = props.correctAnswers;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    console.log(checked);\n    // const handleCheckboxChange = (data) => {\n    //    const isChecked = checkedCheckboxes.some((checkedCheckbox) => checkedCheckbox.value === data.value);\n    //    if (isChecked) {\n    //       setCheckedCheckboxes(checkedCheckboxes.filter((checkedCheckbox) => checkedCheckbox.value !== data.value));\n    //    } else {\n    //       setCheckedCheckboxes(checkedCheckboxes.concat(data));\n    //    }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"checkbox\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT!\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(MultiChoiceQuestion, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = MultiChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiChoiceQuestion); //             <form onSubmit={handleSubmit} className={styles.checkboxes}>\n //                <ul>\n //                   {answers[questionIndex]?.map((answer, index) => (\n //                      <label>\n //                         <input\n //                            type=\"checkbox\"\n //                            //  name={answer.id}\n //                            value={answer}\n //                            onChange={() => handleCheckboxChange(answer)}\n //                         />\n //                         {answer}\n //                      </label>\n //                   ))}\n //                </ul>\n //                <button className={styles.nextQuestionButton} type=\"submit\">\n //                   Next Question\n //                </button>\n //             </form>\n //          </div>\n //       </div>\n //    )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"MultiChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUNVOztBQUV0RCxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQU14QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNSyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ25DLE9BQU87Z0JBQUVWLEtBQUssRUFBRVUsS0FBSyxDQUFDVixLQUFLO2dCQUFFVyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzthQUFFLENBQUM7U0FDeEQsQ0FBQztRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7S0FDdkI7O0lBbEJELElBQVFNLEtBQUssR0FBc0NuQixLQUFLLENBQWhEbUIsS0FBSyxFQUFFQyxlQUFlLEdBQXFCcEIsS0FBSyxDQUF6Q29CLGVBQWUsRUFBRUMsY0FBYyxHQUFLckIsS0FBSyxDQUF4QnFCLGNBQWM7SUFFOUMsSUFBOEJ4QixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTi9DLE9BTWlCLEdBQWdCQSxHQUFjLEdBQTlCLEVBTmpCLFVBTTZCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQakQsU0FPbUIsR0FBa0JBLElBQVksR0FBOUIsRUFQbkIsWUFPaUMsR0FBSUEsSUFBWSxHQUFoQjtJQUs5Qm9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMsQ0FBQztJQVlyQiwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLHNCQUFzQjtJQUN0QixtSEFBbUg7SUFDbkgsY0FBYztJQUNkLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsS0FBSztJQUVMLHFCQUNHLDhEQUFDUixNQUFJO1FBQUNnQixRQUFRLEVBQUVsQixZQUFZO1FBQUVtQixTQUFTLEVBQUUzQixxRkFBbUI7OzBCQUN6RCw4REFBQzZCLElBQUU7Z0JBQUNGLFNBQVMsRUFBRTNCLHNGQUFvQjswQkFBR3FCLEtBQUs7Ozs7O29CQUFNOzBCQUNqRCw4REFBQ1UsS0FBRzs7b0JBQ0FULGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFTixHQUFHLENBQUMsU0FBQ2dCLE1BQU0sRUFBSzt3QkFDL0IscUJBQ0csOERBQUNELEtBQUc7OzhDQUNELDhEQUFDZCxPQUFLO29DQUFDZ0IsRUFBRSxFQUFFRCxNQUFNLENBQUNDLEVBQUU7b0NBQUVDLElBQUksRUFBQyxVQUFVO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQzVCLEtBQUssRUFBRXlCLE1BQU07b0NBQUVJLFFBQVEsRUFBRWpDLGFBQWE7Ozs7O3lDQUFJOzhDQUM5Riw4REFBQ2tDLE9BQUs7OENBQUVMLE1BQU07Ozs7O3lDQUFTOzsyQkFGaEJBLE1BQU0sQ0FBQ0MsRUFBRTs7OztpQ0FHYixDQUNQO3FCQUNKLENBQUM7a0NBQ0YsOERBQUNGLEtBQUc7a0NBQUVQLFNBQVMsR0FBRyxzQkFBWSxHQUFHLFlBQVk7Ozs7OzRCQUFPOzs7Ozs7b0JBQ2pEOzBCQUNOLDhEQUFDYyxRQUFNO2dCQUFDSixJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBQ2hDLENBQ1I7Q0FDSjtHQS9DUWpDLG1CQUFtQjtBQUFuQkEsS0FBQUEsbUJBQW1CO0FBaUQ1QiwrREFBZUEsbUJBQW1CLEVBQUMsQ0FFbkMsMkVBQTJFO0NBQzNFLHNCQUFzQjtDQUN0QixzRUFBc0U7Q0FDdEUsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyw2Q0FBNkM7Q0FDN0Msa0RBQWtEO0NBQ2xELDRDQUE0QztDQUM1QywyRUFBMkU7Q0FDM0UsNkJBQTZCO0NBQzdCLG1DQUFtQztDQUNuQyxnQ0FBZ0M7Q0FDaEMsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2Qiw4RUFBOEU7Q0FDOUUsa0NBQWtDO0NBQ2xDLDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixRQUFRO0NBQ1IsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4P2M2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NdWx0aUNob2ljZVF1ZXN0aW9uLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTXVsdGlDaG9pY2VRdWVzdGlvbihwcm9wcykge1xuICAgY29uc3QgeyB0aXRsZSwgcG9zc2libGVBbnN3ZXJzLCBjb3JyZWN0QW5zd2VycyB9ID0gcHJvcHM7XG5cbiAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICAgIHNldENoZWNrZWQoZS50YXJnZXQudmFsdWUpO1xuICAgfVxuICAgY29uc29sZS5sb2coY2hlY2tlZCk7XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgIGNvbnN0IGFuc3dlcnMgPSBpbnB1dHMubWFwKChpbnB1dCkgPT4ge1xuICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGlucHV0LnZhbHVlLCBjaGVja2VkOiBpbnB1dC5jaGVja2VkIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuICAgfVxuXG4gICAvLyBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAvLyAgICBjb25zdCBpc0NoZWNrZWQgPSBjaGVja2VkQ2hlY2tib3hlcy5zb21lKChjaGVja2VkQ2hlY2tib3gpID0+IGNoZWNrZWRDaGVja2JveC52YWx1ZSA9PT0gZGF0YS52YWx1ZSk7XG4gICAvLyAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAvLyAgICAgICBzZXRDaGVja2VkQ2hlY2tib3hlcyhjaGVja2VkQ2hlY2tib3hlcy5maWx0ZXIoKGNoZWNrZWRDaGVja2JveCkgPT4gY2hlY2tlZENoZWNrYm94LnZhbHVlICE9PSBkYXRhLnZhbHVlKSk7XG4gICAvLyAgICB9IGVsc2Uge1xuICAgLy8gICAgICAgc2V0Q2hlY2tlZENoZWNrYm94ZXMoY2hlY2tlZENoZWNrYm94ZXMuY29uY2F0KGRhdGEpKTtcbiAgIC8vICAgIH1cbiAgIC8vIH07XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwb3NzaWJsZUFuc3dlcnM/Lm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2Fuc3dlci5pZH0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuc3dlclwiIHZhbHVlPXthbnN3ZXJ9IG9uQ2hhbmdlPXtvblZhbHVlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnthbnN3ZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdj57aXNDb3JyZWN0ID8gXCJDT1JSRUNUIOKclO+4j1wiIDogXCJJTkNPUlJFQ1QhXCJ9PC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNob2ljZVF1ZXN0aW9uO1xuXG4vLyAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveGVzfT5cbi8vICAgICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICAgIHthbnN3ZXJzW3F1ZXN0aW9uSW5kZXhdPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBuYW1lPXthbnN3ZXIuaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGFuc3dlcil9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2Fuc3dlcn1cbi8vICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHRRdWVzdGlvbkJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuLy8gICAgICAgICAgICAgICAgICAgTmV4dCBRdWVzdGlvblxuLy8gICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgKX1cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTXVsdGlDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwib25WYWx1ZUNoYW5nZSIsImUiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VycyIsIm1hcCIsImlucHV0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImNvcnJlY3RBbnN3ZXJzIiwiaXNDb3JyZWN0Iiwic2V0SXNDb3JyZWN0Iiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJxdWVzdGlvbkNhcmQiLCJoMyIsInF1ZXN0aW9uVGl0bGUiLCJkaXYiLCJhbnN3ZXIiLCJpZCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\n");

/***/ })

});