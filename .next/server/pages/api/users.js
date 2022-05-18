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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/users.tsx":
/*!*********************************!*\
  !*** ./src/pages/api/users.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readDatabase() {\n    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"database.json\", \"utf8\"));\n}\nfunction writeDatabase(json) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(\"database.json\", JSON.stringify(json));\n}\nfunction get(request, response) {\n    const database = readDatabase();\n    response.status(200).json(database.users);\n}\nfunction post(request, response) {\n    const { name  } = request.body;\n    const database = readDatabase();\n    const newUser = {\n        id: database.users.length > 0 ? database.users.at(-1).id + 1 : 1,\n        name\n    };\n    database.users.push(newUser);\n    writeDatabase(database);\n    response.status(201).send(newUser);\n}\nfunction handler(request, response) {\n    switch(request.method){\n        case \"GET\":\n            return get(request, response);\n        case \"POST\":\n            return post(request, response);\n        default:\n            response.status(405).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0I7QUFxQnBCLFNBQVNDLFlBQVksR0FBRztJQUNwQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsc0RBQWUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBYTtDQUMzRTtBQUVELFNBQVNLLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3pCLE9BQU9OLHVEQUFnQixDQUFDLGVBQWUsRUFBRUUsSUFBSSxDQUFDTSxTQUFTLENBQUNGLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDbEU7QUFFRCxTQUFTRyxHQUFHLENBQUNDLE9BQXVCLEVBQUVDLFFBQXlCLEVBQUU7SUFDN0QsTUFBTUMsUUFBUSxHQUFHWCxZQUFZLEVBQUU7SUFFL0JVLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDUCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7Q0FDN0M7QUFFRCxTQUFTQyxJQUFJLENBQUNMLE9BQXVCLEVBQUVDLFFBQXlCLEVBQUU7SUFDOUQsTUFBTSxFQUFFSyxJQUFJLEdBQUUsR0FBR04sT0FBTyxDQUFDTyxJQUFJO0lBRTdCLE1BQU1MLFFBQVEsR0FBR1gsWUFBWSxFQUFFO0lBRS9CLE1BQU1pQixPQUFPLEdBQVM7UUFDbEJDLEVBQUUsRUFBRVAsUUFBUSxDQUFDRSxLQUFLLENBQUNNLE1BQU0sR0FBRyxDQUFDLEdBQUdSLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2hFSCxJQUFJO0tBQ1A7SUFFREosUUFBUSxDQUFDRSxLQUFLLENBQUNRLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUM7SUFFN0JiLGFBQWEsQ0FBQ08sUUFBUSxDQUFDLENBQUM7SUFFeEJELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDVSxJQUFJLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0NBQ3RDO0FBRUQsU0FBU00sT0FBTyxDQUFDZCxPQUF1QixFQUFFQyxRQUF5QixFQUFFO0lBQ2pFLE9BQVFELE9BQU8sQ0FBQ2UsTUFBTTtRQUNsQixLQUFLLEtBQUs7WUFDTixPQUFPaEIsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssTUFBTTtZQUNQLE9BQU9JLElBQUksQ0FBQ0wsT0FBTyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUNuQztZQUNJQSxRQUFRLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2EsR0FBRyxFQUFFLENBQUM7S0FDbEM7Q0FDSjtBQUVELGlFQUFlRixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmFpcmVzLW9uLXN5bGxhYnVzLW1vZHVsZXMvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzeD85NGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbnRlcmZhY2UgRGF0YWJhc2Uge1xuICAgIHVzZXJzOiBVc2VyW107XG4gICAgcG9zdHM6IFBvc3RbXTtcbn1cblxuaW50ZXJmYWNlIFVzZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUG9zdCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgYXV0aG9yOiBudW1iZXI7XG4gICAgY29tbWVudHM6IG51bWJlcltdO1xuICAgIHBvaW50czogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiByZWFkRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiZGF0YWJhc2UuanNvblwiLCBcInV0ZjhcIikpIGFzIERhdGFiYXNlO1xufVxuXG5mdW5jdGlvbiB3cml0ZURhdGFiYXNlKGpzb24pIHtcbiAgICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhcImRhdGFiYXNlLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufVxuXG5mdW5jdGlvbiBnZXQocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhYmFzZSA9IHJlYWREYXRhYmFzZSgpO1xuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihkYXRhYmFzZS51c2Vycyk7XG59XG5cbmZ1bmN0aW9uIHBvc3QocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcXVlc3QuYm9keTtcblxuICAgIGNvbnN0IGRhdGFiYXNlID0gcmVhZERhdGFiYXNlKCk7XG5cbiAgICBjb25zdCBuZXdVc2VyOiBVc2VyID0ge1xuICAgICAgICBpZDogZGF0YWJhc2UudXNlcnMubGVuZ3RoID4gMCA/IGRhdGFiYXNlLnVzZXJzLmF0KC0xKS5pZCArIDEgOiAxLFxuICAgICAgICBuYW1lLFxuICAgIH07XG5cbiAgICBkYXRhYmFzZS51c2Vycy5wdXNoKG5ld1VzZXIpO1xuXG4gICAgd3JpdGVEYXRhYmFzZShkYXRhYmFzZSk7XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5zZW5kKG5ld1VzZXIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgICAgIHJldHVybiBwb3N0KHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJmcyIsInJlYWREYXRhYmFzZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIndyaXRlRGF0YWJhc2UiLCJqc29uIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGFiYXNlIiwic3RhdHVzIiwidXNlcnMiLCJwb3N0IiwibmFtZSIsImJvZHkiLCJuZXdVc2VyIiwiaWQiLCJsZW5ndGgiLCJhdCIsInB1c2giLCJzZW5kIiwiaGFuZGxlciIsIm1ldGhvZCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users.tsx"));
module.exports = __webpack_exports__;

})();