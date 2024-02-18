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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header/toggleMenu */ \"./src/assets/js/src/modules/header/toggleMenu.js\");\n/* harmony import */ var _modules_togglePrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePrice */ \"./src/assets/js/src/modules/togglePrice.js\");\n/* harmony import */ var _modules_video_videoPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/video/videoPlay */ \"./src/assets/js/src/modules/video/videoPlay.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    const plan = document.querySelector(\".plan\") \r\n    const video = document.querySelector(\".video\")\r\n\r\n    if (plan) {\r\n        Object(_modules_togglePrice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n\r\n    if (video) {\r\n        Object(_modules_video_videoPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n\r\n    Object(_modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    \r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzP2UxZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDTDtBQUNFOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9FQUFXO0FBQ25COztBQUVBO0FBQ0EsUUFBUSx3RUFBUztBQUNqQjs7QUFFQSxJQUFJLDBFQUFVOztBQUVkLENBQUMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZ2dsZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXIvdG9nZ2xlTWVudVwiO1xyXG5pbXBvcnQgdG9nZ2xlUHJpY2UgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVQcmljZVwiO1xyXG5pbXBvcnQgdmlkZW9QbGF5IGZyb20gXCIuL21vZHVsZXMvdmlkZW8vdmlkZW9QbGF5XCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcGxhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhblwiKSBcclxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb1wiKVxyXG5cclxuICAgIGlmIChwbGFuKSB7XHJcbiAgICAgICAgdG9nZ2xlUHJpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmlkZW8pIHtcclxuICAgICAgICB2aWRlb1BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KCk7XHJcbiAgICBcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/main.js\n");

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