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

/***/ "./src/components/Questionaire/Questionaire.jsx":
/*!******************************************************!*\
  !*** ./src/components/Questionaire/Questionaire.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    _s();\n    var id = props.id, type = props.type;\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref6[0], setQuestionsById = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionIndex = ref2[0], setQuestionIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showFinalResult = ref4[0], setShowFinalResult = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questionTitle = ref5[0], setQuestionTitle = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            //  const questionsTitles = questions.map((question) => question.title);\n                            //  setQuestionTitle(questionsTitles[]);\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                            console.log(questionaire.questions);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //  console.log(questionaire);\n            //  console.log(questions);\n            //  console.log(questionsById);\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    //   function optionClicked(isCorrect) {\n    //     if (isCorrect) {\n    //       setScore(score + 1);\n    //     }\n    //     if (questionIndex + 1 < questions.length) {\n    //       setQuestionIndex(questionIndex + 1);\n    //     } else {\n    //       setShowFinalResult(true);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: questionsById.map(function(question) {\n            switch(question.type){\n                case \"single-choice\":\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: question.title,\n                        possibleAnswers: question.answers.map(function(answer) {\n                            return answer.text;\n                        }),\n                        answer: question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })\n                    }, question.id, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 22\n                    }, _this);\n                case \"multiple-choice\":\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: question.title,\n                        possibleAnswers: question.answers,\n                        correctAnswers: question.correctAnswers\n                    }, question.id, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 22\n                    }, _this);\n                case \"true-or-false\":\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: question.title,\n                        possibleAnswers: question.answers.map(function(answer) {\n                            return answer.text;\n                        }),\n                        answer: question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })\n                    }, question.id, false, {\n                        fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 22\n                    }, _this);\n                default:\n                    return null;\n            }\n        })\n    }, void 0, false);\n}\n_s(Questionaire, \"wpxMKpx1YRtPljWu2w33224IyzM=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2lDO0FBQ0c7QUFDSDtBQUM5Qjs7QUFFL0MsU0FBU00sWUFBWSxDQUFDQyxLQUFLLEVBQUU7OztJQUMxQixJQUFRQyxFQUFFLEdBQVdELEtBQUssQ0FBbEJDLEVBQUUsRUFBRUMsSUFBSSxHQUFLRixLQUFLLENBQWRFLElBQUk7SUFDaEIsSUFBMENSLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSekQsYUFRdUIsR0FBc0JBLElBQVksR0FBbEMsRUFSdkIsZ0JBUXlDLEdBQUlBLElBQVksR0FBaEI7SUFDdEMsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUN0MsT0FTaUIsR0FBZ0JBLElBQVksR0FBNUIsRUFUakIsVUFTNkIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUEwQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVZ4RCxhQVV1QixHQUFzQkEsSUFBVyxHQUFqQyxFQVZ2QixnQkFVeUMsR0FBSUEsSUFBVyxHQUFmO0lBRXRDLElBQTBCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBWnhDLEtBWWUsR0FBY0EsSUFBVyxHQUF6QixFQVpmLFFBWXlCLEdBQUlBLElBQVcsR0FBZjtJQUN0QixJQUE4Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWJoRSxlQWF5QixHQUF3QkEsSUFBZSxHQUF2QyxFQWJ6QixrQkFhNkMsR0FBSUEsSUFBZSxHQUFuQjtJQUUxQyxJQUEwQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWZ6RCxhQWV1QixHQUFzQkEsSUFBWSxH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eUJBQUEsQ0FBQzt1QkFIeERULFFBQVEsQ0FBQ3hCLEVBQUU7Ozs7NkJBSWpCLENBQ0g7Z0JBQ0w7b0JBQ0csT0FBTyxJQUFJLENBQUM7YUFDakI7U0FDSCxDQUFDO3FCQWNGLENBQ0o7Q0FDSjtHQTlGUUYsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBK0ZyQiwrREFBZUEsWUFBWSxFQUFDLENBRTVCLCtCQUErQjtDQUMvQix1QkFBdUI7Q0FDdkIsMkNBQTJDO0NBQzNDLCtCQUErQjtDQUMvQixhQUFhO0NBQ2I7Q0FDQSxjQUFjO0NBQ2QsOEVBQThFO0NBQzlFLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFFBQVE7Q0FDUiwyQ0FBMkM7Q0FDM0MscUVBQXFFO0NBQ3JFLHdFQUF3RTtDQUN4RSw2RUFBNkU7Q0FDN0UseUNBQXlDO0NBQ3pDLGdCQUFnQjtDQUNoQix5REFBeUQ7Q0FDekQsZ0hBQWdIO0NBQ2hILGtDQUFrQztDQUNsQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsNEZBQTRGO0NBQzVGLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLEtBQUs7Q0FDTCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uYWlyZS9RdWVzdGlvbmFpcmUuanN4PzQ1ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE11bHRpQ2hvaWNlUXVlc3Rpb24gZnJvbSBcIi4uL011bHRpQ2hvaWNlUXVlc3Rpb24vTXVsdGlDaG9pY2VRdWVzdGlvblwiO1xuaW1wb3J0IFNpbmdsZUNob2ljZVF1ZXN0aW9uIGZyb20gXCIuLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvblwiO1xuaW1wb3J0IFRydWVPckZhbHNlUXVlc3Rpb24gZnJvbSBcIi4uL1RydWVPckZhbHNlUXVlc3Rpb24vVHJ1ZU9yRmFsc2VRdWVzdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9RdWVzdGlvbmFpcmUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBRdWVzdGlvbmFpcmUocHJvcHMpIHtcbiAgIGNvbnN0IHsgaWQsIHR5cGUgfSA9IHByb3BzO1xuICAgY29uc3QgW3F1ZXN0aW9uc0J5SWQsIHNldFF1ZXN0aW9uc0J5SWRdID0gdXNlU3RhdGUoW10pO1xuICAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gICBjb25zdCBbc2hvd0ZpbmFsUmVzdWx0LCBzZXRTaG93RmluYWxSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbcXVlc3Rpb25UaXRsZSwgc2V0UXVlc3Rpb25UaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhc3luYyBmdW5jdGlvbiBsb2FkSW5mb3JtYXRpb24oKSB7XG4gICAgICAgICBjb25zdCBbcXVlc3Rpb25haXJlLCBxdWVzdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9xdWVzdGlvbmFpcmVzLyR7aWR9YCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3F1ZXN0aW9uc1wiKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgXSk7XG5cbiAgICAgICAgIC8vICBjb25zdCBxdWVzdGlvbnNUaXRsZXMgPSBxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gcXVlc3Rpb24udGl0bGUpO1xuICAgICAgICAgLy8gIHNldFF1ZXN0aW9uVGl0bGUocXVlc3Rpb25zVGl0bGVzW10pO1xuXG4gICAgICAgICBzZXRRdWVzdGlvbnNCeUlkKHF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXN0aW9uKSA9PiBxdWVzdGlvbmFpcmUucXVlc3Rpb25zLmluY2x1ZGVzKHF1ZXN0aW9uLmlkKSkpO1xuXG4gICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbmFpcmUucXVlc3Rpb25zKTtcbiAgICAgICAgIC8vICBjb25zb2xlLmxvZyhxdWVzdGlvbmFpcmUpO1xuICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG4gICAgICAgICAvLyAgY29uc29sZS5sb2cocXVlc3Rpb25zQnlJZCk7XG4gICAgICB9XG4gICAgICBsb2FkSW5mb3JtYXRpb24oKTtcbiAgIH0sIFtdKTtcblxuICAgLy8gICBmdW5jdGlvbiBvcHRpb25DbGlja2VkKGlzQ29ycmVjdCkge1xuICAgLy8gICAgIGlmIChpc0NvcnJlY3QpIHtcbiAgIC8vICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAvLyAgICAgfVxuICAgLy8gICAgIGlmIChxdWVzdGlvbkluZGV4ICsgMSA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgIC8vICAgICAgIHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpO1xuICAgLy8gICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICBzZXRTaG93RmluYWxSZXN1bHQodHJ1ZSk7XG4gICAvLyAgICAgfVxuICAgLy8gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAge3F1ZXN0aW9uc0J5SWQubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChxdWVzdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlLWNob2ljZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gYW5zd2VyLnRleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyPXtxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlLWNob2ljZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxNdWx0aUNob2ljZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnM9e3F1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxUcnVlT3JGYWxzZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e3F1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KX1cblxuICAgICAgICAgey8qIDxoMz5RdWVzdGlvbmFpcmUgTmFtZXt9PC9oMz5cbiAgICAgICAgIDxTaW5nbGVDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJXaGF0IGNob2ljZSBpcyBjb3JyZWN0P1wiXG4gICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e1tcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdfVxuICAgICAgICAgICAgYW5zd2VyPXtcIm9uZVwifVxuICAgICAgICAgLz5cbiAgICAgICAgIDxNdWx0aUNob2ljZVF1ZXN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIk11bHRpIENob2ljZVwiXG4gICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e1tcImZvdXJcIiwgXCJmaXZlXCIsIFwic2l4XCIsIFwic2V2ZW5cIiwgXCJlaWdodFwiXX1cbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzPXtbXCJzaXhcIiwgXCJzZXZlblwiXX1cbiAgICAgICAgIC8+XG4gICAgICAgICA8VHJ1ZU9yRmFsc2VRdWVzdGlvbiB0aXRsZT1cIlRydWUvRmFsc2VcIiBhbnN3ZXI9e3RydWV9IC8+ICovfVxuICAgICAgPC8+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25haXJlO1xuXG4vLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4vLyB7c2hvd0ZpbmFsUmVzdWx0ID8gKFxuLy8gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maW5hbFJlc3VsdHN9PlxuLy8gICAgICAgPGgxPkZpbmFsIFJlc3VsdHM8L2gxPlxuLy8gICAgICAgPGgyPlxuLy8gICAgICAgICAge3Njb3JlfSBvdXQgb2Yge3F1ZXN0aW9ucy5sZW5ndGh9IGNvcnJlY3Qg4p6h77iPICh7KHNjb3JlIC8gcXVlc3Rpb25zLmxlbmd0aCkgKiAxMDB9JSlcbi8vICAgICAgIDwvaDI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlc3RhcnRHYW1lfSBvbkNsaWNrPXsoKSA9PiByZXN0YXJ0R2FtZSgpfT5cbi8vICAgICAgICAgIFJlc3RhcnQgZ2FtZVxuLy8gICAgICAgPC9idXR0b24+XG4vLyAgICA8L2Rpdj5cbi8vICkgOiAoXG4vLyAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4vLyAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlNpbmdsZSBDaG9pY2UgUXVlc3Rpb25zPC9oMz5cbi8vICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50U2NvcmV9PkN1cnJlbnQgc2NvcmU6IHtzY29yZX08L2g0PlxuLy8gICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9PntxdWVzdGlvbnNbcXVlc3Rpb25JbmRleF19PC9oND5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc30+XG4vLyAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7YW5zd2Vyc1txdWVzdGlvbkluZGV4XT8ubWFwKChhbnN3ZXIpID0+IChcbi8vICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Fuc3dlci5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfSBvbkNsaWNrPXsoKSA9PiBvcHRpb25DbGlja2VkKGFuc3dlci5pc0NvcnJlY3QpfT5cbi8vICAgICAgICAgICAgICAgICAgIHthbnN3ZXIudGV4dH1cbi8vICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHRRdWVzdGlvbkJ1dHRvbn0gb25DbGljaz17aGFuZGVDbGlja05leHRRdWVzdGlvbn0+XG4vLyAgICAgICAgICBOZXh0IFF1ZXN0aW9uXG4vLyAgICAgICA8L2J1dHRvbj4gKi99XG4vLyAgICA8L2Rpdj5cbi8vICl9XG4vLyA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk11bHRpQ2hvaWNlUXVlc3Rpb24iLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsIlRydWVPckZhbHNlUXVlc3Rpb24iLCJzdHlsZXMiLCJRdWVzdGlvbmFpcmUiLCJwcm9wcyIsImlkIiwidHlwZSIsInF1ZXN0aW9uc0J5SWQiLCJzZXRRdWVzdGlvbnNCeUlkIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJzaG93RmluYWxSZXN1bHQiLCJzZXRTaG93RmluYWxSZXN1bHQiLCJxdWVzdGlvblRpdGxlIiwic2V0UXVlc3Rpb25UaXRsZSIsImxvYWRJbmZvcm1hdGlvbiIsInF1ZXN0aW9uYWlyZSIsInF1ZXN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZmlsdGVyIiwicXVlc3Rpb24iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsInRleHQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0QW5zd2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});