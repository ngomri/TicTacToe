
//set variables

var human;
var computer;

var firstPlayer = [1,'X']; // [player, sign]
var secondPlayer = [2,'O'];

var current;
var firstTurn;

var winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var board = ['#','#','#','#','#','#','#','#','#']
var gameWon = false;
var turnCount = 0;

