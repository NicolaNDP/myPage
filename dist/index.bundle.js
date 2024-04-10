/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");

const content = document.querySelector('#content');

let currentPage = '';



_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"].render();

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");



class About {
    static render() {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-div', null, null, null, _index__WEBPACK_IMPORTED_MODULE_0__.content);
        const text = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', 'about-h1', null, null, 'And this the about section.', div);
    }
}

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callPage: () => (/* binding */ callPage),
/* harmony export */   clearAll: () => (/* binding */ clearAll),
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");




let currentPage = '';

function createHtmlElement(type, id, arrayClasses, inType, content, appendCh) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach(myClass => element.classList.add(myClass));
    if (inType) element.type = inType;
    if (content) element.innerText = content;
    if (appendCh) appendCh.appendChild(element);

    return element;
}

function callPage(name) {
    if(name && name !== currentPage){
        while(___WEBPACK_IMPORTED_MODULE_0__.content.children.length > 2) {
            ___WEBPACK_IMPORTED_MODULE_0__.content.children[2].remove(); //remove all except first child (header)
        };

        switch(name){
            case 'Page1':
                _home__WEBPACK_IMPORTED_MODULE_2__["default"].render();
                break;
            case 'Page2':
                _about__WEBPACK_IMPORTED_MODULE_1__["default"].render();
                break;
        }
        currentPage = name;
    }
}

function clearAll() {

}

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");
/* harmony import */ var _assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon_menu.svg */ "./src/assets/icon_menu.svg");
/* harmony import */ var _assets_icon_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_logo.svg */ "./src/assets/icon_logo.svg");






class Header {
    static render () {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'header-div', null, null, null, _index_js__WEBPACK_IMPORTED_MODULE_0__.content);
        const icnLogo = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-logo', null, null, null, div);
            icnLogo.src = _assets_icon_logo_svg__WEBPACK_IMPORTED_MODULE_3__;
        const icnMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-menu', null, null, null, div);
            icnMenu.src = _assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_2__;
        const listMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'header-ul', null, null, null, _index_js__WEBPACK_IMPORTED_MODULE_0__.content);
            listMenu.style.display = 'none';
        const listMenuContent = ['Page1','Page2','Page3','Page4','Page5'];
            listMenuContent.forEach((page) => {
                const el = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, [`${page}`], null, `${page}`, listMenu);
                el.addEventListener('click', () => {
                    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.callPage)(el.classList[0]);
                    listMenu.style.display = 'none';
                    });
                });

        icnMenu.addEventListener('click', () => {
            if(listMenu.style.display === 'none') {listMenu.style.display ='block'} else {listMenu.style.display = 'none'};
        });
    }
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");



class Home {
    static render() {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-div', null, null, null, _index__WEBPACK_IMPORTED_MODULE_0__.content);
        const text = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', 'home-h1', null, null, 'This is the home page.', div);
    }
}

/***/ }),

/***/ "./src/assets/icon_logo.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a73ec803acdfe8edca20.svg";

/***/ }),

