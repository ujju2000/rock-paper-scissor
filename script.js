
let playerScore = 0;
let computerScore = 0;
let roundWinner  = '';

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');
const playerChoice = document.querySelector('.player-icon-display');
const computerChoice = document.querySelector('.comp-icon-display');
const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
const scoreInfo =  document.querySelector('.scoreInfo');
const scoreMessage = document.querySelector('.scoreMessage');

rockBtn.addEventListener('click', (e) => handleClick('ROCK'));
paperBtn.addEventListener('click',(e) => handleClick('PAPER'));
scissorBtn.addEventListener('click', (e) => handleClick('SCISSORS'));

function getRandomChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0 :
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2: 
            return 'SCISSORS';
    }
}

function gameOver(){
    return playerScore == 5 || computerScore == 5;
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection) roundWinner = 'TIE';

    if(
        (playerSelection == 'PAPER' && computerSelection == 'ROCK') || 
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || 
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'))
    {
        playerScore++;
        roundWinner = 'player';
    }
    
    if(
        (computerSelection == 'PAPER' && playerSelection == 'ROCK') || 
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') || 
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') )
    {
        computerScore++;
        roundWinner = 'computer';
    }

    updateScoreMessage(roundWinner , playerSelection,computerSelection);
}

function updateChoices(playerSelection,computerSelection){
    // change the player choice and computer choice 
    switch(playerSelection){
        case 'ROCK': 
            playerChoice.innerHTML = '<i class="fa-light fa-solid fa-hand-fist"></i>';
            break;
        case 'SCISSORS' :
            playerChoice.innerHTML = '<i class="fa-regular fa-hand-peace"></i>';
            break;
        case 'PAPER':
            playerChoice.innerHTML  = '<i class="fa-dark fa-solid fa-hand"></i>';
            break;
    }

    switch(computerSelection){
        case 'ROCK': 
            computerChoice.innerHTML = '<i class="fa-light fa-solid fa-hand-fist"></i>';
            break;
        case 'SCISSORS' :
            computerChoice.innerHTML = '<i class="fa-regular fa-hand-peace"></i>';
            break;
        case 'PAPER':
            computerChoice.innerHTML  = '<i class="fa-dark fa-solid fa-hand"></i>';
            break;
    }
}
function updateScore(){
    userScore.innerHTML = `Player : ${playerScore}`;
    compScore.innerHTML = `Computer : ${computerScore}`;

    if(roundWinner == 'TIE') scoreInfo.textContent = `IT'S A TIE!!`;
    else if(roundWinner == 'player') scoreInfo.textContent = `YOU WON!!`;
    else scoreInfo.textContent = 'COMPUTER WON!!';

}
function handleClick(playerSelection){

    if(gameOver()){
        alert("Game over");
        return;
    }

    const computerSelection = getRandomChoice();
    playRound(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection); // updaate the quesstion mark icon 
    updateScore(); // update the score    
}
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function updateScoreMessage(winner,playerSelection,computerSelection){

    if(playerSelection == computerSelection) {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}`;
        return;
    }
    if(winner == 'player'){
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`;
        return;
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`;


}