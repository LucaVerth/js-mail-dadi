// Dice game

/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let playerNumber = Math.floor(Math.random() * 6) + 1;
let pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(playerNumber, pcNumber);

function refreshPage(){
  window.location.reload();
} 

document.getElementById("player-output").innerHTML =
  "You rolled: " + playerNumber;
document.getElementById("pc-output").innerHTML = "Computer rolls: " + pcNumber;

let result = document.getElementById("result");

if (playerNumber === pcNumber) {
  result.innerHTML = "DRAW! Please roll the dice again!";
  console.log("draw!");
} else if (playerNumber > pcNumber) {
  result.innerHTML = "Players win with number: " + playerNumber;
  console.log("Player Wins!");
  result.classList.add("text-success");
} else if (playerNumber < pcNumber) {
  result.innerHTML = "Computer win with number: " + pcNumber;
  console.log("Computer Wins!");
  result.classList.add("text-danger");
}
