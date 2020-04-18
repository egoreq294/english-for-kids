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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var cards = [['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotion'], [{
  word: 'Action (set A)',
  image: '../src/img/dance.jpg'
}, {
  word: 'Action (set B)',
  image: '../src/img/swim.jpg'
}, {
  word: 'Action (set C)',
  image: '../src/img/drop.jpg'
}, {
  word: 'Adjective',
  image: '../src/img/friendly.jpg'
}, {
  word: 'Animal (set A)',
  image: '../src/img/cat.jpg'
}, {
  word: 'Animal (set B)',
  image: '../src/img/bird.jpg'
}, {
  word: 'Clothes',
  image: '../src/img/blouse.jpg'
}, {
  word: 'Emotion',
  image: '../src/img/smile.jpg'
}], [{
  word: 'cry',
  translation: 'плакать',
  image: '../src/img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: '../src/img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: '../src/img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: '../src/img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: '../src/img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: '../src/img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: '../src/img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: '../src/img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: '../src/img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: '../src/img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: '../src/img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: '../src/img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: '../src/img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: '../src/img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: '../src/img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: '../src/img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'argue',
  translation: 'спорить',
  image: '../src/img/argue.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'build',
  translation: 'строить',
  image: '../src/img/build.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'carry',
  translation: 'нести',
  image: '../src/img/carry.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'catch',
  translation: 'ловить',
  image: '../src/img/catch.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'drive',
  translation: 'водить машину',
  image: '../src/img/drive.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'drop',
  translation: 'ронять',
  image: '../src/img/drop.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'pull',
  translation: 'тянуть',
  image: '../src/img/pull.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'push',
  translation: 'толкать',
  image: '../src/img/push.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'big',
  translation: 'большой',
  image: '../src/img/big.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'small',
  translation: 'маленький',
  image: '../src/img/small.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'fast',
  translation: 'быстрый',
  image: '../src/img/fast.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'slow',
  translation: 'медленный',
  image: '../src/img/slow.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'friendly',
  translation: 'дружелюбный',
  image: '../src/img/friendly.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'unfriendly',
  translation: 'недружелюбный',
  image: '../src/img/unfriendly.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'young',
  translation: 'молодой',
  image: '../src/img/young.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'old',
  translation: 'старый',
  image: '../src/img/old.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: '../src/img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: '../src/img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: '../src/img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: '../src/img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: '../src/img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: '../src/img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: '../src/img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: '../src/img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: '../src/img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: '../src/img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: '../src/img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: '../src/img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: '../src/img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: '../src/img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: '../src/img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: '../src/img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: '../src/img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: '../src/img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: '../src/img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: '../src/img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: '../src/img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: '../src/img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: '../src/img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: '../src/img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: '../src/img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: '../src/img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: '../src/img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: '../src/img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: '../src/img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: '../src/img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: '../src/img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: '../src/img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]]; // open/close burger

document.querySelector('.menu_button').addEventListener('click', function () {
  if (document.querySelector('.burger').classList.contains('display_none') === true) {
    document.querySelector('.burger').classList.remove('display_none');
  } else {
    document.querySelector('.burger').classList.add('display_none');
  }
}); // burger click 

var mainPagePictures = document.querySelectorAll('.main_page--pics');
var mainPageText = document.querySelectorAll('.main_page--text');
document.querySelector('.burger_ul').addEventListener('click', function (event) {
  if (event.target.tagName === 'a'.toUpperCase()) {
    var _loop = function _loop(i) {
      var j = 0;

      if (event.target.innerHTML === cards[0][i]) {
        cards[i + 1].forEach(function (item) {
          mainPagePictures[j].src = item.image;
          mainPageText[j].innerHTML = item.word;
          j += 1;
        });
      }
    };

    for (var i = 0; i < cards[0].length; i++) {
      _loop(i);
    }
  }
}); //main click

document.querySelector('.main').addEventListener('click', function (event) {
  if (event.target.tagName === 'div'.toUpperCase()) {
    console.log('privet');

    var _loop2 = function _loop2(i) {
      var j = 0;

      if (event.target.lastChild.innerHTML === cards[0][i]) {
        cards[i + 1].forEach(function (item) {
          mainPagePictures[j].src = item.image;
          mainPageText[j].innerHTML = item.word;
          j += 1;
        });
      }
    };

    for (var i = 0; i < cards[0].length; i++) {
      _loop2(i);
    }
  }

  if (event.target.tagName === 'p'.toUpperCase()) {
    var _loop3 = function _loop3(_i) {
      var j = 0;

      if (event.target.innerHTML === cards[0][_i]) {
        cards[_i + 1].forEach(function (item) {
          mainPagePictures[j].src = item.image;
          mainPageText[j].innerHTML = item.word;
          j += 1;
        });
      }
    };

    for (var _i = 0; _i < cards[0].length; _i++) {
      _loop3(_i);
    }
  }

  if (event.target.tagName === 'img'.toUpperCase()) {
    var _loop4 = function _loop4(_i2) {
      var j = 0;

      if (event.target.parentNode.lastChild.innerHTML === cards[0][_i2]) {
        cards[_i2 + 1].forEach(function (item) {
          mainPagePictures[j].src = item.image;
          mainPageText[j].innerHTML = item.word;
          j += 1;
        });
      }
    };

    for (var _i2 = 0; _i2 < cards[0].length; _i2++) {
      _loop4(_i2);
    }
  }
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map