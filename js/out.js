/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function(){

  function GameOfLife(){
    this.map = function(){
      this.width = document.querySelector('#fieldWidth').value / 10;
      this.height = document.querySelector('#fieldHeight').value / 10;
      var board = document.querySelector('#board');
      this.createBoard = function(){
        board.style.width = this.width * 10 + 'px';
        board.style.height = this.height * 10 + 'px';
        var counter = this.width * this.height;
        for (var i = 1; i <= counter; i++){
          this.cells.push(board.appendChild(document.createElement('div')));
        }
        this.cells.forEach(function(el){
          el.addEventListener('click', function(event){
            el.classList.toggle('live');
          });
        });
      };
      this.cells = [];
      this.index = function(x, y){
        return (x + (y * this.width));
      }
      this.setCellState = function(x, y, state){
        if(state == 'live'){
          this.cells[this.index(x, y)].classList.add('live');
        } else {
          this.cells[this.index(x, y)].classList.remove('live');
        }
      }
    }
    this.firstGlider = function (number){
      if(number == 1){
        this.setCellState(2, 0, 'live');
        this.setCellState(2, 1, 'live');
        this.setCellState(2, 2, 'live');
        this.setCellState(1, 2, 'live');
        this.setCellState(0, 1, 'live');
      } else if (number == 2){
        this.setCellState(this.width / 2, this.height / 2, 'live');
        this.setCellState(this.width / 2, this.height / 2 + 1, 'live');
        this.setCellState(this.width / 2, this.height / 2 - 1, 'live');
        this.setCellState(this.width / 2 - 1, this.height / 2, 'live');
        this.setCellState(this.width / 2 + 1, this.height / 2 - 1, 'live');
      } else if (number == 3){
        this.setCellState(this.width / 2, this.height / 2, 'live');
        this.setCellState(this.width / 2, this.height / 2 - 1, 'live');
        this.setCellState(this.width / 2 - 1, this.height / 2 - 1, 'live');
        this.setCellState(this.width / 2 + 4, this.height / 2, 'live');
        this.setCellState(this.width / 2 + 5, this.height / 2, 'live');
        this.setCellState(this.width / 2 + 6, this.height / 2, 'live');
        this.setCellState(this.width / 2 + 5, this.height / 2 - 2, 'live');
      } else {
        this.setCellState(this.width / 2, this.height / 2, 'live');
        this.setCellState(this.width / 2 + 1, this.height / 2 + 1, 'live');
        this.setCellState(this.width / 2 + 2, this.height / 2 + 1, 'live');
        this.setCellState(this.width / 2 + 3, this.height / 2 + 1, 'live');
        this.setCellState(this.width / 2 - 2, this.height / 2 - 1, 'live');
        this.setCellState(this.width / 2 - 2, this.height / 2 + 1, 'live');
        this.setCellState(this.width / 2 - 3, this.height / 2 + 1, 'live');
      }
    }
    this.computeCellNextState = function(x, y){
      var counter = 0;
      var cellsArray = [
        this.cells[this.index(x, y-1)],
        this.cells[this.index(x-1, y-1)],
        this.cells[this.index(x-1, y)],
        this.cells[this.index(x-1, y+1)],
        this.cells[this.index(x, y+1)],
        this.cells[this.index(x+1, y+1)],
        this.cells[this.index(x+1, y)],
        this.cells[this.index(x+1, y-1)]
      ];
      cellsArray.forEach(function(el){
        if(el != undefined && el.classList.contains('live')){
          counter++
        };
      });
      if(this.cells[this.index(x, y)].classList.contains('live') && counter < 2){
        return 0;
      } else if (this.cells[this.index(x, y)].classList.contains('live') && counter > 3){
        return 0;
      } else if (this.cells[this.index(x, y)].classList.contains('live') && counter >= 2 && counter <= 3){
        return 1;
      } else if (this.cells[this.index(x, y)].classList.contains('live') == false && counter == 3){
        return 1;
      } else {
        return 0;
      }
    }
    var nextGenArray = [];
    var self = this;
    this.computeNextGeneration = function(){
      nextGenArray = [];
      for (var i = 0; i < this.height; i++){
        for (var j = 0; j < this.width; j++){
          nextGenArray.push(self.computeCellNextState(j, i));
        }
      }
    }
    this.printNextGeneration = function(){
      this.computeNextGeneration();
      this.idInterval = setInterval(function(){
        for (var i = 0; i < self.cells.length; i++){
          if(nextGenArray[i] == 1){
            self.cells[i].classList.add('live');
          } else {
            self.cells[i].classList.remove('live');
          }
        }
        self.computeNextGeneration();
      }, 100);
    }
    document.querySelector('#play').addEventListener('click', function(){
      self.printNextGeneration();
    });
    document.querySelector('#pause').addEventListener('click', function(){
      clearInterval(self.idInterval);
    });
    document.querySelector('#map').addEventListener('click', function(){
      self.map();
      self.createBoard();
    });
    document.querySelector('#clear').addEventListener('click', function(){
      clearInterval(self.idInterval);
      self.cells.forEach(function(el){
        el.classList.remove('live');
      });
    });
    document.querySelector('#shape1').addEventListener('click', function(){
      self.cells.forEach(function(el){
        el.classList.remove('live');
      });
      self.firstGlider(1);
    });
    document.querySelector('#shape2').addEventListener('click', function(){
      self.cells.forEach(function(el){
        el.classList.remove('live');
      });
      self.firstGlider(2);
    });
    document.querySelector('#shape3').addEventListener('click', function(){
      self.cells.forEach(function(el){
        el.classList.remove('live');
      });
      self.firstGlider(3);
    });
    document.querySelector('#shape4').addEventListener('click', function(){
      self.cells.forEach(function(el){
        el.classList.remove('live');
      });
      self.firstGlider(4);
    });
  };

  var game = new GameOfLife();

});


/***/ })
/******/ ]);