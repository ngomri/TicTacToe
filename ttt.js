
//set variables

var tds = document.querySelectorAll("td");

var X = document.getElementById("X");
var O = document.getElementById("O");


var oddNumber = [1,3,5,7];
var evenNumber = [2,4,6,8];
// for(i = 1; i < 9; i++){
//    var turn = i
//  if(turn === oddNumber) {
//    firstPlayer()
//  else if(turn === evenNumber)
//    secondPlayer()
//}

var human;
var computer;

var firstPlayer = 'X';
var secondPlayer = 'O';
       
X.style.color = "black";
human = firstPlayer;
computer = secondPlayer;

function restartGame() {
    for(i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ""
    }
}

X.addEventListener("click", function() {
    restartGame();
    X.style.color = "black";
    O.style.color = "#40468C";
    human = firstPlayer;
    computer = secondPlayer;
})

O.addEventListener("click", function() {
    restartGame();
    O.style.color = "black";
    X.style.color = "#40468C";
    human = secondPlayer;
    computer = firstPlayer;
    setTimeout(computerTurn(), 30000);


})

 function computerTurn() {
    var computerChoice = Math.floor(Math.random() * 9);
     while(tds[computerChoice].innerHTML !== "") {
        computerChoice = Math.floor(Math.random() * 9);
     }
     tds[computerChoice].innerHTML = computer;
     if (isWinner(computer) === true) {
         displayWinner(computer);
     }

 }

function cellClicked(cell)
{
    cell.innerHTML = human;

    if (isWinner(human) === true) {
        displayWinner(human);
        return

    }else if (isDraw() === true){
        console.log("The game is a draw");
        return

    }else {computerTurn()}
    
}

function displayWinner(player) {
    console.log("You won", player);
}


function isWinner(player) {
    var winning = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for(var i = 0; i < winning.length; i++) {
        x = winning[i]
        allMatch = true;
        for(var n = 0; n < x.length; n++) {
            // console.log(i,n,tds[x[n]])
            if(tds[x[n]].innerHTML !== player){
                allMatch = false;
            }
        }
        if(allMatch)
            return true;
    }
    return false;
}

for(var i = 0; i < tds.length; i++)
{
   tds[i].addEventListener("click", function() {
    cellClicked(this)

});
}

function isDraw() {
    if((isWinner(human) || isWinner(computer))) {
        return false;
    }

    for(var i = 0; i < tds.length; i++) {
        x = tds[i]
        if(x.innerHTML === "") {
            return false;

        }
    }return true;
}
