/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family:Arial, Helvetica, sans-serif;
    font-size: 14px;
  
    --myPalette1: #aac2d4;
    --myPalette2: #7fa9b8;
    --myPalette3: #668da7;
  }

body {
    box-sizing: border-box;
}

#content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    height: fit-content;

    justify-content: center;
    cursor: default;
}

.section-div-two, .section-div-three {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    text-align: center;

    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 4rem;
}

.section-div-four {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    text-align: center;

    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 4rem;
}

.icon {
    width: 2rem;
    height: 2rem;
    margin: 0.2rem;
    cursor: pointer;
}


/* div {
    border: solid 0.1rem greenyellow;
} */

/* //==//==//==//== HEADER ==/==/==/==/ */

#header-div {
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 100%;
    margin: 0;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
}

/* //==//==//==//== BOTTOM ==/==/==/==/ */

#bottom-div {
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 100%;
    margin: 0;

    justify-content: space-between;
    align-items: center;
}

/* //==//==//==//== MENU ==/==/==/==/ */

#menu-div {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    max-width: 280px;
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    background-color: rgba(255, 255, 255, 0.85);

    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px; /* Place content 60px from the top */
    transition: 0.5s;
    margin: 0;
}

#menu-ul {
    list-style: none;
    font-size: 1.2rem;
    padding-top: 20px;
    padding-left: 1rem;

    /* margin-right: 2rem; */
    width: 80%;
}

#menu-ul > li {
    margin-bottom: 0.5rem;
    border-bottom: solid whitesmoke 0.1rem;
}

#icon-esc {
    margin-left: 80%;
}

#menu-ul, #icon-fb {
    padding-left: 1rem;
}



/* //==//==//==//== HOME ==/==/==/==/ */

#home-div {
    display: flex;
    flex-direction: column;

    justify-items: center;
    width: 100%;
    height: 100%;
}

/* HERO */
#hero-div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 50%;
    width: 100%;

    margin-bottom: 4rem;
}

#hero-img {
    position: relative;
    margin-left: 40px;
    margin-right: 40px;
}

#herotext-div {
    position: absolute;
    margin-left: 50%;
    width: 35%;
    text-align: right;
}

#hero-btn {
    cursor: pointer;
    background-color: #aac2d4;
    border: solid 0.1rem #668da7;
    border-radius: 0.2rem;
}

#hero-btn:hover {
    background-color: #04AA6D;
    color: white;
}

/* IT SECTION */
#home-it-img, #about-it-img, #about-ti-img {
    height: fit-content;
    width: 40%;
}

#home-ittext-div, #about-ittext-div, #about-ti-div{
    width: 40%;
    text-align: center;
}


/* TTT SECTION */
#home-ttt-div {
    min-height: fit-content;
}

#home-ttt-div > div {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 30%;
}

/* ITTI SECTION */
#home-itti-div > div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    height: fit-content;
    width: 100%;
}

#home-itti-up-img, #home-itti-dw-img {
    height: fit-content;
    width: 50%;
}

#home-itti-up-text, #home-itti-dw-text{
    width: 50%;
    text-align: center;
}

/* CTA SECTION */
#home-cta-div, #about-cta-div{
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 200px;
    width: 100%;

    margin-bottom: 1rem;
}

#home-cta-img, #about-cta-img, #about-subts-img {
    height: 100%;
    object-fit: cover;
    position: relative;
    margin-left: 40px;
    margin-right: 40px;

    filter: blur(3px);
}

#home-cta-text, #about-cta-text {
    position: absolute;
    margin-left: 33%;
    width: 33%;
    text-align: center;
}

/* ABOUT SUBTS SECTION */

#about-subts-div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 140px;
    width: 100%;

    margin-bottom: 4rem;
}

