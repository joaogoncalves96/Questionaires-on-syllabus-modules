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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Questionaire.module.css */ \"./src/components/Questionaire/Questionaire.module.css\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    var finalResults = function finalResults() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = questionsById[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var question = _step.value;\n                var points = 0;\n                switch(question.type){\n                    case \"multi-choice\":\n                        if (answers[question.id] === question.correctAnswers) {\n                            points += 1;\n                            console.log(score);\n                        }\n                        break;\n                    case \"single-choice\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            points += 1;\n                            console.log(score);\n                        }\n                        break;\n                    case \"true-or-false\":\n                        if (answers[question.id] === question.answers.filter(function(answer) {\n                            return answer.isCorrect;\n                        })) {\n                            points += 1;\n                        }\n                        break;\n                }\n                setScore(score + points);\n                console.log(score);\n                return score;\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    //    if (questionIndex + 1 < questions.length) {\n    //      setQuestionIndex(questionIndex + 1);\n    //    } else {\n    //      setShowFinalResult(true);\n    //    }\n    };\n    _s();\n    var id = props.id, type = props.type;\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref7[0], setQuestionsById = ref7[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionIndex = ref2[0], setQuestionIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showFinalResult = ref4[0], setShowFinalResult = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questionTitle = ref5[0], setQuestionTitle = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), totalPoints = ref6[0], setTotalPoints = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //  console.log(questionaire.questions);\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default().questionaire),\n                children: [\n                    \"Score is: \",\n                    finalResults\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                lineNumber: 69,\n                columnNumber: 10\n            }, this),\n            questionsById.map(function(question) {\n                switch(question.type){\n                    case \"single-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 22\n                        }, _this);\n                    case \"multiple-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers,\n                            correctAnswers: question.correctAnswers\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 22\n                        }, _this);\n                    case \"true-or-false\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 22\n                        }, _this);\n                    default:\n                        return null;\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(Questionaire, \"eyhjup5R2nU/UCVIlz7mJnPvDJU=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUM7QUFDRztBQUNIO0FBQzlCOztBQUUvQyxTQUFTTSxZQUFZLENBQUNDLEtBQUssRUFBRTs7UUEwQmpCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksR0FBRztZQUNoQix5QkFBYyxTQUFkLGlCQUFjLFVBQWQsY0FBYzs7WUFBbkIsUUFBSyxTQUFjLEdBQUlDLGFBQWEscUJBQS9CLEtBQWMsSUFBZCx5QkFBYyxJQUFkLEtBQWMsR0FBZCxTQUFjLGdCQUFkLHlCQUFjLFFBQW1CO2dCQUFqQyxJQUFNQyxRQUFRLEdBQWQsS0FBYztnQkFDaEIsSUFBTUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2hCLE9BQVFELFFBQVEsQ0FBQ0UsSUFBSTtvQkFDbEIsS0FBSyxjQUFjO3dCQUNoQixJQUFJQyxPQUFPLENBQUNILFFBQVEsQ0FBQ0ksRUFBRSxDQUFDLEtBQUtKLFFBQVEsQ0FBQ0ssY0FBYyxFQUFFOzRCQUNuREosTUFBTSxJQUFJLENBQUMsQ0FBQzs0QkFDWkssT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFDO3lCQUNyQjt3QkFDRCxNQUFNO29CQUNULEtBQUssZUFBZTt3QkFDakIsSUFBSUwsT0FBTyxDQUFDSCxRQUFRLENBQUNJLEVBQUUsQ0FBQyxLQUFLSixRQUFRLENBQUNHLE9BQU8sQ0FBQ00sTUFBTSxDQUFDLFNBQUNDLE1BQU07bUNBQUtBLE1BQU0sQ0FBQ0MsU0FBUzt5QkFBQSxDQUFDLEVBQUU7NEJBQ2pGVixNQUFNLElBQUksQ0FBQyxDQUFDOzRCQUNaSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7eUJBQ3JCO3dCQUNELE1BQU07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Q0FBQ29DLEtBQUs7NEJBQ3JCQyxlQUFlLEVBQUVyQyxRQUFRLENBQUNHLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxTQUFDekIsTUFBTTt1Q0FBS0EsTUFBTSxDQUFDNEIsSUFBSTs2QkFBQSxDQUFDOzRCQUM5RDVCLE1BQU0sRUFBRVYsUUFBUSxDQUFDRyxPQUFPLENBQUNNLE1BQU0sQ0FBQyxTQUFDQyxNQUFNO3VDQUFLQSxNQUFNLENBQUNDLFNBQVM7NkJBQUEsQ0FBQzsyQkFIeERYLFFBQVEsQ0FBQ0ksRUFBRTs7OztpQ0FJakIsQ0FDSDtvQkFDTDt3QkFDRyxPQUFPLElBQUksQ0FBQztpQkFDakI7YUFDSCxDQUFDOztvQkFDRixDQUNKO0NBQ0o7R0FsR1FSLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQW1HckIsK0RBQWVBLFlBQVksRUFBQyxDQUU1QiwrQkFBK0I7Q0FDL0IsdUJBQXVCO0NBQ3ZCLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IsYUFBYTtDQUNiO0NBQ0EsY0FBYztDQUNkLDhFQUE4RTtDQUM5RSx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixRQUFRO0NBQ1IsMkNBQTJDO0NBQzNDLHFFQUFxRTtDQUNyRSx3RUFBd0U7Q0FDeEUsNkVBQTZFO0NBQzdFLHlDQUF5QztDQUN6QyxnQkFBZ0I7Q0FDaEIseURBQXlEO0NBQ3pELGdIQUFnSDtDQUNoSCxrQ0FBa0M7Q0FDbEMsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLDRGQUE0RjtDQUM1Rix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixLQUFLO0NBQ0wsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeD80NWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNdWx0aUNob2ljZVF1ZXN0aW9uIGZyb20gXCIuLi9NdWx0aUNob2ljZVF1ZXN0aW9uL011bHRpQ2hvaWNlUXVlc3Rpb25cIjtcbmltcG9ydCBTaW5nbGVDaG9pY2VRdWVzdGlvbiBmcm9tIFwiLi4vU2luZ2xlQ2hvaWNlUXVlc3Rpb24vU2luZ2xlQ2hvaWNlUXVlc3Rpb25cIjtcbmltcG9ydCBUcnVlT3JGYWxzZVF1ZXN0aW9uIGZyb20gXCIuLi9UcnVlT3JGYWxzZVF1ZXN0aW9uL1RydWVPckZhbHNlUXVlc3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25haXJlLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gUXVlc3Rpb25haXJlKHByb3BzKSB7XG4gICBjb25zdCB7IGlkLCB0eXBlIH0gPSBwcm9wcztcbiAgIGNvbnN0IFtxdWVzdGlvbnNCeUlkLCBzZXRRdWVzdGlvbnNCeUlkXSA9IHVzZVN0YXRlKFtdKTtcbiAgIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgIGNvbnN0IFtxdWVzdGlvbkluZGV4LCBzZXRRdWVzdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICAgY29uc3QgW3Nob3dGaW5hbFJlc3VsdCwgc2V0U2hvd0ZpbmFsUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW3F1ZXN0aW9uVGl0bGUsIHNldFF1ZXN0aW9uVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICBjb25zdCBbdG90YWxQb2ludHMsIHNldFRvdGFsUG9pbnRzXSA9IHVzZVN0YXRlKDApO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZEluZm9ybWF0aW9uKCkge1xuICAgICAgICAgY29uc3QgW3F1ZXN0aW9uYWlyZSwgcXVlc3Rpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcXVlc3Rpb25haXJlcy8ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9xdWVzdGlvbnNcIikudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgICAgICAgIF0pO1xuXG4gICAgICAgICBzZXRRdWVzdGlvbnNCeUlkKHF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXN0aW9uKSA9PiBxdWVzdGlvbmFpcmUucXVlc3Rpb25zLmluY2x1ZGVzKHF1ZXN0aW9uLmlkKSkpO1xuXG4gICAgICAgICAvLyAgY29uc29sZS5sb2cocXVlc3Rpb25haXJlLnF1ZXN0aW9ucyk7XG4gICAgICB9XG4gICAgICBsb2FkSW5mb3JtYXRpb24oKTtcbiAgIH0sIFtdKTtcblxuICAgZnVuY3Rpb24gZmluYWxSZXN1bHRzKCkge1xuICAgICAgZm9yIChjb25zdCBxdWVzdGlvbiBvZiBxdWVzdGlvbnNCeUlkKSB7XG4gICAgICAgICBjb25zdCBwb2ludHMgPSAwO1xuICAgICAgICAgc3dpdGNoIChxdWVzdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibXVsdGktY2hvaWNlXCI6XG4gICAgICAgICAgICAgICBpZiAoYW5zd2Vyc1txdWVzdGlvbi5pZF0gPT09IHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgICAgICAgICAgICBwb2ludHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbmdsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzW3F1ZXN0aW9uLmlkXSA9PT0gcXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCkpIHtcbiAgICAgICAgICAgICAgICAgIHBvaW50cyArPSAxO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNbcXVlc3Rpb24uaWRdID09PSBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgcG9pbnRzICs9IDE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgcG9pbnRzKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAgICAgIHJldHVybiBzY29yZTtcbiAgICAgIH1cblxuICAgICAgLy8gICAgaWYgKHF1ZXN0aW9uSW5kZXggKyAxIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgLy8gICAgICBzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKTtcbiAgICAgIC8vICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgIHNldFNob3dGaW5hbFJlc3VsdCh0cnVlKTtcbiAgICAgIC8vICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uYWlyZX0+U2NvcmUgaXM6IHtmaW5hbFJlc3VsdHN9PC9kaXY+XG4gICAgICAgICB7cXVlc3Rpb25zQnlJZC5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHF1ZXN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgIGNhc2UgXCJzaW5nbGUtY2hvaWNlXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNob2ljZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e3F1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBjYXNlIFwibXVsdGlwbGUtY2hvaWNlXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPE11bHRpQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e3F1ZXN0aW9uLmFuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2Vycz17cXVlc3Rpb24uY29ycmVjdEFuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIGNhc2UgXCJ0cnVlLW9yLWZhbHNlXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPFRydWVPckZhbHNlUXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e3F1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IGFuc3dlci50ZXh0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcj17cXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pfVxuICAgICAgPC8+XG4gICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25haXJlO1xuXG4vLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4vLyB7c2hvd0ZpbmFsUmVzdWx0ID8gKFxuLy8gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maW5hbFJlc3VsdHN9PlxuLy8gICAgICAgPGgxPkZpbmFsIFJlc3VsdHM8L2gxPlxuLy8gICAgICAgPGgyPlxuLy8gICAgICAgICAge3Njb3JlfSBvdXQgb2Yge3F1ZXN0aW9ucy5sZW5ndGh9IGNvcnJlY3Qg4p6h77iPICh7KHNjb3JlIC8gcXVlc3Rpb25zLmxlbmd0aCkgKiAxMDB9JSlcbi8vICAgICAgIDwvaDI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlc3RhcnRHYW1lfSBvbkNsaWNrPXsoKSA9PiByZXN0YXJ0R2FtZSgpfT5cbi8vICAgICAgICAgIFJlc3RhcnQgZ2FtZVxuLy8gICAgICAgPC9idXR0b24+XG4vLyAgICA8L2Rpdj5cbi8vICkgOiAoXG4vLyAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uQ2FyZH0+XG4vLyAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlNpbmdsZSBDaG9pY2UgUXVlc3Rpb25zPC9oMz5cbi8vICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50U2NvcmV9PkN1cnJlbnQgc2NvcmU6IHtzY29yZX08L2g0PlxuLy8gICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uVGl0bGV9PntxdWVzdGlvbnNbcXVlc3Rpb25JbmRleF19PC9oND5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc30+XG4vLyAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7YW5zd2Vyc1txdWVzdGlvbkluZGV4XT8ubWFwKChhbnN3ZXIpID0+IChcbi8vICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Fuc3dlci5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfSBvbkNsaWNrPXsoKSA9PiBvcHRpb25DbGlja2VkKGFuc3dlci5pc0NvcnJlY3QpfT5cbi8vICAgICAgICAgICAgICAgICAgIHthbnN3ZXIudGV4dH1cbi8vICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHRRdWVzdGlvbkJ1dHRvbn0gb25DbGljaz17aGFuZGVDbGlja05leHRRdWVzdGlvbn0+XG4vLyAgICAgICAgICBOZXh0IFF1ZXN0aW9uXG4vLyAgICAgICA8L2J1dHRvbj4gKi99XG4vLyAgICA8L2Rpdj5cbi8vICl9XG4vLyA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk11bHRpQ2hvaWNlUXVlc3Rpb24iLCJTaW5nbGVDaG9pY2VRdWVzdGlvbiIsIlRydWVPckZhbHNlUXVlc3Rpb24iLCJzdHlsZXMiLCJRdWVzdGlvbmFpcmUiLCJwcm9wcyIsImZpbmFsUmVzdWx0cyIsInF1ZXN0aW9uc0J5SWQiLCJxdWVzdGlvbiIsInBvaW50cyIsInR5cGUiLCJhbnN3ZXJzIiwiaWQiLCJjb3JyZWN0QW5zd2VycyIsImNvbnNvbGUiLCJsb2ciLCJzY29yZSIsImZpbHRlciIsImFuc3dlciIsImlzQ29ycmVjdCIsInNldFNjb3JlIiwic2V0UXVlc3Rpb25zQnlJZCIsInNldEFuc3dlcnMiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInNob3dGaW5hbFJlc3VsdCIsInNldFNob3dGaW5hbFJlc3VsdCIsInF1ZXN0aW9uVGl0bGUiLCJzZXRRdWVzdGlvblRpdGxlIiwidG90YWxQb2ludHMiLCJzZXRUb3RhbFBvaW50cyIsImxvYWRJbmZvcm1hdGlvbiIsInF1ZXN0aW9uYWlyZSIsInF1ZXN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});