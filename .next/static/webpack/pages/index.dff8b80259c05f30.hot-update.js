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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _databaseUsers_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../databaseUsers.json */ \"./databaseUsers.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username1 = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), usernameError = ref1[0], setUsernameError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password1 = ref2[0], setPassword = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), passwordError = ref3[0], setPasswordError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), sucessLogin = ref4[0], setSucessLogin = ref4[1];\n    var handleUsernameChange = function(e) {\n        setSucessLogin(\"\");\n        setUsernameError(\" \");\n        setUsername(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setSucessLogin(\"\");\n        setPasswordError(\" \");\n        setPassword(e.target.value);\n    };\n    function verifyLogin(_) {\n        return _verifyLogin.apply(this, arguments);\n    }\n    function _verifyLogin() {\n        _verifyLogin = _asyncToGenerator(_home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var username, password;\n            return _home_joao_repositories_Questionaires_on_syllabus_modules_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        username = param.username, password = param.password;\n                        return _ctx.abrupt(\"return\", new Promise(function(resolve, reject) {\n                            setTimeout(function() {\n                                if (username === \"matt\" && password === \"password\") {\n                                    resolve();\n                                } else {\n                                    reject();\n                                }\n                            }, 1000);\n                        }));\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _verifyLogin.apply(this, arguments);\n    }\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(username1, password1);\n        dispatch({\n            type: verifyLogin\n        });\n        verifyLogin({\n            username: username1,\n            password: password1\n        }).then(function() {\n            setSucessLogin(true);\n        }).catch(function() {\n            setUsernameError(\"Username or password is incorrect\");\n            setPasswordError(\"Username or password is incorrect\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n        autoComplete: \"off\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Username\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"text\",\n                placeholder: \"Enter your username\",\n                value: username1,\n                onChange: handleUsernameChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 73,\n                columnNumber: 42\n            }, this),\n            usernameError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: usernameError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 74,\n                columnNumber: 22\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                required: true,\n                type: \"password\",\n                placeholder: \"Enter your password\",\n                value: password1,\n                onChange: handlePasswordChange\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 81,\n                columnNumber: 42\n            }, this),\n            passwordError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: passwordError\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 82,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: (_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/components/Login/Login.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeD9kNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9naW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhYmFzZVVzZXJzIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZVVzZXJzLmpzb25cIjtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VybmFtZUVycm9yLCBzZXRVc2VybmFtZUVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcblxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdFtzdWNlc3NMb2dpbiwgc2V0U3VjZXNzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIFxuXG4gIGNvbnN0IGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTdWNlc3NMb2dpbignJyk7XG4gICAgc2V0VXNlcm5hbWVFcnJvcignICcpO1xuICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN1Y2Vzc0xvZ2luKCcnKTtcbiAgICBzZXRQYXNzd29yZEVycm9yKCcgJyk7XG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcm5hbWUgPT09IFwibWF0dFwiICYmIHBhc3N3b3JkID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiB2ZXJpZnlMb2dpbn0pO1xuICAgIHZlcmlmeUxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFN1Y2Vzc0xvZ2luKHRydWUpO1xuICAgICAgfVxuICAgICAgKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0VXNlcm5hbWVFcnJvcihcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcbiAgICAgIH1cbiAgICAgICk7XG4gIH07XG5cbiAgIFxuXG4gICAgXG4gIFxuXG5cbiAgcmV0dXJuIChcblxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgIHJlcXVpcmVkXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXNlcm5hbWVDaGFuZ2V9Lz48YnI+PC9icj5cbiAgICAge3VzZXJuYW1lRXJyb3ImJjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9Pnt1c2VybmFtZUVycm9yfTwvZGl2Pn1cbiAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgIHJlcXVpcmVkXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hhbmdlfS8+PGJyPjwvYnI+XG4gICAgICAge3Bhc3N3b3JkRXJyb3ImJjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntwYXNzd29yZEVycm9yfTwvZGl2Pn1cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0+TG9naW5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiZGF0YWJhc2VVc2VycyIsIkxvZ2luIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lRXJyb3IiLCJzZXRVc2VybmFtZUVycm9yIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwic3VjZXNzTG9naW4iLCJzZXRTdWNlc3NMb2dpbiIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJ2ZXJpZnlMb2dpbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsInRoZW4iLCJjYXRjaCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImxvZ2luIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJyIiwiZGl2IiwiZXJyb3IiLCJidXR0b24iLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Login/Login.jsx\n");

/***/ })

});