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
exports.id = "pages/api/session";
exports.ids = ["pages/api/session"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/session.tsx":
/*!***********************************!*\
  !*** ./src/pages/api/session.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readDatabase() {\n    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"database.json\", \"utf8\"));\n}\nfunction writeDatabase(json) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(\"database.json\", JSON.stringify(json));\n}\nfunction get(request, response) {\n    const tokenAsString = Buffer.from(request.cookies.token, \"base64\").toString(\"utf8\");\n    const token = JSON.parse(tokenAsString);\n    // const id = parseInt(token.id, 10);\n    const username = token.username;\n    // if (isNaN(id)) {\n    //     return response.status(403).end();\n    // }\n    const database = readDatabase();\n    const user1 = database.users.find((user)=>user.username === username\n    );\n    console.log(user1);\n    if (!user1) {\n        return response.status(403).end();\n    }\n    response.status(200).json(user1);\n}\nfunction handler(request, response) {\n    switch(request.method){\n        case \"GET\":\n            return get(request, response);\n        default:\n            response.status(405).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQjtBQUlwQixTQUFTQyxZQUFZLEdBQUc7SUFDcEIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILHNEQUFlLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQWE7Q0FDM0U7QUFFRCxTQUFTSyxhQUFhLENBQUNDLElBQUksRUFBRTtJQUN6QixPQUFPTix1REFBZ0IsQ0FBQyxlQUFlLEVBQUVFLElBQUksQ0FBQ00sU0FBUyxDQUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ2xFO0FBRUQsU0FBU0csR0FBRyxDQUFDQyxPQUF1QixFQUFFQyxRQUF5QixFQUFFO0lBQzdELE1BQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUNDLFFBQVEsQ0FDdkUsTUFBTSxDQUNUO0lBQ0QsTUFBTUQsS0FBSyxHQUFHZCxJQUFJLENBQUNDLEtBQUssQ0FBQ1MsYUFBYSxDQUFDO0lBRXZDLHFDQUFxQztJQUVyQyxNQUFNTSxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtJQUUvQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLElBQUk7SUFFSixNQUFNQyxRQUFRLEdBQUdsQixZQUFZLEVBQUU7SUFDL0IsTUFBTW1CLEtBQUksR0FBR0QsUUFBUSxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDRixJQUFJLEdBQUtBLElBQUksQ0FBQ0YsUUFBUSxLQUFLQSxRQUFRO0lBQUEsQ0FBQztJQUV0RUssT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUksQ0FBQztJQUVqQixJQUFJLENBQUNBLEtBQUksRUFBRTtRQUNQLE9BQU9ULFFBQVEsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUNyQztJQUVEZixRQUFRLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ25CLElBQUksQ0FBQ2MsS0FBSSxDQUFDLENBQUM7Q0FDbkM7QUFFRCxTQUFTTyxPQUFPLENBQUNqQixPQUF1QixFQUFFQyxRQUF5QixFQUFFO0lBQ2pFLE9BQVFELE9BQU8sQ0FBQ2tCLE1BQU07UUFDbEIsS0FBSyxLQUFLO1lBQ04sT0FBT25CLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUNsQztZQUNJQSxRQUFRLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7S0FDbEM7Q0FDSjtBQUVELGlFQUFlQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFpcmVzLW9uLXN5bGxhYnVzLW1vZHVsZXMvLi9zcmMvcGFnZXMvYXBpL3Nlc3Npb24udHN4PzIxMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS50eXBlc1wiO1xuXG5mdW5jdGlvbiByZWFkRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiZGF0YWJhc2UuanNvblwiLCBcInV0ZjhcIikpIGFzIERhdGFiYXNlO1xufVxuXG5mdW5jdGlvbiB3cml0ZURhdGFiYXNlKGpzb24pIHtcbiAgICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhcImRhdGFiYXNlLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufVxuXG5mdW5jdGlvbiBnZXQocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCB0b2tlbkFzU3RyaW5nID0gQnVmZmVyLmZyb20ocmVxdWVzdC5jb29raWVzLnRva2VuLCBcImJhc2U2NFwiKS50b1N0cmluZyhcbiAgICAgICAgXCJ1dGY4XCJcbiAgICApO1xuICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZSh0b2tlbkFzU3RyaW5nKTtcblxuICAgIC8vIGNvbnN0IGlkID0gcGFyc2VJbnQodG9rZW4uaWQsIDEwKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7XG5cbiAgICAvLyBpZiAoaXNOYU4oaWQpKSB7XG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAzKS5lbmQoKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBkYXRhYmFzZSA9IHJlYWREYXRhYmFzZSgpO1xuICAgIGNvbnN0IHVzZXIgPSBkYXRhYmFzZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAzKS5lbmQoKTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJmcyIsInJlYWREYXRhYmFzZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIndyaXRlRGF0YWJhc2UiLCJqc29uIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInRva2VuQXNTdHJpbmciLCJCdWZmZXIiLCJmcm9tIiwiY29va2llcyIsInRva2VuIiwidG9TdHJpbmciLCJ1c2VybmFtZSIsImRhdGFiYXNlIiwidXNlciIsInVzZXJzIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlbmQiLCJoYW5kbGVyIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/session.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/session.tsx"));
module.exports = __webpack_exports__;

})();