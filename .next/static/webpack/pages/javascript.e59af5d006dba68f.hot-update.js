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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MultiChoiceQuestion/MultiChoiceQuestion */ \"./src/components/MultiChoiceQuestion/MultiChoiceQuestion.jsx\");\n/* harmony import */ var _SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleChoiceQuestion/SingleChoiceQuestion */ \"./src/components/SingleChoiceQuestion/SingleChoiceQuestion.jsx\");\n/* harmony import */ var _TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrueOrFalseQuestion/TrueOrFalseQuestion */ \"./src/components/TrueOrFalseQuestion/TrueOrFalseQuestion.jsx\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Questionaire.module.css */ \"./src/components/Questionaire/Questionaire.module.css\");\n/* harmony import */ var _Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Questionaire(props) {\n    var _this = this;\n    var getPoints = //    if (questionIndex + 1 < questions.length) {\n    //      setQuestionIndex(questionIndex + 1);\n    //    } else {\n    //      setShowFinalResult(true);\n    //    }\n    function getPoints(pointsToAdd) {\n        setScore(score + pointsToAdd);\n    };\n    _s();\n    var id = props.id, type = props.type;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questionsById = ref3[0], setQuestionsById = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), answers = ref1[0], setAnswers = ref1[1];\n    //    const [questionIndex, setQuestionIndex] = useState(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref2[0], setScore = ref2[1];\n    //    const [showFinalResult, setShowFinalResult] = useState(false);\n    //    const [questionTitle, setQuestionTitle] = useState(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadInformation() {\n            return _loadInformation.apply(this, arguments);\n        }\n        function _loadInformation() {\n            _loadInformation = _asyncToGenerator(_home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var ref, questionaire, questions;\n                return _home_vd7_MindSwap_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = _slicedToArray;\n                            _ctx.next = 3;\n                            return Promise.all([\n                                fetch(\"http://localhost:3001/questionaires/\".concat(id)).then(function(res) {\n                                    return res.json();\n                                }),\n                                fetch(\"http://localhost:3001/questions\").then(function(res) {\n                                    return res.json();\n                                }), \n                            ]);\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            ref = (0, _ctx.t0)(_ctx.t1, 2);\n                            questionaire = ref[0];\n                            questions = ref[1];\n                            setQuestionsById(questions.filter(function(question) {\n                                return questionaire.questions.includes(question.id);\n                            }));\n                            console.log(questionsById);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            //   console.log(question.type)\n            }));\n            return _loadInformation.apply(this, arguments);\n        }\n        loadInformation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Questionaire_module_css__WEBPACK_IMPORTED_MODULE_6___default().questionaire),\n                children: [\n                    \"Your current score is: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this),\n            questionsById.map(function(question) {\n                switch(question.type){\n                    case \"single-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SingleChoiceQuestion_SingleChoiceQuestion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            }),\n                            score: getPoints\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 22\n                        }, _this);\n                    case \"multiple-choice\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MultiChoiceQuestion_MultiChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers,\n                            correctAnswers: question.correctAnswers,\n                            score: getPoints\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 22\n                        }, _this);\n                    case \"true-or-false\":\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TrueOrFalseQuestion_TrueOrFalseQuestion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: question.title,\n                            possibleAnswers: question.answers.map(function(answer) {\n                                return answer.text;\n                            }),\n                            answer: question.answers.filter(function(answer) {\n                                return answer.isCorrect;\n                            }),\n                            score: getPoints\n                        }, question.id, false, {\n                            fileName: \"/home/vd7/MindSwap/Questionaires-on-syllabus-modules/src/components/Questionaire/Questionaire.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 22\n                        }, _this);\n                    default:\n                        return null;\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(Questionaire, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Questionaire;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Questionaire); // <div className={styles.app}>\n // {showFinalResult ? (\n //    <div className={styles.finalResults}>\n //       <h1>Final Results</h1>\n //       <h2>\n //          {score} out of {questions.length} correct ➡️ ({(score / questions.length) * 100}%)\n //       </h2>\n //       <button className={styles.restartGame} onClick={() => restartGame()}>\n //          Restart game\n //       </button>\n //    </div>\n // ) : (\n //    <div className={styles.questionCard}>\n //       <h3 className={styles.category}>Single Choice Questions</h3>\n //       <h4 className={styles.currentScore}>Current score: {score}</h4>\n //       <h4 className={styles.questionTitle}>{questions[questionIndex]}</h4>\n //       <div className={styles.answers}>\n //          <ul>\n //             {answers[questionIndex]?.map((answer) => (\n //                <li key={answer.id} className={styles.answer} onClick={() => optionClicked(answer.isCorrect)}>\n //                   {answer.text}\n //                </li>\n //             ))}\n //          </ul>\n //       </div>\n //       {/* <button className={styles.nextQuestionButton} onClick={handeClickNextQuestion}>\n //          Next Question\n //       </button> */}\n //    </div>\n // )}\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Questionaire\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbmFpcmUvUXVlc3Rpb25haXJlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUM7QUFDRztBQUNIO0FBQzlCOztBQUUvQyxTQUFTTSxZQUFZLENBQUNDLEtBQUssRUFBRTs7UUErQmpCQyxTQUFTLEdBTmxCLGlEQUFpRDtJQUNqRCw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxPQUFPO0lBRVAsU0FBU0EsU0FBUyxDQUFDQyxXQUFXLEVBQUU7UUFDN0JDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHRixXQUFXLENBQUMsQ0FBQztLQUNoQzs7SUFoQ0QsSUFBUUcsRUFBRSxHQUFXTCxLQUFLLENBQWxCSyxFQUFFLEVBQUVDLElBQUksR0FBS04sS0FBSyxDQUFkTSxJQUFJO0lBQ2hCLElBQTBDWixJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUnpELGFBUXVCLEdBQXNCQSxJQUFZLEdBQWxDLEVBUnZCLGdCQVF5QyxHQUFJQSxJQUFZLEdBQWhCO0lBQ3RDLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVDdDLE9BU2lCLEdBQWdCQSxJQUFZLEdBQTVCLEVBVGpCLFVBUzZCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsNERBQTREO0lBRTVELElBQTBCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBWnhDLEtBWWUsR0FBY0EsSUFBVyxHQUF6QixFQVpmLFFBWXlCLEdBQUlBLElBQVcsR0FBZjtJQUN0QixvRUFBb0U7SUFDcEUsNkRBQTZEO0lBRTdERCxnREFBUyxDQUFDLFdBQU07aUJBQ0VrQixlQUFlO21CQUFmQSxnQkFBZTs7aUJBQWZBLGdCQUFlO1lBQWZBLGdCQUFlLEdBQTlCLHFN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QSxZQUFZLEVBQUMsQ0FFNUIsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2QiwyQ0FBMkM7Q0FDM0MsK0JBQStCO0NBQy9CLGFBQWE7Q0FDYjtDQUNBLGNBQWM7Q0FDZCw4RUFBOEU7Q0FDOUUsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osUUFBUTtDQUNSLDJDQUEyQztDQUMzQyxxRUFBcUU7Q0FDckUsd0VBQXdFO0NBQ3hFLDZFQUE2RTtDQUM3RSx5Q0FBeUM7Q0FDekMsZ0JBQWdCO0NBQ2hCLHlEQUF5RDtDQUN6RCxnSEFBZ0g7Q0FDaEgsa0NBQWtDO0NBQ2xDLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZiw0RkFBNEY7Q0FDNUYseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osS0FBSztDQUNMLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25haXJlL1F1ZXN0aW9uYWlyZS5qc3g/NDVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXVsdGlDaG9pY2VRdWVzdGlvbiBmcm9tIFwiLi4vTXVsdGlDaG9pY2VRdWVzdGlvbi9NdWx0aUNob2ljZVF1ZXN0aW9uXCI7XG5pbXBvcnQgU2luZ2xlQ2hvaWNlUXVlc3Rpb24gZnJvbSBcIi4uL1NpbmdsZUNob2ljZVF1ZXN0aW9uL1NpbmdsZUNob2ljZVF1ZXN0aW9uXCI7XG5pbXBvcnQgVHJ1ZU9yRmFsc2VRdWVzdGlvbiBmcm9tIFwiLi4vVHJ1ZU9yRmFsc2VRdWVzdGlvbi9UcnVlT3JGYWxzZVF1ZXN0aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1F1ZXN0aW9uYWlyZS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFF1ZXN0aW9uYWlyZShwcm9wcykge1xuICAgY29uc3QgeyBpZCwgdHlwZSB9ID0gcHJvcHM7XG4gICBjb25zdCBbcXVlc3Rpb25zQnlJZCwgc2V0UXVlc3Rpb25zQnlJZF0gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAvLyAgICBjb25zdCBbcXVlc3Rpb25JbmRleCwgc2V0UXVlc3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgIC8vICAgIGNvbnN0IFtzaG93RmluYWxSZXN1bHQsIHNldFNob3dGaW5hbFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAvLyAgICBjb25zdCBbcXVlc3Rpb25UaXRsZSwgc2V0UXVlc3Rpb25UaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgIGNvbnN0IFtxdWVzdGlvbmFpcmUsIHF1ZXN0aW9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3F1ZXN0aW9uYWlyZXMvJHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcXVlc3Rpb25zXCIpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICBdKTtcblxuICAgICAgICAgc2V0UXVlc3Rpb25zQnlJZChxdWVzdGlvbnMuZmlsdGVyKChxdWVzdGlvbikgPT4gcXVlc3Rpb25haXJlLnF1ZXN0aW9ucy5pbmNsdWRlcyhxdWVzdGlvbi5pZCkpKTtcblxuICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zQnlJZCk7XG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uLnR5cGUpXG4gICAgICB9XG4gICAgICBsb2FkSW5mb3JtYXRpb24oKTtcbiAgIH0sIFtdKTtcblxuICAgLy8gICAgaWYgKHF1ZXN0aW9uSW5kZXggKyAxIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgLy8gICAgICBzZXRRdWVzdGlvbkluZGV4KHF1ZXN0aW9uSW5kZXggKyAxKTtcbiAgIC8vICAgIH0gZWxzZSB7XG4gICAvLyAgICAgIHNldFNob3dGaW5hbFJlc3VsdCh0cnVlKTtcbiAgIC8vICAgIH1cblxuICAgZnVuY3Rpb24gZ2V0UG9pbnRzKHBvaW50c1RvQWRkKSB7XG4gICAgICBzZXRTY29yZShzY29yZSArIHBvaW50c1RvQWRkKTtcbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uYWlyZX0+WW91ciBjdXJyZW50IHNjb3JlIGlzOiB7c2NvcmV9PC9kaXY+XG5cbiAgICAgICAgIHtxdWVzdGlvbnNCeUlkLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAocXVlc3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgY2FzZSBcInNpbmdsZS1jaG9pY2VcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e3F1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IGFuc3dlci50ZXh0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcj17cXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17Z2V0UG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBjYXNlIFwibXVsdGlwbGUtY2hvaWNlXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPE11bHRpQ2hvaWNlUXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUFuc3dlcnM9e3F1ZXN0aW9uLmFuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2Vycz17cXVlc3Rpb24uY29ycmVjdEFuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZT17Z2V0UG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBjYXNlIFwidHJ1ZS1vci1mYWxzZVwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIDxUcnVlT3JGYWxzZVF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVBbnN3ZXJzPXtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBhbnN3ZXIudGV4dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e3F1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChhbnN3ZXIpID0+IGFuc3dlci5pc0NvcnJlY3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2dldFBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbmFpcmU7XG5cbi8vIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbi8vIHtzaG93RmluYWxSZXN1bHQgPyAoXG4vLyAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbmFsUmVzdWx0c30+XG4vLyAgICAgICA8aDE+RmluYWwgUmVzdWx0czwvaDE+XG4vLyAgICAgICA8aDI+XG4vLyAgICAgICAgICB7c2NvcmV9IG91dCBvZiB7cXVlc3Rpb25zLmxlbmd0aH0gY29ycmVjdCDinqHvuI8gKHsoc2NvcmUgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lKVxuLy8gICAgICAgPC9oMj5cbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucmVzdGFydEdhbWV9IG9uQ2xpY2s9eygpID0+IHJlc3RhcnRHYW1lKCl9PlxuLy8gICAgICAgICAgUmVzdGFydCBnYW1lXG4vLyAgICAgICA8L2J1dHRvbj5cbi8vICAgIDwvZGl2PlxuLy8gKSA6IChcbi8vICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25DYXJkfT5cbi8vICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+U2luZ2xlIENob2ljZSBRdWVzdGlvbnM8L2gzPlxuLy8gICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRTY29yZX0+Q3VycmVudCBzY29yZToge3Njb3JlfTwvaDQ+XG4vLyAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25UaXRsZX0+e3F1ZXN0aW9uc1txdWVzdGlvbkluZGV4XX08L2g0PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbi8vICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHthbnN3ZXJzW3F1ZXN0aW9uSW5kZXhdPy5tYXAoKGFuc3dlcikgPT4gKFxuLy8gICAgICAgICAgICAgICAgPGxpIGtleT17YW5zd2VyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9IG9uQ2xpY2s9eygpID0+IG9wdGlvbkNsaWNrZWQoYW5zd2VyLmlzQ29ycmVjdCl9PlxuLy8gICAgICAgICAgICAgICAgICAge2Fuc3dlci50ZXh0fVxuLy8gICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgPC91bD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dFF1ZXN0aW9uQnV0dG9ufSBvbkNsaWNrPXtoYW5kZUNsaWNrTmV4dFF1ZXN0aW9ufT5cbi8vICAgICAgICAgIE5leHQgUXVlc3Rpb25cbi8vICAgICAgIDwvYnV0dG9uPiAqL31cbi8vICAgIDwvZGl2PlxuLy8gKX1cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXVsdGlDaG9pY2VRdWVzdGlvbiIsIlNpbmdsZUNob2ljZVF1ZXN0aW9uIiwiVHJ1ZU9yRmFsc2VRdWVzdGlvbiIsInN0eWxlcyIsIlF1ZXN0aW9uYWlyZSIsInByb3BzIiwiZ2V0UG9pbnRzIiwicG9pbnRzVG9BZGQiLCJzZXRTY29yZSIsInNjb3JlIiwiaWQiLCJ0eXBlIiwicXVlc3Rpb25zQnlJZCIsInNldFF1ZXN0aW9uc0J5SWQiLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsImxvYWRJbmZvcm1hdGlvbiIsInF1ZXN0aW9uYWlyZSIsInF1ZXN0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZmlsdGVyIiwicXVlc3Rpb24iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0aXRsZSIsInBvc3NpYmxlQW5zd2VycyIsImFuc3dlciIsInRleHQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0QW5zd2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Questionaire/Questionaire.jsx\n");

/***/ })

});