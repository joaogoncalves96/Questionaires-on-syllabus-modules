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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = // console.log(checked);\n    function handleSubmit(e) {\n        e.preventDefault();\n        setIsToggled(true);\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        // console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                setPoints(1);\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isToggled = ref2[0], setIsToggled = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), points = ref3[0], setPoints = ref3[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 39,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: !isToggled && (possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: onValueChange\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 22\n                    }, _this);\n                }))\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 40,\n                columnNumber: 10\n            }, this),\n            isToggled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    isCorrect ? \"CORRECT \\u2714\\uFE0F\" : \"INCORRECT \\u274C\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Correct answer is: \",\n                            answer1.map(function(answer) {\n                                return answer.text;\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Points\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"U1MpMcJcnXGvu4FX2LigVT26pws=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBUXpCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBRnJCLHdCQUF3QjtJQUV4QixTQUFTQSxZQUFZLENBQUNKLENBQUMsRUFBRTtRQUN0QkEsQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQztRQUNuQkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR1AsQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1NLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNYLEtBQUs7U0FBQSxDQUFDO1FBQ2xELHdCQUF3QjtRQUV4QixJQUFLLElBQUlZLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1lBQ3RDLElBQUlILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDLEtBQUtFLE9BQU8sRUFBRTtnQkFDekJDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1QsTUFBTTtnQkFDSkEsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixPQUFPO2FBQ1Q7U0FDSDtLQUNIOztJQTlCRCxJQUFRQyxLQUFLLEdBQThCdEIsS0FBSyxDQUF4Q3NCLEtBQUssRUFBRUMsZUFBZSxHQUFhdkIsS0FBSyxDQUFqQ3VCLGVBQWUsRUFBRUMsT0FBTSxHQUFLeEIsS0FBSyxDQUFoQndCLE1BQU07SUFFdEMsSUFBOEIzQixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTi9DLE9BTWlCLEdBQWdCQSxHQUFjLEdBQTlCLEVBTmpCLFVBTTZCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQakQsU0FPbUIsR0FBa0JBLElBQVksR0FBOUIsRUFQbkIsWUFPaUMsR0FBSUEsSUFBWSxHQUFoQjtJQUM5QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVJwRCxTQVFtQixHQUFrQkEsSUFBZSxHQUFqQyxFQVJuQixZQVFpQyxHQUFJQSxJQUFlLEdBQW5CO0lBQzlCLElBQTRCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBVDFDLE1BU2dCLEdBQWVBLElBQVcsR0FBMUIsRUFUaEIsU0FTMkIsR0FBSUEsSUFBVyxHQUFmO0lBMkJ4QixxQkFDRyw4REFBQ1ksTUFBSTtRQUFDbUIsUUFBUSxFQUFFdEIsWUFBWTtRQUFFdUIsU0FBUyxFQUFFL0Isc0ZBQW1COzswQkFDekQsOERBQUNpQyxJQUFFO2dCQUFDRixTQUFTLEVBQUUvQix1RkFBb0I7MEJBQUd3QixLQUFLOzs7OztvQkFBTTswQkFDakQsOERBQUNXLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRS9CLHlGQUFzQjswQkFDbEMsQ0FBQzRCLFNBQVMsS0FDUkgsZUFBZSxhQUFmQSxlQUFlLFdBQUssR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxlQUFlLENBQUVSLEdBQUcsQ0FBQyxTQUFDUyxNQUFNLEVBQUs7b0JBQzlCLHFCQUNHLDhEQUFDUyxLQUFHOzswQ0FDRCw4REFBQ2pCLE9BQUs7Z0NBQUNrQixFQUFFLEVBQUVWLE1BQU0sQ0FBQ1UsRUFBRTtnQ0FBRUMsSUFBSSxFQUFDLE9BQU87Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDL0IsS0FBSyxFQUFFbUIsTUFBTTtnQ0FBRWEsUUFBUSxFQUFFcEMsYUFBYTs7Ozs7cUNBQUk7MENBQzNGLDhEQUFDcUMsT0FBSzswQ0FBRWQsTUFBTTs7Ozs7cUNBQVM7O3VCQUZoQkEsTUFBTSxDQUFDVSxFQUFFOzs7OzZCQUdiLENBQ1A7aUJBQ0osQ0FBQzs7Ozs7b0JBQ0Y7WUFDTFIsU0FBUyxpQkFDUCw4REFBQ08sS0FBRzs7b0JBQ0FSLFNBQVMsR0FBRyxzQkFBWSxHQUFPLGtCQUFhO29CQUFFLEdBQUc7a0NBQzlDLDhEQUFDYyxNQUFJOzs0QkFBQyxxQkFBbUI7NEJBQUNmLE9BQU0sQ0FBQ1QsR0FBRyxDQUFDLFNBQUNTLE1BQU07dUNBQUtBLE1BQU0sQ0FBQ2dCLElBQUk7NkJBQUEsQ0FBQzs7Ozs7OzRCQUFRO2tDQUNyRSw4REFBQ1AsS0FBRztrQ0FBQyxRQUFNOzs7Ozs0QkFBTTs7Ozs7O29CQUNkLGlCQUVOLDhEQUFDUSxRQUFNO2dCQUFDTixJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBRW5DLENBQ1I7Q0FDSjtHQTFESXBDLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CO0FBMkQ3QiwrREFBZUEsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb24uanN4P2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGFuc3dlciB9ID0gcHJvcHM7XG5cbiAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZSgwKTtcblxuICAgZnVuY3Rpb24gb25WYWx1ZUNoYW5nZShlKSB7XG4gICAgICBzZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgIH1cbiAgIC8vIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0SXNUb2dnbGVkKHRydWUpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXJzID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IGlucHV0LnZhbHVlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhbnN3ZXJzW2ldID09PSBjaGVja2VkKSB7XG4gICAgICAgICAgICBzZXRQb2ludHMoMSk7XG4gICAgICAgICAgICBzZXRJc0NvcnJlY3QodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7IWlzVG9nZ2xlZCAmJlxuICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAge2lzVG9nZ2xlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICB7aXNDb3JyZWN0ID8gXCJDT1JSRUNUIOKclO+4j1wiIDogXCJJTkNPUlJFQ1Qg4p2MXCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgPHNwYW4+Q29ycmVjdCBhbnN3ZXIgaXM6IHthbnN3ZXIubWFwKChhbnN3ZXIpID0+IGFuc3dlci50ZXh0KX08L3NwYW4+XG4gICAgICAgICAgICAgICA8ZGl2PlBvaW50czwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2hlY2s8L2J1dHRvbj5cbiAgICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2hvaWNlUXVlc3Rpb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwib25WYWx1ZUNoYW5nZSIsImUiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldElzVG9nZ2xlZCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VycyIsIm1hcCIsImlucHV0IiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJzZXRQb2ludHMiLCJzZXRJc0NvcnJlY3QiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsImlzQ29ycmVjdCIsImlzVG9nZ2xlZCIsInBvaW50cyIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzcGFuIiwidGV4dCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});