#about-subts-text {
    position: absolute;
    margin-left: 15%;
    width: 70%;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;IACxC,eAAe;;IAEf,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;EACvB;;AAEF;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,mBAAmB;;IAEnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,mBAAmB;IACnB,6BAA6B;;IAE7B,kBAAkB;;IAElB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;IACnB,8BAA8B;;IAE9B,kBAAkB;;IAElB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;;;AAGA;;GAEG;;AAEH,yCAAyC;;AAEzC;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,SAAS;;IAET,8BAA8B;IAC9B,mBAAmB;;IAEnB,mBAAmB;AACvB;;AAEA,yCAAyC;;AAEzC;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,SAAS;;IAET,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,uCAAuC;;AAEvC;IACI,YAAY,EAAE,qBAAqB;IACnC,QAAQ,EAAE,0CAA0C;IACpD,gBAAgB;IAChB,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,gBAAgB;IAC5B,MAAM,EAAE,oBAAoB;IAC5B,QAAQ;IACR,2CAA2C;;IAE3C,kBAAkB,EAAE,8BAA8B;IAClD,iBAAiB,EAAE,oCAAoC;IACvD,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;;IAElB,wBAAwB;IACxB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;;;AAIA,uCAAuC;;AAEvC;IACI,aAAa;IACb,sBAAsB;;IAEtB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,WAAW;IACX,WAAW;;IAEX,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,4BAA4B;IAC5B,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;;AAGA,gBAAgB;AAChB;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,UAAU;AACd;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,mBAAmB;;IAEnB,8BAA8B;;IAE9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,aAAa;IACb,WAAW;;IAEX,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;;IAElB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;AACtB;;AAEA,wBAAwB;;AAExB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,aAAa;IACb,WAAW;;IAEX,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;AACtB","sourcesContent":[":root {\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  \n    --myPalette1: #aac2d4;\n    --myPalette2: #7fa9b8;\n    --myPalette3: #668da7;\n  }\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    height: fit-content;\n\n    justify-content: center;\n    cursor: default;\n}\n\n.section-div-two, .section-div-three {\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    justify-content: space-around;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.section-div-four {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    justify-content: space-between;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.icon {\n    width: 2rem;\n    height: 2rem;\n    margin: 0.2rem;\n    cursor: pointer;\n}\n\n\n/* div {\n    border: solid 0.1rem greenyellow;\n} */\n\n/* //==//==//==//== HEADER ==/==/==/==/ */\n\n#header-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n\n    margin-bottom: 1rem;\n}\n\n/* //==//==//==//== BOTTOM ==/==/==/==/ */\n\n#bottom-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* //==//==//==//== MENU ==/==/==/==/ */\n\n#menu-div {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    max-width: 280px;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.85);\n\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px; /* Place content 60px from the top */\n    transition: 0.5s;\n    margin: 0;\n}\n\n#menu-ul {\n    list-style: none;\n    font-size: 1.2rem;\n    padding-top: 20px;\n    padding-left: 1rem;\n\n    /* margin-right: 2rem; */\n    width: 80%;\n}\n\n#menu-ul > li {\n    margin-bottom: 0.5rem;\n    border-bottom: solid whitesmoke 0.1rem;\n}\n\n#icon-esc {\n    margin-left: 80%;\n}\n\n#menu-ul, #icon-fb {\n    padding-left: 1rem;\n}\n\n\n\n/* //==//==//==//== HOME ==/==/==/==/ */\n\n#home-div {\n    display: flex;\n    flex-direction: column;\n\n    justify-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n/* HERO */\n#hero-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 50%;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#hero-img {\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n\n#herotext-div {\n    position: absolute;\n    margin-left: 50%;\n    width: 35%;\n    text-align: right;\n}\n\n#hero-btn {\n    cursor: pointer;\n    background-color: #aac2d4;\n    border: solid 0.1rem #668da7;\n    border-radius: 0.2rem;\n}\n\n#hero-btn:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n/* IT SECTION */\n#home-it-img, #about-it-img, #about-ti-img {\n    height: fit-content;\n    width: 40%;\n}\n\n#home-ittext-div, #about-ittext-div, #about-ti-div{\n    width: 40%;\n    text-align: center;\n}\n\n\n/* TTT SECTION */\n#home-ttt-div {\n    min-height: fit-content;\n}\n\n#home-ttt-div > div {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    width: 30%;\n}\n\n/* ITTI SECTION */\n#home-itti-div > div {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: space-between;\n\n    height: fit-content;\n    width: 100%;\n}\n\n#home-itti-up-img, #home-itti-dw-img {\n    height: fit-content;\n    width: 50%;\n}\n\n#home-itti-up-text, #home-itti-dw-text{\n    width: 50%;\n    text-align: center;\n}\n\n/* CTA SECTION */\n#home-cta-div, #about-cta-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 200px;\n    width: 100%;\n\n    margin-bottom: 1rem;\n}\n\n#home-cta-img, #about-cta-img, #about-subts-img {\n    height: 100%;\n    object-fit: cover;\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    filter: blur(3px);\n}\n\n#home-cta-text, #about-cta-text {\n    position: absolute;\n    margin-left: 33%;\n    width: 33%;\n    text-align: center;\n}\n\n/* ABOUT SUBTS SECTION */\n\n#about-subts-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 140px;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#about-subts-text {\n    position: absolute;\n    margin-left: 15%;\n    width: 70%;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _modules_bottom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bottom */ "./src/modules/bottom.js");
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions */ "./src/modules/functions.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const content = document.querySelector('#content');


_modules_header__WEBPACK_IMPORTED_MODULE_2__["default"].render();
(0,_modules_functions__WEBPACK_IMPORTED_MODULE_1__.callPage)('Home');


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
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg");




class About {
    static render() {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-div', null, null, _index__WEBPACK_IMPORTED_MODULE_0__.content);

        //SUBTS SECTION
        const subtsDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-subts-div', null, null, div);
        const subtsImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'about-subts-img', null, null, subtsDiv);
            subtsImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const subtsText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-subts-text', null, null, subtsDiv);
            const subtsH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'about-subts-h2', null, 'Discover our services!', subtsText);
            const subtsP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'about-subts-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', subtsText);
            const subtsBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'about-subts-btn', null, 'Take me home!', subtsText);

        //2 COL text-img SECTION
        const tiDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-ti-div', ['section-div-two'], null, div);
    
        const tiText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-titext-div', null, null, tiDiv);
            const tiH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'about-ti-h2', null, 'A two column img-text', tiText);
            const tiP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'about-ti-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', tiText);
            
        const tiImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'about-ti-img', null, null, tiDiv);
            tiImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;

        //2 COL img-text SECTION
        const itDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-it-div', ['section-div-two'], null, div);
    
            const itImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'about-it-img', null, null, itDiv);
                itImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
            const itText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-ittext-div', null, null, itDiv);
                const itH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'about-it-h2', null, 'A two column img-text', itText);
                const itP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'about-it-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', itText);

        //CALL TO ACTION SECTION
        const ctaDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-cta-div', null, null, div);
            const ctaImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'about-cta-img', null, null, ctaDiv);
                ctaImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
            const ctaText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-cta-text', null, null, ctaDiv);
                const ctaH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'about-cta-h2', null, 'A Call to Action!', ctaText);
                const ctaP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'about-cta-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', ctaText);
                const ctaBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'about-cta-btn', null, 'Reserve', ctaText);
    }
}

