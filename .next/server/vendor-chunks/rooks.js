"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rooks";
exports.ids = ["vendor-chunks/rooks"];
exports.modules = {

/***/ "(ssr)/./node_modules/rooks/dist/esm/hooks/useIsomorphicEffect.js":
/*!******************************************************************!*\
  !*** ./node_modules/rooks/dist/esm/hooks/useIsomorphicEffect.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIsomorphicEffect: () => (/* binding */ useIsomorphicEffect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * useIsomorphicEffect\r\n * Resolves to useEffect when \"window\" is not in scope and useLayout effect in the browser\r\n *\r\n * @param {Function} callback Callback function to be called on mount\r\n * @see https://rooks.vercel.app/docs/useIsomorphicEffect\r\n */ const useIsomorphicEffect =  true ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : 0;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcm9va3MvZGlzdC9lc20vaG9va3MvdXNlSXNvbW9ycGhpY0VmZmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQ7Ozs7OztDQU1DLEdBQ0QsTUFBTUUsc0JBQXNCLEtBQTZCLEdBQUdGLDRDQUFTQSxHQUFHQyxDQUFlQTtBQUV4RCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Rpb25fdmVyc2lvbi8uL25vZGVfbW9kdWxlcy9yb29rcy9kaXN0L2VzbS9ob29rcy91c2VJc29tb3JwaGljRWZmZWN0LmpzP2Y5ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxyXG4gKiB1c2VJc29tb3JwaGljRWZmZWN0XHJcbiAqIFJlc29sdmVzIHRvIHVzZUVmZmVjdCB3aGVuIFwid2luZG93XCIgaXMgbm90IGluIHNjb3BlIGFuZCB1c2VMYXlvdXQgZWZmZWN0IGluIHRoZSBicm93c2VyXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBtb3VudFxyXG4gKiBAc2VlIGh0dHBzOi8vcm9va3MudmVyY2VsLmFwcC9kb2NzL3VzZUlzb21vcnBoaWNFZmZlY3RcclxuICovXHJcbmNvbnN0IHVzZUlzb21vcnBoaWNFZmZlY3QgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuXG5leHBvcnQgeyB1c2VJc29tb3JwaGljRWZmZWN0IH07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlSXNvbW9ycGhpY0VmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rooks/dist/esm/hooks/useIsomorphicEffect.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rooks/dist/esm/hooks/useWindowSize.js":
/*!************************************************************!*\
  !*** ./node_modules/rooks/dist/esm/hooks/useWindowSize.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWindowSize: () => (/* binding */ useWindowSize)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicEffect.js */ \"(ssr)/./node_modules/rooks/dist/esm/hooks/useIsomorphicEffect.js\");\n\n\nconst nullDimensions = {\n    innerHeight: null,\n    innerWidth: null,\n    outerHeight: null,\n    outerWidth: null\n};\nfunction getDimensions() {\n    return {\n        innerHeight: window.innerHeight,\n        innerWidth: window.innerWidth,\n        outerHeight: window.outerHeight,\n        outerWidth: window.outerWidth\n    };\n}\n/**\r\n * useWindowSize hook\r\n * A hook that provides information of the dimensions of the window\r\n *\r\n * @returns Dimensions of the window\r\n * @see https://rooks.vercel.app/docs/useWindowSize\r\n */ function useWindowSize() {\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        if (true) {\n            return nullDimensions;\n        } else {}\n    });\n    function onResize() {\n        setWindowSize(getDimensions());\n    }\n    // set resize handler once on mount and clean before unmount\n    (0,_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicEffect)(()=>{\n        if (true) {\n            return ()=>{};\n        } else {}\n    }, []);\n    return windowSize;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcm9va3MvZGlzdC9lc20vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQzhCO0FBRS9ELE1BQU1FLGlCQUFpQjtJQUNuQkMsYUFBYTtJQUNiQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsWUFBWTtBQUNoQjtBQUNBLFNBQVNDO0lBQ0wsT0FBTztRQUNISixhQUFhSyxPQUFPTCxXQUFXO1FBQy9CQyxZQUFZSSxPQUFPSixVQUFVO1FBQzdCQyxhQUFhRyxPQUFPSCxXQUFXO1FBQy9CQyxZQUFZRSxPQUFPRixVQUFVO0lBQ2pDO0FBQ0o7QUFDQTs7Ozs7O0NBTUMsR0FDRCxTQUFTRztJQUNMLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztRQUN6QyxJQUFJLElBQTZCLEVBQUU7WUFDL0IsT0FBT0U7UUFDWCxPQUNLLEVBRUo7SUFDTDtJQUNBLFNBQVNVO1FBQ0xELGNBQWNKO0lBQ2xCO0lBQ0EsNERBQTREO0lBQzVETiw0RUFBbUJBLENBQUM7UUFDaEIsSUFBSSxJQUE2QixFQUFFO1lBQy9CLE9BQU8sS0FBUTtRQUNuQixPQUNLLEVBS0o7SUFDTCxHQUFHLEVBQUU7SUFDTCxPQUFPUztBQUNYO0FBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdGlvbl92ZXJzaW9uLy4vbm9kZV9tb2R1bGVzL3Jvb2tzL2Rpc3QvZXNtL2hvb2tzL3VzZVdpbmRvd1NpemUuanM/NzA5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNFZmZlY3QgfSBmcm9tICcuL3VzZUlzb21vcnBoaWNFZmZlY3QuanMnO1xuXG5jb25zdCBudWxsRGltZW5zaW9ucyA9IHtcclxuICAgIGlubmVySGVpZ2h0OiBudWxsLFxyXG4gICAgaW5uZXJXaWR0aDogbnVsbCxcclxuICAgIG91dGVySGVpZ2h0OiBudWxsLFxyXG4gICAgb3V0ZXJXaWR0aDogbnVsbCxcclxufTtcclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICBpbm5lcldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBvdXRlckhlaWdodDogd2luZG93Lm91dGVySGVpZ2h0LFxyXG4gICAgICAgIG91dGVyV2lkdGg6IHdpbmRvdy5vdXRlcldpZHRoLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogdXNlV2luZG93U2l6ZSBob29rXHJcbiAqIEEgaG9vayB0aGF0IHByb3ZpZGVzIGluZm9ybWF0aW9uIG9mIHRoZSBkaW1lbnNpb25zIG9mIHRoZSB3aW5kb3dcclxuICpcclxuICogQHJldHVybnMgRGltZW5zaW9ucyBvZiB0aGUgd2luZG93XHJcbiAqIEBzZWUgaHR0cHM6Ly9yb29rcy52ZXJjZWwuYXBwL2RvY3MvdXNlV2luZG93U2l6ZVxyXG4gKi9cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbERpbWVuc2lvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgICAgc2V0V2luZG93U2l6ZShnZXREaW1lbnNpb25zKCkpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHJlc2l6ZSBoYW5kbGVyIG9uY2Ugb24gbW91bnQgYW5kIGNsZWFuIGJlZm9yZSB1bm1vdW50XHJcbiAgICB1c2VJc29tb3JwaGljRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB3aW5kb3dTaXplO1xyXG59XG5cbmV4cG9ydCB7IHVzZVdpbmRvd1NpemUgfTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUlzb21vcnBoaWNFZmZlY3QiLCJudWxsRGltZW5zaW9ucyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwib3V0ZXJXaWR0aCIsImdldERpbWVuc2lvbnMiLCJ3aW5kb3ciLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJvblJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rooks/dist/esm/hooks/useWindowSize.js\n");

/***/ })

};
;