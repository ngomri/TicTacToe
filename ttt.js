
//set variables

var tds = document.querySelectorAll("td");

var X = document.getElementById("X");
var O = document.getElementById("O");

var human;
var computer;

var firstPlayer = 'X';
var secondPlayer = 'O';
       
X.style.color = "black";
human = firstPlayer;
computer = secondPlayer;

X.addEventListener("click", function() {
    X.style.color = "black";
    O.style.color = "#40468C";
    human = firstPlayer;
    computer = secondPlayer;
})

O.addEventListener("click", function() {
    O.style.color = "black";
    X.style.color = "#40468C";
    human = secondPlayer;
    computer = firstPlayer;


})

 function computerTurn() {
    var computerChoice = Math.floor(Math.random() * 8);
     while(tds[computerChoice].innerHTML !== "") {
        computerChoice = Math.floor(Math.random() * 8);
     }
     tds[computerChoice].innerHTML = computer;
     if (isWinner(computer) === true) {
         displayWinner(computer);
     }

 }

function cellClicked(cell)
{
    console.log(cell)
    cell.innerHTML = human;
    if (isWinner(human) === true) {
        displayWinner(human);
        return
    }
    computerTurn()

}

function displayWinner(player) {
    console.log("You won", player)
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
// td.addEventListener("click", function() {
//     cellClicked(this)

// });



