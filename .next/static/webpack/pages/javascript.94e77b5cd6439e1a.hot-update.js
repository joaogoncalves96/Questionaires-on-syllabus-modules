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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoiceQuestion.module.css */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.module.css\");\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MultiChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return {\n                value: input.value,\n                checked: input.checked\n            };\n        });\n        console.log(answers);\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, correctAnswers = props.correctAnswers;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    console.log(checked);\n    // const handleCheckboxChange = (data) => {\n    //    const isChecked = checkedCheckboxes.some((checkedCheckbox) => checkedCheckbox.value === data.value);\n    //    if (isChecked) {\n    //       setCheckedCheckboxes(checkedCheckboxes.filter((checkedCheckbox) => checkedCheckbox.value !== data.value));\n    //    } else {\n    //       setCheckedCheckboxes(checkedCheckboxes.concat(data));\n    //    }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"checkbox\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect ? \"CORRECT!\" : \"INCORRECT!\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(MultiChoiceQuestion, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = MultiChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiChoiceQuestion); //             <form onSubmit={handleSubmit} className={styles.checkboxes}>\n //                <ul>\n //                   {answers[questionIndex]?.map((answer, index) => (\n //                      <label>\n //                         <input\n //                            type=\"checkbox\"\n //                            //  name={answer.id}\n //                            value={answer}\n //                            onChange={() => handleCheckboxChange(answer)}\n //                         />\n //                         {answer}\n //                      </label>\n //                   ))}\n //                </ul>\n //                <button className={styles.nextQuestionButton} type=\"submit\">\n //                   Next Question\n //                </button>\n //             </form>\n //          </div>\n //       </div>\n //    )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"MultiChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUNVOztBQUV0RCxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQU14QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQ0UsTUFBTTtRQUNyQixJQUFNSyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ25DLE9BQU87Z0JBQUVWLEtBQUssRUFBRVUsS0FBSyxDQUFDVixLQUFLO2dCQUFFVyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzthQUFFLENBQUM7U0FDeEQsQ0FBQztRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7S0FDdkI7O0lBbEJELElBQVFNLEtBQUssR0FBc0NuQixLQUFLLENBQWhEbUIsS0FBSyxFQUFFQyxlQUFlLEdBQXFCcEIsS0FBSyxDQUF6Q29CLGVBQWUsRUFBRUMsY0FBYyxHQUFLckIsS0FBSyxDQUF4QnFCLGNBQWM7SUFFOUMsSUFBOEJ4QixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTi9DLE9BTWlCLEdBQWdCQSxHQUFjLEdBQTlCLEVBTmpCLFVBTTZCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQakQsU0FPbUIsR0FBa0JBLElBQVksR0FBOUIsRUFQbkIsWUFPaUMsR0FBSUEsSUFBWSxHQUFoQjtJQUs5Qm9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMsQ0FBQztJQVlyQiwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLHNCQUFzQjtJQUN0QixtSEFBbUg7SUFDbkgsY0FBYztJQUNkLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsS0FBSztJQUVMLHFCQUNHLDhEQUFDUixNQUFJO1FBQUNnQixRQUFRLEVBQUVsQixZQUFZO1FBQUVtQixTQUFTLEVBQUUzQixxRkFBbUI7OzBCQUN6RCw4REFBQzZCLElBQUU7Z0JBQUNGLFNBQVMsRUFBRTNCLHNGQUFvQjswQkFBR3FCLEtBQUs7Ozs7O29CQUFNOzBCQUNqRCw4REFBQ1UsS0FBRzs7b0JBQ0FULGVBQWUsYUFBZkEsZUFBZSxXQUFLLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsZUFBZSxDQUFFTixHQUFHLENBQUMsU0FBQ2dCLE1BQU0sRUFBSzt3QkFDL0IscUJBQ0csOERBQUNELEtBQUc7OzhDQUNELDhEQUFDZCxPQUFLO29DQUFDZ0IsRUFBRSxFQUFFRCxNQUFNLENBQUNDLEVBQUU7b0NBQUVDLElBQUksRUFBQyxVQUFVO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQzVCLEtBQUssRUFBRXlCLE1BQU07b0NBQUVJLFFBQVEsRUFBRWpDLGFBQWE7Ozs7O3lDQUFJOzhDQUM5Riw4REFBQ2tDLE9BQUs7OENBQUVMLE1BQU07Ozs7O3lDQUFTOzsyQkFGaEJBLE1BQU0sQ0FBQ0MsRUFBRTs7OztpQ0FHYixDQUNQO3FCQUNKLENBQUM7a0NBQ0YsOERBQUNGLEtBQUc7a0NBQUVQLFNBQVMsR0FBRyxVQUFVLEdBQUcsWUFBWTs7Ozs7NEJBQU87Ozs7OztvQkFDL0M7MEJBQ04sOERBQUNjLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFROzBCQUFDLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFDaEMsQ0FDUjtDQUNKO0dBL0NRakMsbUJBQW1CO0FBQW5CQSxLQUFBQSxtQkFBbUI7QUFpRDVCLCtEQUFlQSxtQkFBbUIsRUFBQyxDQUVuQywyRUFBMkU7Q0FDM0Usc0JBQXNCO0NBQ3RCLHNFQUFzRTtDQUN0RSwrQkFBK0I7Q0FDL0IsaUNBQWlDO0NBQ2pDLDZDQUE2QztDQUM3QyxrREFBa0Q7Q0FDbEQsNENBQTRDO0NBQzVDLDJFQUEyRTtDQUMzRSw2QkFBNkI7Q0FDN0IsbUNBQW1DO0NBQ25DLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCLDhFQUE4RTtDQUM5RSxrQ0FBa0M7Q0FDbEMsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFFBQVE7Q0FDUixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL011bHRpQ2hvaWNlUXVlc3Rpb24vTXVsdGlDaG9pY2VRdWVzdGlvbi5qc3g/YzZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL011bHRpQ2hvaWNlUXVlc3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNdWx0aUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGNvcnJlY3RBbnN3ZXJzIH0gPSBwcm9wcztcblxuICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgIGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UoZSkge1xuICAgICAgc2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XG4gICB9XG4gICBjb25zb2xlLmxvZyhjaGVja2VkKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgY29uc3QgYW5zd2VycyA9IGlucHV0cy5tYXAoKGlucHV0KSA9PiB7XG4gICAgICAgICByZXR1cm4geyB2YWx1ZTogaW5wdXQudmFsdWUsIGNoZWNrZWQ6IGlucHV0LmNoZWNrZWQgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coYW5zd2Vycyk7XG4gICB9XG5cbiAgIC8vIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKGRhdGEpID0+IHtcbiAgIC8vICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGNoZWNrZWRDaGVja2JveGVzLnNvbWUoKGNoZWNrZWRDaGVja2JveCkgPT4gY2hlY2tlZENoZWNrYm94LnZhbHVlID09PSBkYXRhLnZhbHVlKTtcbiAgIC8vICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgIC8vICAgICAgIHNldENoZWNrZWRDaGVja2JveGVzKGNoZWNrZWRDaGVja2JveGVzLmZpbHRlcigoY2hlY2tlZENoZWNrYm94KSA9PiBjaGVja2VkQ2hlY2tib3gudmFsdWUgIT09IGRhdGEudmFsdWUpKTtcbiAgIC8vICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICBzZXRDaGVja2VkQ2hlY2tib3hlcyhjaGVja2VkQ2hlY2tib3hlcy5jb25jYXQoZGF0YSkpO1xuICAgLy8gICAgfVxuICAgLy8gfTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Bvc3NpYmxlQW5zd2Vycz8ubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17YW5zd2VyLmlkfSB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYW5zd2VyXCIgdmFsdWU9e2Fuc3dlcn0gb25DaGFuZ2U9e29uVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2Fuc3dlcn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2Pntpc0NvcnJlY3QgPyBcIkNPUlJFQ1QhXCIgOiBcIklOQ09SUkVDVCFcIn08L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2hlY2s8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpQ2hvaWNlUXVlc3Rpb247XG5cbi8vICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94ZXN9PlxuLy8gICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAge2Fuc3dlcnNbcXVlc3Rpb25JbmRleF0/Lm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIG5hbWU9e2Fuc3dlci5pZH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoYW5zd2VyKX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7YW5zd2VyfVxuLy8gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dFF1ZXN0aW9uQnV0dG9ufSB0eXBlPVwic3VibWl0XCI+XG4vLyAgICAgICAgICAgICAgICAgICBOZXh0IFF1ZXN0aW9uXG4vLyAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICApfVxuLy8gPC9kaXY+XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNdWx0aUNob2ljZVF1ZXN0aW9uIiwicHJvcHMiLCJvblZhbHVlQ2hhbmdlIiwiZSIsInNldENoZWNrZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImlucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbnN3ZXJzIiwibWFwIiwiaW5wdXQiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwiY29ycmVjdEFuc3dlcnMiLCJpc0NvcnJlY3QiLCJzZXRJc0NvcnJlY3QiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInF1ZXN0aW9uQ2FyZCIsImgzIiwicXVlc3Rpb25UaXRsZSIsImRpdiIsImFuc3dlciIsImlkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\n");

/***/ })

});