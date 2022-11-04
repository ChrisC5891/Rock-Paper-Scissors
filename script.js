

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);

    switch(computerSelection){
        case 0:
        return 'rock';
        
        case 1:
        return 'paper';

        case 2:
        return 'scissors';
    }
   
}
getComputerChoice()



//let playerScore = 0;
//let computerScore = 0;
//let roundWinner = ''
const playerSelection = prompt ('choose rock, paper or scissors');
const computerSelection = getComputerChoice() 


function playRound(playerSelection, computerSelection){

    
        
    if(
        (playerSelection === 'rock' && computerSelection ===  'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper' )
    ){  
        
        alert(`you win! ${playerSelection} beats ${computerSelection}` )
    }   
    if (
        (playerSelection === 'rock' && computerSelection=== 'paper')||
        (playerSelection === 'paper' && computerSelection === 'scissors')||
        (playerSelection === 'scisors' && computerSelection === 'rock')
    ){
        alert (` You lose ${computerSelection} beats ${playerSelection}`)
    }
      
    if(playerSelection === computerSelection){
        alert (`You draw`)
    }
    
    
}            

console.log(playRound(playerSelection, computerSelection));
