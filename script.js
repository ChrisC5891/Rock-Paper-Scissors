

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


const computerSelection = getComputerChoice() 

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''


    function playRound(playerSelection, computerSelection){

    //for(let i = 0; i <=4; i++ ) //LOOPS THE SAME ANSWER 5 TIMES
    if(
        (playerSelection === 'rock' && computerSelection ===  'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper' )
    ){  
        
        alert(`you win! ${playerSelection} beats ${computerSelection}` )
        playerScore ++
        roundWinner = 'Player'
        console.log(`You're score is ${playerScore}`)
    }   
    if (
        (playerSelection === 'rock' && computerSelection=== 'paper')||
        (playerSelection === 'paper' && computerSelection === 'scissors')||
        (playerSelection === 'scisors' && computerSelection === 'rock')
    ){
        alert (` You lose ${computerSelection} beats ${playerSelection}`)
        computerScore ++
        roundWinner = 'Computer'
        console.log(`Computers score: ${computerScore}`)
    }
      
    if(playerSelection === computerSelection){
        alert (`You draw`)
    }
    if (playerScore === 5 || computerScore === 5)
           alert('GAME OVER')
    
}  

          for(let i =0; i <= 5; i++){
let playerSelection = prompt ('choose rock, paper or scissors');
const computerChoice = getComputerChoice()
console.log(playRound(playerSelection, computerChoice))
console.log("your score = " + playerScore);
console.log("Computer's score = " + computerScore);
          }
          if(playerSelection !== 'rock'){
            alert('please pick a valid weapon!')
          }
          if(playerScore === 3 || computerScore === 3){
            alert('round over!')
          }
          if(playerScore > computerScore){
            alert('You win!')
        }
        else alert('Computer wins!')


//    function gameOver(playRound){
//        for(let i =0; i<= 4; i++){
//        if (playerScore === 5 || computerScore === 5)
//            alert('GAME OVER')}}
    
//console.log(playRound(playerSelection, computerSelection));