/***/ }),

/***/ "./src/modules/bottom.js":
/*!*******************************!*\
  !*** ./src/modules/bottom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bottom)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");
/* harmony import */ var _assets_icon_fb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon_fb.svg */ "./src/assets/icon_fb.svg");
/* harmony import */ var _assets_icon_igrm_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_igrm.svg */ "./src/assets/icon_igrm.svg");





class Bottom {
    static render(){
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'bottom-div', null, null, _index_js__WEBPACK_IMPORTED_MODULE_0__.content);
        const icnText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'bottom-text', null, 'Your Company ® 2024', div);

        const icnDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'bottom-icon-div', null, null, div);
        const icnFb = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'bottom-icon-fb', ['icon'], null, icnDiv);
            icnFb.src = _assets_icon_fb_svg__WEBPACK_IMPORTED_MODULE_2__;
        const icnIgrm = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'bottom-icon-igrm', ['icon'], null, icnDiv);
            icnIgrm.src = _assets_icon_igrm_svg__WEBPACK_IMPORTED_MODULE_3__;
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
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottom */ "./src/modules/bottom.js");





let currentPage = '';

function createHtmlElement(type, id, arrayClasses, content, appendCh) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach(myClass => element.classList.add(myClass));
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
            case 'Home':
                _home__WEBPACK_IMPORTED_MODULE_2__["default"].render();
                break;
            case 'About':
                _about__WEBPACK_IMPORTED_MODULE_1__["default"].render();
                break;
        }
        currentPage = name;
        _bottom__WEBPACK_IMPORTED_MODULE_3__["default"].render();
    }
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
/* harmony import */ var _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon_esc.svg */ "./src/assets/icon_esc.svg");
/* harmony import */ var _assets_icon_fb_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon_fb.svg */ "./src/assets/icon_fb.svg");
/* harmony import */ var _assets_icon_igrm_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icon_igrm.svg */ "./src/assets/icon_igrm.svg");









class Header {
    static render () {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'header-div', null, null, _index_js__WEBPACK_IMPORTED_MODULE_0__.content);

        const icnLogo = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-logo', ['icon'], null, div);
            icnLogo.src = _assets_icon_logo_svg__WEBPACK_IMPORTED_MODULE_3__;
        
        const icnText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('text', 'icon-text', ['icontext'], 'Your Company', div);
        
        const icnMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-menu', ['icon'], null, div);
            icnMenu.src = _assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_2__;

        //Menu
        const divMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'menu-div', null, null, _index_js__WEBPACK_IMPORTED_MODULE_0__.content);


        const icnEsc = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-esc', ['icon'], null, divMenu);
            icnEsc.src = _assets_icon_esc_svg__WEBPACK_IMPORTED_MODULE_4__;

        const listMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', 'menu-ul', null, null, divMenu);

        const listMenuContent = ['Home','About','Services','Contact'];
            listMenuContent.forEach((page) => {
                const el = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, [`${page}`], `${page}`, listMenu);
                el.addEventListener('click', () => {
                    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.callPage)(el.classList[0]);
                    divMenu.style.width = '';
                    //document.body.style.backgroundColor = "white";
                    });
                });

        const icnFb = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-fb', ['icon'], null, divMenu);
            icnFb.src = _assets_icon_fb_svg__WEBPACK_IMPORTED_MODULE_5__;
        const icnIgrm = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'icon-igrm', ['icon'], null, divMenu);
            icnIgrm.src = _assets_icon_igrm_svg__WEBPACK_IMPORTED_MODULE_6__;
            
        icnEsc.addEventListener('click', () => {
            divMenu.style.width = '';
            //document.body.style.backgroundColor = "white";
        });

        icnMenu.addEventListener('click', () => {
            if(divMenu.style.width === '') {
                divMenu.style.width ='40%'
                //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                div.style.width = '';
                //document.body.style.backgroundColor = "white";
            };
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
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg");




class Home {
    static render() {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-div', null, null, _index__WEBPACK_IMPORTED_MODULE_0__.content);

        //HERO SECTION
        const heroDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'hero-div', null, null, div);

            const heroImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'hero-img', null, null, heroDiv);
                heroImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;

            const heroText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'herotext-div', null, null, heroDiv);
                const heroH1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', 'hero-h1', ['hero-text'], 'This is the home page.', heroText);
                const heroP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'hero-p', ['hero-text'], 'Give a look at this hero section!', heroText);
                const heroBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'hero-btn', null, 'Reservation', heroText);


        //2 COL img-text SECTION
        const itDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-it-div', ['section-div-two'], null, div);

            const itImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'home-it-img', null, null, itDiv);
                itImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;

            const itText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-ittext-div', null, null, itDiv);
                const itH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'home-it-h2', null, 'A two column img-text', itText);
                const itP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-it-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', itText);


        //3 COL text SECTION (da provare il text wrapper su tre colonne)
        const tttDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-ttt-div', ['section-div-three'], null, div);

            const tttText1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-ttt-text1', null, null, tttDiv);
                const tttH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'home-ttt-h2', null, 'A three column img-text', tttText1);
                const tttP1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-it-p1', null,  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', tttText1);
            const tttText2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-ttt-text2', null, null, tttDiv);    
                const tttP2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-it-p1', null, 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident.', tttText2);
            const tttText3 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-ttt-text3', null, null, tttDiv);
                const tttP3 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-it-p1', null, 'Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', tttText3);

        
        //2 ROWS img-text/text-img SECTION
        const ittiDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-itti-div', ['section-div-four'], null, div);

            const ittiUp = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-itti-up', null, null, ittiDiv);
                const ittiUpText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-itti-up-text', null, null, ittiUp);
                    const ittiUpH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'home-itti-up-h2', null, 'An itti up', ittiUpText);
                    const ittiUpP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-itti-up-p', null, 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', ittiUpText);
                const ittiUpImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'home-itti-up-img', null, null, ittiUp);
                    ittiUpImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;

            const ittiDw = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-itti-dw', null, null, ittiDiv);
            const ittiDwImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'home-itti-dw-img', null, null, ittiDw);
                ittiDwImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
            const ittiDwText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-itti-dw-text', null, null, ittiDw);
                const ittiDwH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'home-itti-dw-h2', null, 'An itti down', ittiDwText);
                const ittiDwP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-itti-dw-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', ittiDwText);

        //CALL TO ACTION SECTION
        const ctaDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-cta-div', null, null, div);
            const ctaImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'home-cta-img', null, null, ctaDiv);
                ctaImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
            const ctaText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-cta-text', null, null, ctaDiv);
                const ctaH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'home-cta-h2', null, 'A Call to Action!', ctaText);
                const ctaP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'home-cta-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', ctaText);
                const ctaBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'home-cta-btn', null, 'Reserve', ctaText);
                const ctaTop = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'home-cta-top', null, 'Top', ctaText);
            
    }
}

