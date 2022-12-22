/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/controls */ \"./src/scripts/controls.ts\");\n\nvar can = document.querySelector(\"#main-canvas\");\nvar ctx = can.getContext(\"2d\");\nvar width = 400;\nvar height = 400;\nfunction setupCanvas() {\n    can.width = width;\n    can.height = height;\n}\nsetupCanvas();\n_scripts_controls__WEBPACK_IMPORTED_MODULE_0__.setupListeners(can);\n\n\n//# sourceURL=webpack://dagrammer/./src/main.ts?");

/***/ }),

/***/ "./src/scripts/controls.ts":
/*!*********************************!*\
  !*** ./src/scripts/controls.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupListeners\": () => (/* binding */ setupListeners)\n/* harmony export */ });\nfunction getCoords(ev, element) {\n    var rect = element.getBoundingClientRect();\n    return [ev.clientX - rect.left, ev.clientY - rect.top];\n}\nvar setupListeners = function (element) {\n    element.addEventListener(\"pointerdown\", function (ev) {\n        console.log(\"POINTER DOWN\");\n        var _a = getCoords(ev, element), x = _a[0], y = _a[1];\n        console.log(\"START\", x, y);\n    });\n    element.addEventListener(\"pointerup\", function (ev) {\n        console.log(\"POINTER UP\");\n        var _a = getCoords(ev, element), x = _a[0], y = _a[1];\n        console.log(\"END\", x, y);\n    });\n    element.addEventListener(\"pointermove\", function (ev) {\n        console.log(\"POINTER MOVE\");\n        var _a = getCoords(ev, element), x = _a[0], y = _a[1];\n        console.log(\"MOVE\", x, y);\n    });\n};\n\n\n//# sourceURL=webpack://dagrammer/./src/scripts/controls.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;