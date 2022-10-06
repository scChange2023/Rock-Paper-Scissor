"use strict";

///Creating elements and selection array
let body = document.querySelector("body");
let container = document.createElement("div");
let titles = document.createElement("div");
let playerTitle = document.createElement("div");
let computerTitle = document.createElement("div");
let divScore = document.createElement("div");

let divPlayerScore = document.createElement("div");
let divComputerScore = document.createElement("div");

let divSelections = document.createElement("div");

let selections = ["rock", "paper", "scissor"];

let paragraph = document.createElement("p");

///Appending Elements

body.appendChild(container);
container.appendChild(titles);
titles.appendChild(playerTitle);
titles.appendChild(computerTitle);
container.appendChild(divScore);
divScore.appendChild(divPlayerScore);
divScore.appendChild(divComputerScore);
container.appendChild(divSelections);
container.appendChild(paragraph);

//Adding class descriptions
container.classList.add("container");
titles.classList.add("titles");
playerTitle.classList.add("playerTitle");
computerTitle.classList.add("computerTitle");
divScore.classList.add(`score`);
divPlayerScore.classList.add(`playerScore`);
divComputerScore.classList.add(`computerScore`);
divSelections.classList.add("selections");
paragraph.classList.add("paragraph");

///Storing titles and scores in a variable
let classPlayerTitle = document.querySelector(".playerTitle");
let classComputerTitle = document.querySelector(".computerTitle");
let classPlayerScore = document.querySelector(".playerScore");
let classComputerScore = document.querySelector(".computerScore");

//Updating the title and underlying the text
classPlayerTitle.textContent = `Player Score`;
classComputerTitle.textContent = `Computer Score`;
classPlayerTitle.style.textDecoration = "underline";
classComputerTitle.style.textDecoration = "underline";

//Defining and assigning the player/computer scores
let playerScore = 0;
classPlayerScore.textContent = playerScore;
let computerScore = 0;
classComputerScore.textContent = computerScore;

//Creating button elements by looping through the selections array
for (let i = 0; i < selections.length; i++) {
  let index = selections[i];
  let button = document.createElement("button");
  button.classList.add(`selection`);
  button.setAttribute("id", `${index}`);
  divSelections.appendChild(button);
}

let reset = document.createElement("button");
reset.classList.add("resetButton");
container.appendChild(reset);

///Storing buttons and the paragraph in variables.  Updating the description of each button.
let buttons = document.querySelectorAll(".selection");
let rockID = document.querySelector("#rock");
let paperID = document.querySelector("#paper");
let scissorID = document.querySelector("#scissor");
paragraph = document.querySelector(".paragraph");
reset = document.querySelector(".resetButton");
rockID.innerHTML = `Rock`;
paperID.innerHTML = "Paper";
scissorID.innerHTML = "Scissor";
reset.innerHTML = `Reset`;

//Declaring player/computer picks to be invoked in the winning functions
let playerPick;
let computerPick;

//Randomly chooses the computer choice
function computerChoice() {
  let choice = selections[Math.floor(Math.random() * selections.length)];
  return choice;
}

//Function called when player wins.  Updates score and HTML page
function playerWins() {
  console.log("Player Wins");
  playerScore = playerScore + 1;
  classPlayerScore.textContent = playerScore;
  console.log(classPlayerScore.textContent, classComputerScore.textContent);
  paragraph.innerHTML += `You Won! Player selected ${playerPick}, computer selected ${computerPick}. <br />`;
}

//Function called when computer wins.  Updates score and HTML page.
function computerWins() {
  console.log("Computer Wins");
  computerScore = computerScore + 1;
  classComputerScore.textContent = computerScore;
  console.log(classPlayerScore.textContent, classComputerScore.textContent);
  paragraph.innerHTML += `You Lost! Player selected ${playerPick}, computer selected ${computerPick}. <br />`;
}

//function called when the resetbutton is clicked
function resetButton() {
  paragraph.innerHTML = "";
  computerScore = 0;
  classComputerScore.textContent = computerScore;
  playerScore = 0;
  classPlayerScore.textContent = playerScore;
  console.log(classPlayerScore.textContent, classComputerScore.textContent);
}
//Listens for cick of "rock", "paper"or "scissor" to initiate the game
buttons.forEach((div) => div.addEventListener("click", playRound));

//Game function invoked as a callback from the Event Listener
function playRound(playerSelect, computerSelect) {
  playerSelect = this.id;
  computerSelect = computerChoice();

  playerPick = playerSelect;
  computerPick = computerSelect;

  if (playerSelect == "rock" && computerSelect == "scissor") {
    playerWins();
  } else if (playerSelect == "paper" && computerSelect == "rock") {
    playerWins();
  } else if (playerSelect == "scissor" && computerSelect == "paper") {
    playerWins();
  } else if (playerSelect == computerSelect) {
    paragraph.innerHTML += `It is a tie! <br />`;
  } else {
    computerWins();
  }
}

reset.addEventListener("click", resetButton);
