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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Questionaire.module.css */ \"./src/components/Questionaire/Questionaire.module.css\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    var finalResults = function finalResults(score) {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = questionsById[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var question = _step.value;\n                console.log(questionById);\n                console.log(question.type);\n                var points = 0;\n                switch(question.type){\n                    case \"multi-choice\":\n                        if (answers[question.id] === question.correctAnswers) {\n                            points += 1;\n                            console.log(score);\n                        }\n                        break;\n                    case \"single-choice\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            points += 1;\n                            console.log(score);\n                        }\n                        break;\n                    case \"true-or-false\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            points += 1;\n                        }\n                        break;\n                }\n                setScore(score + points);\n                return score;\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        console.log(score);\n    //    if (questionIndex + 1 < questions.length) {\n    //      setQuestionIndex(questionIndex + 1);\n    //    } else {\n    //      setShowFinalResult(true);\n    //    }\n    };\n    var totalScore = function totalScore(isCorrect) {\n        if (isCorrect) {\n            setScore(score1 + 1);\n        }\n        return score1;\n    };\n    _s();\n    var id = props.id, type = props.type;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref3[0], setQuestionsById = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    //    const [questionIndex, setQuestionIndex] = useState(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score1 = ref2[0], setScore = ref2[1];\n    //    const [showFinalResult, setShowFinalResult] = useState(false);\n    //    const [questionTitle, setQuestionTitle] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                            console.log(questionsById);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //   console.log(question.type)\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: (_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default().questionaire),\n                onClick: function() {\n                    return finalResults();\n                },\n                children: \"Score is:\"\n            }, void 0, false, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                lineNumber: 79,\n                columnNumber: 10\n            }, this),\n            questionsById.map(function(question) {\n                switch(question.type){\n                    case \"single-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 22\n                        }, _this);\n                    case \"multiple-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers,\n                            correctAnswers: question.correctAnswers\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 22\n                        }, _this);\n                    case \"true-or-false\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 22\n                        }, _this);\n                    default:\n                        return null;\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(Questionaire, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUM7QUFDRztBQUNIO0FBQzlCOztBQUUvQyxTQUFTTSxZQUFZLENBQUNDLEtBQUssRUFBRTs7UUEwQmpCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO1lBQ3JCLHlCQUFjLFNBQWQsaUJBQWMsVUFBZCxjQUFjOztZQUFuQixRQUFLLFNBQWMsR0FBSUMsYUFBYSxxQkFBL0IsS0FBYyxJQUFkLHlCQUFjLElBQWQsS0FBYyxHQUFkLFNBQWMsZ0JBQWQseUJBQWMsUUFBbUI7Z0JBQWpDLElBQU1DLFFBQVEsR0FBZCxLQUFjO2dCQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7Z0JBQzNCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBTUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2hCLE9BQVFMLFFBQVEsQ0FBQ0ksSUFBSTtvQkFDbEIsS0FBSyxjQUFjO3dCQUNoQixJQUFJRSxPQUFPLENBQUNOLFFBQVEsQ0FBQ08sRUFBRSxDQUFDLEtBQUtQLFFBQVEsQ0FBQ1EsY0FBYyxFQUFFOzRCQUNuREgsTUFBTSxJQUFJLENBQUMsQ0FBQzs0QkFDWkosT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDO3lCQUNyQjt3QkFDRCxNQUFNO29CQUNULEtBQUssZUFBZTt3QkFDakIsSUFBSVEsT0FBTyxDQUFDTixRQUFRLENBQUNPLEVBQUUsQ0FBQyxLQUFLUCxRQUFRLENBQUNNLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFNBQUNDLE1BQU07bUNBQUtBLE1BQU0sQ0FBQ0Ms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QUFDLFNBQUNuQixNQUFNO3VDQUFLQSxNQUFNLENBQUNzQixJQUFJOzZCQUFBLENBQUM7NEJBQzlEdEIsTUFBTSxFQUFFVixRQUFRLENBQUNNLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFNBQUNDLE1BQU07dUNBQUtBLE1BQU0sQ0FBQ0MsU0FBUzs2QkFBQSxDQUFDOzJCQUh4RFgsUUFBUSxDQUFDTyxFQUFFOzs7O2lDQUlqQixDQUNIO29CQUNMO3dCQUNHLE9BQU8sSUFBSSxDQUFDO2lCQUNqQjthQUNILENBQUM7O29CQUNGLENBQ0o7Q0FDSjtHQWhIUVosWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBaUhyQiwrREFBZUEsWUFBWSxFQUFDLENBRTVCLCtCQUErQjtDQUMvQix1QkFBdUI7Q0FDdkIsMkNBQTJDO0NBQzNDLCtCQUErQjtDQUMvQixhQUFhO0NBQ2I7Q0FDQSxjQUFjO0NBQ2QsOEVBQThFO0NBQzlFLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFFBQVE7Q0FDUiwyQ0FBMkM7Q0FDM0MscUVBQXFFO0NBQ3JFLHdFQUF3RTtDQUN4RSw2RUFBNkU7Q0FDN0UseUNBQXlDO0NBQ3pDLGdCQUFnQjtDQUNoQix5REFBeUQ7Q0FDekQsZ0hBQWdIO0NBQ2hILGtDQUFrQztDQUNsQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsNEZBQTRGO0NBQzVGLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLEtBQUs7Q0FDTCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uYWlyZS9RdWVzdGlvbmFpcmUuanN4PzQ1ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE11bHRpQ2hvaWNlUXVlc3Rpb24gZnJvbSBcIi4uL011bHRpQ2hvaWNlUXVlc3Rpb24vTXVsdGlDaG9pY2VRdWVzdGlvblwiO1xuaW1wb3J0IFNpbmdsZUNob2ljZVF1ZXN0aW9uIGZyb20gXCIuLi9TaW5nbGVDaG9pY2VRdWVzdGlvbi9TaW5nbGVDaG9pY2VRdWVzdGlvblwiO1xuaW1wb3J0IFRydWVPckZhbHNlUXVlc3Rpb24gZnJvbSBcIi4uL1RydWVPckZhbHNlUXVlc3Rpb24vVHJ1ZU9yRmFsc2VRdWVzdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9RdWVzdGlvbmFpcmUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBRdWVzdGlvbmFpcmUocHJvcHMpIHtcbiAgIGNvbnN0IHsgaWQsIHR5cGUgfSA9IHByb3BzO1xuICAgY29uc3QgW3F1ZXN0aW9uc0J5SWQsIHNldFF1ZXN0aW9uc0J5SWRdID0gdXNlU3RhdGUoW10pO1xuICAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgLy8gICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gICAvLyAgICBjb25zdCBbc2hvd0ZpbmFsUmVzdWx0LCBzZXRTaG93RmluYWxSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAvLyAgICBjb25zdCBbcXVlc3Rpb25UaXRsZSwgc2V0UXVlc3Rpb25UaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgIGNvbnN0IFtxdWVzdGlvbmFpcmUsIHF1ZXN0aW9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3F1ZXN0aW9uYWlyZXMvJHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcXVlc3Rpb25zXCIpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICBdKTtcblxuICAgICAgICAgc2V0UXVlc3Rpb25zQnlJZChxdWVzdGlvbnMuZmlsdGVyKChxdWVzdGlvbikgPT4gcXVlc3Rpb25haXJlLnF1ZXN0aW9ucy5pbmNsdWRlcyhxdWVzdGlvbi5pZCkpKTtcblxuICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zQnlJZCk7XG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uLnR5cGUpXG4gICAgICB9XG4gICAgICBsb2FkSW5mb3JtYXRpb24oKTtcbiAgIH0sIFtdKTtcblxuICAgZnVuY3Rpb24gZmluYWxSZXN1bHRzKHNjb3JlKSB7XG4gICAgICBmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHF1ZXN0aW9uc0J5SWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkJ5SWQpO1xuICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb24udHlwZSk7XG4gICAgICAgICBjb25zdCBwb2ludHMgPSAwO1xuICAgICAgICAgc3dpdGNoIChxdWVzdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibXVsdGktY2hvaWNlXCI6XG4gICAgICAgICAgICAgICBpZiAoYW5zd2Vyc1txdWVzdGlvbi5pZF0gPT09IHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgICAgICAgICAgICBwb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbmdsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzW3F1ZXN0aW9uLmlkXSA9PT0gcXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCkpIHtcbiAgICAgICAgICAgICAgICAgIHBvaW50cyArPSAxO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNbcXVlc3Rpb24uaWRdID09PSBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgcG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgcG9pbnRzKTtcblxuICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuXG4gICAgICAvLyAgICBpZiAocXVlc3Rpb25JbmRleCArIDEgPCBxdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgIHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpO1xuICAgICAgLy8gICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgc2V0U2hvd0ZpbmFsUmVzdWx0KHRydWUpO1xuICAgICAgLy8gICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiB0b3RhbFNjb3JlKGlzQ29ycmVjdCkge1xuICAgICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzY29yZTtcbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uYWlyZX0gb25DbGljaz17KCkgPT4gZmluYWxSZXN1bHRzKCl9PlxuICAgICAgICAgICAgU2NvcmUgaXM6XG4gICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAge3F1ZXN0aW9uc0J5SWQubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChxdWVzdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlLWNob2ljZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gYW5zd2VyLnRleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyPXtxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvaW50cz17KCkgPT4gdG90YWxTY29yZShxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KSl9XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzPXtxdWVzdGlvbi5jb3JyZWN0QW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgY2FzZSBcInRydWUtb3ItZmFsc2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8VHJ1ZU9yRmFsc2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gYW5zd2VyLnRleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyPXtxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbmFpcmU7XG5cbi8vIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbi8vIHtzaG93RmluYWxSZXN1bHQgPyAoXG4vLyAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbmFsUmVzdWx0c30+XG4vLyAgICAgICA8aDE+RmluYWwgUmVzdWx0czwvaDE+XG4vLyAgICAgICA8aDI+XG4vLyAgICAgICAgICB7c2NvcmV9IG91dCBvZiB7cXVlc3Rpb25zLmxlbmd0aH0gY29ycmVjdCDinqHvuI8gKHsoc2NvcmUgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lKVxuLy8gICAgICAgPC9oMj5cbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucmVzdGFydEdhbWV9IG9uQ2xpY2s9eygpID0+IHJlc3RhcnRHYW1lKCl9PlxuLy8gICAgICAgICAgUmVzdGFydCBnYW1lXG4vLyAgICAgICA8L2J1dHRvbj5cbi8vICAgIDwvZGl2PlxuLy8gKSA6IChcbi8vICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25DYXJkfT5cbi8vICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+U2luZ2xlIENob2ljZSBRdWVzdGlvbnM8L2gzPlxuLy8gICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRTY29yZX0+Q3VycmVudCBzY29yZToge3Njb3JlfTwvaDQ+XG4vLyAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3F1ZXN0aW9uc1txdWVzdGlvbkluZGV4XX08L2g0PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbi8vICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHthbnN3ZXJzW3F1ZXN0aW9uSW5kZXhdPy5tYXAoKGFuc3dlcikgPT4gKFxuLy8gICAgICAgICAgICAgICAgPGxpIGtleT17YW5zd2VyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9IG9uQ2xpY2s9eygpID0+IG9wdGlvbkNsaWNrZWQoYW5zd2VyLmlzQ29ycmVjdCl9PlxuLy8gICAgICAgICAgICAgICAgICAge2Fuc3dlci50ZXh0fVxuLy8gICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgPC91bD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dFF1ZXN0aW9uQnV0dG9ufSBvbkNsaWNrPXtoYW5kZUNsaWNrTmV4dFF1ZXN0aW9ufT5cbi8vICAgICAgICAgIE5leHQgUXVlc3Rpb25cbi8vICAgICAgIDwvYnV0dG9uPiAqL31cbi8vICAgIDwvZGl2PlxuLy8gKX1cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXVsdGlDaG9pY2VRdWVzdGlvbiIsIlNpbmdsZUNob2ljZVF1ZXN0aW9uIiwiVHJ1ZU9yRmFsc2VRdWVzdGlvbiIsInN0eWxlcyIsIlF1ZXN0aW9uYWlyZSIsInByb3BzIiwiZmluYWxSZXN1bHRzIiwic2NvcmUiLCJxdWVzdGlvbnNCeUlkIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwicXVlc3Rpb25CeUlkIiwidHlwZSIsInBvaW50cyIsImFuc3dlcnMiLCJpZCIsImNvcnJlY3RBbnN3ZXJzIiwiZmlsdGVyIiwiYW5zd2VyIiwiaXNDb3JyZWN0Iiwic2V0U2NvcmUiLCJ0b3RhbFNjb3JlIiwic2V0UXVlc3Rpb25zQnlJZCIsInNldEFuc3dlcnMiLCJsb2FkSW5mb3JtYXRpb24iLCJxdWVzdGlvbmFpcmUiLCJxdWVzdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImluY2x1ZGVzIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcCIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});