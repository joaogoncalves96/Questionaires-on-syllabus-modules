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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var handleSelectedAnswer = function handleSelectedAnswer(event) {\n        var selectedAnswer = event.target.value;\n        checkAnswer(selectedAnswer);\n    };\n    var checkAnswer = function checkAnswer(answer) {\n        if (answer === answer) {\n            setSucessAnswer(true);\n        } else {\n            setFailAnswer(true);\n        }\n    };\n    var handleSubmit = // function handleSubmit() {\n    //    setSucessAnswer(false);\n    //    setFailAnswer(false);\n    // }\n    function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answer = inputs.map(function(input) {\n            return input.checked;\n        });\n        console.log(answer);\n    // console.log(answers);\n    // if (answer) {\n    //    console.log(\"correct\");\n    //    setSucessAnswer(true);\n    // } else {\n    //    console.log(\"incorrect\");\n    //    setFailAnswer(true);\n    // }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), sucessAnswer = ref[0], setSucessAnswer = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), failAnswer = ref1[0], setFailAnswer = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 46,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 22\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 19\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 47,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 57,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBTXpCQyxvQkFBb0IsR0FBN0IsU0FBU0Esb0JBQW9CLENBQUNDLEtBQUssRUFBRTtRQUNsQyxJQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3pDQyxXQUFXLENBQUNILGNBQWMsQ0FBQyxDQUFDO0tBQzlCO1FBQ1FHLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxNQUFNLEVBQUU7UUFDMUIsSUFBSUEsTUFBTSxLQUFLQSxNQUFNLEVBQUU7WUFDcEJDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixNQUFNO1lBQ0pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtLQUNIO1FBT1FDLFlBQVksR0FMckIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsSUFBSTtJQUVKLFNBQVNBLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDUCxNQUFNO1FBQ3JCLElBQU1VLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTVYsTUFBTSxHQUFHTyxNQUFNLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNDLE9BQU87U0FBQSxDQUFDO1FBQ25EQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsTUFBTSxDQUFDLENBQUM7SUFDcEIsd0JBQXdCO0lBRXhCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLElBQUk7S0FDTjs7SUFyQ0QsSUFBUWdCLEtBQUssR0FBOEJ2QixLQUFLLENBQXhDdUIsS0FBSyxFQUFFQyxlQUFlLEdBQWF4QixLQUFLLENBQWpDd0IsZUFBZSxFQUFFakIsT0FBTSxHQUFLUCxLQUFLLENBQWhCTyxNQUFNO0lBRXRDLElBQXdDVixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTjFELFlBTXNCLEdBQXFCQSxHQUFlLEdBQXBDLEVBTnRCLGVBTXVDLEdBQUlBLEdBQWUsR0FBbkI7SUFDcEMsSUFBb0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQdEQsVUFPb0IsR0FBbUJBLElBQWUsR0FBbEMsRUFQcEIsYUFPbUMsR0FBSUEsSUFBZSxHQUFuQjtJQW9DaEMscUJBQ0csOERBQUNnQixNQUFJO1FBQUNjLFFBQVEsRUFBRWpCLFlBQVk7UUFBRWtCLFNBQVMsRUFBRTlCLHNGQUFtQjs7MEJBQ3pELDhEQUFDZ0MsSUFBRTtnQkFBQ0YsU0FBUyxFQUFFOUIsdUZBQW9COzBCQUFHeUIsS0FBSzs7Ozs7b0JBQU07MEJBQ2pELDhEQUFDUyxLQUFHOzBCQUNBUixlQUFlLGFBQWZBLGVBQWUsV0FBSyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLGVBQWUsQ0FBRU4sR0FBRyxDQUFDLFNBQUNYLE1BQU0sRUFBSztvQkFDL0IscUJBQ0csOERBQUN5QixLQUFHOzswQ0FDRCw4REFBQ2IsT0FBSztnQ0FBQ2MsRUFBRSxFQUFFMUIsTUFBTSxDQUFDMEIsRUFBRTtnQ0FBRUMsSUFBSSxFQUFDLE9BQU87Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDOUIsS0FBSyxFQUFFRSxNQUFNOzs7OztxQ0FBSTswQ0FDbEUsOERBQUM2QixPQUFLOzBDQUFFN0IsTUFBTTs7Ozs7cUNBQVM7O3VCQUZoQkEsTUFBTSxDQUFDMEIsRUFBRTs7Ozs2QkFHYixDQUNQO2lCQUNKLENBQUM7Ozs7O29CQUNDOzBCQUNOLDhEQUFDSSxRQUFNO2dCQUFDSCxJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUzs7Ozs7O1lBQ2hDLENBQ1I7Q0FDSjtHQXhEUW5DLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CO0FBeUQ3QiwrREFBZUEsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb24uanN4P2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpbmdsZUNob2ljZVF1ZXN0aW9uKHByb3BzKSB7XG4gICBjb25zdCB7IHRpdGxlLCBwb3NzaWJsZUFuc3dlcnMsIGFuc3dlciB9ID0gcHJvcHM7XG5cbiAgIGNvbnN0IFtzdWNlc3NBbnN3ZXIsIHNldFN1Y2Vzc0Fuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbZmFpbEFuc3dlciwgc2V0RmFpbEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGVkQW5zd2VyKGV2ZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEFuc3dlciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNoZWNrQW5zd2VyKHNlbGVjdGVkQW5zd2VyKTtcbiAgIH1cbiAgIGZ1bmN0aW9uIGNoZWNrQW5zd2VyKGFuc3dlcikge1xuICAgICAgaWYgKGFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgICAgICBzZXRTdWNlc3NBbnN3ZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgc2V0RmFpbEFuc3dlcih0cnVlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgLy8gICAgc2V0U3VjZXNzQW5zd2VyKGZhbHNlKTtcbiAgIC8vICAgIHNldEZhaWxBbnN3ZXIoZmFsc2UpO1xuICAgLy8gfVxuXG4gICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XG4gICAgICBjb25zdCBhbnN3ZXIgPSBpbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQuY2hlY2tlZCk7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5zd2Vycyk7XG5cbiAgICAgIC8vIGlmIChhbnN3ZXIpIHtcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdFwiKTtcbiAgICAgIC8vICAgIHNldFN1Y2Vzc0Fuc3dlcih0cnVlKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgICBjb25zb2xlLmxvZyhcImluY29ycmVjdFwiKTtcbiAgICAgIC8vICAgIHNldEZhaWxBbnN3ZXIodHJ1ZSk7XG4gICAgICAvLyB9XG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwb3NzaWJsZUFuc3dlcnM/Lm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2Fuc3dlci5pZH0gdHlwZT1cInJhZGlvXCIgbmFtZT1cImFuc3dlclwiIHZhbHVlPXthbnN3ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2Fuc3dlcn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNoZWNrPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2hvaWNlUXVlc3Rpb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsInByb3BzIiwiaGFuZGxlU2VsZWN0ZWRBbnN3ZXIiLCJldmVudCIsInNlbGVjdGVkQW5zd2VyIiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja0Fuc3dlciIsImFuc3dlciIsInNldFN1Y2Vzc0Fuc3dlciIsInNldEZhaWxBbnN3ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImlucHV0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsInN1Y2Vzc0Fuc3dlciIsImZhaWxBbnN3ZXIiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInF1ZXN0aW9uQ2FyZCIsImgzIiwicXVlc3Rpb25UaXRsZSIsImRpdiIsImlkIiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});