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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Questionaire.module.css */ \"./src/components/Questionaire/Questionaire.module.css\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    _s();\n    var id = props.id, type = props.type;\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref7[0], setQuestionsById = ref7[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionIndex = ref2[0], setQuestionIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showFinalResult = ref4[0], setShowFinalResult = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questionTitle = ref5[0], setQuestionTitle = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), totalPoints = ref6[0], setTotalPoints = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            //  const questionsTitles = questions.map((question) => question.title);\n                            //  setQuestionTitle(questionsTitles[]);\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                            console.log(questionaire.questions);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //  console.log(questionaire);\n            //  console.log(questions);\n            //  console.log(questionsById);\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    var points = 0;\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = questionsById[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var question1 = _step.value;\n            switch(question1.type){\n                case \"multi-choice\":\n                    if (answers[question1.id] === question1.correctAnswers) {\n                        points += 1;\n                        console.log(points);\n                    }\n                    break;\n                case \"single-choice\":\n                    if (answers[question1.id] === question1.answers.filter(function(answer) {\n                        return answer.isCorrect;\n                    })) {\n                        points += 1;\n                    }\n                    break;\n                case \"true-or-false\":\n                    if (answers[question1.id] === question1.answers.filter(function(answer) {\n                        return answer.isCorrect;\n                    })) {\n                        points += 1;\n                    }\n                    break;\n            }\n            setScore(score + points);\n        //    if (questionIndex + 1 < questions.length) {\n        //      setQuestionIndex(questionIndex + 1);\n        //    } else {\n        //      setShowFinalResult(true);\n        //    }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default().questionaire),\n                children: [\n                    \"Score is: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                lineNumber: 70,\n                columnNumber: 10\n            }, this),\n            questionsById.map(function(question) {\n                switch(question.type){\n                    case \"single-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 22\n                        }, _this);\n                    case \"multiple-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers,\n                            correctAnswers: question.correctAnswers\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 22\n                        }, _this);\n                    case \"true-or-false\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            })\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 22\n                        }, _this);\n                    default:\n                        return null;\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(Questionaire, \"eyhjup5R2nU/UCVIlz7mJnPvDJU=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUM7QUFDRztBQUNIO0FBQzlCOztBQUUvQyxTQUFTTSxZQUFZLENBQUNDLEtBQUssRUFBRTs7O0lBQzFCLElBQVFDLEVBQUUsR0FBV0QsS0FBSyxDQUFsQkMsRUFBRSxFQUFFQyxJQUFJLEdBQUtGLEtBQUssQ0FBZEUsSUFBSTtJQUNoQixJQUEwQ1IsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVJ6RCxhQVF1QixHQUFzQkEsSUFBWSxHQUFsQyxFQVJ2QixnQkFReUMsR0FBSUEsSUFBWSxHQUFoQjtJQUN0QyxJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVQ3QyxPQVNpQixHQUFnQkEsSUFBWSxHQUE1QixFQVRqQixVQVM2QixHQUFJQSxJQUFZLEdBQWhCO0lBQzFCLElBQTBDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBVnhELGFBVXVCLEdBQXNCQSxJQUFXLEdBQWpDLEVBVnZCLGdCQVV5QyxHQUFJQSxJQUFXLEdBQWY7SUFFdEMsSUFBMEJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFaeEMsS0FZZSxHQUFjQSxJQUFXLEdBQXpCLEVBWmYsUUFZeUIsR0FBSUEsSUFBVyxHQUFmO0lBQ3RCLElBQThDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBYmhFLGVBYXlCLEdBQXdCQSxJQUFlLEdBQXZDLEVBYnpCLGtCQWE2QyxHQUFJQSxJQUFlLEdBQW5CO0lBRTFDLElBQTBDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBZnpELGFBZXVCLEdBQXNCQSxJQUFZ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LENBQUN0QixPQUFPLENBQUNnQyxHQUFHLENBQUMsU0FBQ0osTUFBTTt1Q0FBS0EsTUFBTSxDQUFDTyxJQUFJOzZCQUFBLENBQUM7NEJBQzlEUCxNQUFNLEVBQUVOLFFBQVEsQ0FBQ3RCLE9BQU8sQ0FBQ3FCLE1BQU0sQ0FBQyxTQUFDTyxNQUFNO3VDQUFLQSxNQUFNLENBQUNDLFNBQVM7NkJBQUEsQ0FBQzsyQkFIeERQLFFBQVEsQ0FBQzFCLEVBQUU7Ozs7aUNBSWpCLENBQ0g7b0JBQ0w7d0JBQ0csT0FBTyxJQUFJLENBQUM7aUJBQ2pCO2FBQ0gsQ0FBQzs7b0JBY0YsQ0FDSjtDQUNKO0dBaEhRRixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFpSHJCLCtEQUFlQSxZQUFZLEVBQUMsQ0FFNUIsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2QiwyQ0FBMkM7Q0FDM0MsK0JBQStCO0NBQy9CLGFBQWE7Q0FDYjtDQUNBLGNBQWM7Q0FDZCw4RUFBOEU7Q0FDOUUsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osUUFBUTtDQUNSLDJDQUEyQztDQUMzQyxxRUFBcUU7Q0FDckUsd0VBQXdFO0NBQ3hFLDZFQUE2RTtDQUM3RSx5Q0FBeUM7Q0FDekMsZ0JBQWdCO0NBQ2hCLHlEQUF5RDtDQUN6RCxnSEFBZ0g7Q0FDaEgsa0NBQWtDO0NBQ2xDLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZiw0RkFBNEY7Q0FDNUYseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osS0FBSztDQUNMLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25haXJlL1F1ZXN0aW9uYWlyZS5qc3g/NDVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXVsdGlDaG9pY2VRdWVzdGlvbiBmcm9tIFwiLi4vTXVsdGlDaG9pY2VRdWVzdGlvbi9NdWx0aUNob2ljZVF1ZXN0aW9uXCI7XG5pbXBvcnQgU2luZ2xlQ2hvaWNlUXVlc3Rpb24gZnJvbSBcIi4uL1NpbmdsZUNob2ljZVF1ZXN0aW9uL1NpbmdsZUNob2ljZVF1ZXN0aW9uXCI7XG5pbXBvcnQgVHJ1ZU9yRmFsc2VRdWVzdGlvbiBmcm9tIFwiLi4vVHJ1ZU9yRmFsc2VRdWVzdGlvbi9UcnVlT3JGYWxzZVF1ZXN0aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1F1ZXN0aW9uYWlyZS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFF1ZXN0aW9uYWlyZShwcm9wcykge1xuICAgY29uc3QgeyBpZCwgdHlwZSB9ID0gcHJvcHM7XG4gICBjb25zdCBbcXVlc3Rpb25zQnlJZCwgc2V0UXVlc3Rpb25zQnlJZF0gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBbcXVlc3Rpb25JbmRleCwgc2V0UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgIGNvbnN0IFtzaG93RmluYWxSZXN1bHQsIHNldFNob3dGaW5hbFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFtxdWVzdGlvblRpdGxlLCBzZXRRdWVzdGlvblRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgY29uc3QgW3RvdGFsUG9pbnRzLCBzZXRUb3RhbFBvaW50c10gPSB1c2VTdGF0ZSgwKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgIGNvbnN0IFtxdWVzdGlvbmFpcmUsIHF1ZXN0aW9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3F1ZXN0aW9uYWlyZXMvJHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcXVlc3Rpb25zXCIpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICBdKTtcblxuICAgICAgICAgLy8gIGNvbnN0IHF1ZXN0aW9uc1RpdGxlcyA9IHF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiBxdWVzdGlvbi50aXRsZSk7XG4gICAgICAgICAvLyAgc2V0UXVlc3Rpb25UaXRsZShxdWVzdGlvbnNUaXRsZXNbXSk7XG5cbiAgICAgICAgIHNldFF1ZXN0aW9uc0J5SWQocXVlc3Rpb25zLmZpbHRlcigocXVlc3Rpb24pID0+IHF1ZXN0aW9uYWlyZS5xdWVzdGlvbnMuaW5jbHVkZXMocXVlc3Rpb24uaWQpKSk7XG5cbiAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uYWlyZS5xdWVzdGlvbnMpO1xuICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHF1ZXN0aW9uYWlyZSk7XG4gICAgICAgICAvLyAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbiAgICAgICAgIC8vICBjb25zb2xlLmxvZyhxdWVzdGlvbnNCeUlkKTtcbiAgICAgIH1cbiAgICAgIGxvYWRJbmZvcm1hdGlvbigpO1xuICAgfSwgW10pO1xuXG4gICBjb25zdCBwb2ludHMgPSAwO1xuICAgZm9yIChjb25zdCBxdWVzdGlvbiBvZiBxdWVzdGlvbnNCeUlkKSB7XG4gICAgICBzd2l0Y2ggKHF1ZXN0aW9uLnR5cGUpIHtcbiAgICAgICAgIGNhc2UgXCJtdWx0aS1jaG9pY2VcIjpcbiAgICAgICAgICAgIGlmIChhbnN3ZXJzW3F1ZXN0aW9uLmlkXSA9PT0gcXVlc3Rpb24uY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgICAgICAgIHBvaW50cyArPSAxO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBcInNpbmdsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgIGlmIChhbnN3ZXJzW3F1ZXN0aW9uLmlkXSA9PT0gcXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCkpIHtcbiAgICAgICAgICAgICAgIHBvaW50cyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgaWYgKGFuc3dlcnNbcXVlc3Rpb24uaWRdID09PSBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KSkge1xuICAgICAgICAgICAgICAgcG9pbnRzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNldFNjb3JlKHNjb3JlICsgcG9pbnRzKTtcblxuICAgICAgLy8gICAgaWYgKHF1ZXN0aW9uSW5kZXggKyAxIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgLy8gICAgICBzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKTtcbiAgICAgIC8vICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgIHNldFNob3dGaW5hbFJlc3VsdCh0cnVlKTtcbiAgICAgIC8vICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uYWlyZX0+U2NvcmUgaXM6IHtzY29yZX08L2Rpdj5cbiAgICAgICAgIHtxdWVzdGlvbnNCeUlkLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAocXVlc3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgY2FzZSBcInNpbmdsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e3F1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IGFuc3dlci50ZXh0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcj17cXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzPXtxdWVzdGlvbi5jb3JyZWN0QW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgY2FzZSBcInRydWUtb3ItZmFsc2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8VHJ1ZU9yRmFsc2VRdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQW5zd2Vycz17cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gYW5zd2VyLnRleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyPXtxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSl9XG5cbiAgICAgICAgIHsvKiA8aDM+UXVlc3Rpb25haXJlIE5hbWV7fTwvaDM+XG4gICAgICAgICA8U2luZ2xlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBjaG9pY2UgaXMgY29ycmVjdD9cIlxuICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiXX1cbiAgICAgICAgICAgIGFuc3dlcj17XCJvbmVcIn1cbiAgICAgICAgIC8+XG4gICAgICAgICA8TXVsdGlDaG9pY2VRdWVzdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJNdWx0aSBDaG9pY2VcIlxuICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtbXCJmb3VyXCIsIFwiZml2ZVwiLCBcInNpeFwiLCBcInNldmVuXCIsIFwiZWlnaHRcIl19XG4gICAgICAgICAgICBjb3JyZWN0QW5zd2Vycz17W1wic2l4XCIsIFwic2V2ZW5cIl19XG4gICAgICAgICAvPlxuICAgICAgICAgPFRydWVPckZhbHNlUXVlc3Rpb24gdGl0bGU9XCJUcnVlL0ZhbHNlXCIgYW5zd2VyPXt0cnVlfSAvPiAqL31cbiAgICAgIDwvPlxuICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uYWlyZTtcblxuLy8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxuLy8ge3Nob3dGaW5hbFJlc3VsdCA/IChcbi8vICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxSZXN1bHRzfT5cbi8vICAgICAgIDxoMT5GaW5hbCBSZXN1bHRzPC9oMT5cbi8vICAgICAgIDxoMj5cbi8vICAgICAgICAgIHtzY29yZX0gb3V0IG9mIHtxdWVzdGlvbnMubGVuZ3RofSBjb3JyZWN0IOKeoe+4jyAoeyhzY29yZSAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwfSUpXG4vLyAgICAgICA8L2gyPlxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXN0YXJ0R2FtZX0gb25DbGljaz17KCkgPT4gcmVzdGFydEdhbWUoKX0+XG4vLyAgICAgICAgICBSZXN0YXJ0IGdhbWVcbi8vICAgICAgIDwvYnV0dG9uPlxuLy8gICAgPC9kaXY+XG4vLyApIDogKFxuLy8gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkNhcmR9PlxuLy8gICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5TaW5nbGUgQ2hvaWNlIFF1ZXN0aW9uczwvaDM+XG4vLyAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudFNjb3JlfT5DdXJyZW50IHNjb3JlOiB7c2NvcmV9PC9oND5cbi8vICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblRpdGxlfT57cXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdfTwvaDQ+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcnN9PlxuLy8gICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAge2Fuc3dlcnNbcXVlc3Rpb25JbmRleF0/Lm1hcCgoYW5zd2VyKSA9PiAoXG4vLyAgICAgICAgICAgICAgICA8bGkga2V5PXthbnN3ZXIuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0gb25DbGljaz17KCkgPT4gb3B0aW9uQ2xpY2tlZChhbnN3ZXIuaXNDb3JyZWN0KX0+XG4vLyAgICAgICAgICAgICAgICAgICB7YW5zd2VyLnRleHR9XG4vLyAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICA8L3VsPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0UXVlc3Rpb25CdXR0b259IG9uQ2xpY2s9e2hhbmRlQ2xpY2tOZXh0UXVlc3Rpb259PlxuLy8gICAgICAgICAgTmV4dCBRdWVzdGlvblxuLy8gICAgICAgPC9idXR0b24+ICovfVxuLy8gICAgPC9kaXY+XG4vLyApfVxuLy8gPC9kaXY+XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNdWx0aUNob2ljZVF1ZXN0aW9uIiwiU2luZ2xlQ2hvaWNlUXVlc3Rpb24iLCJUcnVlT3JGYWxzZVF1ZXN0aW9uIiwic3R5bGVzIiwiUXVlc3Rpb25haXJlIiwicHJvcHMiLCJpZCIsInR5cGUiLCJxdWVzdGlvbnNCeUlkIiwic2V0UXVlc3Rpb25zQnlJZCIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwicXVlc3Rpb25JbmRleCIsInNldFF1ZXN0aW9uSW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwic2hvd0ZpbmFsUmVzdWx0Iiwic2V0U2hvd0ZpbmFsUmVzdWx0IiwicXVlc3Rpb25UaXRsZSIsInNldFF1ZXN0aW9uVGl0bGUiLCJ0b3RhbFBvaW50cyIsInNldFRvdGFsUG9pbnRzIiwibG9hZEluZm9ybWF0aW9uIiwicXVlc3Rpb25haXJlIiwicXVlc3Rpb25zIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJmaWx0ZXIiLCJxdWVzdGlvbiIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsInBvaW50cyIsImNvcnJlY3RBbnN3ZXJzIiwiYW5zd2VyIiwiaXNDb3JyZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidGl0bGUiLCJwb3NzaWJsZUFuc3dlcnMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});