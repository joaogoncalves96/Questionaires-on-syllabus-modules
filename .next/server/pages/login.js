"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database.json */ \"./database.json\");\n\n\n\n\nfunction Login() {\n    const { 0: successLogin , 1: setSuccessLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const inputRef1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const inputRef2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function handleSubmit(e) {\n        e.preventDefault();\n        const username = inputRef1.current.value;\n        const password = inputRef2.current.value;\n        const validUsername = _database_json__WEBPACK_IMPORTED_MODULE_3__.users.find((user)=>user.username === username\n        ).username;\n        const validPassword = _database_json__WEBPACK_IMPORTED_MODULE_3__.users.find((user)=>user.password === password\n        ).password;\n        if (username === validUsername && password === validPassword) {\n            setSuccessLogin(true);\n            setTimeout(()=>next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/\")\n            , 2000);\n        }\n    // console.log(\"username \" + username);\n    // const json = Buffer.from(JSON.stringify({ username})).toString(\"base64\");\n    // console.log(\"json \" + json);\n    // document.cookie = `token=${json}; max-age=9000`;\n    // console.log(\"cookie\", document.cookie);\n    // Router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Username\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef1,\n                        name: \"admin\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef2,\n                        name: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            successLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Login Success\"\n            }, void 0, false, {\n                fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n                lineNumber: 50,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/repositories/Questionaires-on-syllabus-modules/src/pages/login.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDbUI7QUFDVDtBQUMzQyxTQUFTSSxLQUFLLEdBQUc7SUFFYixNQUFNLEVBTFYsR0FLV0MsWUFBWSxHQUx2QixHQUt5QkMsZUFBZSxNQUFJSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUV2RCxNQUFNSyxTQUFTLEdBQUdOLDZDQUFNLENBQW1CLElBQUksQ0FBQztJQUNoRCxNQUFNTyxTQUFTLEdBQUdQLDZDQUFNLENBQW1CLElBQUksQ0FBQztJQUVoRCxTQUFTUSxZQUFZLENBQUNDLENBQTZCLEVBQUU7UUFDakRBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFbkIsTUFBTUMsUUFBUSxHQUFHTCxTQUFTLENBQUNNLE9BQU8sQ0FBQ0MsS0FBSztRQUN4QyxNQUFNQyxRQUFRLEdBQUdQLFNBQVMsQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO1FBRXhDLE1BQU1FLGFBQWEsR0FBR2Isc0RBQW1CLENBQUMsQ0FBQ2dCLElBQUksR0FBS0EsSUFBSSxDQUFDUCxRQUFRLEtBQUtBLFFBQVE7UUFBQSxDQUFDLENBQUNBLFFBQVE7UUFDeEYsTUFBTVEsYUFBYSxHQUFHakIsc0RBQW1CLENBQUMsQ0FBQ2dCLElBQUksR0FBS0EsSUFBSSxDQUFDSixRQUFRLEtBQUtBLFFBQVE7UUFBQSxDQUFDLENBQUNBLFFBQVE7UUFFeEYsSUFBR0gsUUFBUSxLQUFLSSxhQUFhLElBQUlELFFBQVEsS0FBS0ssYUFBYSxFQUFFO1lBQ3pEZCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEJlLFVBQVUsQ0FBQyxJQUFLckIsdURBQVcsQ0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNDO0lBRUQsdUNBQXVDO0lBRXZDLDRFQUE0RTtJQUU1RSwrQkFBK0I7SUFFL0IsbURBQW1EO0lBRW5ELDBDQUEwQztJQUUxQyxvQkFBb0I7S0FDdkI7SUFFRCxxQkFDSSw4REFBQ3VCLE1BQUk7UUFBQ0MsUUFBUSxFQUFFZixZQUFZOzswQkFDeEIsOERBQUNnQixPQUFLOztvQkFBQyxVQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxHQUFHLEVBQUVwQixTQUFTO3dCQUFFcUIsSUFBSSxFQUFDLE9BQU87Ozs7OzRCQUFTOzs7Ozs7b0JBQ3hDOzBCQUNSLDhEQUFDSCxPQUFLOztvQkFBQyxVQUVIO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxHQUFHLEVBQUVuQixTQUFTO3dCQUFFb0IsSUFBSSxFQUFDLFVBQVU7Ozs7OzRCQUFTOzs7Ozs7b0JBQzNDOzBCQUNSLDhEQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxPQUFLOzs7OztvQkFBUztZQUVuQ3pCLFlBQVksa0JBQUksOERBQUMwQixHQUFDOzBCQUFDLGVBQWE7Ozs7O29CQUFJOzs7Ozs7WUFFbEMsQ0FDVDtDQUNMO0FBRUQsaUVBQWUzQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFpcmVzLW9uLXN5bGxhYnVzLW1vZHVsZXMvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi9kYXRhYmFzZS5qc29uXCI7XG5mdW5jdGlvbiBMb2dpbigpIHtcblxuICAgIGNvbnN0IFtzdWNjZXNzTG9naW4sIHNldFN1Y2Nlc3NMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBpbnB1dFJlZjEgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgaW5wdXRSZWYyID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGlucHV0UmVmMS5jdXJyZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGlucHV0UmVmMi5jdXJyZW50LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkVXNlcm5hbWUgPSBkYXRhYmFzZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSkudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHZhbGlkUGFzc3dvcmQgPSBkYXRhYmFzZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCkucGFzc3dvcmQ7XG5cbiAgICAgICAgaWYodXNlcm5hbWUgPT09IHZhbGlkVXNlcm5hbWUgJiYgcGFzc3dvcmQgPT09IHZhbGlkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NMb2dpbih0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiBSb3V0ZXIucHVzaChcIi9cIiksIDIwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VybmFtZSBcIiArIHVzZXJuYW1lKTtcblxuICAgICAgICAvLyBjb25zdCBqc29uID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZX0pKS50b1N0cmluZyhcImJhc2U2NFwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImpzb24gXCIgKyBqc29uKTtcblxuICAgICAgICAvLyBkb2N1bWVudC5jb29raWUgPSBgdG9rZW49JHtqc29ufTsgbWF4LWFnZT05MDAwYDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvb2tpZVwiLCBkb2N1bWVudC5jb29raWUpO1xuXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmMX0gbmFtZT1cImFkbWluXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZjJ9IG5hbWU9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cblxuICAgICAgICAgICAge3N1Y2Nlc3NMb2dpbiAmJiA8cD5Mb2dpbiBTdWNjZXNzPC9wPn1cblxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiUm91dGVyIiwidXNlUmVmIiwidXNlU3RhdGUiLCJkYXRhYmFzZSIsIkxvZ2luIiwic3VjY2Vzc0xvZ2luIiwic2V0U3VjY2Vzc0xvZ2luIiwiaW5wdXRSZWYxIiwiaW5wdXRSZWYyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsInZhbGlkVXNlcm5hbWUiLCJ1c2VycyIsImZpbmQiLCJ1c2VyIiwidmFsaWRQYXNzd29yZCIsInNldFRpbWVvdXQiLCJwdXNoIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInJlZiIsIm5hbWUiLCJidXR0b24iLCJ0eXBlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./database.json":
/*!***********************!*\
  !*** ./database.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"users":[{"id":1,"username":"admin","password":"123","questionsAnswered":[{"id":1,"answer":"%"}]},{"id":2,"username":"user","password":"321","questionsAnswered":[{"id":1,"answer":"%"}]}],"questionaires":[{"id":1,"name":"CSS Selectors Complete Edition","questions":[1,3]},{"id":2,"name":"CSS Selectors for Dummies","questions":[1]}],"questions":[{"id":1,"categories":["css","css-selectors"],"type":"single-choice","title":"Which of the following symbols is not selector combinator?","answers":[{"id":0,"text":">","isCorrect":true},{"id":1,"text":"%","isCorrect":false},{"id":2,"text":"+","isCorrect":false},{"id":3,"text":"~","isCorrect":false}]},{"id":2,"categories":["css"],"type":"single-choice","title":"What does CSS stand for?","answers":[{"id":0,"text":"Cascading Style Sheets","isCorrect":true},{"id":1,"text":"Cascading.. Sheets","isCorrect":false},{"id":2,"text":"Cascading Style...","isCorrect":false},{"id":3,"text":"Painting Style Sheets","isCorrect":false}]},{"id":3,"categories":["css","css-selectors"],"type":"multiple-choice","title":"Section.awesome { border: 1px solid hotpink; }?","answers":["answer1","answer2","answer3","answer4","answer5"],"correctAnswer":["answer1","answer2"]},{"id":4,"categories":["css","css-selectors"],"type":"multiple-choice","title":"Section.awesome { border: 1px solid hotpink; }?","answers":["answer1","answer2","answer3","answer4"],"correctAnswer":["answer4","answer3"]},{"id":5,"questionTitle":"rfegwergf","answers":["1","2","3","4"],"createdAt":1652824556464},{"id":6,"questionTitle":"retgerg","answers":["1","2","3","4"],"createdAt":1652824803213},{"id":7,"questionTitle":"trg","answers":["1","2","3","4"],"createdAt":1652825112598},{"id":8,"questionTitle":"123","answers":"546","createdAt":1652825386037},{"id":9,"questionTitle":"55","answers":"445erffg","createdAt":1652864667888},{"id":10,"questionTitle":"eftg","answers":"tgwEF","createdAt":1652865631209},{"id":11,"questionTitle":"3333","answers":"erf","createdAt":1652869655774}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();