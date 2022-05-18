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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiChoiceQuestion.module.css */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.module.css\");\n/* harmony import */ var _MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MultiChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        setIsToggled(true);\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return {\n                value: input.value,\n                checked: input.checked\n            };\n        });\n        var selectedAnswers = answers.filter(function(answer) {\n            return answer.checked === true;\n        });\n        console.log(selectedAnswers);\n        for(var i = 0; i < correctAnswers.length; i++){\n            if (selectedAnswers.length !== correctAnswers.length) {\n                setIsCorrect(false);\n                console.log(\"incorrect\");\n                return;\n            }\n            if (correctAnswers[i] === selectedAnswers[i].value) {\n                console.log(\"correct\");\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, correctAnswers = props.correctAnswers;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    console.log(checked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MultiChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: !isToggled && (possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"checkbox\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 22\n                    }, _this);\n                }))\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 49,\n                columnNumber: 10\n            }, this),\n            isToggled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Correct answers are: \",\n                            correctAnswers\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 16\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, this);\n}\n_s(MultiChoiceQuestion, \"Y5dBKucz2etIlM5IE4g01OZ/Wv8=\");\n_c = MultiChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiChoiceQuestion); //             <form onSubmit={handleSubmit} className={styles.checkboxes}>\n //                <ul>\n //                   {answers[questionIndex]?.map((answer, index) => (\n //                      <label>\n //                         <input\n //                            type=\"checkbox\"\n //                            //  name={answer.id}\n //                            value={answer}\n //                            onChange={() => handleCheckboxChange(answer)}\n //                         />\n //                         {answer}\n //                      </label>\n //                   ))}\n //                </ul>\n //                <button className={styles.nextQuestionButton} type=\"submit\">\n //                   Next Question\n //                </button>\n //             </form>\n //          </div>\n //       </div>\n //    )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"MultiChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QztBQUNVOztBQUV0RCxTQUFTRyxtQkFBbUIsQ0FBQ0MsS0FBSyxFQUFFOztRQU94QkMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLENBQUMsRUFBRTtRQUN2QkMsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDN0I7UUFHUUMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR1AsQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1NLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUs7WUFDbkMsT0FBTztnQkFBRVgsS0FBSyxFQUFFVyxLQUFLLENBQUNYLEtBQUs7Z0JBQUVZLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO2FBQUUsQ0FBQztTQUN4RCxDQUFDO1FBRUYsSUFBTUMsZUFBZSxHQUFHSixPQUFPLENBQUNLLE1BQU0sQ0FBQyxTQUFDQyxNQUFNO21CQUFLQSxNQUFNLENBQUNILE9BQU8sS0FBSyxJQUFJO1NBQUEsQ0FBQztRQUMzRUksT0FBTyxDQUFDQyxHQUFHLENBQUNKLGVBQWUsQ0FBQyxDQUFDO1FBRTdCLElBQUssSUFBSUssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxjQUFjLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLENBQUU7WUFDN0MsSUFBSUwsZUFBZSxD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O0NBQ3RFLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsNkNBQTZDO0NBQzdDLGtEQUFrRDtDQUNsRCw0Q0FBNEM7Q0FDNUMsMkVBQTJFO0NBQzNFLDZCQUE2QjtDQUM3QixtQ0FBbUM7Q0FDbkMsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsOEVBQThFO0NBQzlFLGtDQUFrQztDQUNsQywyQkFBMkI7Q0FDM0Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXVsdGlDaG9pY2VRdWVzdGlvbi9NdWx0aUNob2ljZVF1ZXN0aW9uLmpzeD9jNmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTXVsdGlDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE11bHRpQ2hvaWNlUXVlc3Rpb24ocHJvcHMpIHtcbiAgIGNvbnN0IHsgdGl0bGUsIHBvc3NpYmxlQW5zd2VycywgY29ycmVjdEFuc3dlcnMgfSA9IHByb3BzO1xuXG4gICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtpc0NvcnJlY3QsIHNldElzQ29ycmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgIGNvbnN0IFtpc1RvZ2dsZWQsIHNldElzVG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UoZSkge1xuICAgICAgc2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XG4gICB9XG4gICBjb25zb2xlLmxvZyhjaGVja2VkKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldElzVG9nZ2xlZCh0cnVlKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgY29uc3QgYW5zd2VycyA9IGlucHV0cy5tYXAoKGlucHV0KSA9PiB7XG4gICAgICAgICByZXR1cm4geyB2YWx1ZTogaW5wdXQudmFsdWUsIGNoZWNrZWQ6IGlucHV0LmNoZWNrZWQgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZEFuc3dlcnMgPSBhbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcnJlY3RBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoc2VsZWN0ZWRBbnN3ZXJzLmxlbmd0aCAhPT0gY29ycmVjdEFuc3dlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICAgICBpZiAoY29ycmVjdEFuc3dlcnNbaV0gPT09IHNlbGVjdGVkQW5zd2Vyc1tpXS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdChmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7IWlzVG9nZ2xlZCAmJlxuICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAge2lzVG9nZ2xlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICB7aXNDb3JyZWN0ID8gXCJDT1JSRUNUIOKclO+4j1wiIDogXCJJTkNPUlJFQ1Qg4p2MXCJ9XG4gICAgICAgICAgICAgICA8c3Bhbj5Db3JyZWN0IGFuc3dlcnMgYXJlOiB7Y29ycmVjdEFuc3dlcnN9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlDaG9pY2VRdWVzdGlvbjtcblxuLy8gICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hlc30+XG4vLyAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICB7YW5zd2Vyc1txdWVzdGlvbkluZGV4XT8ubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgbmFtZT17YW5zd2VyLmlkfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZShhbnN3ZXIpfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0UXVlc3Rpb25CdXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbi8vICAgICAgICAgICAgICAgICAgIE5leHQgUXVlc3Rpb25cbi8vICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICl9XG4vLyA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk11bHRpQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRJc1RvZ2dsZWQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImNoZWNrZWQiLCJzZWxlY3RlZEFuc3dlcnMiLCJmaWx0ZXIiLCJhbnN3ZXIiLCJjb25zb2xlIiwibG9nIiwiaSIsImNvcnJlY3RBbnN3ZXJzIiwibGVuZ3RoIiwic2V0SXNDb3JyZWN0IiwidGl0bGUiLCJwb3NzaWJsZUFuc3dlcnMiLCJpc0NvcnJlY3QiLCJpc1RvZ2dsZWQiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInF1ZXN0aW9uQ2FyZCIsImgzIiwicXVlc3Rpb25UaXRsZSIsImRpdiIsImlkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\n");

/***/ })

});