/***/ }),

/***/ "./src/assets/icon_esc.svg":
/*!*********************************!*\
  !*** ./src/assets/icon_esc.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3724015a28ada696818.svg";

/***/ }),

/***/ "./src/assets/icon_fb.svg":
/*!********************************!*\
  !*** ./src/assets/icon_fb.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce624a5a8b9e3d15410c.svg";

/***/ }),

/***/ "./src/assets/icon_igrm.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_igrm.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ef41bb7de56c48a4cc.svg";

/***/ }),

/***/ "./src/assets/icon_logo.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bbf57060e1d74ba0232.svg";

/***/ }),

/***/ "./src/assets/icon_menu.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317bc50c92894bf177b7.svg";

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df1e9d38051307e7eb9b.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9ib3R0b20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuICAgIC0tbXlQYWxldHRlMTogI2FhYzJkNDtcbiAgICAtLW15UGFsZXR0ZTI6ICM3ZmE5Yjg7XG4gICAgLS1teVBhbGV0dGUzOiAjNjY4ZGE3O1xuICB9XG5cbmJvZHkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zZWN0aW9uLWRpdi10d28sIC5zZWN0aW9uLWRpdi10aHJlZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uc2VjdGlvbi1kaXYtZm91ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW46IDAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogZGl2IHtcbiAgICBib3JkZXI6IHNvbGlkIDAuMXJlbSBncmVlbnllbGxvdztcbn0gKi9cblxuLyogLy89PS8vPT0vLz09Ly89PSBIRUFERVIgPT0vPT0vPT0vPT0vICovXG5cbiNoZWFkZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLyogLy89PS8vPT0vLz09Ly89PSBCT1RUT00gPT0vPT0vPT0vPT0vICovXG5cbiNib3R0b20tZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiAvLz09Ly89PS8vPT0vLz09IE1FTlUgPT0vPT0vPT0vPT0vICovXG5cbiNtZW51LWRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgcGFkZGluZy10b3A6IDIwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI21lbnUtdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAycmVtOyAqL1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiNtZW51LXVsID4gbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDAuMXJlbTtcbn1cblxuI2ljb24tZXNjIHtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4jbWVudS11bCwgI2ljb24tZmIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuXG5cbi8qIC8vPT0vLz09Ly89PS8vPT0gSE9NRSA9PS89PS89PS89PS8gKi9cblxuI2hvbWUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBIRVJPICovXG4jaGVyby1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuI2hlcm8taW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4jaGVyb3RleHQtZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMzUlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jaGVyby1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFjMmQ0O1xuICAgIGJvcmRlcjogc29saWQgMC4xcmVtICM2NjhkYTc7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4jaGVyby1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBJVCBTRUNUSU9OICovXG4jaG9tZS1pdC1pbWcsICNhYm91dC1pdC1pbWcsICNhYm91dC10aS1pbWcge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuI2hvbWUtaXR0ZXh0LWRpdiwgI2Fib3V0LWl0dGV4dC1kaXYsICNhYm91dC10aS1kaXZ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLyogVFRUIFNFQ1RJT04gKi9cbiNob21lLXR0dC1kaXYge1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jaG9tZS10dHQtZGl2ID4gZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLyogSVRUSSBTRUNUSU9OICovXG4jaG9tZS1pdHRpLWRpdiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2hvbWUtaXR0aS11cC1pbWcsICNob21lLWl0dGktZHctaW1nIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbiNob21lLWl0dGktdXAtdGV4dCwgI2hvbWUtaXR0aS1kdy10ZXh0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDVEEgU0VDVElPTiAqL1xuI2hvbWUtY3RhLWRpdiwgI2Fib3V0LWN0YS1kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNob21lLWN0YS1pbWcsICNhYm91dC1jdGEtaW1nLCAjYWJvdXQtc3VidHMtaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcblxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4jaG9tZS1jdGEtdGV4dCwgI2Fib3V0LWN0YS10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgICB3aWR0aDogMzMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQUJPVVQgU1VCVFMgU0VDVElPTiAqL1xuXG4jYWJvdXQtc3VidHMtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuI2Fib3V0LXN1YnRzLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksc0JBQXNC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QUFhO0lBQ2IsV0FBVzs7SUFFWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsV0FBVzs7SUFFWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICBcXG4gICAgLS1teVBhbGV0dGUxOiAjYWFjMmQ0O1xcbiAgICAtLW15UGFsZXR0ZTI6ICM3ZmE5Yjg7XFxuICAgIC0tbXlQYWxldHRlMzogIzY2OGRhNztcXG4gIH1cXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc2VjdGlvbi1kaXYtdHdvLCAuc2VjdGlvbi1kaXYtdGhyZWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXYtZm91ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIGRpdiB7XFxuICAgIGJvcmRlcjogc29saWQgMC4xcmVtIGdyZWVueWVsbG93O1xcbn0gKi9cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IEhFQURFUiA9PS89PS89PS89PS8gKi9cXG5cXG4jaGVhZGVyLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IEJPVFRPTSA9PS89PS89PS89PS8gKi9cXG5cXG4jYm90dG9tLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IE1FTlUgPT0vPT0vPT0vPT0vICovXFxuXFxuI21lbnUtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXFxuICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xcbiAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21lbnUtdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAycmVtOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4jbWVudS11bCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDAuMXJlbTtcXG59XFxuXFxuI2ljb24tZXNjIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuXFxuI21lbnUtdWwsICNpY29uLWZiIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IEhPTUUgPT0vPT0vPT0vPT0vICovXFxuXFxuI2hvbWUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBIRVJPICovXFxuI2hlcm8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuI2hlcm8taW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jaGVyb3RleHQtZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2hlcm8tYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFjMmQ0O1xcbiAgICBib3JkZXI6IHNvbGlkIDAuMXJlbSAjNjY4ZGE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiNoZXJvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogSVQgU0VDVElPTiAqL1xcbiNob21lLWl0LWltZywgI2Fib3V0LWl0LWltZywgI2Fib3V0LXRpLWltZyB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbiNob21lLWl0dGV4dC1kaXYsICNhYm91dC1pdHRleHQtZGl2LCAjYWJvdXQtdGktZGl2e1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIFRUVCBTRUNUSU9OICovXFxuI2hvbWUtdHR0LWRpdiB7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaG9tZS10dHQtZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLyogSVRUSSBTRUNUSU9OICovXFxuI2hvbWUtaXR0aS1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaG9tZS1pdHRpLXVwLWltZywgI2hvbWUtaXR0aS1kdy1pbWcge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jaG9tZS1pdHRpLXVwLXRleHQsICNob21lLWl0dGktZHctdGV4dHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBDVEEgU0VDVElPTiAqL1xcbiNob21lLWN0YS1kaXYsICNhYm91dC1jdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNob21lLWN0YS1pbWcsICNhYm91dC1jdGEtaW1nLCAjYWJvdXQtc3VidHMtaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuI2hvbWUtY3RhLXRleHQsICNhYm91dC1jdGEtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBBQk9VVCBTVUJUUyBTRUNUSU9OICovXFxuXFxuI2Fib3V0LXN1YnRzLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuI2Fib3V0LXN1YnRzLXRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCb3R0b20gZnJvbSBcIi4vbW9kdWxlcy9ib3R0b21cIjtcbmltcG9ydCB7IGNhbGxQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9mdW5jdGlvbnNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuSGVhZGVyLnJlbmRlcigpO1xuY2FsbFBhZ2UoJ0hvbWUnKTtcbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaGVyb19pbWcgZnJvbSBcIi4uL2ltZy9oZXJvLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IHtcbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuXG4gICAgICAgIC8vU1VCVFMgU0VDVElPTlxuICAgICAgICBjb25zdCBzdWJ0c0RpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtc3VidHMtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgY29uc3Qgc3VidHNJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2Fib3V0LXN1YnRzLWltZycsIG51bGwsIG51bGwsIHN1YnRzRGl2KTtcbiAgICAgICAgICAgIHN1YnRzSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICBjb25zdCBzdWJ0c1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXN1YnRzLXRleHQnLCBudWxsLCBudWxsLCBzdWJ0c0Rpdik7XG4gICAgICAgICAgICBjb25zdCBzdWJ0c0gyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LXN1YnRzLWgyJywgbnVsbCwgJ0Rpc2NvdmVyIG91ciBzZXJ2aWNlcyEnLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYWJvdXQtc3VidHMtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2Fib3V0LXN1YnRzLWJ0bicsIG51bGwsICdUYWtlIG1lIGhvbWUhJywgc3VidHNUZXh0KTtcblxuICAgICAgICAvLzIgQ09MIHRleHQtaW1nIFNFQ1RJT05cbiAgICAgICAgY29uc3QgdGlEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXRpLWRpdicsIFsnc2VjdGlvbi1kaXYtdHdvJ10sIG51bGwsIGRpdik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtdGl0ZXh0LWRpdicsIG51bGwsIG51bGwsIHRpRGl2KTtcbiAgICAgICAgICAgIGNvbnN0IHRpSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnYWJvdXQtdGktaDInLCBudWxsLCAnQSB0d28gY29sdW1uIGltZy10ZXh0JywgdGlUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHRpUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Fib3V0LXRpLXAnLCBudWxsLCAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSBlYXF1ZSBpcHNhLCBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50LCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtLCBxdWlhIHZvbHVwdGFzIHNpdCwgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQnLCB0aVRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdhYm91dC10aS1pbWcnLCBudWxsLCBudWxsLCB0aURpdik7XG4gICAgICAgICAgICB0aUltZy5zcmMgPSBoZXJvX2ltZztcblxuICAgICAgICAvLzIgQ09MIGltZy10ZXh0IFNFQ1RJT05cbiAgICAgICAgY29uc3QgaXREaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LWl0LWRpdicsIFsnc2VjdGlvbi1kaXYtdHdvJ10sIG51bGwsIGRpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpdEltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYWJvdXQtaXQtaW1nJywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGl0SW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgaXRUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1pdHRleHQtZGl2JywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnYWJvdXQtaXQtaDInLCBudWxsLCAnQSB0d28gY29sdW1uIGltZy10ZXh0JywgaXRUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdFAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC1pdC1wJywgbnVsbCwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0JywgaXRUZXh0KTtcblxuICAgICAgICAvL0NBTEwgVE8gQUNUSU9OIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY3RhRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1jdGEtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGN0YUltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYWJvdXQtY3RhLWltZycsIG51bGwsIG51bGwsIGN0YURpdik7XG4gICAgICAgICAgICAgICAgY3RhSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgY3RhVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtY3RhLXRleHQnLCBudWxsLCBudWxsLCBjdGFEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YUgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LWN0YS1oMicsIG51bGwsICdBIENhbGwgdG8gQWN0aW9uIScsIGN0YVRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YVAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC1jdGEtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2Fib3V0LWN0YS1idG4nLCBudWxsLCAnUmVzZXJ2ZScsIGN0YVRleHQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaWNvbl9mYiBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZmIuc3ZnXCJcbmltcG9ydCBpY29uX2lncm0gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2lncm0uc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tIHtcbiAgICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYm90dG9tLWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuICAgICAgICBjb25zdCBpY25UZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYm90dG9tLXRleHQnLCBudWxsLCAnWW91ciBDb21wYW55IMKuIDIwMjQnLCBkaXYpO1xuXG4gICAgICAgIGNvbnN0IGljbkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYm90dG9tLWljb24tZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgY29uc3QgaWNuRmIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2JvdHRvbS1pY29uLWZiJywgWydpY29uJ10sIG51bGwsIGljbkRpdik7XG4gICAgICAgICAgICBpY25GYi5zcmMgPSBpY29uX2ZiO1xuICAgICAgICBjb25zdCBpY25JZ3JtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdib3R0b20taWNvbi1pZ3JtJywgWydpY29uJ10sIG51bGwsIGljbkRpdik7XG4gICAgICAgICAgICBpY25JZ3JtLnNyYyA9IGljb25faWdybTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgQm90dG9tIGZyb20gXCIuL2JvdHRvbVwiO1xuXG5sZXQgY3VycmVudFBhZ2UgPSAnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQsIGFwcGVuZENoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2gobXlDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICAgIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgaWYgKGFwcGVuZENoKSBhcHBlbmRDaC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbFBhZ2UobmFtZSkge1xuICAgIGlmKG5hbWUgJiYgbmFtZSAhPT0gY3VycmVudFBhZ2Upe1xuICAgICAgICB3aGlsZShjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMl0ucmVtb3ZlKCk7IC8vcmVtb3ZlIGFsbCBleGNlcHQgZmlyc3QgY2hpbGQgKGhlYWRlcilcbiAgICAgICAgfTtcblxuICAgICAgICBzd2l0Y2gobmFtZSl7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBIb21lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgICAgIEFib3V0LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQYWdlID0gbmFtZTtcbiAgICAgICAgQm90dG9tLnJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjYWxsUGFnZSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGljb25fbWVudSBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbWVudS5zdmdcIlxuaW1wb3J0IGljb25fbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbG9nby5zdmdcIlxuaW1wb3J0IGljb25fZXNjIGZyb20gXCIuLi9hc3NldHMvaWNvbl9lc2Muc3ZnXCJcbmltcG9ydCBpY29uX2ZiIGZyb20gXCIuLi9hc3NldHMvaWNvbl9mYi5zdmdcIlxuaW1wb3J0IGljb25faWdybSBmcm9tIFwiLi4vYXNzZXRzL2ljb25faWdybS5zdmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICAgIHN0YXRpYyByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hlYWRlci1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuICAgICAgICBjb25zdCBpY25Mb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWxvZ28nLCBbJ2ljb24nXSwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGljbkxvZ28uc3JjID0gaWNvbl9sb2dvO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaWNuVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd0ZXh0JywgJ2ljb24tdGV4dCcsIFsnaWNvbnRleHQnXSwgJ1lvdXIgQ29tcGFueScsIGRpdik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpY25NZW51ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLW1lbnUnLCBbJ2ljb24nXSwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGljbk1lbnUuc3JjID0gaWNvbl9tZW51O1xuXG4gICAgICAgIC8vTWVudVxuICAgICAgICBjb25zdCBkaXZNZW51ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdtZW51LWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuXG5cbiAgICAgICAgY29uc3QgaWNuRXNjID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWVzYycsIFsnaWNvbiddLCBudWxsLCBkaXZNZW51KTtcbiAgICAgICAgICAgIGljbkVzYy5zcmMgPSBpY29uX2VzYztcblxuICAgICAgICBjb25zdCBsaXN0TWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdtZW51LXVsJywgbnVsbCwgbnVsbCwgZGl2TWVudSk7XG5cbiAgICAgICAgY29uc3QgbGlzdE1lbnVDb250ZW50ID0gWydIb21lJywnQWJvdXQnLCdTZXJ2aWNlcycsJ0NvbnRhY3QnXTtcbiAgICAgICAgICAgIGxpc3RNZW51Q29udGVudC5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVIdG1sRWxlbWVudCgnbGknLCBudWxsLCBbYCR7cGFnZX1gXSwgYCR7cGFnZX1gLCBsaXN0TWVudSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxQYWdlKGVsLmNsYXNzTGlzdFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGRpdk1lbnUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaWNuRmIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2ljb24tZmInLCBbJ2ljb24nXSwgbnVsbCwgZGl2TWVudSk7XG4gICAgICAgICAgICBpY25GYi5zcmMgPSBpY29uX2ZiO1xuICAgICAgICBjb25zdCBpY25JZ3JtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWlncm0nLCBbJ2ljb24nXSwgbnVsbCwgZGl2TWVudSk7XG4gICAgICAgICAgICBpY25JZ3JtLnNyYyA9IGljb25faWdybTtcbiAgICAgICAgICAgIFxuICAgICAgICBpY25Fc2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXZNZW51LnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpY25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoZGl2TWVudS5zdHlsZS53aWR0aCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkaXZNZW51LnN0eWxlLndpZHRoID0nNDAlJ1xuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC40KVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaGVyb19pbWcgZnJvbSBcIi4uL2ltZy9oZXJvLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICAgIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuICAgICAgICAvL0hFUk8gU0VDVElPTlxuICAgICAgICBjb25zdCBoZXJvRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdoZXJvLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlcm9JbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hlcm8taW1nJywgbnVsbCwgbnVsbCwgaGVyb0Rpdik7XG4gICAgICAgICAgICAgICAgaGVyb0ltZy5zcmMgPSBoZXJvX2ltZztcblxuICAgICAgICAgICAgY29uc3QgaGVyb1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hlcm90ZXh0LWRpdicsIG51bGwsIG51bGwsIGhlcm9EaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm9IMSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMScsICdoZXJvLWgxJywgWydoZXJvLXRleHQnXSwgJ1RoaXMgaXMgdGhlIGhvbWUgcGFnZS4nLCBoZXJvVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVyb1AgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdoZXJvLXAnLCBbJ2hlcm8tdGV4dCddLCAnR2l2ZSBhIGxvb2sgYXQgdGhpcyBoZXJvIHNlY3Rpb24hJywgaGVyb1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm9CdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2hlcm8tYnRuJywgbnVsbCwgJ1Jlc2VydmF0aW9uJywgaGVyb1RleHQpO1xuXG5cbiAgICAgICAgLy8yIENPTCBpbWctdGV4dCBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGl0RGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0LWRpdicsIFsnc2VjdGlvbi1kaXYtdHdvJ10sIG51bGwsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0SW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdob21lLWl0LWltZycsIG51bGwsIG51bGwsIGl0RGl2KTtcbiAgICAgICAgICAgICAgICBpdEltZy5zcmMgPSBoZXJvX2ltZztcblxuICAgICAgICAgICAgY29uc3QgaXRUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGV4dC1kaXYnLCBudWxsLCBudWxsLCBpdERpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdob21lLWl0LWgyJywgbnVsbCwgJ0EgdHdvIGNvbHVtbiBpbWctdGV4dCcsIGl0VGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdC1wJywgbnVsbCwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0JywgaXRUZXh0KTtcblxuXG4gICAgICAgIC8vMyBDT0wgdGV4dCBTRUNUSU9OIChkYSBwcm92YXJlIGlsIHRleHQgd3JhcHBlciBzdSB0cmUgY29sb25uZSlcbiAgICAgICAgY29uc3QgdHR0RGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLXR0dC1kaXYnLCBbJ3NlY3Rpb24tZGl2LXRocmVlJ10sIG51bGwsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHR0dFRleHQxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLXR0dC10ZXh0MScsIG51bGwsIG51bGwsIHR0dERpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHR0SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnaG9tZS10dHQtaDInLCBudWxsLCAnQSB0aHJlZSBjb2x1bW4gaW1nLXRleHQnLCB0dHRUZXh0MSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHR0UDEgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0LXAxJywgbnVsbCwgICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0uJywgdHR0VGV4dDEpO1xuICAgICAgICAgICAgY29uc3QgdHR0VGV4dDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtdHR0LXRleHQyJywgbnVsbCwgbnVsbCwgdHR0RGl2KTsgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdHR0UDIgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0LXAxJywgbnVsbCwgJ0F0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMsIHF1aSBibGFuZGl0aWlzIHByYWVzZW50aXVtIHZvbHVwdGF0dW0gZGVsZW5pdGkgYXRxdWUgY29ycnVwdGksIHF1b3MgZG9sb3JlcyBldCBxdWFzIG1vbGVzdGlhcyBleGNlcHR1cmkgc2ludCwgb2JjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudC4nLCB0dHRUZXh0Mik7XG4gICAgICAgICAgICBjb25zdCB0dHRUZXh0MyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS10dHQtdGV4dDMnLCBudWxsLCBudWxsLCB0dHREaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR0dFAzID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdC1wMScsIG51bGwsICdUb3RhbSByZW0gYXBlcmlhbSBlYXF1ZSBpcHNhLCBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50LCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtLCBxdWlhIHZvbHVwdGFzIHNpdCwgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQsIHNpbWlsaXF1ZSBzdW50IGluIGN1bHBhLCBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXRpYSBhbmltaSwgaWQgZXN0IGxhYm9ydW0gZXQgZG9sb3J1bSBmdWdhLicsIHR0dFRleHQzKTtcblxuICAgICAgICBcbiAgICAgICAgLy8yIFJPV1MgaW1nLXRleHQvdGV4dC1pbWcgU0VDVElPTlxuICAgICAgICBjb25zdCBpdHRpRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGktZGl2JywgWydzZWN0aW9uLWRpdi1mb3VyJ10sIG51bGwsIGRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0dGlVcCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRpLXVwJywgbnVsbCwgbnVsbCwgaXR0aURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaXR0aVVwVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRpLXVwLXRleHQnLCBudWxsLCBudWxsLCBpdHRpVXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdHRpVXBIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdob21lLWl0dGktdXAtaDInLCBudWxsLCAnQW4gaXR0aSB1cCcsIGl0dGlVcFRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdHRpVXBQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdHRpLXVwLXAnLCBudWxsLCAnRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uIE5hbSBsaWJlcm8gdGVtcG9yZSwgY3VtIHNvbHV0YSBub2JpcyBlc3QgZWxpZ2VuZGkgb3B0aW8sIGN1bXF1ZSBuaWhpbCBpbXBlZGl0LCBxdW8gbWludXMgaWQsIHF1b2QgbWF4aW1lIHBsYWNlYXQsIGZhY2VyZSBwb3NzaW11cywgb21uaXMgdm9sdXB0YXMgYXNzdW1lbmRhIGVzdCwgb21uaXMgZG9sb3IgcmVwZWxsZW5kdXMuJywgaXR0aVVwVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXR0aVVwSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdob21lLWl0dGktdXAtaW1nJywgbnVsbCwgbnVsbCwgaXR0aVVwKTtcbiAgICAgICAgICAgICAgICAgICAgaXR0aVVwSW1nLnNyYyA9IGhlcm9faW1nO1xuXG4gICAgICAgICAgICBjb25zdCBpdHRpRHcgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0aS1kdycsIG51bGwsIG51bGwsIGl0dGlEaXYpO1xuICAgICAgICAgICAgY29uc3QgaXR0aUR3SW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdob21lLWl0dGktZHctaW1nJywgbnVsbCwgbnVsbCwgaXR0aUR3KTtcbiAgICAgICAgICAgICAgICBpdHRpRHdJbWcuc3JjID0gaGVyb19pbWc7XG4gICAgICAgICAgICBjb25zdCBpdHRpRHdUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGktZHctdGV4dCcsIG51bGwsIG51bGwsIGl0dGlEdyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXR0aUR3SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnaG9tZS1pdHRpLWR3LWgyJywgbnVsbCwgJ0FuIGl0dGkgZG93bicsIGl0dGlEd1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlEd1AgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0dGktZHctcCcsIG51bGwsICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0uJywgaXR0aUR3VGV4dCk7XG5cbiAgICAgICAgLy9DQUxMIFRPIEFDVElPTiBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGN0YURpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1jdGEtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGN0YUltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaG9tZS1jdGEtaW1nJywgbnVsbCwgbnVsbCwgY3RhRGl2KTtcbiAgICAgICAgICAgICAgICBjdGFJbWcuc3JjID0gaGVyb19pbWc7XG4gICAgICAgICAgICBjb25zdCBjdGFUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWN0YS10ZXh0JywgbnVsbCwgbnVsbCwgY3RhRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdob21lLWN0YS1oMicsIG51bGwsICdBIENhbGwgdG8gQWN0aW9uIScsIGN0YVRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YVAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWN0YS1wJywgbnVsbCwgJ0V0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLicsIGN0YVRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YUJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnaG9tZS1jdGEtYnRuJywgbnVsbCwgJ1Jlc2VydmUnLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFUb3AgPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2hvbWUtY3RhLXRvcCcsIG51bGwsICdUb3AnLCBjdGFUZXh0KTtcbiAgICAgICAgICAgIFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=