'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

var _trie = require('./trie');

var _trie2 = _interopRequireDefault(_trie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DOM elements
var solve = document.getElementById('solve');
var reset = document.getElementById('reset');
var err = document.getElementById('err');
var numWords = document.getElementById('num-words');
var elWordList = document.getElementById('word-list');
var execution = document.getElementById('execution');
var executionTime = document.getElementById('execution-time');

// settings
var minLength = _settings2.default.minWordLength;
var directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

execution.style.visibility = 'hidden';
var boardMatrix = [];
var wordListObj = [];
var coords = [];
var wordList = [];
var boardSize = _board2.default.getSize();

exports.default = function () {
  return {
    init: init
  };
}();

function init() {
  // event handlers
  solve.addEventListener('click', onSolveClick);
  reset.addEventListener('click', onResetClick);
}

function onSolveClick(e) {
  var executionStartTime = _utils2.default.getTime();
  var letters = _utils2.default.getInputValues(document.querySelectorAll('[data-letter]'));
  var userMessage = document.getElementById('userMessage');

  wordListObj = [];
  wordList = [];
  boardSize = _board2.default.getSize();
  boardMatrix = _utils2.default.getBoardMatrix(boardSize, letters);
  userMessage.setAttribute('hidden', true);

  if (letters.length < boardSize * boardSize) {
    userMessage.removeAttribute('hidden');
    err.innerText = 'Please enter a letter in ALL fields.';
    return;
  }

  // run solver
  boardMatrix.forEach(function (row, rowIndex) {
    row.forEach(function (col, colIndex) {
      solveBoard(boardMatrix[rowIndex][colIndex], [rowIndex, colIndex]);
    });
  });

  var executionEndTime = _utils2.default.getTime();
  execution.style.visibility = 'visible';
  executionTime.innerText = executionEndTime - executionStartTime + 'ms';

  if (wordList.length) {
    displayResults(wordListObj);
  }
}

function onResetClick(e) {
  _board2.default.init({ loadDefaults: false });
}

function solveBoard(currentWord, currentPosition) {
  var coords = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
  var usedPositions = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _currentPosition = _slicedToArray(currentPosition, 2);

  var row = _currentPosition[0];
  var col = _currentPosition[1];

  var positions_copy = usedPositions.slice();
  var coords_copy = coords.slice();

  coords_copy.push(currentPosition);

  if (currentWord.length >= minLength && _trie2.default.containsWord(currentWord) && !_utils2.default.inArray(wordList, currentWord)) {
    wordList.push(currentWord);
    wordListObj.push({
      word: currentWord,
      coords: coords_copy
    });
    coords = [];
  }

  var adjacents = getAdjacentLetters(currentWord, currentPosition, usedPositions);

  adjacents.forEach(function (adjacent) {
    positions_copy.push(currentPosition);

    var _adjacent = _slicedToArray(adjacent, 2);

    var x = _adjacent[0];
    var y = _adjacent[1];

    var letter = boardMatrix[x][y];
    var word = currentWord + letter;

    solveBoard(word, adjacent, coords_copy, positions_copy);
  });
  return;
}

function getAdjacentLetters(currentWord, position, usedPositions) {
  var _directions = directions.slice(0);

  var _position = _slicedToArray(position, 2);

  var row = _position[0];
  var col = _position[1];


  return _directions.reduce(function (acc, direction) {
    var _direction = _slicedToArray(direction, 2);

    var x = _direction[0];
    var y = _direction[1];

    var rowSum = x < 0 ? row - Math.abs(x) : row + x;
    var colSum = y < 0 ? col - Math.abs(y) : col + y;

    if (rowSum >= 0 && colSum >= 0 && rowSum < boardSize && colSum < boardSize) {
      var adjacent = [rowSum, colSum];
      var adjacentWord = currentWord + boardMatrix[rowSum][colSum];

      if (!_utils2.default.arrayMatch(usedPositions, adjacent) && _trie2.default.isValidPrefix(adjacentWord)) {
        acc.push(adjacent);
      }
    }
    return acc;
  }, []);
}

function displayResults(wordListObj) {
  // sort available words by length descending
  wordListObj = wordListObj.sort(function (a, b) {
    return b.word.length - a.word.length;
  });

  numWords.innerText = wordList.length;
  elWordList.innerHTML = wordListObj.reduce(function (acc, obj) {
    return acc + ('<li class="c-wordlist__word o-grid__col u-1/4" data-coords="' + JSON.stringify(obj.coords) + '">' + obj.word + '</li>');
  }, '');

  var tiles = document.querySelectorAll('.c-boggle__tile');

  elWordList.addEventListener('click', function (e) {
    [].forEach.call(tiles, function (tile) {
      tile.classList.remove('c-boggle__tile--selected');
    });
    var word = e.target;
    if (!word.nodeName === 'LI' && !word.getAttribute('data-coords')) {
      return;
    }

    var coords = JSON.parse(word.getAttribute('data-coords'));
    coords.forEach(function (coord, index) {
      var _coord = _slicedToArray(coord, 2);

      var row = _coord[0];
      var col = _coord[1];

      setTimeout(function () {
        tiles[boardSize * row + col].classList.add('c-boggle__tile--selected');
      }, index * 200);
    });
  });
}