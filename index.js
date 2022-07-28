

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection

//<--Code goes here-->
if (computerSelection < 0.34) {
	computerSelection = "rock";
} else if(computerSelection <= 0.67) {
	computerSelection = "paper";
} else {
	computerSelection = "scissors";
}

//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
    if(selection1 === 'rock' && selection2 === 'paper') {
      return 'computer wins, computer result: ' + selection2;
    } else if (selection1 === 'rock' && selection2 === 'scissors') {
      return 'player wins, computer result: ' + selection2;
    } else if (selection1 === 'paper' && selection2 === 'rock') {
      return 'player wins, computer result: ' + selection2;
    } else if (selection1 === 'paper' && selection2 === 'scissors') {
      return 'computer wins, computer result: ' + selection2;
    } else if (selection1 === 'scissors' && selection2 === 'rock') {
      return 'computer wins, computer result: ' + selection2;
    } else if (selection1 === 'scissors' && selection2 === 'paper') {
      return 'player wins, computer result: ' + selection2;
    } else if (selection1 === selection2) {
      return 'draw, computer result: ' + selection2;
    }
}
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result