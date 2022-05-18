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
exports.id = "pages/api/questions";
exports.ids = ["pages/api/questions"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/questions.tsx":
/*!*************************************!*\
  !*** ./src/pages/api/questions.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readDatabase() {\n    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"database.json\", \"utf8\"));\n}\nfunction writeDatabase(json) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(\"database.json\", JSON.stringify(json));\n}\nfunction get(request, response) {\n    const database = readDatabase();\n    const postsSortedByDateAscending = database.questions.sort((a, b)=>a.createdAt - b.createdAt\n    );\n    response.status(200).json(postsSortedByDateAscending);\n}\nfunction post(request, response) {\n    const { category , questionTitle , answers  } = request.body;\n    // const tokenAsString = Buffer.from(request.cookies.token, \"base64\").toString(\n    //     \"utf8\"\n    // );\n    // console.log(\"tokenAsString\", tokenAsString);\n    // const token = JSON.parse(tokenAsString);\n    // console.log(\"token\", token);\n    // const id = parseInt(token.id, 10);\n    // console.log(\"id\", id);\n    const database = readDatabase();\n    // const user = database.users.find((user) => user.id === id);\n    const newQuestion = {\n        id: database.questions.length > 0 ? database.questions.at(-1).id + 1 : 1,\n        category,\n        questionTitle,\n        answers,\n        createdAt: Date.now()\n    };\n    database.questions.push(newQuestion);\n    writeDatabase(database);\n    response.status(201).send(newQuestion);\n}\nfunction handler(request, response) {\n    switch(request.method){\n        case \"GET\":\n            return get(request, response);\n        case \"POST\":\n            return post(request, response);\n        default:\n            response.status(405).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3F1ZXN0aW9ucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9CO0FBTXBCLFNBQVNDLFlBQVksR0FBRztJQUNwQixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsc0RBQWUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBYTtDQUMzRTtBQUVELFNBQVNLLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO0lBQ3pCLE9BQU9OLHVEQUFnQixDQUFDLGVBQWUsRUFBRUUsSUFBSSxDQUFDTSxTQUFTLENBQUNGLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDbEU7QUFFRCxTQUFTRyxHQUFHLENBQUNDLE9BQXVCLEVBQUVDLFFBQXlCLEVBQUU7SUFDN0QsTUFBTUMsUUFBUSxHQUFHWCxZQUFZLEVBQUU7SUFFL0IsTUFBTVksMEJBQTBCLEdBQUdELFFBQVEsQ0FBQ0UsU0FBUyxDQUFDQyxJQUFJLENBQ3RELENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLRCxDQUFDLENBQUNFLFNBQVMsR0FBR0QsQ0FBQyxDQUFDQyxTQUFTO0lBQUEsQ0FDdEM7SUFFRFAsUUFBUSxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNiLElBQUksQ0FBQ08sMEJBQTBCLENBQUMsQ0FBQztDQUN6RDtBQUVELFNBQVNPLElBQUksQ0FBQ1YsT0FBdUIsRUFBRUMsUUFBeUIsRUFBRTtJQUM5RCxNQUFNLEVBQUNVLFFBQVEsR0FBRUMsYUFBYSxHQUFFQyxPQUFPLEdBQUUsR0FBR2IsT0FBTyxDQUFDYyxJQUFJO0lBRXhELCtFQUErRTtJQUMvRSxhQUFhO0lBQ2IsS0FBSztJQUVMLCtDQUErQztJQUUvQywyQ0FBMkM7SUFFM0MsK0JBQStCO0lBRS9CLHFDQUFxQztJQUVyQyx5QkFBeUI7SUFFekIsTUFBTVosUUFBUSxHQUFHWCxZQUFZLEVBQUU7SUFFL0IsOERBQThEO0lBRTlELE1BQU13QixXQUFXLEdBQWM7UUFDM0JDLEVBQUUsRUFBRWQsUUFBUSxDQUFDRSxTQUFTLENBQUNhLE1BQU0sR0FBRyxDQUFDLEdBQUdmLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hFTCxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsT0FBTztRQUNSTCxTQUFTLEVBQUVXLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0tBQ3ZCO0lBRURsQixRQUFRLENBQUNFLFNBQVMsQ0FBQ2lCLElBQUksQ0FBQ04sV0FBVyxDQUFDLENBQUM7SUFFckNwQixhQUFhLENBQUNPLFFBQVEsQ0FBQyxDQUFDO0lBRXhCRCxRQUFRLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2EsSUFBSSxDQUFDUCxXQUFXLENBQUMsQ0FBQztDQUMxQztBQUVELFNBQVNRLE9BQU8sQ0FBQ3ZCLE9BQXVCLEVBQUVDLFFBQXlCLEVBQUU7SUFDakUsT0FBUUQsT0FBTyxDQUFDd0IsTUFBTTtRQUNsQixLQUFLLEtBQUs7WUFDTixPQUFPekIsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssTUFBTTtZQUNQLE9BQU9TLElBQUksQ0FBQ1YsT0FBTyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUNuQztZQUNJQSxRQUFRLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2dCLEdBQUcsRUFBRSxDQUFDO0tBQ2xDO0NBQ0o7QUFFRCxpRUFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25haXJlcy1vbi1zeWxsYWJ1cy1tb2R1bGVzLy4vc3JjL3BhZ2VzL2FwaS9xdWVzdGlvbnMudHN4PzI1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG4vLyBpbXBvcnQge2RhdGFiYXNlfSBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UuanNvblwiXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS50eXBlc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlLnR5cGVzXCI7XG5cbmZ1bmN0aW9uIHJlYWREYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJkYXRhYmFzZS5qc29uXCIsIFwidXRmOFwiKSkgYXMgRGF0YWJhc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRGF0YWJhc2UoanNvbikge1xuICAgIHJldHVybiBmcy53cml0ZUZpbGVTeW5jKFwiZGF0YWJhc2UuanNvblwiLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59XG5cbmZ1bmN0aW9uIGdldChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IGRhdGFiYXNlID0gcmVhZERhdGFiYXNlKCk7XG5cbiAgICBjb25zdCBwb3N0c1NvcnRlZEJ5RGF0ZUFzY2VuZGluZyA9IGRhdGFiYXNlLnF1ZXN0aW9ucy5zb3J0KFxuICAgICAgICAoYSwgYikgPT4gYS5jcmVhdGVkQXQgLSBiLmNyZWF0ZWRBdFxuICAgICk7XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHBvc3RzU29ydGVkQnlEYXRlQXNjZW5kaW5nKTtcbn1cblxuZnVuY3Rpb24gcG9zdChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHtjYXRlZ29yeSwgcXVlc3Rpb25UaXRsZSwgYW5zd2VycyB9ID0gcmVxdWVzdC5ib2R5O1xuXG4gICAgLy8gY29uc3QgdG9rZW5Bc1N0cmluZyA9IEJ1ZmZlci5mcm9tKHJlcXVlc3QuY29va2llcy50b2tlbiwgXCJiYXNlNjRcIikudG9TdHJpbmcoXG4gICAgLy8gICAgIFwidXRmOFwiXG4gICAgLy8gKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidG9rZW5Bc1N0cmluZ1wiLCB0b2tlbkFzU3RyaW5nKTtcblxuICAgIC8vIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZSh0b2tlbkFzU3RyaW5nKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgLy8gY29uc3QgaWQgPSBwYXJzZUludCh0b2tlbi5pZCwgMTApO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJpZFwiLCBpZCk7XG5cbiAgICBjb25zdCBkYXRhYmFzZSA9IHJlYWREYXRhYmFzZSgpO1xuXG4gICAgLy8gY29uc3QgdXNlciA9IGRhdGFiYXNlLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IGlkKTtcblxuICAgIGNvbnN0IG5ld1F1ZXN0aW9uOiBRdWVzdGlvbnMgPSB7XG4gICAgICAgIGlkOiBkYXRhYmFzZS5xdWVzdGlvbnMubGVuZ3RoID4gMCA/IGRhdGFiYXNlLnF1ZXN0aW9ucy5hdCgtMSkuaWQgKyAxIDogMSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHF1ZXN0aW9uVGl0bGUsXG4gICAgICAgIGFuc3dlcnMsIFxuICAgICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICB9O1xuXG4gICAgZGF0YWJhc2UucXVlc3Rpb25zLnB1c2gobmV3UXVlc3Rpb24pO1xuXG4gICAgd3JpdGVEYXRhYmFzZShkYXRhYmFzZSk7XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5zZW5kKG5ld1F1ZXN0aW9uKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlcihyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgcmV0dXJuIGdldChyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICByZXR1cm4gcG9zdChyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZnMiLCJyZWFkRGF0YWJhc2UiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJ3cml0ZURhdGFiYXNlIiwianNvbiIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJnZXQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhYmFzZSIsInBvc3RzU29ydGVkQnlEYXRlQXNjZW5kaW5nIiwicXVlc3Rpb25zIiwic29ydCIsImEiLCJiIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwicG9zdCIsImNhdGVnb3J5IiwicXVlc3Rpb25UaXRsZSIsImFuc3dlcnMiLCJib2R5IiwibmV3UXVlc3Rpb24iLCJpZCIsImxlbmd0aCIsImF0IiwiRGF0ZSIsIm5vdyIsInB1c2giLCJzZW5kIiwiaGFuZGxlciIsIm1ldGhvZCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/questions.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/questions.tsx"));
module.exports = __webpack_exports__;

})();