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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        setIsToggled(true);\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    console.log(checked);\n    // console.log(isToggled);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: !isToggled && (possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 22\n                    }, _this);\n                }))\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 43,\n                columnNumber: 10\n            }, this),\n            isToggled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct answer is: \"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 71\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 65,\n                columnNumber: 23\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 65,\n                columnNumber: 113\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"Y5dBKucz2etIlM5IE4g01OZ/Wv8=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBT3pCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0osQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNLLGNBQWMsRUFBRSxDQUFDO1FBQ25CQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBTUMsSUFBSSxHQUFHUCxDQUFDLENBQUNFLE1BQU07UUFDckIsSUFBTU0sTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFNQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLEtBQUs7bUJBQUtBLEtBQUssQ0FBQ1gsS0FBSztTQUFBLENBQUM7UUFDbERZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsQ0FBQztRQUVyQixJQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0wsT0FBTyxDQUFDTSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1lBQ3RDLElBQUlMLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDLEtBQUtFLE9BQU8sRUFBRTtnQkFDekIsMEJBQTBCO2dCQUMxQkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1QsTUFBTTtnQkFDSkEsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVwQiw0QkFBNEI7Z0JBQzVCLE9BQU87YUFDVDtTQUNIO0tBQ0g7O0lBL0JELElBQVFDLEtBQUssR0FBOEJ2QixLQUFLLENBQXhDdUIsS0FBSyxFQUFFQyxlQUFlLEdBQWF4QixLQUFLLENBQWpDd0IsZUFBZSxFQUFFQyxPQUFNLEdBQUt6QixLQUFLLENBQWhCeUIsTUFBTTtJQUV0QyxJQUE4QjVCLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFOL0MsT0FNaUIsR0FBZ0JBLEdBQWMsR0FBOUIsRUFOakIsVUFNNkIsR0FBSUEsR0FBYyxHQUFsQjtJQUMxQixJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBqRCxTQU9tQixHQUFrQkEsSUFBWSxHQUE5QixFQVBuQixZQU9pQyxHQUFJQSxJQUFZLEdBQWhCO0lBQzlCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUnBELFNBUW1CLEdBQWtCQSxJQUFlLEdBQWpDLEVBUm5CLFlBUWlDLEdBQUlBLElBQWUsR0FBbkI7SUFLOUJvQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUM7SUF3QnJCLDBCQUEwQjtJQUUxQixxQkFDRyw4REFBQ1osTUFBSTtRQUFDbUIsUUFBUSxFQUFFdEIsWUFBWTtRQUFFdUIsU0FBUyxFQUFFL0Isc0ZBQW1COzswQkFDekQsOERBQUNpQyxJQUFFO2dCQUFDRixTQUFTLEVBQUUvQix1RkFBb0I7MEJBQUd5QixLQUFLOzs7OztvQkFBTTswQkFDakQsOERBQUNVLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRS9CLHlGQUFzQjswQkFDbEMsQ0FBQzZCLFNBQVMsS0FDUkgsZUFBZSxhQUFmQSxlQUFlLFdBQUssR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxlQUFlLENBQUVULEdBQUcsQ0FBQyxTQUFDVSxNQUFNLEVBQUs7b0JBQzlCLHFCQUNHLDhEQUFDUSxLQUFHOzswQ0FDRCw4REFBQ2pCLE9BQUs7Z0NBQUNrQixFQUFFLEVBQUVULE1BQU0sQ0FBQ1MsRUFBRTtnQ0FBRUMsSUFBSSxFQUFDLE9BQU87Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDL0IsS0FBSyxFQUFFb0IsTUFBTTtnQ0FBRVksUUFBUSxFQUFFcEMsYUFBYTs7Ozs7cUNBQUk7MENBQzNGLDhEQUFDcUMsT0FBSzswQ0FBRWIsTUFBTTs7Ozs7cUNBQVM7O3VCQUZoQkEsTUFBTSxDQUFDUyxFQUFFOzs7OzZCQUdiLENBQ1A7aUJBQ0osQ0FBQzs7Ozs7b0JBRUY7WUFXTFAsU0FBUyxpQkFBRyw4REFBQ00sS0FBRzs7b0JBQUVQLFNBQVMsR0FBRyxzQkFBWSxHQUFPLGtCQUFhO29CQUFDLEdBQUM7a0NBQUEsOERBQUNhLE1BQUk7a0NBQUMscUJBQW1COzs7Ozs0QkFBTztvQkFBQSxHQUFDOzs7Ozs7b0JBQU0saUJBQUcsOERBQUNDLFFBQU07Z0JBQUNMLElBQUksRUFBQyxRQUFROzBCQUFDLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFDdkksQ0FDUjtDQUNKO0dBaEVJcEMsb0JBQW9CO0FBQXBCQSxLQUFBQSxvQkFBb0I7QUFpRTdCLCtEQUFlQSxvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3g/ZDJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NpbmdsZUNob2ljZVF1ZXN0aW9uLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gU2luZ2xlQ2hvaWNlUXVlc3Rpb24ocHJvcHMpIHtcbiAgIGNvbnN0IHsgdGl0bGUsIHBvc3NpYmxlQW5zd2VycywgYW5zd2VyIH0gPSBwcm9wcztcblxuICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGUoXCJcIik7XG4gICBjb25zdCBbaXNUb2dnbGVkLCBzZXRJc1RvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICAgIHNldENoZWNrZWQoZS50YXJnZXQudmFsdWUpO1xuICAgfVxuICAgY29uc29sZS5sb2coY2hlY2tlZCk7XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRJc1RvZ2dsZWQodHJ1ZSk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgIGNvbnN0IGFuc3dlcnMgPSBpbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coYW5zd2Vycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGFuc3dlcnNbaV0gPT09IGNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QoZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLy8gY29uc29sZS5sb2coaXNUb2dnbGVkKTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7IWlzVG9nZ2xlZCAmJlxuICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8ZGl2PkNvcnJlY3QgYW5zd2VyIGlzOiB7YW5zd2VyfTwvZGl2PiAqL31cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgey8qIHtpc1RvZ2dsZWQgJiYge3Bvc3NpYmxlQW5zd2Vycz8ubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17YW5zd2VyLmlkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5zd2VyXCIgdmFsdWU9e2Fuc3dlcn0gb25DaGFuZ2U9e29uVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2Fuc3dlcn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9fVxuICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICB7aXNUb2dnbGVkID8gPGRpdj57aXNDb3JyZWN0ID8gXCJDT1JSRUNUIOKclO+4j1wiIDogXCJJTkNPUlJFQ1Qg4p2MXCJ9IDxzcGFuPkNvcnJlY3QgYW5zd2VyIGlzOiA8L3NwYW4+IDwvZGl2PiA6IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+fVxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNob2ljZVF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRJc1RvZ2dsZWQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsInNldElzQ29ycmVjdCIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwiYW5zd2VyIiwiaXNDb3JyZWN0IiwiaXNUb2dnbGVkIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJxdWVzdGlvbkNhcmQiLCJoMyIsInF1ZXN0aW9uVGl0bGUiLCJkaXYiLCJpZCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});