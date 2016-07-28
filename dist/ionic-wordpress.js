/*!
 * ionic-wordpress
 *  ---
 * Set of Ionic2 components for WordPress.
 * @version: v1.0.0
 * @author: shprink <contact@julienrenaux.fr> (http://julienrenaux.fr/)
 * @link: https://github.com/shprink/ionic-wordpress#readme
 * @license: MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("ionic-angular"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ionic-angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("ionic-angular")) : factory(root["@angular/core"], root["ionic-angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var components_1 = __webpack_require__(/*! ./components */ 2);
	exports.IONIC_WORDPRESS_PROVIDERS = [
	    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: components_1.IONIC_WORDPRESS_DIRECTIVES, multi: true }),
	];


/***/ },
/* 1 */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Posts_1 = __webpack_require__(/*! ./Posts/Posts */ 3);
	exports.IONIC_WORDPRESS_DIRECTIVES = [
	    Posts_1.default
	];


/***/ },
/* 3 */
/*!***************************************!*\
  !*** ./src/components/Posts/Posts.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var ionic_angular_1 = __webpack_require__(/*! ionic-angular */ 4);
	var Posts = (function () {
	    function Posts(nav) {
	        this.nav = nav;
	    }
	    Posts = __decorate([
	        core_1.Component({
	            selector: 'ion-wp-posts',
	            templateUrl: 'Posts.html'
	        }), 
	        __metadata('design:paramtypes', [ionic_angular_1.NavController])
	    ], Posts);
	    return Posts;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Posts;


/***/ },
/* 4 */
/*!********************************!*\
  !*** external "ionic-angular" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ionic-wordpress.js.map