/***/ "./src/assets/icon_menu.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317bc50c92894bf177b7.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUMvQjs7QUFFUDs7OztBQUlBLHVEQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDUDZCO0FBQ2E7O0FBRWpDO0FBQ2Y7QUFDQSxvQkFBb0IsNkRBQWlCLHVDQUF1QywyQ0FBTztBQUNuRixxQkFBcUIsNkRBQWlCO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNkI7QUFDRDtBQUNGOztBQUUxQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxjQUFjLHNDQUFPO0FBQ3JCLFlBQVksc0NBQU8sdUJBQXVCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEI7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3FDO0FBQ1c7QUFDVDtBQUNRO0FBQ0E7O0FBRWhDO0FBQ2Y7QUFDQSxvQkFBb0IsNkRBQWlCLHdDQUF3Qyw4Q0FBTztBQUNwRix3QkFBd0IsNkRBQWlCO0FBQ3pDLDBCQUEwQixrREFBUztBQUNuQyx3QkFBd0IsNkRBQWlCO0FBQ3pDLDBCQUEwQixrREFBUztBQUNuQyx5QkFBeUIsNkRBQWlCLHNDQUFzQyw4Q0FBTztBQUN2RjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQWlCLGlCQUFpQixLQUFLLGFBQWEsS0FBSztBQUNwRjtBQUNBLG9CQUFvQixvREFBUTtBQUM1QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7O0FBRWpCO0FBQ0EsbURBQW1ELGlDQUFpQyxNQUFNO0FBQzFGLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJtQztBQUNhOztBQUVqQztBQUNmO0FBQ0Esb0JBQW9CLDZEQUFpQixzQ0FBc0MsMkNBQU87QUFDbEYscUJBQXFCLDZEQUFpQjtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlclwiO1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgY3VycmVudFBhZ2UgPSAnJztcblxuXG5cbkhlYWRlci5yZW5kZXIoKTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCB7XG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1kaXYnLCBudWxsLCBudWxsLCBudWxsLCBjb250ZW50KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMScsICdhYm91dC1oMScsIG51bGwsIG51bGwsICdBbmQgdGhpcyB0aGUgYWJvdXQgc2VjdGlvbi4nLCBkaXYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxubGV0IGN1cnJlbnRQYWdlID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLCBpZCwgYXJyYXlDbGFzc2VzLCBpblR5cGUsIGNvbnRlbnQsIGFwcGVuZENoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2gobXlDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICAgIGlmIChpblR5cGUpIGVsZW1lbnQudHlwZSA9IGluVHlwZTtcbiAgICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuICAgIGlmIChhcHBlbmRDaCkgYXBwZW5kQ2guYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxQYWdlKG5hbWUpIHtcbiAgICBpZihuYW1lICYmIG5hbWUgIT09IGN1cnJlbnRQYWdlKXtcbiAgICAgICAgd2hpbGUoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBjb250ZW50LmNoaWxkcmVuWzJdLnJlbW92ZSgpOyAvL3JlbW92ZSBhbGwgZXhjZXB0IGZpcnN0IGNoaWxkIChoZWFkZXIpXG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoKG5hbWUpe1xuICAgICAgICAgICAgY2FzZSAnUGFnZTEnOlxuICAgICAgICAgICAgICAgIEhvbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlMic6XG4gICAgICAgICAgICAgICAgQWJvdXQucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBhZ2UgPSBuYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleC5qc1wiXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY2FsbFBhZ2UgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBpY29uX21lbnUgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX21lbnUuc3ZnXCJcbmltcG9ydCBpY29uX2xvZ28gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2xvZ28uc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgICBzdGF0aWMgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdoZWFkZXItZGl2JywgbnVsbCwgbnVsbCwgbnVsbCwgY29udGVudCk7XG4gICAgICAgIGNvbnN0IGljbkxvZ28gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2ljb24tbG9nbycsIG51bGwsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICBpY25Mb2dvLnNyYyA9IGljb25fbG9nbztcbiAgICAgICAgY29uc3QgaWNuTWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1tZW51JywgbnVsbCwgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGljbk1lbnUuc3JjID0gaWNvbl9tZW51O1xuICAgICAgICBjb25zdCBsaXN0TWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdoZWFkZXItdWwnLCBudWxsLCBudWxsLCBudWxsLCBjb250ZW50KTtcbiAgICAgICAgICAgIGxpc3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IGxpc3RNZW51Q29udGVudCA9IFsnUGFnZTEnLCdQYWdlMicsJ1BhZ2UzJywnUGFnZTQnLCdQYWdlNSddO1xuICAgICAgICAgICAgbGlzdE1lbnVDb250ZW50LmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsaScsIG51bGwsIFtgJHtwYWdlfWBdLCBudWxsLCBgJHtwYWdlfWAsIGxpc3RNZW51KTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbFBhZ2UoZWwuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWNuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RNZW51LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge2xpc3RNZW51LnN0eWxlLmRpc3BsYXkgPSdibG9jayd9IGVsc2Uge2xpc3RNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSd9O1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWRpdicsIG51bGwsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgJ2hvbWUtaDEnLCBudWxsLCBudWxsLCAnVGhpcyBpcyB0aGUgaG9tZSBwYWdlLicsIGRpdik7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9