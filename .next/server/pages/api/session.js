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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readDatabase() {\n    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"database.json\", \"utf8\"));\n}\nfunction writeDatabase(json) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(\"database.json\", JSON.stringify(json));\n}\nfunction get(request, response) {\n    const tokenAsString = Buffer.from(request.cookies.token, \"base64\").toString(\"utf8\");\n    const token = JSON.parse(tokenAsString);\n    const id = parseInt(token.id, 10);\n    if (isNaN(id)) {\n        return response.status(403).end();\n    }\n    const database = readDatabase();\n    const user1 = database.users.find((user)=>user.id === id\n    );\n    if (!user1) {\n        return response.status(403).end();\n    }\n    response.status(200).json(user1);\n}\nfunction handler(request, response) {\n    switch(request.method){\n        case \"GET\":\n            return get(request, response);\n        default:\n            response.status(405).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nlc3Npb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQjtBQUlwQixTQUFTQyxZQUFZLEdBQUc7SUFDcEIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILHNEQUFlLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQWE7Q0FDM0U7QUFFRCxTQUFTSyxhQUFhLENBQUNDLElBQUksRUFBRTtJQUN6QixPQUFPTix1REFBZ0IsQ0FBQyxlQUFlLEVBQUVFLElBQUksQ0FBQ00sU0FBUyxDQUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ2xFO0FBRUQsU0FBU0csR0FBRyxDQUFDQyxPQUF1QixFQUFFQyxRQUF5QixFQUFFO0lBQzdELE1BQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUNDLFFBQVEsQ0FDdkUsTUFBTSxDQUNUO0lBQ0QsTUFBTUQsS0FBSyxHQUFHZCxJQUFJLENBQUNDLEtBQUssQ0FBQ1MsYUFBYSxDQUFDO0lBRXZDLE1BQU1NLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxLQUFLLENBQUNFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFakMsSUFBSUUsS0FBSyxDQUFDRixFQUFFLENBQUMsRUFBRTtRQUNYLE9BQU9QLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUNyQztJQUVELE1BQU1DLFFBQVEsR0FBR3RCLFlBQVksRUFBRTtJQUMvQixNQUFNdUIsS0FBSSxHQUFHRCxRQUFRLENBQUNFLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNGLElBQUksR0FBS0EsSUFBSSxDQUFDTixFQUFFLEtBQUtBLEVBQUU7SUFBQSxDQUFDO0lBRTFELElBQUksQ0FBQ00sS0FBSSxFQUFFO1FBQ1AsT0FBT2IsUUFBUSxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0tBQ3JDO0lBRURYLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDZixJQUFJLENBQUNrQixLQUFJLENBQUMsQ0FBQztDQUNuQztBQUVELFNBQVNHLE9BQU8sQ0FBQ2pCLE9BQXVCLEVBQUVDLFFBQXlCLEVBQUU7SUFDakUsT0FBUUQsT0FBTyxDQUFDa0IsTUFBTTtRQUNsQixLQUFLLEtBQUs7WUFDTixPQUFPbkIsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDO1lBQ0lBLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUNsQztDQUNKO0FBRUQsaUVBQWVLLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYWlyZXMtb24tc3lsbGFidXMtbW9kdWxlcy8uL3NyYy9wYWdlcy9hcGkvc2Vzc2lvbi50c3g/MjExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IERhdGFiYXNlLCBRdWVzdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS50eXBlc1wiXG5cbmZ1bmN0aW9uIHJlYWREYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJkYXRhYmFzZS5qc29uXCIsIFwidXRmOFwiKSkgYXMgRGF0YWJhc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRGF0YWJhc2UoanNvbikge1xuICAgIHJldHVybiBmcy53cml0ZUZpbGVTeW5jKFwiZGF0YWJhc2UuanNvblwiLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59XG5cbmZ1bmN0aW9uIGdldChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHRva2VuQXNTdHJpbmcgPSBCdWZmZXIuZnJvbShyZXF1ZXN0LmNvb2tpZXMudG9rZW4sIFwiYmFzZTY0XCIpLnRvU3RyaW5nKFxuICAgICAgICBcInV0ZjhcIlxuICAgICk7XG4gICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKHRva2VuQXNTdHJpbmcpO1xuXG4gICAgY29uc3QgaWQgPSBwYXJzZUludCh0b2tlbi5pZCwgMTApO1xuXG4gICAgaWYgKGlzTmFOKGlkKSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwMykuZW5kKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YWJhc2UgPSByZWFkRGF0YWJhc2UoKTtcbiAgICBjb25zdCB1c2VyID0gZGF0YWJhc2UudXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gaWQpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAzKS5lbmQoKTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJmcyIsInJlYWREYXRhYmFzZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIndyaXRlRGF0YWJhc2UiLCJqc29uIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInRva2VuQXNTdHJpbmciLCJCdWZmZXIiLCJmcm9tIiwiY29va2llcyIsInRva2VuIiwidG9TdHJpbmciLCJpZCIsInBhcnNlSW50IiwiaXNOYU4iLCJzdGF0dXMiLCJlbmQiLCJkYXRhYmFzZSIsInVzZXIiLCJ1c2VycyIsImZpbmQiLCJoYW5kbGVyIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/session.tsx\n");

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