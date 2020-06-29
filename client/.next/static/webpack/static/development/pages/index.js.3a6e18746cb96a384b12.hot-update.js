webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/tickets/new.js":
/*!******************************!*\
  !*** ./pages/tickets/new.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/ticketing/client/pages/tickets/new.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar NewTicket = function NewTicket() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      price = _useState2[0],\n      setPrice = _useState2[1];\n\n  var _useRequest = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    url: '/api/tickets',\n    method: 'post',\n    body: {\n      title: title,\n      price: price\n    },\n    onSuccess: function onSuccess() {\n      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n    }\n  }),\n      doRequest = _useRequest.doRequest,\n      errors = _useRequest.errors;\n\n  var onSubmit = function onSubmit(event) {\n    event.preventDefault();\n    doRequest();\n  };\n\n  var onBlur = function onBlur() {\n    var value = parseFloat(price);\n    isNaN(value) ? setPrice(0) : setPrice(value.toFixed(2));\n  };\n\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-center text-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"Create a ticket\"), __jsx(\"div\", {\n    className: \"bg-light rounded mt-5 p-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, errors, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(\"input\", {\n    value: title,\n    onChange: function onChange(e) {\n      return setTitle(e.target.value);\n    },\n    className: \"form-control\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Price\"), __jsx(\"input\", {\n    value: price,\n    onBlur: onBlur,\n    onChange: function onChange(e) {\n      return setPrice(e.target.value);\n    },\n    className: \"form-control\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Submit\")))));\n};\n\n_s(NewTicket, \"FcKTY/3cYm1K6RjjZiECc9HDwKY=\", false, function () {\n  return [_hooks_use_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = NewTicket;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTicket);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewTicket\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzL25ldy5qcz9iZjFkIl0sIm5hbWVzIjpbIk5ld1RpY2tldCIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsInByaWNlIiwic2V0UHJpY2UiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkJsdXIiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJpc05hTiIsInRvRml4ZWQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2ZDLEtBRGU7QUFBQSxNQUNSQyxRQURROztBQUFBLG1CQUVJRixzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZHLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUFBLG9CQUdRQyxrRUFBVSxDQUFDO0FBQ3ZDQyxPQUFHLEVBQUUsY0FEa0M7QUFFdkNDLFVBQU0sRUFBRSxNQUYrQjtBQUd2Q0MsUUFBSSxFQUFFO0FBQUVQLFdBQUssRUFBTEEsS0FBRjtBQUFTRSxXQUFLLEVBQUxBO0FBQVQsS0FIaUM7QUFJdkNNLGFBQVMsRUFBRTtBQUFBLGFBQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQTtBQUo0QixHQUFELENBSGxCO0FBQUEsTUFHZEMsU0FIYyxlQUdkQSxTQUhjO0FBQUEsTUFHSEMsTUFIRyxlQUdIQSxNQUhHOztBQVV0QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSixhQUFTO0FBQ1YsR0FIRDs7QUFLQSxNQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDaEIsS0FBRCxDQUF4QjtBQUNBaUIsU0FBSyxDQUFDRixLQUFELENBQUwsR0FBZWQsUUFBUSxDQUFDLENBQUQsQ0FBdkIsR0FBNkJBLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUFELENBQXJDO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixNQURILEVBRUU7QUFBTSxZQUFRLEVBQUVDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUNFLFNBQUssRUFBRWIsS0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ3FCLENBQUQ7QUFBQSxhQUFPcEIsUUFBUSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLEtBQVYsQ0FBZjtBQUFBLEtBRlo7QUFHRSxhQUFTLEVBQUMsY0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQ0UsU0FBSyxFQUFFZixLQURUO0FBRUUsVUFBTSxFQUFFYyxNQUZWO0FBR0UsWUFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsYUFBT2xCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQWY7QUFBQSxLQUhaO0FBSUUsYUFBUyxFQUFDLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsRUFrQkU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQWxCRixDQUZGLENBRkYsQ0FERjtBQThCRCxDQWxERDs7R0FBTW5CLFM7VUFHMEJNLDBEOzs7S0FIMUJOLFM7QUFvRFNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGlja2V0cy9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IE5ld1RpY2tldCA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3RpY2tldHMnLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IHsgdGl0bGUsIHByaWNlIH0sXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnLycpLFxuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9SZXF1ZXN0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChwcmljZSk7XG4gICAgaXNOYU4odmFsdWUpID8gc2V0UHJpY2UoMCkgOiBzZXRQcmljZSh2YWx1ZS50b0ZpeGVkKDIpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5DcmVhdGUgYSB0aWNrZXQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodCByb3VuZGVkIG10LTUgcC01XCI+XG4gICAgICAgIHtlcnJvcnN9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3VGlja2V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tickets/new.js\n");

/***/ })

})