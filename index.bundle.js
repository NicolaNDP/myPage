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
    height: fit-content;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  \n    --myPalette1: #aac2d4;\n    --myPalette2: #7fa9b8;\n    --myPalette3: #668da7;\n  }\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    height: fit-content;\n\n    justify-content: center;\n    cursor: default;\n}\n\n.section-div-two, .section-div-three {\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    justify-content: space-around;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.section-div-four {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    justify-content: space-between;\n\n    text-align: center;\n\n    margin-left: 40px;\n    margin-right: 40px;\n    margin-bottom: 4rem;\n}\n\n.icon {\n    width: 2rem;\n    height: 2rem;\n    margin: 0.2rem;\n    cursor: pointer;\n}\n\n.columnedup {\n    columns: 300px;\n}\n\n\n/* div {\n    border: solid 0.1rem greenyellow;\n} */\n\n/* //==//==//==//== HEADER ==/==/==/==/ */\n\n#header-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n\n    margin-bottom: 1rem;\n}\n\n/* //==//==//==//== BOTTOM ==/==/==/==/ */\n\n#bottom-div {\n    display: flex;\n    flex-direction: row;\n    height: 3rem;\n    width: 100%;\n    margin: 0;\n\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* //==//==//==//== MENU ==/==/==/==/ */\n\n#menu-div {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    max-width: 280px;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    right: 0;\n    background-color: white;\n\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px; /* Place content 60px from the top */\n    transition: 0.5s;\n    margin: 0;\n}\n\n#menu-ul {\n    list-style: none;\n    font-size: 1.2rem;\n    padding-top: 20px;\n    padding-left: 1rem;\n\n    /* margin-right: 2rem; */\n    width: 80%;\n}\n\n#menu-ul > li {\n    margin-bottom: 0.5rem;\n    border-bottom: solid whitesmoke 0.1rem;\n}\n\n#icon-esc {\n    margin-left: 80%;\n}\n\n#menu-ul, #icon-fb {\n    padding-left: 1rem;\n}\n\n\n\n/* //==//==//==//== HOME ==/==/==/==/ */\n\n#home-div {\n    display: flex;\n    flex-direction: column;\n\n    justify-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n/* HERO */\n#hero-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    object-fit: cover;\n\n    height: auto;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#hero-img {\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n\n#herotext-div {\n    position: absolute;\n    margin-left: 50%;\n    width: 35%;\n    text-align: right;\n}\n\n#hero-btn {\n    cursor: pointer;\n    background-color: #aac2d4;\n    border: solid 0.1rem #668da7;\n    border-radius: 0.2rem;\n}\n\n#hero-btn:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n/* IT SECTION */\n#home-it-img, #about-it-img, #about-ti-img {\n    height: fit-content;\n    width: 40%;\n}\n\n#home-ittext-div, #about-ittext-div, #about-titext-div{\n    width: 40%;\n    text-align: center;\n}\n\n\n/* TTT SECTION */\n#home-ttt-div {\n    min-height: fit-content;\n}\n\n#home-ttt-div > div {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    width: 30%;\n}\n\n/* ITTI SECTION */\n#home-itti-div > div {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: space-between;\n\n    height: fit-content;\n    width: 100%;\n}\n\n#home-itti-up-img, #home-itti-dw-img {\n    height: fit-content;\n    width: 50%;\n}\n\n#home-itti-up-text, #home-itti-dw-text{\n    width: 50%;\n    text-align: center;\n}\n\n/* CTA SECTION */\n#home-cta-div, #about-cta-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 200px;\n    width: 100%;\n\n    margin-bottom: 1rem;\n}\n\n#home-cta-img, #about-cta-img, #about-subts-img, #contact-subts-img {\n    height: 100%;\n    object-fit: cover;\n    position: relative;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    filter: blur(3px);\n}\n\n#home-cta-text, #about-cta-text {\n    position: absolute;\n    margin-left: 33%;\n    width: 33%;\n    text-align: center;\n}\n\n/* ABOUT SUBTS SECTION */\n\n#about-subts-div, #contact-subts-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    height: 140px;\n    width: 100%;\n\n    margin-bottom: 4rem;\n}\n\n#about-subts-text, #contact-subts-text {\n    position: absolute;\n    margin-left: 15%;\n    width: 70%;\n    text-align: center;\n}\n\n/* CONTACT SECTION */\n\n#contact-caddress-map {\n    height: auto;\n    width: 40%;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvYm90dG9tLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgLS1teVBhbGV0dGUxOiAjYWFjMmQ0O1xuICAgIC0tbXlQYWxldHRlMjogIzdmYTliODtcbiAgICAtLW15UGFsZXR0ZTM6ICM2NjhkYTc7XG4gIH1cblxuYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNlY3Rpb24tZGl2LXR3bywgLnNlY3Rpb24tZGl2LXRocmVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5zZWN0aW9uLWRpdi1mb3VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMC4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbHVtbmVkdXAge1xuICAgIGNvbHVtbnM6IDMwMHB4O1xufVxuXG5cbi8qIGRpdiB7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gZ3JlZW55ZWxsb3c7XG59ICovXG5cbi8qIC8vPT0vLz09Ly89PS8vPT0gSEVBREVSID09Lz09Lz09Lz09LyAqL1xuXG4jaGVhZGVyLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qIC8vPT0vLz09Ly89PS8vPT0gQk9UVE9NID09Lz09Lz09Lz09LyAqL1xuXG4jYm90dG9tLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogLy89PS8vPT0vLz09Ly89PSBNRU5VID09Lz09Lz09Lz09LyAqL1xuXG4jbWVudS1kaXYge1xuICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogMjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jbWVudS11bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDJyZW07ICovXG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI21lbnUtdWwgPiBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlc21va2UgMC4xcmVtO1xufVxuXG4jaWNvbi1lc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG59XG5cbiNtZW51LXVsLCAjaWNvbi1mYiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG5cblxuLyogLy89PS8vPT0vLz09Ly89PSBIT01FID09Lz09Lz09Lz09LyAqL1xuXG4jaG9tZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIEhFUk8gKi9cbiNoZXJvLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4jaGVyby1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbiNoZXJvdGV4dC1kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNoZXJvLWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZDQ7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gIzY2OGRhNztcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbiNoZXJvLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIElUIFNFQ1RJT04gKi9cbiNob21lLWl0LWltZywgI2Fib3V0LWl0LWltZywgI2Fib3V0LXRpLWltZyB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4jaG9tZS1pdHRleHQtZGl2LCAjYWJvdXQtaXR0ZXh0LWRpdiwgI2Fib3V0LXRpdGV4dC1kaXZ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLyogVFRUIFNFQ1RJT04gKi9cbiNob21lLXR0dC1kaXYge1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jaG9tZS10dHQtZGl2ID4gZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLyogSVRUSSBTRUNUSU9OICovXG4jaG9tZS1pdHRpLWRpdiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2hvbWUtaXR0aS11cC1pbWcsICNob21lLWl0dGktZHctaW1nIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbiNob21lLWl0dGktdXAtdGV4dCwgI2hvbWUtaXR0aS1kdy10ZXh0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDVEEgU0VDVElPTiAqL1xuI2hvbWUtY3RhLWRpdiwgI2Fib3V0LWN0YS1kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNob21lLWN0YS1pbWcsICNhYm91dC1jdGEtaW1nLCAjYWJvdXQtc3VidHMtaW1nLCAjY29udGFjdC1zdWJ0cy1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbiNob21lLWN0YS10ZXh0LCAjYWJvdXQtY3RhLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBBQk9VVCBTVUJUUyBTRUNUSU9OICovXG5cbiNhYm91dC1zdWJ0cy1kaXYsICNjb250YWN0LXN1YnRzLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbiNhYm91dC1zdWJ0cy10ZXh0LCAjY29udGFjdC1zdWJ0cy10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ09OVEFDVCBTRUNUSU9OICovXG5cbiNjb250YWN0LWNhZGRyZXNzLW1hcCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLGVBQWU7O0lBRWYscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1COztJQUVuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBOztHQUVHOztBQUVILHlDQUF5Qzs7QUFFekM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUzs7SUFFVCw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQixtQkFBbUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUV6QztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTOztJQUVULDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUEsdUNBQXVDOztBQUV2QztJQUNJLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsUUFBUSxFQUFFLDBDQUEwQztJQUNwRCxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLE1BQU0sRUFBRSxvQkFBb0I7SUFDNUIsUUFBUTtJQUNSLHVCQUF1Qjs7SUFFdkIsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGlCQUFpQixFQUFFLG9DQUFvQztJQUN2RCxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUlBLHVDQUF1Qzs7QUFFdkM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLGlCQUFpQjs7SUFFakIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7O0FBR0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsOEJBQThCOztJQUU5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYixXQUFXOztJQUVYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQSx3QkFBd0I7O0FBRXhCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYixXQUFXOztJQUVYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIFxcbiAgICAtLW15UGFsZXR0ZTE6ICNhYWMyZDQ7XFxuICAgIC0tbXlQYWxldHRlMjogIzdmYTliODtcXG4gICAgLS1teVBhbGV0dGUzOiAjNjY4ZGE3O1xcbiAgfVxcblxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zZWN0aW9uLWRpdi10d28sIC5zZWN0aW9uLWRpdi10aHJlZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5zZWN0aW9uLWRpdi1mb3VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbHVtbmVkdXAge1xcbiAgICBjb2x1bW5zOiAzMDBweDtcXG59XFxuXFxuXFxuLyogZGl2IHtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gZ3JlZW55ZWxsb3c7XFxufSAqL1xcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gSEVBREVSID09Lz09Lz09Lz09LyAqL1xcblxcbiNoZWFkZXItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gQk9UVE9NID09Lz09Lz09Lz09LyAqL1xcblxcbiNib3R0b20tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC8vPT0vLz09Ly89PS8vPT0gTUVOVSA9PS89PS89PS89PS8gKi9cXG5cXG4jbWVudS1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cXG4gICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXFxuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI21lbnUtdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAycmVtOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4jbWVudS11bCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDAuMXJlbTtcXG59XFxuXFxuI2ljb24tZXNjIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuXFxuI21lbnUtdWwsICNpY29uLWZiIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiAvLz09Ly89PS8vPT0vLz09IEhPTUUgPT0vPT0vPT0vPT0vICovXFxuXFxuI2hvbWUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBIRVJPICovXFxuI2hlcm8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4jaGVyby1pbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiNoZXJvdGV4dC1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jaGVyby1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZDQ7XFxuICAgIGJvcmRlcjogc29saWQgMC4xcmVtICM2NjhkYTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI2hlcm8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBJVCBTRUNUSU9OICovXFxuI2hvbWUtaXQtaW1nLCAjYWJvdXQtaXQtaW1nLCAjYWJvdXQtdGktaW1nIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI2hvbWUtaXR0ZXh0LWRpdiwgI2Fib3V0LWl0dGV4dC1kaXYsICNhYm91dC10aXRleHQtZGl2e1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIFRUVCBTRUNUSU9OICovXFxuI2hvbWUtdHR0LWRpdiB7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaG9tZS10dHQtZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLyogSVRUSSBTRUNUSU9OICovXFxuI2hvbWUtaXR0aS1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaG9tZS1pdHRpLXVwLWltZywgI2hvbWUtaXR0aS1kdy1pbWcge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jaG9tZS1pdHRpLXVwLXRleHQsICNob21lLWl0dGktZHctdGV4dHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBDVEEgU0VDVElPTiAqL1xcbiNob21lLWN0YS1kaXYsICNhYm91dC1jdGEtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNob21lLWN0YS1pbWcsICNhYm91dC1jdGEtaW1nLCAjYWJvdXQtc3VidHMtaW1nLCAjY29udGFjdC1zdWJ0cy1pbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4jaG9tZS1jdGEtdGV4dCwgI2Fib3V0LWN0YS10ZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEFCT1VUIFNVQlRTIFNFQ1RJT04gKi9cXG5cXG4jYWJvdXQtc3VidHMtZGl2LCAjY29udGFjdC1zdWJ0cy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbiNhYm91dC1zdWJ0cy10ZXh0LCAjY29udGFjdC1zdWJ0cy10ZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIENPTlRBQ1QgU0VDVElPTiAqL1xcblxcbiNjb250YWN0LWNhZGRyZXNzLW1hcCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCb3R0b20gZnJvbSBcIi4vbW9kdWxlcy9ib3R0b21cIjtcbmltcG9ydCB7IGNhbGxQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9mdW5jdGlvbnNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuSGVhZGVyLnJlbmRlcigpO1xuY2FsbFBhZ2UoJ0hvbWUnKTtcbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaGVyb19pbWcgZnJvbSBcIi4uL2ltZy9oZXJvLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IHtcbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuXG4gICAgICAgIC8vU1VCVFMgU0VDVElPTlxuICAgICAgICBjb25zdCBzdWJ0c0RpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtc3VidHMtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgY29uc3Qgc3VidHNJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2Fib3V0LXN1YnRzLWltZycsIG51bGwsIG51bGwsIHN1YnRzRGl2KTtcbiAgICAgICAgICAgIHN1YnRzSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICBjb25zdCBzdWJ0c1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXN1YnRzLXRleHQnLCBudWxsLCBudWxsLCBzdWJ0c0Rpdik7XG4gICAgICAgICAgICBjb25zdCBzdWJ0c0gyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LXN1YnRzLWgyJywgbnVsbCwgJ0Rpc2NvdmVyIG91ciBzZXJ2aWNlcyEnLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYWJvdXQtc3VidHMtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2Fib3V0LXN1YnRzLWJ0bicsIG51bGwsICdUYWtlIG1lIGhvbWUhJywgc3VidHNUZXh0KTtcblxuICAgICAgICAvLzIgQ09MIHRleHQtaW1nIFNFQ1RJT05cbiAgICAgICAgY29uc3QgdGlEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LXRpLWRpdicsIFsnc2VjdGlvbi1kaXYtdHdvJ10sIG51bGwsIGRpdik7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtdGl0ZXh0LWRpdicsIG51bGwsIG51bGwsIHRpRGl2KTtcbiAgICAgICAgICAgIGNvbnN0IHRpSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnYWJvdXQtdGktaDInLCBudWxsLCAnQSB0d28gY29sdW1uIGltZy10ZXh0JywgdGlUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHRpUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Fib3V0LXRpLXAnLCBudWxsLCAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSBlYXF1ZSBpcHNhLCBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50LCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtLCBxdWlhIHZvbHVwdGFzIHNpdCwgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQnLCB0aVRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdhYm91dC10aS1pbWcnLCBudWxsLCBudWxsLCB0aURpdik7XG4gICAgICAgICAgICB0aUltZy5zcmMgPSBoZXJvX2ltZztcblxuICAgICAgICAvLzIgQ09MIGltZy10ZXh0IFNFQ1RJT05cbiAgICAgICAgY29uc3QgaXREaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2Fib3V0LWl0LWRpdicsIFsnc2VjdGlvbi1kaXYtdHdvJ10sIG51bGwsIGRpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpdEltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYWJvdXQtaXQtaW1nJywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGl0SW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgaXRUZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1pdHRleHQtZGl2JywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnYWJvdXQtaXQtaDInLCBudWxsLCAnQSB0d28gY29sdW1uIGltZy10ZXh0JywgaXRUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdFAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC1pdC1wJywgbnVsbCwgJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0JywgaXRUZXh0KTtcblxuICAgICAgICAvL0NBTEwgVE8gQUNUSU9OIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY3RhRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1jdGEtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGN0YUltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnYWJvdXQtY3RhLWltZycsIG51bGwsIG51bGwsIGN0YURpdik7XG4gICAgICAgICAgICAgICAgY3RhSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgY3RhVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYWJvdXQtY3RhLXRleHQnLCBudWxsLCBudWxsLCBjdGFEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YUgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2Fib3V0LWN0YS1oMicsIG51bGwsICdBIENhbGwgdG8gQWN0aW9uIScsIGN0YVRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0YVAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC1jdGEtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2Fib3V0LWN0YS1idG4nLCBudWxsLCAnUmVzZXJ2ZScsIGN0YVRleHQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgaWNvbl9mYiBmcm9tIFwiLi4vYXNzZXRzL2ljb25fZmIuc3ZnXCJcbmltcG9ydCBpY29uX2lncm0gZnJvbSBcIi4uL2Fzc2V0cy9pY29uX2lncm0uc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tIHtcbiAgICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYm90dG9tLWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuICAgICAgICBjb25zdCBpY25UZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnYm90dG9tLXRleHQnLCBudWxsLCAnWW91ciBDb21wYW55IMKuIDIwMjQnLCBkaXYpO1xuXG4gICAgICAgIGNvbnN0IGljbkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnYm90dG9tLWljb24tZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgY29uc3QgaWNuRmIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2JvdHRvbS1pY29uLWZiJywgWydpY29uJ10sIG51bGwsIGljbkRpdik7XG4gICAgICAgICAgICBpY25GYi5zcmMgPSBpY29uX2ZiO1xuICAgICAgICBjb25zdCBpY25JZ3JtID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdib3R0b20taWNvbi1pZ3JtJywgWydpY29uJ10sIG51bGwsIGljbkRpdik7XG4gICAgICAgICAgICBpY25JZ3JtLnNyYyA9IGljb25faWdybTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBoZXJvX2ltZyBmcm9tIFwiLi4vaW1nL2hlcm8uanBnXCJcbmltcG9ydCBpY29uX3Bob25lIGZyb20gXCIuLi9hc3NldHMvaWNvbl9waG9uZS5zdmdcIlxuaW1wb3J0IGljb25fbWFpbCBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbWFpbC5zdmdcIlxuaW1wb3J0IGljb25fYWRkcmVzcyBmcm9tIFwiLi4vYXNzZXRzL2ljb25fYWRkcmVzcy5zdmdcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3Qge1xuICAgIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuICAgICAgICAvL1NVQlRTIFNFQ1RJT05cbiAgICAgICAgY29uc3Qgc3VidHNEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3Qtc3VidHMtZGl2JywgbnVsbCwgbnVsbCwgZGl2KTtcbiAgICAgICAgY29uc3Qgc3VidHNJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NvbnRhY3Qtc3VidHMtaW1nJywgbnVsbCwgbnVsbCwgc3VidHNEaXYpO1xuICAgICAgICAgICAgc3VidHNJbWcuc3JjID0gaGVyb19pbWc7XG4gICAgICAgIGNvbnN0IHN1YnRzVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1zdWJ0cy10ZXh0JywgbnVsbCwgbnVsbCwgc3VidHNEaXYpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdjb250YWN0LXN1YnRzLWgyJywgbnVsbCwgJ0Rpc2NvdmVyIG91ciBzZXJ2aWNlcyEnLCBzdWJ0c1RleHQpO1xuICAgICAgICAgICAgY29uc3Qgc3VidHNQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY29udGFjdC1zdWJ0cy1wJywgbnVsbCwgJ0V0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLicsIHN1YnRzVGV4dCk7XG4gICAgICAgICAgICBjb25zdCBzdWJ0c0J0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCAnY29udGFjdC1zdWJ0cy1idG4nLCBudWxsLCAnVGFrZSBtZSBob21lIScsIHN1YnRzVGV4dCk7IFxuXG4gICAgICAgIC8vTEFSR0UgVEVYVCBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGx0RGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWx0LWRpdicsIFsnc2VjdGlvbi1kaXYtZm91ciddLCBudWxsLCBkaXYpO1xuICAgICAgICAgICAgY29uc3QgbHRIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdjb250YWN0LWx0LWgyJywgbnVsbCwgJ0xldCB3ZSBrbm93IScsIGx0RGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGx0UCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NvbnRhY3QtbHQtcCcsIFsnY29sdW1uZWR1cCddLCAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSBlYXF1ZSBpcHNhLCBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50LCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtLCBxdWlhIHZvbHVwdGFzIHNpdCwgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQsIHNlZCBxdWlhIGNvbnNlcXV1bnR1ciBtYWduaSBkb2xvcmVzIGVvcywgcXVpIHJhdGlvbmUgdm9sdXB0YXRlbSBzZXF1aSBuZXNjaXVudCwgbmVxdWUgcG9ycm8gcXVpc3F1YW0gZXN0LCBxdWkgZG9sb3JlbSBpcHN1bSwgcXVpYSBkb2xvciBzaXQsIGFtZXQsIGNvbnNlY3RldHVyLCBhZGlwaXNjaSB2ZWxpdCwgc2VkIHF1aWEgbm9uIG51bXF1YW0gZWl1cyBtb2RpIHRlbXBvcmEgaW5jaWR1bnQsIHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmFtIGFsaXF1YW0gcXVhZXJhdCB2b2x1cHRhdGVtLicsIGx0RGl2KTtcblxuICAgICAgICAvL0NPTlRBQ1QgU0VDVElPTlxuICAgICAgICBjb25zdCBjRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWMtZGl2JywgWydzZWN0aW9uLWRpdi1mb3VyJ10sIG51bGwsIGRpdik7XG4gICAgICAgICAgICAvL21haWxcbiAgICAgICAgICAgIGNvbnN0IG1haWxTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtY21haWwtZGl2JywgbnVsbCwgbnVsbCwgY0Rpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgY01haWxJY24gPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2NvbnRhY3QtY21haWwtaWNvbicsIFsnaWNvbiddLCBudWxsLCBtYWlsU3ViRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY01haWxJY24uc3JjID0gaWNvbl9tYWlsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNNYWlsRGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNtYWlsLXRleHRkaXYnLCBbJ3NlY3Rpb24tZGl2LWZvdXInXSwgbnVsbCwgbWFpbFN1YkRpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNNYWlsSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnY29udGFjdC1jbWFpbC1oMicsIG51bGwsICdlLW1haWwnLCBjTWFpbERpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNNYWlsUDEgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LWNtYWlsLXAxJywgbnVsbCwgJ25hbWVAZXhhbXBsZS5pbmZvJywgY01haWxEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjTWFpbFAyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY29udGFjdC1jbWFpbC1wMicsIG51bGwsICdjb21wYW55QGV4YW1wbGUuY29tJywgY01haWxEaXYpO1xuICAgICAgICAgICAgLy9waG9uZVxuICAgICAgICAgICAgY29uc3QgcGhvbmVTdWJEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtY3Bob25lLWRpdicsIG51bGwsIG51bGwsIGNEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNQaG9uZUljbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnY29udGFjdC1jcGhvbmUtaWNvbicsIFsnaWNvbiddLCBudWxsLCBwaG9uZVN1YkRpdik7XG4gICAgICAgICAgICAgICAgICAgIGNQaG9uZUljbi5zcmMgPSBpY29uX3Bob25lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNQaG9uZURpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1jcGhvbmUtdGV4dGRpdicsIFsnc2VjdGlvbi1kaXYtZm91ciddLCBudWxsLCBwaG9uZVN1YkRpdik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQaG9uZUgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2NvbnRhY3QtY3Bob25lLWgyJywgbnVsbCwgJ1Bob25lJywgY1Bob25lRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY1Bob25lUDEgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LWNwaG9uZS1wMScsIG51bGwsICcrMDAgMTIzIDQ1NiA3JywgY1Bob25lRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY1Bob25lUDIgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LWNwaG9uZS1wMicsIG51bGwsICcrMDAgODkwIDEyMyA0JywgY1Bob25lRGl2KTtcbiAgICAgICAgICAgIC8vYWRkcmVzc1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzc1N1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnY29udGFjdC1jYWRkcmVzcy1kaXYnLCBudWxsLCBudWxsLCBjRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjQWRkcmVzc0ljbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnY29udGFjdC1jYWRkcmVzcy1pY29uJywgWydpY29uJ10sIG51bGwsIGFkZHJlc3NTdWJEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjQWRkcmVzc0ljbi5zcmMgPSBpY29uX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgY29uc3QgY0FkZHJlc3NEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtY2FkZHJlc3MtdGV4dGRpdicsIFsnc2VjdGlvbi1kaXYtZm91ciddLCBudWxsLCBhZGRyZXNzU3ViRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY0FkZHJlc3NIMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsICdjb250YWN0LWNhZGRyZXNzLWgyJywgbnVsbCwgJ0NvbWUgdG8gdmlzaXQgdXMhJywgY0FkZHJlc3NEaXYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjQWRkcmVzc01hcCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnY29udGFjdC1jYWRkcmVzcy1tYXAnLCBudWxsLCBudWxsLCBjQWRkcmVzc0Rpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjQWRkcmVzc01hcC5zcmMgPSBoZXJvX2ltZztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY0FkZHJlc3NQMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NvbnRhY3QtY2FkZHJlc3MtcDInLCBudWxsLCAnVmlhIGRlbCBDYW1wbyAxMDE3LCAwMDE3MiBSb21hJywgY0FkZHJlc3NEaXYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBCb3R0b20gZnJvbSBcIi4vYm90dG9tXCI7XG5cbmxldCBjdXJyZW50UGFnZSA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCwgYXBwZW5kQ2gpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBpZiAoYXJyYXlDbGFzc2VzKSBhcnJheUNsYXNzZXMuZm9yRWFjaChteUNsYXNzID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgICBpZiAoYXBwZW5kQ2gpIGFwcGVuZENoLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsUGFnZShuYW1lKSB7XG4gICAgaWYobmFtZSAmJiBuYW1lICE9PSBjdXJyZW50UGFnZSl7XG4gICAgICAgIHdoaWxlKGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgY29udGVudC5jaGlsZHJlblsyXS5yZW1vdmUoKTsgLy9yZW1vdmUgYWxsIGV4Y2VwdCBmaXJzdCBjaGlsZCAoaGVhZGVyKVxuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaChuYW1lKXtcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIEhvbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICAgICAgQWJvdXQucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICBDb250YWN0LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQYWdlID0gbmFtZTtcbiAgICAgICAgQm90dG9tLnJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjYWxsUGFnZSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGljb25fbWVudSBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbWVudS5zdmdcIlxuaW1wb3J0IGljb25fbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ljb25fbG9nby5zdmdcIlxuaW1wb3J0IGljb25fZXNjIGZyb20gXCIuLi9hc3NldHMvaWNvbl9lc2Muc3ZnXCJcbmltcG9ydCBpY29uX2ZiIGZyb20gXCIuLi9hc3NldHMvaWNvbl9mYi5zdmdcIlxuaW1wb3J0IGljb25faWdybSBmcm9tIFwiLi4vYXNzZXRzL2ljb25faWdybS5zdmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICAgIHN0YXRpYyByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hlYWRlci1kaXYnLCBudWxsLCBudWxsLCBjb250ZW50KTtcblxuICAgICAgICBjb25zdCBpY25Mb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWxvZ28nLCBbJ2ljb24nXSwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGljbkxvZ28uc3JjID0gaWNvbl9sb2dvO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaWNuVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCd0ZXh0JywgJ2ljb24tdGV4dCcsIFsnaWNvbnRleHQnXSwgJ1lvdXIgQ29tcGFueScsIGRpdik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpY25NZW51ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLW1lbnUnLCBbJ2ljb24nXSwgbnVsbCwgZGl2KTtcbiAgICAgICAgICAgIGljbk1lbnUuc3JjID0gaWNvbl9tZW51O1xuXG4gICAgICAgIC8vTWVudVxuICAgICAgICBjb25zdCBkaXZNZW51ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdtZW51LWRpdicsIG51bGwsIG51bGwsIGNvbnRlbnQpO1xuXG5cbiAgICAgICAgY29uc3QgaWNuRXNjID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWVzYycsIFsnaWNvbiddLCBudWxsLCBkaXZNZW51KTtcbiAgICAgICAgICAgIGljbkVzYy5zcmMgPSBpY29uX2VzYztcblxuICAgICAgICBjb25zdCBsaXN0TWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCd1bCcsICdtZW51LXVsJywgbnVsbCwgbnVsbCwgZGl2TWVudSk7XG5cbiAgICAgICAgY29uc3QgbGlzdE1lbnVDb250ZW50ID0gWydIb21lJywnQWJvdXQnLCdDb250YWN0J107XG4gICAgICAgICAgICBsaXN0TWVudUNvbnRlbnQuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2xpJywgbnVsbCwgW2Ake3BhZ2V9YF0sIGAke3BhZ2V9YCwgbGlzdE1lbnUpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsUGFnZShlbC5jbGFzc0xpc3RbMF0pO1xuICAgICAgICAgICAgICAgICAgICBkaXZNZW51LnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGljbkZiID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdpY29uLWZiJywgWydpY29uJ10sIG51bGwsIGRpdk1lbnUpO1xuICAgICAgICAgICAgaWNuRmIuc3JjID0gaWNvbl9mYjtcbiAgICAgICAgY29uc3QgaWNuSWdybSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaWNvbi1pZ3JtJywgWydpY29uJ10sIG51bGwsIGRpdk1lbnUpO1xuICAgICAgICAgICAgaWNuSWdybS5zcmMgPSBpY29uX2lncm07XG4gICAgICAgICAgICBcbiAgICAgICAgaWNuRXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGl2TWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgLy9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWNuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRpdk1lbnUuc3R5bGUud2lkdGggPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZGl2TWVudS5zdHlsZS53aWR0aCA9JzQwJSdcbiAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNClcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IGhlcm9faW1nIGZyb20gXCIuLi9pbWcvaGVyby5qcGdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcbiAgICBzdGF0aWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtZGl2JywgbnVsbCwgbnVsbCwgY29udGVudCk7XG5cbiAgICAgICAgLy9IRVJPIFNFQ1RJT05cbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaGVyby1kaXYnLCBudWxsLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBoZXJvSW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdoZXJvLWltZycsIG51bGwsIG51bGwsIGhlcm9EaXYpO1xuICAgICAgICAgICAgICAgIGhlcm9JbWcuc3JjID0gaGVyb19pbWc7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlcm9UZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdoZXJvdGV4dC1kaXYnLCBudWxsLCBudWxsLCBoZXJvRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvSDEgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDEnLCAnaGVyby1oMScsIFsnaGVyby10ZXh0J10sICdUaGlzIGlzIHRoZSBob21lIHBhZ2UuJywgaGVyb1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm9QID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaGVyby1wJywgWydoZXJvLXRleHQnXSwgJ0dpdmUgYSBsb29rIGF0IHRoaXMgaGVybyBzZWN0aW9uIScsIGhlcm9UZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdoZXJvLWJ0bicsIG51bGwsICdSZXNlcnZhdGlvbicsIGhlcm9UZXh0KTtcblxuXG4gICAgICAgIC8vMiBDT0wgaW1nLXRleHQgU0VDVElPTlxuICAgICAgICBjb25zdCBpdERpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdC1kaXYnLCBbJ3NlY3Rpb24tZGl2LXR3byddLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBpdEltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaG9tZS1pdC1pbWcnLCBudWxsLCBudWxsLCBpdERpdik7XG4gICAgICAgICAgICAgICAgaXRJbWcuc3JjID0gaGVyb19pbWc7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0VGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRleHQtZGl2JywgbnVsbCwgbnVsbCwgaXREaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0SDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnaG9tZS1pdC1oMicsIG51bGwsICdBIHR3byBjb2x1bW4gaW1nLXRleHQnLCBpdFRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0UCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXQtcCcsIG51bGwsICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtIGVhcXVlIGlwc2EsIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzIGV0IHF1YXNpIGFyY2hpdGVjdG8gYmVhdGFlIHZpdGFlIGRpY3RhIHN1bnQsIGV4cGxpY2Fiby4gTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0sIHF1aWEgdm9sdXB0YXMgc2l0LCBhc3Blcm5hdHVyIGF1dCBvZGl0IGF1dCBmdWdpdCcsIGl0VGV4dCk7XG5cblxuICAgICAgICAvLzMgQ09MIHRleHQgU0VDVElPTiAoZGEgcHJvdmFyZSBpbCB0ZXh0IHdyYXBwZXIgc3UgdHJlIGNvbG9ubmUpXG4gICAgICAgIGNvbnN0IHR0dERpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS10dHQtZGl2JywgWydzZWN0aW9uLWRpdi10aHJlZSddLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCB0dHRUZXh0MSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS10dHQtdGV4dDEnLCBudWxsLCBudWxsLCB0dHREaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR0dEgyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2hvbWUtdHR0LWgyJywgbnVsbCwgJ0EgdGhyZWUgY29sdW1uIGltZy10ZXh0JywgdHR0VGV4dDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR0dFAxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdC1wMScsIG51bGwsICAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLicsIHR0dFRleHQxKTtcbiAgICAgICAgICAgIGNvbnN0IHR0dFRleHQyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLXR0dC10ZXh0MicsIG51bGwsIG51bGwsIHR0dERpdik7ICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHR0dFAyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdC1wMScsIG51bGwsICdBdCB2ZXJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzLCBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpIGF0cXVlIGNvcnJ1cHRpLCBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQsIG9iY2FlY2F0aSBjdXBpZGl0YXRlIG5vbiBwcm92aWRlbnQuJywgdHR0VGV4dDIpO1xuICAgICAgICAgICAgY29uc3QgdHR0VGV4dDMgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtdHR0LXRleHQzJywgbnVsbCwgbnVsbCwgdHR0RGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0dHRQMyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXQtcDEnLCBudWxsLCAnVG90YW0gcmVtIGFwZXJpYW0gZWFxdWUgaXBzYSwgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCwgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzaW1pbGlxdWUgc3VudCBpbiBjdWxwYSwgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS4nLCB0dHRUZXh0Myk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vMiBST1dTIGltZy10ZXh0L3RleHQtaW1nIFNFQ1RJT05cbiAgICAgICAgY29uc3QgaXR0aURpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRpLWRpdicsIFsnc2VjdGlvbi1kaXYtZm91ciddLCBudWxsLCBkaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBpdHRpVXAgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0aS11cCcsIG51bGwsIG51bGwsIGl0dGlEaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlVcFRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtaXR0aS11cC10ZXh0JywgbnVsbCwgbnVsbCwgaXR0aVVwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXR0aVVwSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnaG9tZS1pdHRpLXVwLWgyJywgbnVsbCwgJ0FuIGl0dGkgdXAnLCBpdHRpVXBUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXR0aVVwUCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2hvbWUtaXR0aS11cC1wJywgbnVsbCwgJ0V0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLiBOYW0gbGliZXJvIHRlbXBvcmUsIGN1bSBzb2x1dGEgbm9iaXMgZXN0IGVsaWdlbmRpIG9wdGlvLCBjdW1xdWUgbmloaWwgaW1wZWRpdCwgcXVvIG1pbnVzIGlkLCBxdW9kIG1heGltZSBwbGFjZWF0LCBmYWNlcmUgcG9zc2ltdXMsIG9tbmlzIHZvbHVwdGFzIGFzc3VtZW5kYSBlc3QsIG9tbmlzIGRvbG9yIHJlcGVsbGVuZHVzLicsIGl0dGlVcFRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlVcEltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaG9tZS1pdHRpLXVwLWltZycsIG51bGwsIG51bGwsIGl0dGlVcCk7XG4gICAgICAgICAgICAgICAgICAgIGl0dGlVcEltZy5zcmMgPSBoZXJvX2ltZztcblxuICAgICAgICAgICAgY29uc3QgaXR0aUR3ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWl0dGktZHcnLCBudWxsLCBudWxsLCBpdHRpRGl2KTtcbiAgICAgICAgICAgIGNvbnN0IGl0dGlEd0ltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnaG9tZS1pdHRpLWR3LWltZycsIG51bGwsIG51bGwsIGl0dGlEdyk7XG4gICAgICAgICAgICAgICAgaXR0aUR3SW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgaXR0aUR3VGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1pdHRpLWR3LXRleHQnLCBudWxsLCBudWxsLCBpdHRpRHcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0dGlEd0gyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ2hvbWUtaXR0aS1kdy1oMicsIG51bGwsICdBbiBpdHRpIGRvd24nLCBpdHRpRHdUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdHRpRHdQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1pdHRpLWR3LXAnLCBudWxsLCAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLicsIGl0dGlEd1RleHQpO1xuXG4gICAgICAgIC8vQ0FMTCBUTyBBQ1RJT04gU0VDVElPTlxuICAgICAgICBjb25zdCBjdGFEaXYgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUtY3RhLWRpdicsIG51bGwsIG51bGwsIGRpdik7XG4gICAgICAgICAgICBjb25zdCBjdGFJbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2hvbWUtY3RhLWltZycsIG51bGwsIG51bGwsIGN0YURpdik7XG4gICAgICAgICAgICAgICAgY3RhSW1nLnNyYyA9IGhlcm9faW1nO1xuICAgICAgICAgICAgY29uc3QgY3RhVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZS1jdGEtdGV4dCcsIG51bGwsIG51bGwsIGN0YURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgY3RhSDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnaG9tZS1jdGEtaDInLCBudWxsLCAnQSBDYWxsIHRvIEFjdGlvbiEnLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFQID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnaG9tZS1jdGEtcCcsIG51bGwsICdFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4nLCBjdGFUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdGFCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ2hvbWUtY3RhLWJ0bicsIG51bGwsICdSZXNlcnZlJywgY3RhVGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3RhVG9wID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsICdob21lLWN0YS10b3AnLCBudWxsLCAnVG9wJywgY3RhVGV4dCk7XG4gICAgICAgICAgICBcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9