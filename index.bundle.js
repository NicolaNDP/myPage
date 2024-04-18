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
___CSS_LOADER_EXPORT___.push([module.id, `/* TODO:
-organize by shared classes
-add queryes for max-widht 1536px, 1280, 1024, 768, 640, 475 */

:root {
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

.columnedup {
    columns: 300px;
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
    background-color: white;

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

    object-fit: cover;

    height: auto;
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
    height: auto;
    width: 40%;
}

#home-ittext-div, #about-ittext-div, #about-titext-div{
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
    height: auto;
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

#home-cta-img, #about-cta-img, #about-subts-img, #contact-subts-img {
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

#about-subts-div, #contact-subts-div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 140px;
    width: 100%;

    margin-bottom: 4rem;
}

#about-subts-text, #contact-subts-text {
    position: absolute;
    margin-left: 15%;
    width: 70%;
    text-align: center;
}

/* CONTACT SECTION */

#contact-caddress-map {
    height: auto;
    width: 40%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* TODO:\n-organize by shared classes\n-add queryes for max-widht 1536px, 1280, 1024, 768, 640, 475 */\n\n:root {\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  \n    --myPalette1: #aac2d4;\n    --myPalette2: #7fa9b8;\n    --myPalette3: #668da7;\n  }\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    height: fit-content;\n\n    justify-content: center;\n    cursor: default;\n}\n\n.section-div-two, .section-div-three {\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    justify-content: space-around;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.section-div-four {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    justify-content: space-between;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.icon {\n    width: 2rem;\n    height: 2rem;\n    margin: 0.2rem;\n    cursor: pointer;\n}\n\n.columnedup {\n    columns: 300px;\n}\n\n\n/* div {\n    border: solid 0.1rem greenyellow;\n} */\n\n/* //==//==//==//== HEADER ==/==/==/==/ */\n\n#header-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n\n    margin-bottom: 1rem;\n}\n\n/* //==//==//==//== BOTTOM ==/==/==/==/ */\n\n#bottom-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* //==//==//==//== MENU ==/==/==/==/ */\n\n#menu-div {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    max-width: 280px;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    right: 0;\n    background-color: white;\n\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px; /* Place content 60px from the top */\n    transition: 0.5s;\n    margin: 0;\n}\n\n#menu-ul {\n    list-style: none;\n    font-size: 1.2rem;\n    padding-top: 20px;\n    padding-left: 1rem;\n\n    /* margin-right: 2rem; */\n    width: 80%;\n}\n\n#menu-ul > li {\n    margin-bottom: 0.5rem;\n    border-bottom: solid whitesmoke 0.1rem;\n}\n\n#icon-esc {\n    margin-left: 80%;\n}\n\n#menu-ul, #icon-fb {\n    padding-left: 1rem;\n}\n\n\n\n/* //==//==//==//== HOME ==/==/==/==/ */\n\n#home-div {\n    display: flex;\n    flex-direction: column;\n\n    justify-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n/* HERO */\n#hero-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    object-fit: cover;\n\n    height: auto;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#hero-img {\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n\n#herotext-div {\n    position: absolute;\n    margin-left: 50%;\n    width: 35%;\n    text-align: right;\n}\n\n#hero-btn {\n    cursor: pointer;\n    background-color: #aac2d4;\n    border: solid 0.1rem #668da7;\n    border-radius: 0.2rem;\n}\n\n#hero-btn:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n/* IT SECTION */\n#home-it-img, #about-it-img, #about-ti-img {\n    height: auto;\n    width: 40%;\n}\n\n#home-ittext-div, #about-ittext-div, #about-titext-div{\n    width: 40%;\n    text-align: center;\n}\n\n\n/* TTT SECTION */\n#home-ttt-div {\n    min-height: fit-content;\n}\n\n#home-ttt-div > div {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    width: 30%;\n}\n\n/* ITTI SECTION */\n#home-itti-div > div {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: space-between;\n\n    height: fit-content;\n    width: 100%;\n}\n\n#home-itti-up-img, #home-itti-dw-img {\n    height: auto;\n    width: 50%;\n}\n\n#home-itti-up-text, #home-itti-dw-text{\n    width: 50%;\n    text-align: center;\n}\n\n/* CTA SECTION */\n#home-cta-div, #about-cta-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 200px;\n    width: 100%;\n\n    margin-bottom: 1rem;\n}\n\n#home-cta-img, #about-cta-img, #about-subts-img, #contact-subts-img {\n    height: 100%;\n    object-fit: cover;\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    filter: blur(3px);\n}\n\n#home-cta-text, #about-cta-text {\n    position: absolute;\n    margin-left: 33%;\n    width: 33%;\n    text-align: center;\n}\n\n/* ABOUT SUBTS SECTION */\n\n#about-subts-div, #contact-subts-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 140px;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#about-subts-text, #contact-subts-text {\n    position: absolute;\n    margin-left: 15%;\n    width: 70%;\n    text-align: center;\n}\n\n/* CONTACT SECTION */\n\n#contact-caddress-map {\n    height: auto;\n    width: 40%;\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg");
/* harmony import */ var _assets_icon_phone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_phone.svg */ "./src/assets/icon_phone.svg");
/* harmony import */ var _assets_icon_mail_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon_mail.svg */ "./src/assets/icon_mail.svg");
/* harmony import */ var _assets_icon_address_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon_address.svg */ "./src/assets/icon_address.svg");








class Contact {
    static render() {
        const div = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-div', null, null, _index__WEBPACK_IMPORTED_MODULE_0__.content);

        //SUBTS SECTION
        const subtsDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-subts-div', null, null, div);
        const subtsImg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'contact-subts-img', null, null, subtsDiv);
            subtsImg.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const subtsText = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-subts-text', null, null, subtsDiv);
            const subtsH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'contact-subts-h2', null, 'Discover our services!', subtsText);
            const subtsP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-subts-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', subtsText);
            const subtsBtn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'contact-subts-btn', null, 'Take me home!', subtsText); 

        //LARGE TEXT SECTION
        const ltDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-lt-div', ['section-div-four'], null, div);
            const ltH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'contact-lt-h2', null, 'Let we know!', ltDiv);
            const ltP = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-lt-p', ['columnedup'], 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.', ltDiv);

        //CONTACT SECTION
        const cDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-c-div', ['section-div-four'], null, div);
            //mail
            const mailSubDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-cmail-div', null, null, cDiv);
                const cMailIcn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'contact-cmail-icon', ['icon'], null, mailSubDiv);
                    cMailIcn.src = _assets_icon_mail_svg__WEBPACK_IMPORTED_MODULE_4__;
                const cMailDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-cmail-textdiv', ['section-div-four'], null, mailSubDiv);
                    const cMailH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'contact-cmail-h2', null, 'e-mail', cMailDiv);
                    const cMailP1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-cmail-p1', null, 'name@example.info', cMailDiv);
                    const cMailP2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-cmail-p2', null, 'company@example.com', cMailDiv);
            //phone
            const phoneSubDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-cphone-div', null, null, cDiv);
                const cPhoneIcn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'contact-cphone-icon', ['icon'], null, phoneSubDiv);
                    cPhoneIcn.src = _assets_icon_phone_svg__WEBPACK_IMPORTED_MODULE_3__;
                const cPhoneDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-cphone-textdiv', ['section-div-four'], null, phoneSubDiv);
                    const cPhoneH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'contact-cphone-h2', null, 'Phone', cPhoneDiv);
                    const cPhoneP1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-cphone-p1', null, '+00 123 456 7', cPhoneDiv);
                    const cPhoneP2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-cphone-p2', null, '+00 890 123 4', cPhoneDiv);
            //address
            const addressSubDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-caddress-div', null, null, cDiv);
                const cAddressIcn = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'contact-caddress-icon', ['icon'], null, addressSubDiv);
                    cAddressIcn.src = _assets_icon_address_svg__WEBPACK_IMPORTED_MODULE_5__;
                const cAddressDiv = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'contact-caddress-textdiv', ['section-div-four'], null, addressSubDiv);
                    const cAddressH2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'contact-caddress-h2', null, 'Come to visit us!', cAddressDiv);
                    const cAddressMap = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'contact-caddress-map', null, null, cAddressDiv);
                        cAddressMap.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_2__;
                    const cAddressP2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'contact-caddress-p2', null, 'Via del Campo 1017, 00172 Roma', cAddressDiv);
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottom */ "./src/modules/bottom.js");






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
                _home__WEBPACK_IMPORTED_MODULE_1__["default"].render();
                break;
            case 'About':
                _about__WEBPACK_IMPORTED_MODULE_2__["default"].render();
                break;
            case 'Contact':
                _contact__WEBPACK_IMPORTED_MODULE_3__["default"].render();
                break;
        }
        currentPage = name;
        _bottom__WEBPACK_IMPORTED_MODULE_4__["default"].render();
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

        const listMenuContent = ['Home','About','Contact'];
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

/***/ "./src/assets/icon_address.svg":
/*!*************************************!*\
  !*** ./src/assets/icon_address.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f15e69d8f507aa4c23a.svg";

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

/***/ "./src/assets/icon_mail.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_mail.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4e2250b999fbdc00ce8.svg";

/***/ }),

/***/ "./src/assets/icon_menu.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317bc50c92894bf177b7.svg";

/***/ }),

/***/ "./src/assets/icon_phone.svg":
/*!***********************************!*\
  !*** ./src/assets/icon_phone.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "367c16f87dc3bd3b8bfd.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9ib3R0b20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9ETzpcbi1vcmdhbml6ZSBieSBzaGFyZWQgY2xhc3Nlc1xuLWFkZCBxdWVyeWVzIGZvciBtYXgtd2lkaHQgMTUzNnB4LCAxMjgwLCAxMDI0LCA3NjgsIDY0MCwgNDc1ICovXG5cbjpyb290IHtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgLS1teVBhbGV0dGUxOiAjYWFjMmQ0O1xuICAgIC0tbXlQYWxldHRlMjogIzdmYTliODtcbiAgICAtLW15UGFsZXR0ZTM6ICM2NjhkYTc7XG4gIH1cblxuYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNlY3Rpb24tZGl2LXR3bywgLnNlY3Rpb24tZGl2LXRocmVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5zZWN0aW9uLWRpdi1mb3VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMC4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbHVtbmVkdXAge1xuICAgIGNvbHVtbnM6IDMwMHB4O1xufVxuXG5cbi8qIGRpdiB7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gZ3JlZW55ZWxsb3c7XG59ICovXG5cbi8qIC8vPT0vLz09Ly89PS8vPT0gSEVBREVSID09Lz09Lz09Lz09LyAqL1xuXG4jaGVhZGVyLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qIC8vPT0vLz09Ly89PS8vPT0gQk9UVE9NID09Lz09Lz09Lz09LyAqL1xuXG4jYm90dG9tLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogLy89PS8vPT0vLz09Ly89PSBNRU5VID09Lz09Lz09Lz09LyAqL1xuXG4jbWVudS1kaXYge1xuICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogMjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jbWVudS11bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDJyZW07ICovXG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI21lbnUtdWwgPiBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlc21va2UgMC4xcmVtO1xufVxuXG4jaWNvbi1lc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbiNtZW51LXVsLCAjaWNvbi1mYiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG5cblxuLyogLy89PS8vPT0vLz09Ly89PSBIT01FID09Lz09Lz09Lz09LyAqL1xuXG4jaG9tZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIEhFUk8gKi9cbiNoZXJvLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4jaGVyby1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbiNoZXJvdGV4dC1kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNoZXJvLWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZDQ7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gIzY2OGRhNztcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbiNoZXJvLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIElUIFNFQ1RJT04gKi9cbiNob21lLWl0LWltZywgI2Fib3V0LWl0LWltZywgI2Fib3V0LXRpLWltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbiNob21lLWl0dGV4dC1kaXYsICNhYm91dC1pdHRleHQtZGl2LCAjYWJvdXQtdGl0ZXh0LWRpdntcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBUVFQgU0VDVElPTiAqL1xuI2hvbWUtdHR0LWRpdiB7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiNob21lLXR0dC1kaXYgPiBkaXYge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4vKiBJVFRJIFNFQ1RJT04gKi9cbiNob21lLWl0dGktZGl2ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jaG9tZS1pdHRpLXVwLWltZywgI2hvbWUtaXR0aS1kdy1pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4jaG9tZS1pdHRpLXVwLXRleHQsICNob21lLWl0dGktZHctdGV4dHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ1RBIFNFQ1RJT04gKi9cbiNob21lLWN0YS1kaXYsICNhYm91dC1jdGEtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jaG9tZS1jdGEtaW1nLCAjYWJvdXQtY3RhLWltZywgI2Fib3V0LXN1YnRzLWltZywgI2NvbnRhY3Qtc3VidHMtaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcblxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4jaG9tZS1jdGEtdGV4dCwgI2Fib3V0LWN0YS10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgICB3aWR0aDogMzMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQUJPVVQgU1VCVFMgU0VDVElPTiAqL1xuXG4jYWJvdXQtc3VidHMtZGl2LCAjY29udGFjdC1zdWJ0cy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4jYWJvdXQtc3VidHMtdGV4dCwgI2NvbnRhY3Qtc3VidHMtdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIENPTlRBQ1QgU0VDVElPTiAqL1xuXG4jY29udGFjdC1jYWRkcmVzcy1tYXAge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7OERBRThEOztBQUU5RDtJQUNJLHdDQUF3QztJQUN4QyxlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjs7SUFFbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIsNkJBQTZCOztJQUU3QixrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsa0JBQWtCOztJQUVsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTs7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IixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVE9ETzpcXG4tb3JnYW5pemUgYnkgc2hhcmVkIGNsYXNzZXNcXG4tYWRkIHF1ZXJ5ZXMgZm9yIG1heC13aWRodCAxNTM2cHgsIDEyODAsIDEwMjQsIDc2OCwgNjQwLCA0NzUgKi9cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIFxcbiAgICAtLW15UGFsZXR0ZTE6ICNhYWMyZDQ7XFxuICAgIC0tbXlQYWxldHRlMjogIzdmYTliODtcXG4gICAgLS1teVBhbGV0dGUzOiAjNjY4ZGE3O1xcbiAgfVxcblxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zZWN0aW9uLWRpdi10d28sIC5zZWN0aW9uLWRpdi10aHJlZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5zZWN0aW9uLWRpdi1mb3VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbHVtbmVkdXAge1xcbiAgICBjb2x1bW5zOiAzMDBweDtcXG59XFxuXFxuXFxuLyogZGl2IHtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gZ3JlZW55ZWxsb3c7XFxufSAqL1xcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gSEVBREVSID09Lz09Lz09Lz09LyAqL1xcblxcbiNoZWFkZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gQk9UVE9NID09Lz09Lz09Lz09LyAqL1xcblxcbiNib3R0b20tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gTUVOVSA9PS89PS89PS89PS8gKi9cXG5cXG4jbWVudS1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cXG4gICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXFxuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21lbnUtdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAycmVtOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4jbWVudS11bCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDAuMXJlbTtcXG59XFxuXFxuI2ljb24tZXNjIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuXFxuI21lbnUtdWwsICNpY29uLWZiIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IEhPTUUgPT0vPT0vPT0vPT0vICovXFxuXFxuI2hvbWUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBIRVJPICovXFxuI2hlcm8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4jaGVyby1pbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiNoZXJvdGV4dC1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jaGVyby1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZDQ7XFxuICAgIGJvcmRlcjogc29saWQgMC4xcmVtICM2NjhkYTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI2hlcm8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBJVCBTRUNUSU9OICovXFxuI2hvbWUtaXQtaW1nLCAjYWJvdXQtaXQtaW1nLCAjYWJvdXQtdGktaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4jaG9tZS1pdHRleHQtZGl2LCAjYWJvdXQtaXR0ZXh0LWRpdiwgI2Fib3V0LXRpdGV4dC1kaXZ7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogVFRUIFNFQ1RJT04gKi9cXG4jaG9tZS10dHQtZGl2IHtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNob21lLXR0dC1kaXYgPiBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4vKiBJVFRJIFNFQ1RJT04gKi9cXG4jaG9tZS1pdHRpLWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNob21lLWl0dGktdXAtaW1nLCAjaG9tZS1pdHRpLWR3LWltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI2hvbWUtaXR0aS11cC10ZXh0LCAjaG9tZS1pdHRpLWR3LXRleHR7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogQ1RBIFNFQ1RJT04gKi9cXG4jaG9tZS1jdGEtZGl2LCAjYWJvdXQtY3RhLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1jdGEtaW1nLCAjYWJvdXQtY3RhLWltZywgI2Fib3V0LXN1YnRzLWltZywgI2NvbnRhY3Qtc3VidHMtaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuI2hvbWUtY3RhLXRleHQsICNhYm91dC1jdGEtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBBQk9VVCBTVUJUUyBTRUNUSU9OICovXFxuXFxuI2Fib3V0LXN1YnRzLWRpdiwgI2NvbnRhY3Qtc3VidHMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4jYWJvdXQtc3VidHMtdGV4dCwgI2NvbnRhY3Qtc3VidHMtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBDT05UQUNUIFNFQ1RJT04gKi9cXG5cXG4jY29udGFjdC1jYWRkcmVzcy1tYXAge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA0MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQm90dG9tIGZyb20gXCIuL21vZHVsZXMvYm90dG9tXCI7XG5pbXBvcnQgeyBjYWxsUGFnZSB9IGZyb20gXCIuL21vZHVsZXMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL21vZHVsZXMvaGVhZGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbkhlYWRlci5yZW5kZXIoKTtcbmNhbGxQYWdlKCdIb21lJyk7XG4iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGhlcm9faW1nIGZyb20gXCIuLi9pbWcvaGVyby5qcGdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCB7XG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuICAgICAgICAvL1NVQlRTIFNFQ1RJT05cbiAgICAgICAgY29uc3Qgc3VidHNEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXN1YnRzLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgIGNvbnN0IHN1YnRzSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdhYm91dC1zdWJ0cy1pbWcnLCBudWxsLCBudWxsLCBzdWJ0c0Rpdik7XG4gICAgICAgICAgICBzdWJ0c0ltZy5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgY29uc3Qgc3VidHNUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1zdWJ0cy10ZXh0JywgbnVsbCwgbnVsbCwgc3VidHNEaXYpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdhYm91dC1zdWJ0cy1oMicsIG51bGwsICdEaXNjb3ZlciBvdXIgc2VydmljZXMhJywgc3VidHNUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRzUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Fib3V0LXN1YnRzLXAnLCBudWxsLCAnRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uJywgc3VidHNUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRzQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdhYm91dC1zdWJ0cy1idG4nLCBudWxsLCAnVGFrZSBtZSBob21lIScsIHN1YnRzVGV4dCk7XG5cbiAgICAgICAgLy8yIENPTCB0ZXh0LWltZyBTRUNUSU9OXG4gICAgICAgIGNvbnN0IHRpRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC10aS1kaXYnLCBbJ3NlY3Rpb24tZGl2LXR3byddLCBudWxsLCBkaXYpO1xuICAgIFxuICAgICAgICBjb25zdCB0aVRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXRpdGV4dC1kaXYnLCBudWxsLCBudWxsLCB0aURpdik7XG4gICAgICAgICAgICBjb25zdCB0aUgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LXRpLWgyJywgbnVsbCwgJ0EgdHdvIGNvbHVtbiBpbWctdGV4dCcsIHRpVGV4dCk7XG4gICAgICAgICAgICBjb25zdCB0aVAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC10aS1wJywgbnVsbCwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0JywgdGlUZXh0KTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB0aUltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYWJvdXQtdGktaW1nJywgbnVsbCwgbnVsbCwgdGlEaXYpO1xuICAgICAgICAgICAgdGlJbWcuc3JjID0gaGVyb19pbWc7XG5cbiAgICAgICAgLy8yIENPTCBpbWctdGV4dCBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGl0RGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1pdC1kaXYnLCBbJ3NlY3Rpb24tZGl2LXR3byddLCBudWxsLCBkaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaXRJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2Fib3V0LWl0LWltZycsIG51bGwsIG51bGwsIGl0RGl2KTtcbiAgICAgICAgICAgICAgICBpdEltZy5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgICAgIGNvbnN0IGl0VGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtaXR0ZXh0LWRpdicsIG51bGwsIG51bGwsIGl0RGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdEgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LWl0LWgyJywgbnVsbCwgJ0EgdHdvIGNvbHVtbiBpbWctdGV4dCcsIGl0VGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYWJvdXQtaXQtcCcsIG51bGwsICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtIGVhcXVlIGlwc2EsIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzIGV0IHF1YXNpIGFyY2hpdGVjdG8gYmVhdGFlIHZpdGFlIGRpY3RhIHN1bnQsIGV4cGxpY2Fiby4gTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0sIHF1aWEgdm9sdXB0YXMgc2l0LCBhc3Blcm5hdHVyIGF1dCBvZGl0IGF1dCBmdWdpdCcsIGl0VGV4dCk7XG5cbiAgICAgICAgLy9DQUxMIFRPIEFDVElPTiBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGN0YURpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtY3RhLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICBjb25zdCBjdGFJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2Fib3V0LWN0YS1pbWcnLCBudWxsLCBudWxsLCBjdGFEaXYpO1xuICAgICAgICAgICAgICAgIGN0YUltZy5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgICAgIGNvbnN0IGN0YVRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LWN0YS10ZXh0JywgbnVsbCwgbnVsbCwgY3RhRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdhYm91dC1jdGEtaDInLCBudWxsLCAnQSBDYWxsIHRvIEFjdGlvbiEnLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYWJvdXQtY3RhLXAnLCBudWxsLCAnRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uJywgY3RhVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3RhQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdhYm91dC1jdGEtYnRuJywgbnVsbCwgJ1Jlc2VydmUnLCBjdGFUZXh0KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleC5qc1wiXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGljb25fZmIgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2ZiLnN2Z1wiXG5pbXBvcnQgaWNvbl9pZ3JtIGZyb20gXCIuLi9hc3NldHMvaWNvbl9pZ3JtLnN2Z1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbSB7XG4gICAgc3RhdGljIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2JvdHRvbS1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcbiAgICAgICAgY29uc3QgaWNuVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2JvdHRvbS10ZXh0JywgbnVsbCwgJ1lvdXIgQ29tcGFueSDCriAyMDI0JywgZGl2KTtcblxuICAgICAgICBjb25zdCBpY25EaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2JvdHRvbS1pY29uLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgIGNvbnN0IGljbkZiID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdib3R0b20taWNvbi1mYicsIFsnaWNvbiddLCBudWxsLCBpY25EaXYpO1xuICAgICAgICAgICAgaWNuRmIuc3JjID0gaWNvbl9mYjtcbiAgICAgICAgY29uc3QgaWNuSWdybSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYm90dG9tLWljb24taWdybScsIFsnaWNvbiddLCBudWxsLCBpY25EaXYpO1xuICAgICAgICAgICAgaWNuSWdybS5zcmMgPSBpY29uX2lncm07XG4gICAgfVxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaGVyb19pbWcgZnJvbSBcIi4uL2ltZy9oZXJvLmpwZ1wiXG5pbXBvcnQgaWNvbl9waG9uZSBmcm9tIFwiLi4vYXNzZXRzL2ljb25fcGhvbmUuc3ZnXCJcbmltcG9ydCBpY29uX21haWwgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX21haWwuc3ZnXCJcbmltcG9ydCBpY29uX2FkZHJlc3MgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2FkZHJlc3Muc3ZnXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtZGl2JywgbnVsbCwgbnVsbCwgY29udGVudCk7XG5cbiAgICAgICAgLy9TVUJUUyBTRUNUSU9OXG4gICAgICAgIGNvbnN0IHN1YnRzRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LXN1YnRzLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgIGNvbnN0IHN1YnRzSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdjb250YWN0LXN1YnRzLWltZycsIG51bGwsIG51bGwsIHN1YnRzRGl2KTtcbiAgICAgICAgICAgIHN1YnRzSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICBjb25zdCBzdWJ0c1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3Qtc3VidHMtdGV4dCcsIG51bGwsIG51bGwsIHN1YnRzRGl2KTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRzSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnY29udGFjdC1zdWJ0cy1oMicsIG51bGwsICdEaXNjb3ZlciBvdXIgc2VydmljZXMhJywgc3VidHNUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRzUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NvbnRhY3Qtc3VidHMtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2NvbnRhY3Qtc3VidHMtYnRuJywgbnVsbCwgJ1Rha2UgbWUgaG9tZSEnLCBzdWJ0c1RleHQpOyBcblxuICAgICAgICAvL0xBUkdFIFRFWFQgU0VDVElPTlxuICAgICAgICBjb25zdCBsdERpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1sdC1kaXYnLCBbJ3NlY3Rpb24tZGl2LWZvdXInXSwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGx0SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnY29udGFjdC1sdC1oMicsIG51bGwsICdMZXQgd2Uga25vdyEnLCBsdERpdik7XG4gICAgICAgICAgICBjb25zdCBsdFAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LWx0LXAnLCBbJ2NvbHVtbmVkdXAnXSwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MsIHF1aSByYXRpb25lIHZvbHVwdGF0ZW0gc2VxdWkgbmVzY2l1bnQsIG5lcXVlIHBvcnJvIHF1aXNxdWFtIGVzdCwgcXVpIGRvbG9yZW0gaXBzdW0sIHF1aWEgZG9sb3Igc2l0LCBhbWV0LCBjb25zZWN0ZXR1ciwgYWRpcGlzY2kgdmVsaXQsIHNlZCBxdWlhIG5vbiBudW1xdWFtIGVpdXMgbW9kaSB0ZW1wb3JhIGluY2lkdW50LCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hbSBhbGlxdWFtIHF1YWVyYXQgdm9sdXB0YXRlbS4nLCBsdERpdik7XG5cbiAgICAgICAgLy9DT05UQUNUIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY0RpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1jLWRpdicsIFsnc2VjdGlvbi1kaXYtZm91ciddLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgLy9tYWlsXG4gICAgICAgICAgICBjb25zdCBtYWlsU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNtYWlsLWRpdicsIG51bGwsIG51bGwsIGNEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNNYWlsSWNuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdjb250YWN0LWNtYWlsLWljb24nLCBbJ2ljb24nXSwgbnVsbCwgbWFpbFN1YkRpdik7XG4gICAgICAgICAgICAgICAgICAgIGNNYWlsSWNuLnNyYyA9IGljb25fbWFpbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjTWFpbERpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1jbWFpbC10ZXh0ZGl2JywgWydzZWN0aW9uLWRpdi1mb3VyJ10sIG51bGwsIG1haWxTdWJEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjTWFpbEgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2NvbnRhY3QtY21haWwtaDInLCBudWxsLCAnZS1tYWlsJywgY01haWxEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjTWFpbFAxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY29udGFjdC1jbWFpbC1wMScsIG51bGwsICduYW1lQGV4YW1wbGUuaW5mbycsIGNNYWlsRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY01haWxQMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NvbnRhY3QtY21haWwtcDInLCBudWxsLCAnY29tcGFueUBleGFtcGxlLmNvbScsIGNNYWlsRGl2KTtcbiAgICAgICAgICAgIC8vcGhvbmVcbiAgICAgICAgICAgIGNvbnN0IHBob25lU3ViRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNwaG9uZS1kaXYnLCBudWxsLCBudWxsLCBjRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjUGhvbmVJY24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NvbnRhY3QtY3Bob25lLWljb24nLCBbJ2ljb24nXSwgbnVsbCwgcGhvbmVTdWJEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjUGhvbmVJY24uc3JjID0gaWNvbl9waG9uZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjUGhvbmVEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtY3Bob25lLXRleHRkaXYnLCBbJ3NlY3Rpb24tZGl2LWZvdXInXSwgbnVsbCwgcGhvbmVTdWJEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjUGhvbmVIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdjb250YWN0LWNwaG9uZS1oMicsIG51bGwsICdQaG9uZScsIGNQaG9uZURpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQaG9uZVAxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY29udGFjdC1jcGhvbmUtcDEnLCBudWxsLCAnKzAwIDEyMyA0NTYgNycsIGNQaG9uZURpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQaG9uZVAyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY29udGFjdC1jcGhvbmUtcDInLCBudWxsLCAnKzAwIDg5MCAxMjMgNCcsIGNQaG9uZURpdik7XG4gICAgICAgICAgICAvL2FkZHJlc3NcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtY2FkZHJlc3MtZGl2JywgbnVsbCwgbnVsbCwgY0Rpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgY0FkZHJlc3NJY24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NvbnRhY3QtY2FkZHJlc3MtaWNvbicsIFsnaWNvbiddLCBudWxsLCBhZGRyZXNzU3ViRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY0FkZHJlc3NJY24uc3JjID0gaWNvbl9hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNBZGRyZXNzRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNhZGRyZXNzLXRleHRkaXYnLCBbJ3NlY3Rpb24tZGl2LWZvdXInXSwgbnVsbCwgYWRkcmVzc1N1YkRpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNBZGRyZXNzSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnY29udGFjdC1jYWRkcmVzcy1oMicsIG51bGwsICdDb21lIHRvIHZpc2l0IHVzIScsIGNBZGRyZXNzRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY0FkZHJlc3NNYXAgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NvbnRhY3QtY2FkZHJlc3MtbWFwJywgbnVsbCwgbnVsbCwgY0FkZHJlc3NEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY0FkZHJlc3NNYXAuc3JjID0gaGVyb19pbWc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNBZGRyZXNzUDIgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LWNhZGRyZXNzLXAyJywgbnVsbCwgJ1ZpYSBkZWwgQ2FtcG8gMTAxNywgMDAxNzIgUm9tYScsIGNBZGRyZXNzRGl2KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgQm90dG9tIGZyb20gXCIuL2JvdHRvbVwiO1xuXG5sZXQgY3VycmVudFBhZ2UgPSAnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsIGlkLCBhcnJheUNsYXNzZXMsIGNvbnRlbnQsIGFwcGVuZENoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2gobXlDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xuICAgIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgaWYgKGFwcGVuZENoKSBhcHBlbmRDaC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbFBhZ2UobmFtZSkge1xuICAgIGlmKG5hbWUgJiYgbmFtZSAhPT0gY3VycmVudFBhZ2Upe1xuICAgICAgICB3aGlsZShjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMl0ucmVtb3ZlKCk7IC8vcmVtb3ZlIGFsbCBleGNlcHQgZmlyc3QgY2hpbGQgKGhlYWRlcilcbiAgICAgICAgfTtcblxuICAgICAgICBzd2l0Y2gobmFtZSl7XG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICBIb21lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgICAgIEFib3V0LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgQ29udGFjdC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UGFnZSA9IG5hbWU7XG4gICAgICAgIEJvdHRvbS5yZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleC5qc1wiXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY2FsbFBhZ2UgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBpY29uX21lbnUgZnJvbSBcIi4uL2Fzc2V0cy9pY29uX21lbnUuc3ZnXCJcbmltcG9ydCBpY29uX2xvZ28gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2xvZ28uc3ZnXCJcbmltcG9ydCBpY29uX2VzYyBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZXNjLnN2Z1wiXG5pbXBvcnQgaWNvbl9mYiBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZmIuc3ZnXCJcbmltcG9ydCBpY29uX2lncm0gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2lncm0uc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgICBzdGF0aWMgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdoZWFkZXItZGl2JywgbnVsbCwgbnVsbCwgY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgaWNuTG9nbyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1sb2dvJywgWydpY29uJ10sIG51bGwsIGRpdik7XG4gICAgICAgICAgICBpY25Mb2dvLnNyYyA9IGljb25fbG9nbztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGljblRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgndGV4dCcsICdpY29uLXRleHQnLCBbJ2ljb250ZXh0J10sICdZb3VyIENvbXBhbnknLCBkaXYpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaWNuTWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1tZW51JywgWydpY29uJ10sIG51bGwsIGRpdik7XG4gICAgICAgICAgICBpY25NZW51LnNyYyA9IGljb25fbWVudTtcblxuICAgICAgICAvL01lbnVcbiAgICAgICAgY29uc3QgZGl2TWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnbWVudS1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuXG4gICAgICAgIGNvbnN0IGljbkVzYyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1lc2MnLCBbJ2ljb24nXSwgbnVsbCwgZGl2TWVudSk7XG4gICAgICAgICAgICBpY25Fc2Muc3JjID0gaWNvbl9lc2M7XG5cbiAgICAgICAgY29uc3QgbGlzdE1lbnUgPSBjcmVhdGVIdG1sRWxlbWVudCgndWwnLCAnbWVudS11bCcsIG51bGwsIG51bGwsIGRpdk1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RNZW51Q29udGVudCA9IFsnSG9tZScsJ0Fib3V0JywnQ29udGFjdCddO1xuICAgICAgICAgICAgbGlzdE1lbnVDb250ZW50LmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdsaScsIG51bGwsIFtgJHtwYWdlfWBdLCBgJHtwYWdlfWAsIGxpc3RNZW51KTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbFBhZ2UoZWwuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2TWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpY25GYiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1mYicsIFsnaWNvbiddLCBudWxsLCBkaXZNZW51KTtcbiAgICAgICAgICAgIGljbkZiLnNyYyA9IGljb25fZmI7XG4gICAgICAgIGNvbnN0IGljbklncm0gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2ljb24taWdybScsIFsnaWNvbiddLCBudWxsLCBkaXZNZW51KTtcbiAgICAgICAgICAgIGljbklncm0uc3JjID0gaWNvbl9pZ3JtO1xuICAgICAgICAgICAgXG4gICAgICAgIGljbkVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpdk1lbnUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGljbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihkaXZNZW51LnN0eWxlLndpZHRoID09PSAnJykge1xuICAgICAgICAgICAgICAgIGRpdk1lbnUuc3R5bGUud2lkdGggPSc0MCUnXG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjQpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBoZXJvX2ltZyBmcm9tIFwiLi4vaW1nL2hlcm8uanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gICAgc3RhdGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuXG4gICAgICAgIC8vSEVSTyBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hlcm8tZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgaGVyb0ltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaGVyby1pbWcnLCBudWxsLCBudWxsLCBoZXJvRGl2KTtcbiAgICAgICAgICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9faW1nO1xuXG4gICAgICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaGVyb3RleHQtZGl2JywgbnVsbCwgbnVsbCwgaGVyb0Rpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVyb0gxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgJ2hlcm8taDEnLCBbJ2hlcm8tdGV4dCddLCAnVGhpcyBpcyB0aGUgaG9tZSBwYWdlLicsIGhlcm9UZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hlcm8tcCcsIFsnaGVyby10ZXh0J10sICdHaXZlIGEgbG9vayBhdCB0aGlzIGhlcm8gc2VjdGlvbiEnLCBoZXJvVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVyb0J0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnaGVyby1idG4nLCBudWxsLCAnUmVzZXJ2YXRpb24nLCBoZXJvVGV4dCk7XG5cblxuICAgICAgICAvLzIgQ09MIGltZy10ZXh0IFNFQ1RJT05cbiAgICAgICAgY29uc3QgaXREaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXQtZGl2JywgWydzZWN0aW9uLWRpdi10d28nXSwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgaXRJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hvbWUtaXQtaW1nJywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGl0SW1nLnNyYyA9IGhlcm9faW1nO1xuXG4gICAgICAgICAgICBjb25zdCBpdFRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0ZXh0LWRpdicsIG51bGwsIG51bGwsIGl0RGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdEgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2hvbWUtaXQtaDInLCBudWxsLCAnQSB0d28gY29sdW1uIGltZy10ZXh0JywgaXRUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdFAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0LXAnLCBudWxsLCAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSBlYXF1ZSBpcHNhLCBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50LCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtLCBxdWlhIHZvbHVwdGFzIHNpdCwgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQnLCBpdFRleHQpO1xuXG5cbiAgICAgICAgLy8zIENPTCB0ZXh0IFNFQ1RJT04gKGRhIHByb3ZhcmUgaWwgdGV4dCB3cmFwcGVyIHN1IHRyZSBjb2xvbm5lKVxuICAgICAgICBjb25zdCB0dHREaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtdHR0LWRpdicsIFsnc2VjdGlvbi1kaXYtdGhyZWUnXSwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgdHR0VGV4dDEgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtdHR0LXRleHQxJywgbnVsbCwgbnVsbCwgdHR0RGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0dHRIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdob21lLXR0dC1oMicsIG51bGwsICdBIHRocmVlIGNvbHVtbiBpbWctdGV4dCcsIHR0dFRleHQxKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0dHRQMSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXQtcDEnLCBudWxsLCAgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bS4nLCB0dHRUZXh0MSk7XG4gICAgICAgICAgICBjb25zdCB0dHRUZXh0MiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS10dHQtdGV4dDInLCBudWxsLCBudWxsLCB0dHREaXYpOyAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0dHRQMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXQtcDEnLCBudWxsLCAnQXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cywgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSwgcXVvcyBkb2xvcmVzIGV0IHF1YXMgbW9sZXN0aWFzIGV4Y2VwdHVyaSBzaW50LCBvYmNhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50LicsIHR0dFRleHQyKTtcbiAgICAgICAgICAgIGNvbnN0IHR0dFRleHQzID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLXR0dC10ZXh0MycsIG51bGwsIG51bGwsIHR0dERpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHR0UDMgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0LXAxJywgbnVsbCwgJ1RvdGFtIHJlbSBhcGVyaWFtIGVhcXVlIGlwc2EsIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzIGV0IHF1YXNpIGFyY2hpdGVjdG8gYmVhdGFlIHZpdGFlIGRpY3RhIHN1bnQsIGV4cGxpY2Fiby4gTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0sIHF1aWEgdm9sdXB0YXMgc2l0LCBhc3Blcm5hdHVyIGF1dCBvZGl0IGF1dCBmdWdpdCwgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEsIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdGlhIGFuaW1pLCBpZCBlc3QgbGFib3J1bSBldCBkb2xvcnVtIGZ1Z2EuJywgdHR0VGV4dDMpO1xuXG4gICAgICAgIFxuICAgICAgICAvLzIgUk9XUyBpbWctdGV4dC90ZXh0LWltZyBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGl0dGlEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0aS1kaXYnLCBbJ3NlY3Rpb24tZGl2LWZvdXInXSwgbnVsbCwgZGl2KTtcblxuICAgICAgICAgICAgY29uc3QgaXR0aVVwID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGktdXAnLCBudWxsLCBudWxsLCBpdHRpRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdHRpVXBUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGktdXAtdGV4dCcsIG51bGwsIG51bGwsIGl0dGlVcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlVcEgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2hvbWUtaXR0aS11cC1oMicsIG51bGwsICdBbiBpdHRpIHVwJywgaXR0aVVwVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlVcFAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdob21lLWl0dGktdXAtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4gTmFtIGxpYmVybyB0ZW1wb3JlLCBjdW0gc29sdXRhIG5vYmlzIGVzdCBlbGlnZW5kaSBvcHRpbywgY3VtcXVlIG5paGlsIGltcGVkaXQsIHF1byBtaW51cyBpZCwgcXVvZCBtYXhpbWUgcGxhY2VhdCwgZmFjZXJlIHBvc3NpbXVzLCBvbW5pcyB2b2x1cHRhcyBhc3N1bWVuZGEgZXN0LCBvbW5pcyBkb2xvciByZXBlbGxlbmR1cy4nLCBpdHRpVXBUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdHRpVXBJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hvbWUtaXR0aS11cC1pbWcnLCBudWxsLCBudWxsLCBpdHRpVXApO1xuICAgICAgICAgICAgICAgICAgICBpdHRpVXBJbWcuc3JjID0gaGVyb19pbWc7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0dGlEdyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRpLWR3JywgbnVsbCwgbnVsbCwgaXR0aURpdik7XG4gICAgICAgICAgICBjb25zdCBpdHRpRHdJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hvbWUtaXR0aS1kdy1pbWcnLCBudWxsLCBudWxsLCBpdHRpRHcpO1xuICAgICAgICAgICAgICAgIGl0dGlEd0ltZy5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgICAgIGNvbnN0IGl0dGlEd1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0aS1kdy10ZXh0JywgbnVsbCwgbnVsbCwgaXR0aUR3KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdHRpRHdIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdob21lLWl0dGktZHctaDInLCBudWxsLCAnQW4gaXR0aSBkb3duJywgaXR0aUR3VGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXR0aUR3UCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXR0aS1kdy1wJywgbnVsbCwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bS4nLCBpdHRpRHdUZXh0KTtcblxuICAgICAgICAvL0NBTEwgVE8gQUNUSU9OIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY3RhRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWN0YS1kaXYnLCBudWxsLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgY29uc3QgY3RhSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdob21lLWN0YS1pbWcnLCBudWxsLCBudWxsLCBjdGFEaXYpO1xuICAgICAgICAgICAgICAgIGN0YUltZy5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgICAgIGNvbnN0IGN0YVRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtY3RhLXRleHQnLCBudWxsLCBudWxsLCBjdGFEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YUgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2hvbWUtY3RhLWgyJywgbnVsbCwgJ0EgQ2FsbCB0byBBY3Rpb24hJywgY3RhVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3RhUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtY3RhLXAnLCBudWxsLCAnRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uJywgY3RhVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3RhQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdob21lLWN0YS1idG4nLCBudWxsLCAnUmVzZXJ2ZScsIGN0YVRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YVRvcCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnaG9tZS1jdGEtdG9wJywgbnVsbCwgJ1RvcCcsIGN0YVRleHQpO1xuICAgICAgICAgICAgXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==