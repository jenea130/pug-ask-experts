/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/src/main.js":
/*!***********************************!*\
  !*** ./src/assets/js/src/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header/toggleMenu */ \"./src/assets/js/src/modules/header/toggleMenu.js\");\n/* harmony import */ var _modules_togglePrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePrice */ \"./src/assets/js/src/modules/togglePrice.js\");\n/* harmony import */ var _modules_video_videoPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/video/videoPlay */ \"./src/assets/js/src/modules/video/videoPlay.js\");\n/* harmony import */ var _modules_accordion_accordionItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion/accordionItems */ \"./src/assets/js/src/modules/accordion/accordionItems.js\");\n/* harmony import */ var _modules_filter_filterItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter/filterItems */ \"./src/assets/js/src/modules/filter/filterItems.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    const plan = document.querySelector(\".plan\") \r\n    const video = document.querySelector(\".video\")\r\n    const accordion = document.querySelector(\".accordion\")\r\n    const filter = document.querySelector(\".taxes\")\r\n\r\n    if (plan) {\r\n        Object(_modules_togglePrice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n\r\n    if (video) {\r\n        Object(_modules_video_videoPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n\r\n    if (accordion) {\r\n        Object(_modules_accordion_accordionItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    }\r\n\r\n    if (filter) {\r\n        Object(_modules_filter_filterItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    }\r\n\r\n    Object(_modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzP2UxZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ0w7QUFDRTtBQUNjO0FBQ1Q7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9FQUFXO0FBQ25COztBQUVBO0FBQ0EsUUFBUSx3RUFBUztBQUNqQjs7QUFFQTtBQUNBLFFBQVEsaUZBQWM7QUFDdEI7O0FBRUE7QUFDQSxRQUFRLDJFQUFXO0FBQ25COztBQUVBLElBQUksMEVBQVU7O0FBRWQsQ0FBQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9nZ2xlTWVudSBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51XCI7XHJcbmltcG9ydCB0b2dnbGVQcmljZSBmcm9tIFwiLi9tb2R1bGVzL3RvZ2dsZVByaWNlXCI7XHJcbmltcG9ydCB2aWRlb1BsYXkgZnJvbSBcIi4vbW9kdWxlcy92aWRlby92aWRlb1BsYXlcIjtcclxuaW1wb3J0IGFjY29yZGlvbkl0ZW1zIGZyb20gXCIuL21vZHVsZXMvYWNjb3JkaW9uL2FjY29yZGlvbkl0ZW1zXCI7XHJcbmltcG9ydCBmaWx0ZXJJdGVtcyBmcm9tIFwiLi9tb2R1bGVzL2ZpbHRlci9maWx0ZXJJdGVtc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYW5cIikgXHJcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIilcclxuICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uXCIpXHJcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRheGVzXCIpXHJcblxyXG4gICAgaWYgKHBsYW4pIHtcclxuICAgICAgICB0b2dnbGVQcmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICAgIHZpZGVvUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY2NvcmRpb24pIHtcclxuICAgICAgICBhY2NvcmRpb25JdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICBmaWx0ZXJJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUoKTtcclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/src/main.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/accordion/accordionItems.js":
