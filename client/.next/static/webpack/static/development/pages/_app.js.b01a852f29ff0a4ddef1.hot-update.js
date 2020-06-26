webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/ticketing/client/components/header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var currentUser = _ref.currentUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      toggled = _useState[0],\n      setToggled = _useState[1];\n\n  var links = [!currentUser && {\n    label: 'Sign Up',\n    href: '/auth/signup'\n  }, !currentUser && {\n    label: 'Log in',\n    href: '/auth/signin'\n  }, currentUser && {\n    label: 'Sell Ticket',\n    href: '/tickets/new'\n  }, currentUser && {\n    label: 'My Orders',\n    href: '/orders'\n  }, currentUser && {\n    label: 'Sign Out',\n    href: '/auth/signout'\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }).map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href;\n    return __jsx(\"li\", {\n      className: \"nav-item\",\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      className: \"nav-link\",\n      style: {\n        color: 'black'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, label)));\n  });\n  return __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"navbar-brand\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Swapping\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, toggled), __jsx(\"button\", {\n    onClick: setToggled(!toggled),\n    \"class\": \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#nav-toggler\",\n    \"aria-controls\": \"nav-toggler\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"navbar-toggler-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"nav-toggler\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav ml-auto mt-2 mt-lg-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, links)));\n}, \"pXM4iXXYgoTtU5dzCeRUJVtdWCU=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz82NDc4Il0sIm5hbWVzIjpbImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJ0b2dnbGVkIiwic2V0VG9nZ2xlZCIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxrRkFBcUI7QUFBQTs7QUFBQSxNQUFsQkEsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLEtBQUQsQ0FESjtBQUFBLE1BQzNCQyxPQUQyQjtBQUFBLE1BQ2xCQyxVQURrQjs7QUFHbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0osV0FBRCxJQUFnQjtBQUFFSyxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBREosRUFFWixDQUFDTixXQUFELElBQWdCO0FBQUVLLFNBQUssRUFBRSxRQUFUO0FBQW1CQyxRQUFJLEVBQUU7QUFBekIsR0FGSixFQUdaTixXQUFXLElBQUk7QUFBRUssU0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQUhILEVBSVpOLFdBQVcsSUFBSTtBQUFFSyxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsUUFBSSxFQUFFO0FBQTVCLEdBSkgsRUFLWk4sV0FBVyxJQUFJO0FBQUVLLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FMSCxFQU9YQyxNQVBXLENBT0osVUFBQ0MsVUFBRDtBQUFBLFdBQWdCQSxVQUFoQjtBQUFBLEdBUEksRUFRWEMsR0FSVyxDQVFQLGlCQUFxQjtBQUFBLFFBQWxCSixLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDeEIsV0FDRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQXlCLFNBQUcsRUFBRUEsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLFVBQWI7QUFBd0IsV0FBSyxFQUFFO0FBQUVJLGFBQUssRUFBRTtBQUFULE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0wsS0FESCxDQURGLENBREYsQ0FERjtBQVNELEdBbEJXLENBQWQ7QUFvQkEsU0FDRTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsT0FBTixDQUpGLEVBTUU7QUFDRSxXQUFPLEVBQUVDLFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBRHJCO0FBRUUsYUFBTSxnQkFGUjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsbUJBQVksVUFKZDtBQUtFLG1CQUFZLGNBTGQ7QUFNRSxxQkFBYyxhQU5oQjtBQU9FLHFCQUFjLE9BUGhCO0FBUUUsa0JBQVcsbUJBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU0sYUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FORixFQW1CRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUEwQyxNQUFFLEVBQUMsYUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURFLEtBQWpELENBREYsQ0FuQkYsQ0FERjtBQXlCRCxDQWhERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgY29uc3QgW3RvZ2dsZWQsIHNldFRvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBVcCcsIGhyZWY6ICcvYXV0aC9zaWdudXAnIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdMb2cgaW4nLCBocmVmOiAnL2F1dGgvc2lnbmluJyB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTZWxsIFRpY2tldCcsIGhyZWY6ICcvdGlja2V0cy9uZXcnIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ015IE9yZGVycycsIGhyZWY6ICcvb3JkZXJzJyB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6ICcvYXV0aC9zaWdub3V0JyB9LFxuICBdXG4gICAgLmZpbHRlcigobGlua0NvbmZpZykgPT4gbGlua0NvbmZpZylcbiAgICAubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aHJlZn0+XG4gICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Td2FwcGluZzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXY+e3RvZ2dsZWR9PC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17c2V0VG9nZ2xlZCghdG9nZ2xlZCl9XG4gICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdi10b2dnbGVyXCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdi10b2dnbGVyXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXYtdG9nZ2xlclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvIG10LTIgbXQtbGctMFwiPntsaW5rc308L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})