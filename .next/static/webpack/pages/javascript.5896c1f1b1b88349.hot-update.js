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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Questionaire.module.css */ \"./src/components/Questionaire/Questionaire.module.css\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    var finalResults = function finalResults() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = questionsById[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var question = _step.value;\n                console.log(questionsById);\n                console.log(question.type);\n                var points = 0;\n                switch(question.type){\n                    case \"multi-choice\":\n                        if (answers[question.id] === question.correctAnswers) {\n                            setScore(score + 1);\n                            console.log(score);\n                        }\n                        console.log(answers[question.id]);\n                        break;\n                    case \"single-choice\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            setScore(score + 1);\n                            console.log(score);\n                        }\n                        break;\n                    case \"true-or-false\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            setScore(score + 1);\n                        }\n                        break;\n                }\n                //  setScore(score + points);\n                return score;\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        console.log(score);\n    //    if (questionIndex + 1 < questions.length) {\n    //      setQuestionIndex(questionIndex + 1);\n    //    } else {\n    //      setShowFinalResult(true);\n    //    }\n    };\n    var totalScore = function totalScore(isCorrect) {\n        if (isCorrect) {\n            setScore(score + 1);\n        }\n        return score;\n    };\n    var getPoints = function getPoints(score) {\n        setScorescore;\n    };\n    _s();\n    var id = props.id, type = props.type;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref3[0], setQuestionsById = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    //    const [questionIndex, setQuestionIndex] = useState(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref2[0], setScore = ref2[1];\n    //    const [showFinalResult, setShowFinalResult] = useState(false);\n    //    const [questionTitle, setQuestionTitle] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                            console.log(questionsById);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //   console.log(question.type)\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: (_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default().questionaire),\n                onClick: function() {\n                    return finalResults();\n                },\n                children: [\n                    \"Score is: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                lineNumber: 84,\n                columnNumber: 10\n            }, this),\n            questionsById.map(function(question) {\n                switch(question.type){\n                    case \"single-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            }),\n                            score: getPoints\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 22\n                        }, _this);\n                    case \"multiple-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers,\n                            correctAnswers: question.correctAnswers\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 22\n                        }, _this);\n                    case \"true-or-false\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 22\n                        }, _this);\n                    default:\n                        return null;\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(Questionaire, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUM7QUFDRztBQUNIO0FBQzlCOztBQUUvQyxTQUFTTSxZQUFZLENBQUNDLEtBQUssRUFBRTs7UUEwQmpCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksR0FBRztZQUNoQix5QkFBYyxTQUFkLGlCQUFjLFVBQWQsY0FBYzs7WUFBbkIsUUFBSyxTQUFjLEdBQUlDLGFBQWEscUJBQS9CLEtBQWMsSUFBZCx5QkFBYyxJQUFkLEtBQWMsR0FBZCxTQUFjLGdCQUFkLHlCQUFjLFFBQW1CO2dCQUFqQyxJQUFNQyxRQUFRLEdBQWQsS0FBYztnQkFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUMsQ0FBQztnQkFDM0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO2dCQUMzQixJQUFNQyxNQUFNLEdBQUcsQ0FBQztnQkFDaEIsT0FBUUosUUFBUSxDQUFDRyxJQUFJO29CQUNsQixLQUFLLGNBQWM7d0JBQ2hCLElBQUlFLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDTSxFQUFFLENBQUMsS0FBS04sUUFBUSxDQUFDTyxjQUFjLEVBQUU7NEJBQ25EQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDcEJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBQzt5QkFDckI7d0JBQ0RSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPLENBQUNMLFFBQVEsQ0FBQ00sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsTUFBTTtvQkFDVCxLQUFLLGVBQWU7d0JBQ2pCLElBQUlELE9BQU8sQ0FBQ0wsUUFBUSxDQUFD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ZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeD80NWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNdWx0aUNob2ljZVF1ZXN0aW9uIGZyb20gXCIuLi9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb25cIjtcbmltcG9ydCBTaW5nbGVDaG9pY2VRdWVzdGlvbiBmcm9tIFwiLi4vU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb25cIjtcbmltcG9ydCBUcnVlT3JGYWxzZVF1ZXN0aW9uIGZyb20gXCIuLi9UcnVlT3JGYWxzZVF1ZXN0aW9uL1RydWVPckZhbHNlUXVlc3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25haXJlLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gUXVlc3Rpb25haXJlKHByb3BzKSB7XG4gICBjb25zdCB7IGlkLCB0eXBlIH0gPSBwcm9wcztcbiAgIGNvbnN0IFtxdWVzdGlvbnNCeUlkLCBzZXRRdWVzdGlvbnNCeUlkXSA9IHVzZVN0YXRlKFtdKTtcbiAgIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgIC8vICAgIGNvbnN0IFtxdWVzdGlvbkluZGV4LCBzZXRRdWVzdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICAgLy8gICAgY29uc3QgW3Nob3dGaW5hbFJlc3VsdCwgc2V0U2hvd0ZpbmFsUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgLy8gICAgY29uc3QgW3F1ZXN0aW9uVGl0bGUsIHNldFF1ZXN0aW9uVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhc3luYyBmdW5jdGlvbiBsb2FkSW5mb3JtYXRpb24oKSB7XG4gICAgICAgICBjb25zdCBbcXVlc3Rpb25haXJlLCBxdWVzdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9xdWVzdGlvbmFpcmVzLyR7aWR9YCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3F1ZXN0aW9uc1wiKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgXSk7XG5cbiAgICAgICAgIHNldFF1ZXN0aW9uc0J5SWQocXVlc3Rpb25zLmZpbHRlcigocXVlc3Rpb24pID0+IHF1ZXN0aW9uYWlyZS5xdWVzdGlvbnMuaW5jbHVkZXMocXVlc3Rpb24uaWQpKSk7XG5cbiAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uc0J5SWQpO1xuICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhxdWVzdGlvbi50eXBlKVxuICAgICAgfVxuICAgICAgbG9hZEluZm9ybWF0aW9uKCk7XG4gICB9LCBbXSk7XG5cbiAgIGZ1bmN0aW9uIGZpbmFsUmVzdWx0cygpIHtcbiAgICAgIGZvciAoY29uc3QgcXVlc3Rpb24gb2YgcXVlc3Rpb25zQnlJZCkge1xuICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zQnlJZCk7XG4gICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbi50eXBlKTtcbiAgICAgICAgIGNvbnN0IHBvaW50cyA9IDA7XG4gICAgICAgICBzd2l0Y2ggKHF1ZXN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtdWx0aS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzW3F1ZXN0aW9uLmlkXSA9PT0gcXVlc3Rpb24uY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY29yZSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzW3F1ZXN0aW9uLmlkXSk7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW5nbGUtY2hvaWNlXCI6XG4gICAgICAgICAgICAgICBpZiAoYW5zd2Vyc1txdWVzdGlvbi5pZF0gPT09IHF1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNbcXVlc3Rpb24uaWRdID09PSBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgLy8gIHNldFNjb3JlKHNjb3JlICsgcG9pbnRzKTtcblxuICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuXG4gICAgICAvLyAgICBpZiAocXVlc3Rpb25JbmRleCArIDEgPCBxdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgIHNldFF1ZXN0aW9uSW5kZXgocXVlc3Rpb25JbmRleCArIDEpO1xuICAgICAgLy8gICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgc2V0U2hvd0ZpbmFsUmVzdWx0KHRydWUpO1xuICAgICAgLy8gICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiB0b3RhbFNjb3JlKGlzQ29ycmVjdCkge1xuICAgICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzY29yZTtcbiAgIH1cblxuICAgZnVuY3Rpb24gZ2V0UG9pbnRzKHNjb3JlKSB7XG4gICAgICAgc2V0U2NvcmVzY29yZTtcbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uYWlyZX0gb25DbGljaz17KCkgPT4gZmluYWxSZXN1bHRzKCl9PlxuICAgICAgICAgICAgU2NvcmUgaXM6IHtzY29yZX1cbiAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICB7cXVlc3Rpb25zQnlJZC5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHF1ZXN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgIGNhc2UgXCJzaW5nbGUtY2hvaWNlXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNob2ljZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e3F1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2dldFBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlLWNob2ljZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxNdWx0aUNob2ljZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnM9e3F1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxUcnVlT3JGYWxzZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e3F1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uYWlyZTtcblxuLy8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxuLy8ge3Nob3dGaW5hbFJlc3VsdCA/IChcbi8vICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxSZXN1bHRzfT5cbi8vICAgICAgIDxoMT5GaW5hbCBSZXN1bHRzPC9oMT5cbi8vICAgICAgIDxoMj5cbi8vICAgICAgICAgIHtzY29yZX0gb3V0IG9mIHtxdWVzdGlvbnMubGVuZ3RofSBjb3JyZWN0IOKeoe+4jyAoeyhzY29yZSAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwfSUpXG4vLyAgICAgICA8L2gyPlxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXN0YXJ0R2FtZX0gb25DbGljaz17KCkgPT4gcmVzdGFydEdhbWUoKX0+XG4vLyAgICAgICAgICBSZXN0YXJ0IGdhbWVcbi8vICAgICAgIDwvYnV0dG9uPlxuLy8gICAgPC9kaXY+XG4vLyApIDogKFxuLy8gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuLy8gICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5TaW5nbGUgQ2hvaWNlIFF1ZXN0aW9uczwvaDM+XG4vLyAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudFNjb3JlfT5DdXJyZW50IHNjb3JlOiB7c2NvcmV9PC9oND5cbi8vICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblRpdGxlfT57cXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdfTwvaDQ+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcnN9PlxuLy8gICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAge2Fuc3dlcnNbcXVlc3Rpb25JbmRleF0/Lm1hcCgoYW5zd2VyKSA9PiAoXG4vLyAgICAgICAgICAgICAgICA8bGkga2V5PXthbnN3ZXIuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0gb25DbGljaz17KCkgPT4gb3B0aW9uQ2xpY2tlZChhbnN3ZXIuaXNDb3JyZWN0KX0+XG4vLyAgICAgICAgICAgICAgICAgICB7YW5zd2VyLnRleHR9XG4vLyAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICA8L3VsPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0UXVlc3Rpb25CdXR0b259IG9uQ2xpY2s9e2hhbmRlQ2xpY2tOZXh0UXVlc3Rpb259PlxuLy8gICAgICAgICAgTmV4dCBRdWVzdGlvblxuLy8gICAgICAgPC9idXR0b24+ICovfVxuLy8gICAgPC9kaXY+XG4vLyApfVxuLy8gPC9kaXY+XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNdWx0aUNob2ljZVF1ZXN0aW9uIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJUcnVlT3JGYWxzZVF1ZXN0aW9uIiwic3R5bGVzIiwiUXVlc3Rpb25haXJlIiwicHJvcHMiLCJmaW5hbFJlc3VsdHMiLCJxdWVzdGlvbnNCeUlkIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBvaW50cyIsImFuc3dlcnMiLCJpZCIsImNvcnJlY3RBbnN3ZXJzIiwic2V0U2NvcmUiLCJzY29yZSIsImZpbHRlciIsImFuc3dlciIsImlzQ29ycmVjdCIsInRvdGFsU2NvcmUiLCJnZXRQb2ludHMiLCJzZXRTY29yZXNjb3JlIiwic2V0UXVlc3Rpb25zQnlJZCIsInNldEFuc3dlcnMiLCJsb2FkSW5mb3JtYXRpb24iLCJxdWVzdGlvbmFpcmUiLCJxdWVzdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImluY2x1ZGVzIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcCIsInRpdGxlIiwicG9zc2libGVBbnN3ZXJzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});