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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html(str) {
    if (str) {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML = str;
      }
    } else {
        return this.nodes[0].innerHTML;
    }
  }

  empty() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].html("");
    }
  }

  append(object) {
    if (!(typeof object === "string")) {
      for (let i = 0; i < this.nodes.length; i++) {
        console.log(this.nodes[i]);
        this.nodes[i].appendChild(object.outerHTML());
      }
    } else {
      for (let i = 0; i < this.nodes.length; i++) {
        console.log(this.nodes[i]);

        this.nodes[i].innerHTML += object;
      }
    }
  }

  attr (attributeName, value) {
    let ans;
    for (let i = 0; i < this.nodes.length; i++) {
      if (value) {
        this.nodes[i].setAttribute(attributeName, value);
        ans = this.nodes;
      } else {
        for (let j = 0; j < this.nodes.length; j++) {
          if (this.nodes[j].getAttribute(attributeName)) {
            ans = this.nodes[j].getAttribute(attributeName);
            break;
          }
        }
      }
      return ans;
    }
  }

  addClass (className) {
    for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].classList.add(className);
      }
  }

  removeClass (className){
    for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].classList.remove(className);
      }
  }

  children () {
    let children = [];
    for (var i = 0; i < this.nodes.length; i++) {
      children.push(this.nodes[i].children);
    }
    return new DOMNodeCollection(children);
  }


  parent () {
    let parent = [];
    for (var i = 0; i < this.nodes.length; i++) {
      parent.push(this.nodes[i].parentNode);
    }
    return new DOMNodeCollection(parent);
  }

  find (selector) {
    return this.nodes.querySelectorAll(selector);
  }

  on (action, callback) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(action, null, callback);
      this.nodes[i].setAttribute("callback", callback);
    }
  }

  off (action) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].removeEventListener(action, this.nodes[j].getAttribute("callback"), null);
    }
  }




}

  module.exports = DOMNodeCollection;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__ (0);

window.$l = (selector) =>  {
  let elementArray;
  if (selector instanceof HTMLElement) {
    // elementArray = Array.from(arguments);
    elementArray = [selector];
  } else {
    elementArray = Array.from(document.querySelectorAll(selector));
  }
  return new DOMNodeCollection(elementArray);
};
// window.$l = $l;


/***/ })
/******/ ]);