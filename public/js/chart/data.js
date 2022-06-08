/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/chart/data.js":
/*!************************************!*\
  !*** ./resources/js/chart/data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nvar DATA_COUNT = 23;\nvar labels = [];\n\nfor (var i = 0; i <= DATA_COUNT; ++i) {\n  labels.push(i.toString());\n}\n\nvar data = function data(datapoints, colors, label) {\n  return {\n    labels: labels,\n    datasets: [{\n      label: label,\n      data: datapoints,\n      borderColor: 'rgb(75, 192, 192)',\n      backgroundColor: colors,\n      fill: false,\n      cubicInterpolationMode: 'monotone',\n      tension: 0.4\n    }]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY2hhcnQvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJRixVQUFyQixFQUFpQyxFQUFFRSxDQUFuQyxFQUFzQztBQUNsQ0QsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlELENBQUMsQ0FBQ0UsUUFBRixFQUFaO0FBQ0g7O0FBRU0sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiLEVBQXFCQyxLQUFyQixFQUErQjtBQUMvQyxTQUFPO0FBQ0hQLElBQUFBLE1BQU0sRUFBRUEsTUFETDtBQUVIUSxJQUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJRCxNQUFBQSxLQUFLLEVBQUVBLEtBRFg7QUFFSUgsTUFBQUEsSUFBSSxFQUFFQyxVQUZWO0FBR0lJLE1BQUFBLFdBQVcsRUFBRSxtQkFIakI7QUFJSUMsTUFBQUEsZUFBZSxFQUFFSixNQUpyQjtBQUtJSyxNQUFBQSxJQUFJLEVBQUUsS0FMVjtBQU1JQyxNQUFBQSxzQkFBc0IsRUFBRSxVQU41QjtBQU9JQyxNQUFBQSxPQUFPLEVBQUU7QUFQYixLQURNO0FBRlAsR0FBUDtBQWNILENBZk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY2hhcnQvZGF0YS5qcz9lMDBkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERBVEFfQ09VTlQgPSAyMztcclxuY29uc3QgbGFiZWxzID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDw9IERBVEFfQ09VTlQ7ICsraSkge1xyXG4gICAgbGFiZWxzLnB1c2goaS50b1N0cmluZygpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGEgPSAoZGF0YXBvaW50cywgY29sb3JzLCBsYWJlbCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhcG9pbnRzLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoNzUsIDE5MiwgMTkyKScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycyxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogJ21vbm90b25lJyxcclxuICAgICAgICAgICAgICAgIHRlbnNpb246IDAuNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJEQVRBX0NPVU5UIiwibGFiZWxzIiwiaSIsInB1c2giLCJ0b1N0cmluZyIsImRhdGEiLCJkYXRhcG9pbnRzIiwiY29sb3JzIiwibGFiZWwiLCJkYXRhc2V0cyIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsImN1YmljSW50ZXJwb2xhdGlvbk1vZGUiLCJ0ZW5zaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/chart/data.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/chart/data.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;