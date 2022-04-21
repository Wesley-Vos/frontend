"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_common_util_render-status_ts"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"afterNextRender\": () => (/* binding */ afterNextRender),\n/* harmony export */   \"nextRender\": () => (/* binding */ nextRender)\n/* harmony export */ });\nconst afterNextRender = cb => {\n  requestAnimationFrame(() => setTimeout(cb, 0));\n};\nconst nextRender = () => new Promise(resolve => {\n  afterNextRender(resolve);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXMudHM/YmZiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWZ0ZXJOZXh0UmVuZGVyID0gKGNiOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBhZnRlck5leHRSZW5kZXIocmVzb2x2ZSk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/util/render-status.ts\n");

/***/ })

}]);