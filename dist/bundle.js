/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/postre1.svg":
/*!********************************!*\
  !*** ./src/images/postre1.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1566fcc1450b2a03dad89d2fbc59e9b0.svg\");\n\n//# sourceURL=webpack://restaurant-pg/./src/images/postre1.svg?");

/***/ }),

/***/ "./src/images/postre2.svg":
/*!********************************!*\
  !*** ./src/images/postre2.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9e9943f3e09f3c95c688b0d8bdf3a615.svg\");\n\n//# sourceURL=webpack://restaurant-pg/./src/images/postre2.svg?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_postre2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/postre2.svg */ \"./src/images/postre2.svg\");\n\n\nconst contactText = '<p> Oaxaca, Mexico<br>Great place to live\\n<br><strong>Phone:</strong> 951 - 647 - 7957<br><strong>Fax:</strong> 951 - 647 - 7957<br><strong>Email:</strong> getintocuh@camarellas.com<br></p>';\n\nconst contactSection = () => {\n  const divContact = document.createElement('div');\n\n  // Set H1\n  const menuHeading = document.createElement('h1');\n  menuHeading.innerText = \"Tell us when you'll be here \";\n  divContact.prepend(menuHeading);\n\n  // Family Image\n  const cafePicture = new Image();\n  cafePicture.src = _images_postre2_svg__WEBPACK_IMPORTED_MODULE_0__.default;\n  cafePicture.id = 'cafe';\n  cafePicture.setAttribute('width', '300px');\n  divContact.append(cafePicture);\n\n  // Set P\n  const contactParagraph = document.createElement('div');\n  contactParagraph.innerHTML = contactText;\n  divContact.append(contactParagraph);\n\n  return divContact;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSection);\n\n//# sourceURL=webpack://restaurant-pg/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_postre1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/postre1.svg */ \"./src/images/postre1.svg\");\n\n\n\n\nconst homeSection = () => {\n  const homeText = \"Camarella's is a place where you will find home made products using fresh and local products\";\n  const homesection = document.createElement('div');\n\n  // Set H1\n  const homeHeading = document.createElement('h1');\n  homeHeading.innerText = \"Camarella's\";\n  homesection.append(homeHeading);\n\n  // Set P\n  const homeParagraph = document.createElement('p');\n  homeParagraph.innerText = homeText;\n  homesection.append(homeParagraph);\n\n  // Family Image\n  const familyPicture = new Image();\n  familyPicture.src = _images_postre1_svg__WEBPACK_IMPORTED_MODULE_0__.default;\n  familyPicture.id = 'bakery';\n  familyPicture.setAttribute('width', '300px');\n  homesection.append(familyPicture);\n\n  return homesection;\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeSection);\n\n//# sourceURL=webpack://restaurant-pg/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n//import style from './style/style.css';\n\n\n\n\n\n\n(0,_load__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n// Getting Div Sections where the elements will be appended\nconst divSections = document.getElementById('sections');\n\n// Set Section with the element returned\nconst setSection = (section) => {\n  divSections.innerHTML = ''; // reset div Section\n  divSections.append(section);\n};\n\n// Event Listeners for Switch between Sections\ndocument.addEventListener('click', (e) => {\n  if (e.target && e.target.id === 'b-home') {\n    const section = (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n    setSection(section);\n  } else if (e.target && e.target.id === 'b-menu') {\n    const section = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n    setSection(section);\n  } else if (e.target && e.target.id === 'b-contact') {\n    const section = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n    setSection(section);\n  }\n});\n\n// Set home in the first load\nsetSection((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n\n\n//# sourceURL=webpack://restaurant-pg/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_postre2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/postre2.svg */ \"./src/images/postre2.svg\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst myBody = document.getElementById('my-body');\nconst divContent = document.getElementById('content');\n\n// Creating Website Logo\nconst setIcon = () => {\n  const myIcon = new Image();\n  myIcon.src = _images_postre2_svg__WEBPACK_IMPORTED_MODULE_0__.default;\n  myIcon.setAttribute('width', '350px');\n  myBody.prepend(myIcon);\n};\n\n// Setting the Options\nconst setTable = () => {\n  const ulContent = \"<li><button id='b-home'>Home</button></li><li><button id='b-menu'>Menu</button></li><li><button id='b-contact'>Contact</button></li>\";\n  const myUl = document.createElement('ul');\n  myUl.innerHTML = ulContent;\n  myUl.id = 'buttons';\n  divContent.prepend(myUl);\n};\n\n// Set Div That Will Display the Dinamic Sections\nconst setSections = () => {\n  const sections = document.createElement('div');\n  sections.id = 'sections';\n  divContent.appendChild(sections);\n};\n\nconst load = () => {\n  setIcon();\n  setTable();\n  setSections();\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://restaurant-pg/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuSection = () => {\n  // Set new Div\n  const divMenu = document.createElement('div');\n\n  // Set H1\n  const menuHeading = document.createElement('h1');\n  menuHeading.innerText = '/-----       Menu        -----/';\n  divMenu.prepend(menuHeading);\n\n  const divFlex = document.createElement('div');\n  divFlex.id = 'div-flex';\n\n  const breakfast = document.createElement('ul');\n  let ulContent = '<h2> Breakfast </h2><li>YOGURT BERRY PARFAIT ... ($5)</li><li>OVERNIGHT OATS & CHIA ... ($5)</li><li>CLASSIC ... ($5)</li><li>MARCHIO ... ($5)</li>';\n  breakfast.innerHTML = ulContent;\n  divFlex.append(breakfast);\n\n  const daily = document.createElement('ul');\n  ulContent = '<h2> Daily Pastries </h2><li>CORNETTO ... ($5)</li><li>SPECORINO ... ($5)</li><li>CORNETTO DI CIOCCOLATO ... ($5)</li><li>CIAMBELLONE ... ($5)</li>';\n  daily.innerHTML = ulContent;\n  divFlex.append(daily);\n\n  divMenu.append(divFlex);\n\n  return divMenu;\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);\n\n//# sourceURL=webpack://restaurant-pg/./src/menu.js?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;