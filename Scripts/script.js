// randomly returns rock, paper, or scissors for computer choice

let humanScore = 0;
let computerScore = 0;
let result = '';
let round = 5;


function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();

}


function getComputerChoice() {

    const randomNum = Math.random();

    if (randomNum <= 1/3 ) {
    return 'Rock';
    }
    else if ( 1/3 < randomNum && randomNum <= 2/3){
        return 'Paper';
    }
    else if (2/3 < randomNum && randomNum <= 1) {
        return 'Scissors'
    }
     
}

   
function getHumanChoice() {

    let userChoice = capitalizeFirstLetter(prompt("Please enter your choice (Rock, Paper, Scissors)"));

    while (!(userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors')) {

         userChoice = capitalizeFirstLetter(prompt("Please enter your choice (Rock, Paper, Scissors)"));

    }

    return userChoice;
}

function playRound (humanChoice, computerChoice) {


    if(humanChoice === 'Rock' && computerChoice === 'Scissors') {
        result =  'You Win!';
    }
    else if(humanChoice === 'Rock' && computerChoice === 'Paper') {
        result = 'You Lose!';
    }
    else if(humanChoice === 'Paper' && computerChoice === 'Rock') {
        result = 'You Win!';
    }
    else if(humanChoice === 'Paper' && computerChoice === 'Scissors') {
        result = 'You Lose!';
    }   
    else if(humanChoice === 'Scissors' && computerChoice === 'Paper') {
        result = 'You Win!';
    }
    else if(humanChoice === 'Scissors' && computerChoice === 'Rock') {
        result = 'You Lose!';
    }
    else if(humanChoice === computerChoice){
        result = 'tie';
    }
    

    if(result === 'You Win!') {
        humanScore++;
    }
    else if(result === 'You Lose!') {
        computerScore++;
    }

    console.log(`Your choice ${humanChoice}, Computer Choice ${computerChoice}, ${result}`);
    console.log(`Your Score ${humanScore}, Computer Score ${computerScore}`)
}

function playGame(round) {

    for(let i = 1; i <= round; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
}

playGame(round)
