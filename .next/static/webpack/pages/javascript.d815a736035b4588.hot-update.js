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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChoiceQuestion.module.css */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.module.css\");\n/* harmony import */ var _SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SingleChoiceQuestion(props) {\n    var _this = this;\n    var handleSelectedAnswer = function handleSelectedAnswer(event) {\n        var selectedAnswer = event.target.value;\n        checkAnswer(selectedAnswer);\n    };\n    var checkAnswer = function checkAnswer(answer) {\n        if (answer === answer) {\n            setSucessAnswer(true);\n        } else {\n            setFailAnswer(true);\n        }\n    };\n    var handleSubmit = // function handleSubmit() {\n    //    setSucessAnswer(false);\n    //    setFailAnswer(false);\n    // }\n    function handleSubmit(e) {\n        e.preventDefault();\n        var form = e.target;\n        var inputs = Array.from(form.querySelectorAll(\"input\"));\n        var answerSelected = inputs.map(function(input) {\n            return input.checked;\n        });\n        console.log(answerSelected);\n        // console.log(answers);\n        for(var i = 0; i < answerSelected.length; i++){\n            if (answerSelected[i] === answer1[i]) {\n                console.log(\"correct\");\n                setSucessAnswer(true);\n            } else {\n                console.log(\"incorrect\");\n                setFailAnswer(true);\n            }\n        }\n        console.log(sucessAnswer);\n    // if (answer) {\n    //    console.log(\"correct\");\n    //    setSucessAnswer(true);\n    // } else {\n    //    console.log(\"incorrect\");\n    //    setFailAnswer(true);\n    // }\n    };\n    _s();\n    var title = props.title, possibleAnswers = props.possibleAnswers, answer1 = props.answer;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), sucessAnswer = ref[0], setSucessAnswer = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), failAnswer = ref1[0], setFailAnswer = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().questionTitle),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 57,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleChoiceQuestion_module_css__WEBPACK_IMPORTED_MODULE_2___default().possibleAnswers),\n                children: possibleAnswers === null || possibleAnswers === void 0 ? void 0 : possibleAnswers.map(function(answer) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: answer.id,\n                                type: \"radio\",\n                                name: \"answer\",\n                                value: answer\n                            }, void 0, false, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 22\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    answer,\n                                    a\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, answer.id, true, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 19\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 58,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Check\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n                lineNumber: 68,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\",\n        lineNumber: 56,\n        columnNumber: 7\n    }, this);\n}\n_s(SingleChoiceQuestion, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = SingleChoiceQuestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChoiceQuestion);\nvar _c;\n$RefreshReg$(_c, \"SingleChoiceQuestion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTRDO0FBQ1c7O0FBRXZELFNBQVNHLG9CQUFvQixDQUFDQyxLQUFLLEVBQUU7O1FBTXpCQyxvQkFBb0IsR0FBN0IsU0FBU0Esb0JBQW9CLENBQUNDLEtBQUssRUFBRTtRQUNsQyxJQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3pDQyxXQUFXLENBQUNILGNBQWMsQ0FBQyxDQUFDO0tBQzlCO1FBQ1FHLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxNQUFNLEVBQUU7UUFDMUIsSUFBSUEsTUFBTSxLQUFLQSxNQUFNLEVBQUU7WUFDcEJDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixNQUFNO1lBQ0pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtLQUNIO1FBT1FDLFlBQVksR0FMckIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsSUFBSTtJQUVKLFNBQVNBLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3RCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDUCxNQUFNO1FBQ3JCLElBQU1VLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBTUMsY0FBYyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO21CQUFLQSxLQUFLLENBQUNDLE9BQU87U0FBQSxDQUFDO1FBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsY0FBYyxDQUFDLENBQUM7UUFDNUIsd0JBQXdCO1FBRXhCLElBQUssSUFBSU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixjQUFjLENBQUNPLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7WUFDN0MsSUFBSU4sY0FBYyxDQUFDTSxDQUFDLENBQUMsS0FBS2pCLE9BQU0sQ0FBQ2lCLENBQUMsQ0FBQyxFQUFFO2dCQUNsQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCZixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEIsTUFBTTtnQkFDSmMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCZCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDSDtRQUVEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csWUFBWSxDQUFDLENBQUM7SUFDMUIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsSUFBSTtLQUNOOztJQWhERCxJQUFRQyxLQUFLLEdBQThCM0IsS0FBSyxDQUF4QzJCLEtBQUssRUFBRUMsZUFBZSxHQUFhNUIsS0FBSyxDQUFqQzRCLGVBQWUsRUFBRXJCLE9BQU0sR0FBS1AsS0FBSyxDQUFoQk8sTUFBTTtJQUV0QyxJQUF3Q1YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU4xRCxZQU1zQixHQUFxQkEsR0FBZSxHQUFwQyxFQU50QixlQU11QyxHQUFJQSxHQUFlLEdBQW5CO0lBQ3BDLElBQW9DQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUHRELFVBT29CLEdBQW1CQSxJQUFlLEdBQWxDLEVBUHBCLGFBT21DLEdBQUlBLElBQWUsR0FBbkI7SUErQ2hDLHFCQUNHLDhEQUFDZ0IsTUFBSTtRQUFDaUIsUUFBUSxFQUFFcEIsWUFBWTtRQUFFcUIsU0FBUyxFQUFFakMsc0ZBQW1COzswQkFDekQsOERBQUNtQyxJQUFFO2dCQUFDRixTQUFTLEVBQUVqQyx1RkFBb0I7MEJBQUc2QixLQUFLOzs7OztvQkFBTTswQkFDakQsOERBQUNRLEtBQUc7Z0JBQUNKLFNBQVMsRUFBRWpDLHlGQUFzQjswQkFDbEM4QixlQUFlLGFBQWZBLGVBQWUsV0FBSyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLGVBQWUsQ0FBRVQsR0FBRyxDQUFDLFNBQUNaLE1BQU0sRUFBSztvQkFDL0IscUJBQ0csOERBQUM0QixLQUFHOzswQ0FDRCw4REFBQ2YsT0FBSztnQ0FBQ2dCLEVBQUUsRUFBRTdCLE1BQU0sQ0FBQzZCLEVBQUU7Z0NBQUVDLElBQUksRUFBQyxPQUFPO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQ2pDLEtBQUssRUFBRUUsTUFBTTs7Ozs7cUNBQUk7MENBQ2xFLDhEQUFDZ0MsT0FBSzs7b0NBQUVoQyxNQUFNO29DQUFFaUMsQ0FBQzs7Ozs7O3FDQUFVOzt1QkFGcEJqQyxNQUFNLENBQUM2QixFQUFFOzs7OzZCQUdiLENBQ1A7aUJBQ0osQ0FBQzs7Ozs7b0JBQ0M7MEJBQ04sOERBQUNLLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFROzBCQUFDLE9BQUs7Ozs7O29CQUFTOzs7Ozs7WUFDaEMsQ0FDUjtDQUNKO0dBbkVRdEMsb0JBQW9CO0FBQXBCQSxLQUFBQSxvQkFBb0I7QUFvRTdCLCtEQUFlQSxvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvbi5qc3g/ZDJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NpbmdsZUNob2ljZVF1ZXN0aW9uLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gU2luZ2xlQ2hvaWNlUXVlc3Rpb24ocHJvcHMpIHtcbiAgIGNvbnN0IHsgdGl0bGUsIHBvc3NpYmxlQW5zd2VycywgYW5zd2VyIH0gPSBwcm9wcztcblxuICAgY29uc3QgW3N1Y2Vzc0Fuc3dlciwgc2V0U3VjZXNzQW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtmYWlsQW5zd2VyLCBzZXRGYWlsQW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0ZWRBbnN3ZXIoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQW5zd2VyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY2hlY2tBbnN3ZXIoc2VsZWN0ZWRBbnN3ZXIpO1xuICAgfVxuICAgZnVuY3Rpb24gY2hlY2tBbnN3ZXIoYW5zd2VyKSB7XG4gICAgICBpZiAoYW5zd2VyID09PSBhbnN3ZXIpIHtcbiAgICAgICAgIHNldFN1Y2Vzc0Fuc3dlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBzZXRGYWlsQW5zd2VyKHRydWUpO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAvLyAgICBzZXRTdWNlc3NBbnN3ZXIoZmFsc2UpO1xuICAgLy8gICAgc2V0RmFpbEFuc3dlcihmYWxzZSk7XG4gICAvLyB9XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgICAgIGNvbnN0IGFuc3dlclNlbGVjdGVkID0gaW5wdXRzLm1hcCgoaW5wdXQpID0+IGlucHV0LmNoZWNrZWQpO1xuICAgICAgY29uc29sZS5sb2coYW5zd2VyU2VsZWN0ZWQpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5zd2Vycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhbnN3ZXJTZWxlY3RlZFtpXSA9PT0gYW5zd2VyW2ldKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzZXRTdWNlc3NBbnN3ZXIodHJ1ZSk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICBzZXRGYWlsQW5zd2VyKHRydWUpO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhzdWNlc3NBbnN3ZXIpO1xuICAgICAgLy8gaWYgKGFuc3dlcikge1xuICAgICAgLy8gICAgY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgLy8gICAgc2V0U3VjZXNzQW5zd2VyKHRydWUpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgLy8gICAgc2V0RmFpbEFuc3dlcih0cnVlKTtcbiAgICAgIC8vIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3NpYmxlQW5zd2Vyc30+XG4gICAgICAgICAgICB7cG9zc2libGVBbnN3ZXJzPy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbnN3ZXIuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbnN3ZXJcIiB2YWx1ZT17YW5zd2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnthbnN3ZXJ9e2EgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2hlY2s8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDaG9pY2VRdWVzdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNpbmdsZUNob2ljZVF1ZXN0aW9uIiwicHJvcHMiLCJoYW5kbGVTZWxlY3RlZEFuc3dlciIsImV2ZW50Iiwic2VsZWN0ZWRBbnN3ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoZWNrQW5zd2VyIiwiYW5zd2VyIiwic2V0U3VjZXNzQW5zd2VyIiwic2V0RmFpbEFuc3dlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpbnB1dHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5zd2VyU2VsZWN0ZWQiLCJtYXAiLCJpbnB1dCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInN1Y2Vzc0Fuc3dlciIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwiZmFpbEFuc3dlciIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwicXVlc3Rpb25DYXJkIiwiaDMiLCJxdWVzdGlvblRpdGxlIiwiZGl2IiwiaWQiLCJ0eXBlIiwibmFtZSIsImxhYmVsIiwiYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\n");

/***/ })

});