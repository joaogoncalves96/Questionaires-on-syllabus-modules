"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Login/Login.jsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _databaseUsers_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../databaseUsers.json */ \"./databaseUsers.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username1 = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), usernameError = ref1[0], setUsernameError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password1 = ref2[0], setPassword = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), passwordError = ref3[0], setPasswordError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), sucessLogin = ref4[0], setSucessLogin = ref4[1];\n    var handleUsernameChange = function(e) {\n        setSucessLogin(\"\");\n        setUsernameError(\" \");\n        setUsername(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setSucessLogin(\"\");\n        setPasswordError(\" \");\n        setPassword(e.target.value);\n    };\n    function verifyLogin(_) {\n        return _verifyLogin.apply(this, arguments);\n    }\n    function _verifyLogin() {\n        _verifyLogin = _asyncToGenerator(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var username, password;\n            return _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        username = param.username, password = param.password;\n                        return _ctx.abrupt(\"return\", new Promise(function(resolve, reject) {\n                            setTimeout(function() {\n                                if (username === \"matt\" && password === \"password\") {\n                                    resolve();\n                                } else {\n                                    reject();\n                                }\n                            }, 1000);\n                        }));\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _verifyLogin.apply(this, arguments);\n    }\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(username1, password1);\n        dispatch({\n            tyoe: tyoe\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n        autoComplete: \"off\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Username\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"text\",\n                placeholder: \"Enter your username\",\n                value: username1,\n                onChange: handleUsernameChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 63,\n                columnNumber: 42\n            }, this),\n            usernameError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: usernameError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 64,\n                columnNumber: 22\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"password\",\n                placeholder: \"Enter your password\",\n                value: password1,\n                onChange: handlePasswordChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 71,\n                columnNumber: 42\n            }, this),\n            passwordError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: passwordError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 72,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO2dCQUNYQyxXQUFXLEVBQUMscUJBQXFCO2dCQUNqQ3RCLEtBQUssRUFBRWIsU0FBUTtnQkFDZm9DLFFBQVEsRUFBRTFCLG9CQUFvQjs7Ozs7b0JBQUc7MEJBQUEsOERBQUMyQixJQUFFOzs7O29CQUFNO1lBQzVDbkMsYUFBYSxrQkFBRSw4REFBQ29DLEtBQUc7Z0JBQUNWLFNBQVMsRUFBRWhDLGdFQUFZOzBCQUFHTSxhQUFhOzs7OztvQkFBTzswQkFDbEUsOERBQUM2QixPQUFLOzBCQUFDLFVBQVE7Ozs7O29CQUFROzBCQUN2Qiw4REFBQ0MsT0FBSztnQkFDTkMsUUFBUTtnQkFDTkMsSUFBSSxFQUFDLFVBQVU7Z0JBQ2ZDLFdBQVcsRUFBQyxxQkFBcUI7Z0JBQ2pDdEIsS0FBSyxFQUFFVCxTQUFRO2dCQUNmZ0MsUUFBUSxFQUFFdEIsb0JBQW9COzs7OztvQkFBRzswQkFBQSw4REFBQ3VCLElBQUU7Ozs7b0JBQU07WUFDMUMvQixhQUFhLGtCQUFFLDhEQUFDZ0MsS0FBRztnQkFBQ1YsU0FBUyxFQUFFaEMsZ0VBQVk7MEJBQUdVLGFBQWE7Ozs7O29CQUFPOzBCQUNwRSw4REFBQ2tDLFFBQU07Z0JBQUNOLElBQUksRUFBQyxRQUFRO2dCQUFDTixTQUFTLEVBQUVoQyxpRUFBYTswQkFBRSxPQUNoRDs7Ozs7b0JBQVM7Ozs7OztZQUNKLENBQ1A7Q0FDSDtHQXhFUUcsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBeUVkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4P2Q2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Mb2dpbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGFiYXNlVXNlcnMgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlVXNlcnMuanNvblwiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJuYW1lRXJyb3IsIHNldFVzZXJuYW1lRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0W3N1Y2Vzc0xvZ2luLCBzZXRTdWNlc3NMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgXG5cbiAgY29uc3QgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN1Y2Vzc0xvZ2luKCcnKTtcbiAgICBzZXRVc2VybmFtZUVycm9yKCcgJyk7XG4gICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3VjZXNzTG9naW4oJycpO1xuICAgIHNldFBhc3N3b3JkRXJyb3IoJyAnKTtcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5TG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gXCJtYXR0XCIgJiYgcGFzc3dvcmQgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICBkaXNwYXRjaCh7IHR5b2V9KVxuICB9O1xuXG4gICBcblxuICAgIFxuICBcblxuXG4gIHJldHVybiAoXG5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICByZXF1aXJlZFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJuYW1lQ2hhbmdlfS8+PGJyPjwvYnI+XG4gICAgIHt1c2VybmFtZUVycm9yJiY8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57dXNlcm5hbWVFcnJvcn08L2Rpdj59XG4gICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICByZXF1aXJlZFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX0vPjxicj48L2JyPlxuICAgICAgIHtwYXNzd29yZEVycm9yJiY8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57cGFzc3dvcmRFcnJvcn08L2Rpdj59XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PkxvZ2luXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsImRhdGFiYXNlVXNlcnMiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUVycm9yIiwic2V0VXNlcm5hbWVFcnJvciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsInN1Y2Vzc0xvZ2luIiwic2V0U3VjZXNzTG9naW4iLCJoYW5kbGVVc2VybmFtZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwidmVyaWZ5TG9naW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsInR5b2UiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJsb2dpbiIsImF1dG9Db21wbGV0ZSIsImxhYmVsIiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnIiLCJkaXYiLCJlcnJvciIsImJ1dHRvbiIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Login/Login.jsx\n");

/***/ })

});