/*!***************************************************************!*\
  !*** ./src/assets/js/src/modules/accordion/accordionItems.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return accordionItems; });\nfunction accordionItems() {\n  const accordionItemHeaders = document.querySelectorAll(\n    \".accordion__subtitle\"\n  );\n\n  accordionItemHeaders.forEach((accordionItemHeader) => {\n    accordionItemHeader.addEventListener(\"click\", (event) => {\n      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!\n\n      const currentlyActiveAccordionItemHeader = document.querySelector(\n        \".accordion__subtitle.active\"\n      );\n\n      // if (\n      //   currentlyActiveAccordionItemHeader &&\n      //   currentlyActiveAccordionItemHeader !== accordionItemHeader\n      // ) {\n      //   currentlyActiveAccordionItemHeader.classList.toggle(\"active\");\n      //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;\n      // }\n\n      accordionItemHeader.classList.toggle(\"active\");\n      const accordionItemBody = accordionItemHeader.nextElementSibling;\n\n      if (accordionItemHeader.classList.contains(\"active\")) {\n        accordionItemBody.style.maxHeight =\n          accordionItemBody.scrollHeight + \"px\";\n      } else {\n        accordionItemBody.style.maxHeight = 0;\n      }\n    });\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb25JdGVtcy5qcz8zYWVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9hY2NvcmRpb24vYWNjb3JkaW9uSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2NvcmRpb25JdGVtcygpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbUhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmFjY29yZGlvbl9fc3VidGl0bGVcIlxuICApO1xuXG4gIGFjY29yZGlvbkl0ZW1IZWFkZXJzLmZvckVhY2goKGFjY29yZGlvbkl0ZW1IZWFkZXIpID0+IHtcbiAgICBhY2NvcmRpb25JdGVtSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIFVuY29tbWVudCBpbiBjYXNlIHlvdSBvbmx5IHdhbnQgdG8gYWxsb3cgZm9yIHRoZSBkaXNwbGF5IG9mIG9ubHkgb25lIGNvbGxhcHNlZCBpdGVtIGF0IGEgdGltZSFcblxuICAgICAgY29uc3QgY3VycmVudGx5QWN0aXZlQWNjb3JkaW9uSXRlbUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmFjY29yZGlvbl9fc3VidGl0bGUuYWN0aXZlXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIChcbiAgICAgIC8vICAgY3VycmVudGx5QWN0aXZlQWNjb3JkaW9uSXRlbUhlYWRlciAmJlxuICAgICAgLy8gICBjdXJyZW50bHlBY3RpdmVBY2NvcmRpb25JdGVtSGVhZGVyICE9PSBhY2NvcmRpb25JdGVtSGVhZGVyXG4gICAgICAvLyApIHtcbiAgICAgIC8vICAgY3VycmVudGx5QWN0aXZlQWNjb3JkaW9uSXRlbUhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgLy8gICBjdXJyZW50bHlBY3RpdmVBY2NvcmRpb25JdGVtSGVhZGVyLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuICAgICAgLy8gfVxuXG4gICAgICBhY2NvcmRpb25JdGVtSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBhY2NvcmRpb25JdGVtQm9keSA9IGFjY29yZGlvbkl0ZW1IZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBpZiAoYWNjb3JkaW9uSXRlbUhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgYWNjb3JkaW9uSXRlbUJvZHkuc3R5bGUubWF4SGVpZ2h0ID1cbiAgICAgICAgICBhY2NvcmRpb25JdGVtQm9keS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2NvcmRpb25JdGVtQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/accordion/accordionItems.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/filter/filterItems.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/src/modules/filter/filterItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  const filter_img = document.querySelectorAll(\".taxes__img\");\n  const taxes_items = document.querySelectorAll(\".taxes__item\");\n\n  taxes_items.forEach((item) => {\n    item.addEventListener(\"click\", (event) => {\n      let filterClass = item.dataset[\"target\"];\n\n      resetActive();\n      item.classList.add(\"active\");\n\n      filter_img.forEach((elem) => {\n        elem.classList.remove(\"hide\");\n        if (!elem.classList.contains(filterClass) && filterClass !== \"all\") {\n          elem.classList.add(\"hide\");\n        }\n      });\n    });\n  });\n  function resetActive() {\n    taxes_items.forEach((item) => {\n      item.classList.remove(\"active\");\n    });\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2ZpbHRlci9maWx0ZXJJdGVtcy5qcz9jNjI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9maWx0ZXIvZmlsdGVySXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZpbHRlcl9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRheGVzX19pbWdcIik7XG4gIGNvbnN0IHRheGVzX2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXhlc19faXRlbVwiKTtcblxuICB0YXhlc19pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgZmlsdGVyQ2xhc3MgPSBpdGVtLmRhdGFzZXRbXCJ0YXJnZXRcIl07XG5cbiAgICAgIHJlc2V0QWN0aXZlKCk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgIGZpbHRlcl9pbWcuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGZpbHRlckNsYXNzKSAmJiBmaWx0ZXJDbGFzcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgZnVuY3Rpb24gcmVzZXRBY3RpdmUoKSB7XG4gICAgdGF4ZXNfaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/filter/filterItems.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/header/toggleMenu.js":
/*!********************************************************!*\
  !*** ./src/assets/js/src/modules/header/toggleMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleMenu; });\nfunction toggleMenu(){\n    const mainMenu = document.querySelector('#js-main-menu');\n    const sandwichWrap = document.querySelector('#js-sandwich-wrap');\n\n    sandwichWrap.addEventListener('mousedown', function (e) {\n        e.preventDefault();\n\n        if (mainMenu.classList.contains('fixed')) {\n            mainMenu.classList.remove('fixed');\n        } else {\n            mainMenu.classList.add('fixed');\n        }\n        sandwichWrap.classList.toggle('sandwich--active');\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51LmpzPzE4MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9oZWFkZXIvdG9nZ2xlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tYWluLW1lbnUnKTtcbiAgICBjb25zdCBzYW5kd2ljaFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2FuZHdpY2gtd3JhcCcpO1xuXG4gICAgc2FuZHdpY2hXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAobWFpbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSB7XG4gICAgICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBzYW5kd2ljaFdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2FuZHdpY2gtLWFjdGl2ZScpO1xuICAgIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/header/toggleMenu.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/togglePrice.js":
/*!**************************************************!*\
  !*** ./src/assets/js/src/modules/togglePrice.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return togglePrice; });\nfunction togglePrice() {\n\n  const buttons = document.querySelectorAll(\".plan__item\");\n  const plans = document.querySelectorAll(\".card-plan__price span\");\n  const labels = document.querySelectorAll(\".card-plan__label span\");\n\n  buttons.forEach((item) => {\n    item.addEventListener(\"click\", function () {\n      resetData();\n      item.classList.add(\"active\");\n      const target = item.getAttribute(\"data-target\");\n      const targets = document.querySelectorAll(\".\" + target);\n      targets.forEach((elem) => {\n        elem.classList.add(\"active\");\n      });\n    });\n  });\n\n  function resetData() {\n    buttons.forEach((item) => {\n      item.classList.remove(\"active\");\n    });\n    plans.forEach((item) => {\n      item.classList.remove(\"active\");\n    });\n    labels.forEach((item) => {\n      item.classList.remove(\"active\");\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL3RvZ2dsZVByaWNlLmpzPzQ5ZTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21vZHVsZXMvdG9nZ2xlUHJpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVQcmljZSgpIHtcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFuX19pdGVtXCIpO1xuICBjb25zdCBwbGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZC1wbGFuX19wcmljZSBzcGFuXCIpO1xuICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtcGxhbl9fbGFiZWwgc3BhblwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNldERhdGEoKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIik7XG4gICAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHRhcmdldCk7XG4gICAgICB0YXJnZXRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlc2V0RGF0YSgpIHtcbiAgICBidXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBwbGFucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgbGFiZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/togglePrice.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/video/videoPlay.js":
/*!******************************************************!*\
  !*** ./src/assets/js/src/modules/video/videoPlay.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return videoPlay; });\nfunction videoPlay() {\n    const video = document.querySelector('.video');\n    const video_play = document.querySelector('.video__play');\n\n    video_play.addEventListener('click', function() {\n        video.classList.add('active');\n    })\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL3ZpZGVvL3ZpZGVvUGxheS5qcz82ZGE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21vZHVsZXMvdmlkZW8vdmlkZW9QbGF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9QbGF5KCkge1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvJyk7XG4gICAgY29uc3QgdmlkZW9fcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fcGxheScpO1xuXG4gICAgdmlkZW9fcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/video/videoPlay.js\n");

/***/ })

/******/ });