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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var onValueChange = function onValueChange(e) {\n        setChecked(e.target.value);\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answers = inputs.map(function(input) {\n            return input.value;\n        });\n        console.log(answers);\n        for(var i = 0; i < answers.length; i++){\n            if (answers[i] === checked) {\n                // console.log(\"correct\");\n                setIsCorrect(true);\n                return;\n            } else {\n                setIsCorrect(false);\n                // console.log(\"incorrect\");\n                return;\n            }\n        }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), isCorrect = ref1[0], setIsCorrect = ref1[1];\n    console.log(checked);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: [\n                    possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: answer.id,\n                                    type: \"radio\",\n                                    name: \"answer\",\n                                    value: answer,\n                                    onChange: onValueChange\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 22\n                                }, _this)\n                            ]\n                        }, answer.id, true, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 19\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isCorrect ? \"CORRECT!\" : \"INCORRECT!\"\n                    }, void 0, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 38,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 49,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"t+Jo8ldb8dtVQMpcvyeq8ppnqvA=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBTXpCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtRQUdRQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0osQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNLLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR04sQ0FBQyxDQUFDRSxNQUFNO1FBQ3JCLElBQU1LLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsT0FBTyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNWLEtBQUs7U0FBQSxDQUFDO1FBQ2xEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLENBQUM7UUFFckIsSUFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN0QyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQyxLQUFLRSxPQUFPLEVBQUU7Z0JBQ3pCLDBCQUEwQjtnQkFDMUJDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsT0FBTzthQUNULE1BQU07Z0JBQ0pBLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsNEJBQTRCO2dCQUM1QixPQUFPO2FBQ1Q7U0FDSDtLQUNIOztJQTVCRCxJQUFRQyxLQUFLLEdBQThCdEIsS0FBSyxDQUF4Q3NCLEtBQUssRUFBRUMsZUFBZSxHQUFhdkIsS0FBSyxDQUFqQ3VCLGVBQWUsRUFBRUMsT0FBTSxHQUFLeEIsS0FBSyxDQUFoQndCLE1BQU07SUFFdEMsSUFBOEIzQixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTi9DLE9BTWlCLEdBQWdCQSxHQUFjLEdBQTlCLEVBTmpCLFVBTTZCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBa0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVAvQyxTQU9tQixHQUFrQkEsSUFBVSxHQUE1QixFQVBuQixZQU9pQyxHQUFJQSxJQUFVLEdBQWQ7SUFLOUJtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUM7SUFzQnJCLHFCQUNHLDhEQUFDWixNQUFJO1FBQUNrQixRQUFRLEVBQUVwQixZQUFZO1FBQUVxQixTQUFTLEVBQUU3QixzRkFBbUI7OzBCQUN6RCw4REFBQytCLElBQUU7Z0JBQUNGLFNBQVMsRUFBRTdCLHVGQUFvQjswQkFBR3dCLEtBQUs7Ozs7O29CQUFNOzBCQUNqRCw4REFBQ1MsS0FBRztnQkFBQ0osU0FBUyxFQUFFN0IseUZBQXNCOztvQkFDbEN5QixlQUFlLGFBQWZBLGVBQWUsV0FBSyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLGVBQWUsQ0FBRVQsR0FBRyxDQUFDLFNBQUNVLE1BQU0sRUFBSzt3QkFDL0IscUJBQ0csOERBQUNPLEtBQUc7OzhDQUNELDhEQUFDaEIsT0FBSztvQ0FBQ2lCLEVBQUUsRUFBRVIsTUFBTSxDQUFDUSxFQUFFO29DQUFFQyxJQUFJLEVBQUMsT0FBTztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUM3QixLQUFLLEVBQUVtQixNQUFNO29DQUFFVyxRQUFRLEVBQUVsQyxhQUFhOzs7Ozt5Q0FBSTs4Q0FDM0YsOERBQUNtQyxPQUFLOzhDQUFFWixNQUFNOzs7Ozt5Q0FBUzs7MkJBRmhCQSxNQUFNLENBQUNRLEVBQUU7Ozs7aUNBR2IsQ0FDUDtxQkFDSixDQUFDO2tDQUNGLDhEQUFDRCxLQUFHO2tDQUFFTixTQUFTLEdBQUcsVUFBVSxHQUFHLFlBQVk7Ozs7OzRCQUFPOzs7Ozs7b0JBQy9DOzBCQUNOLDhEQUFDWSxRQUFNO2dCQUFDSixJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBQ2hDLENBQ1I7Q0FDSjtHQWhEUWxDLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CO0FBaUQ3QiwrREFBZUEsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb24uanN4P2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGFuc3dlciB9ID0gcHJvcHM7XG5cbiAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlKCk7XG5cbiAgIGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UoZSkge1xuICAgICAgc2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XG4gICB9XG4gICBjb25zb2xlLmxvZyhjaGVja2VkKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpO1xuICAgICAgY29uc3QgYW5zd2VycyA9IGlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYW5zd2Vyc1tpXSA9PT0gY2hlY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgICAgICAgc2V0SXNDb3JyZWN0KHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzQ29ycmVjdChmYWxzZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7cG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSBvbkNoYW5nZT17b25WYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YW5zd2VyfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXY+e2lzQ29ycmVjdCA/IFwiQ09SUkVDVCFcIiA6IFwiSU5DT1JSRUNUIVwifTwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DaGVjazwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNob2ljZVF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJwcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwic2V0Q2hlY2tlZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImFuc3dlcnMiLCJtYXAiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsInNldElzQ29ycmVjdCIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwiYW5zd2VyIiwiaXNDb3JyZWN0Iiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJxdWVzdGlvbkNhcmQiLCJoMyIsInF1ZXN0aW9uVGl0bGUiLCJkaXYiLCJpZCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});