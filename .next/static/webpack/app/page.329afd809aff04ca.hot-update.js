"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Parallax/Parallax.js":
/*!*********************************************!*\
  !*** ./app/components/Parallax/Parallax.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Parallax_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Parallax.module.css */ \"(app-pages-browser)/./app/components/Parallax/Parallax.module.css\");\n/* harmony import */ var _Parallax_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Parallax_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery */ \"(app-pages-browser)/./app/components/Parallax/Gallery.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var rooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rooks */ \"(app-pages-browser)/./node_modules/rooks/dist/esm/hooks/useWindowSize.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Parallax = ()=>{\n    _s();\n    const { innerHeight: height } = (0,rooks__WEBPACK_IMPORTED_MODULE_4__.useWindowSize)();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: container,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        height * 1.5\n    ]);\n    const y2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        height * 1.25\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Parallax_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"PHOTOGRAPHY\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: container,\n                className: (_Parallax_module_css__WEBPACK_IMPORTED_MODULE_7___default().gallery),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        images: [\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[0],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[1],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[2]\n                        ],\n                        y: y\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        images: [\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[3],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[4],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[5]\n                        ],\n                        y: y2\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        images: [\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[6],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[7],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[8]\n                        ],\n                        y: y\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        images: [\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[9],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[10],\n                            _Gallery__WEBPACK_IMPORTED_MODULE_2__.images[11]\n                        ],\n                        y: y2\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Parallax, \"jsRQZRdNxsuSaJD6YUtMW5l/mM0=\", false, function() {\n    return [\n        rooks__WEBPACK_IMPORTED_MODULE_4__.useWindowSize,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform\n    ];\n});\n_c = Parallax;\nconst Column = (param)=>{\n    let { images, y = 0 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n        style: {\n            y\n        },\n        className: (_Parallax_module_css__WEBPACK_IMPORTED_MODULE_7___default().column),\n        children: images.map((src, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Parallax_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: src,\n                    fill: true,\n                    alt: \"image\",\n                    priority: true,\n                    sizes: \"(100vw, 100vh)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aswin\\\\OneDrive\\\\Desktop\\\\Zip\\\\Archive\\\\app\\\\components\\\\Parallax\\\\Parallax.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Parallax);\nvar _c, _c1;\n$RefreshReg$(_c, \"Parallax\");\n$RefreshReg$(_c1, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNzQztBQUNLO0FBQ1I7QUFDSjtBQUNpQztBQUMxQjtBQUN0QyxNQUFNUyxXQUFXOztJQUNmLE1BQU0sRUFBRUMsYUFBYUMsTUFBTSxFQUFFLEdBQUdILG9EQUFhQTtJQUM3QyxNQUFNSSxZQUFZWCw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNLEVBQUVZLGVBQWUsRUFBRSxHQUFHUCx3REFBU0EsQ0FBQztRQUNwQ1EsUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQWE7U0FBWTtJQUNwQztJQUNBLE1BQU1DLElBQUlYLDJEQUFZQSxDQUFDUSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUdGLFNBQVM7S0FBSTtJQUNqRSxNQUFNTSxLQUFLWiwyREFBWUEsQ0FBQ1EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHRixTQUFTO0tBQUs7SUFDbkUscUJBQ0U7OzBCQUNFLDhEQUFDTztnQkFBSUMsV0FBV2pCLG1FQUFZOzBCQUMxQiw0RUFBQ21COzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0M7Z0JBQVFDLEtBQUtYO2dCQUFXTyxXQUFXakIscUVBQWM7O2tDQUNoRCw4REFBQ3VCO3dCQUFPdEIsUUFBUTs0QkFBQ0EsNENBQU0sQ0FBQyxFQUFFOzRCQUFFQSw0Q0FBTSxDQUFDLEVBQUU7NEJBQUVBLDRDQUFNLENBQUMsRUFBRTt5QkFBQzt3QkFBRWEsR0FBR0E7Ozs7OztrQ0FDdEQsOERBQUNTO3dCQUFPdEIsUUFBUTs0QkFBQ0EsNENBQU0sQ0FBQyxFQUFFOzRCQUFFQSw0Q0FBTSxDQUFDLEVBQUU7NEJBQUVBLDRDQUFNLENBQUMsRUFBRTt5QkFBQzt3QkFBRWEsR0FBR0M7Ozs7OztrQ0FDdEQsOERBQUNRO3dCQUFPdEIsUUFBUTs0QkFBQ0EsNENBQU0sQ0FBQyxFQUFFOzRCQUFFQSw0Q0FBTSxDQUFDLEVBQUU7NEJBQUVBLDRDQUFNLENBQUMsRUFBRTt5QkFBQzt3QkFBRWEsR0FBR0E7Ozs7OztrQ0FDdEQsOERBQUNTO3dCQUFPdEIsUUFBUTs0QkFBQ0EsNENBQU0sQ0FBQyxFQUFFOzRCQUFFQSw0Q0FBTSxDQUFDLEdBQUc7NEJBQUVBLDRDQUFNLENBQUMsR0FBRzt5QkFBQzt3QkFBRWEsR0FBR0M7Ozs7Ozs7Ozs7Ozs7O0FBSWhFO0dBdEJNUjs7UUFDNEJELGdEQUFhQTtRQUVqQkYsb0RBQVNBO1FBSTNCRCx1REFBWUE7UUFDWEEsdURBQVlBOzs7S0FSbkJJO0FBd0JOLE1BQU1nQixTQUFTO1FBQUMsRUFBRXRCLE1BQU0sRUFBRWEsSUFBSSxDQUFDLEVBQUU7SUFDL0IscUJBQ0UsOERBQUNULGlEQUFNQSxDQUFDVyxHQUFHO1FBQUNRLE9BQU87WUFBRVY7UUFBRTtRQUFHRyxXQUFXakIsb0VBQWE7a0JBQy9DQyxPQUFPeUIsR0FBRyxDQUFDLENBQUNDLEtBQUtDO1lBQ2hCLHFCQUNFLDhEQUFDWjtnQkFBZ0JDLFdBQVdqQiw0RUFBcUI7MEJBQy9DLDRFQUFDRSxtREFBS0E7b0JBQUN5QixLQUFLQTtvQkFBS0csSUFBSTtvQkFBQ0MsS0FBSTtvQkFBUUMsUUFBUTtvQkFBQ0MsT0FBTTs7Ozs7O2VBRHpDTDs7Ozs7UUFJZDs7Ozs7O0FBR047TUFaTUw7QUFjTiwrREFBZWhCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanM/OGJkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BhcmFsbGF4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vR2FsbGVyeVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNmb3JtLCB1c2VTY3JvbGwsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tIFwicm9va3NcIjtcclxuY29uc3QgUGFyYWxsYXggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgdGFyZ2V0OiBjb250YWluZXIsXHJcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IGVuZFwiLCBcImVuZCBzdGFydFwiXSxcclxuICB9KTtcclxuICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgaGVpZ2h0ICogMS41XSk7XHJcbiAgY29uc3QgeTIgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCBoZWlnaHQgKiAxLjI1XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIDxoMT5QSE9UT0dSQVBIWTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbiByZWY9e2NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeX0+XHJcbiAgICAgICAgPENvbHVtbiBpbWFnZXM9e1tpbWFnZXNbMF0sIGltYWdlc1sxXSwgaW1hZ2VzWzJdXX0geT17eX0gLz5cclxuICAgICAgICA8Q29sdW1uIGltYWdlcz17W2ltYWdlc1szXSwgaW1hZ2VzWzRdLCBpbWFnZXNbNV1dfSB5PXt5Mn0gLz5cclxuICAgICAgICA8Q29sdW1uIGltYWdlcz17W2ltYWdlc1s2XSwgaW1hZ2VzWzddLCBpbWFnZXNbOF1dfSB5PXt5fSAvPlxyXG4gICAgICAgIDxDb2x1bW4gaW1hZ2VzPXtbaW1hZ2VzWzldLCBpbWFnZXNbMTBdLCBpbWFnZXNbMTFdXX0geT17eTJ9IC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb2x1bW4gPSAoeyBpbWFnZXMsIHkgPSAwIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgeSB9fSBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxyXG4gICAgICB7aW1hZ2VzLm1hcCgoc3JjLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17c3JjfSBmaWxsIGFsdD1cImltYWdlXCIgcHJpb3JpdHkgc2l6ZXM9XCIoMTAwdncsIDEwMHZoKVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInN0eWxlcyIsImltYWdlcyIsIkltYWdlIiwidXNlVHJhbnNmb3JtIiwidXNlU2Nyb2xsIiwibW90aW9uIiwidXNlV2luZG93U2l6ZSIsIlBhcmFsbGF4IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXIiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJ5IiwieTIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImgxIiwic2VjdGlvbiIsInJlZiIsImdhbGxlcnkiLCJDb2x1bW4iLCJzdHlsZSIsImNvbHVtbiIsIm1hcCIsInNyYyIsImluZGV4IiwiaW1hZ2VDb250YWluZXIiLCJmaWxsIiwiYWx0IiwicHJpb3JpdHkiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Parallax/Parallax.js\n"));

/***/ })

});