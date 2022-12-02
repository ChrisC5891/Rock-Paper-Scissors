

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
        

    
    if(
        (playerSelection === 'rock' && computerSelection ===  'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){  
        
        alert(`you win! ${playerSelection} beats ${computerSelection}`)
        playerScore ++
        roundWinner = 'Player'
        console.log(`You're score is ${playerScore}`)
    }   
    if (
        (playerSelection === 'rock' && computerSelection=== 'paper')||
        (playerSelection === 'paper' && computerSelection === 'scissors')||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ){
        alert (` You lose ${computerSelection} beats ${playerSelection}`)
        computerScore ++
        roundWinner = 'Computer'
        console.log(`Computers score: ${computerScore}`)
    }
    

    if (playerSelection !== 'rock' && 
    playerSelection !== 'paper' && 
    playerSelection !== 'scissors'){
        alert('ERROR! Select a valid weapon!') 

    }

    if(playerSelection === computerSelection){
        alert (`You draw`)
    }
    if (playerScore === 5 || computerScore === 5)
           alert('GAME OVER')
    
}  

    

//          for(let i =0; i < 5; i++){
//let playerSelection =  prompt ('choose rock, paper or scissors');
//playerSelection = playerSelection.toLowerCase();
//const computerChoice = getComputerChoice();
//console.log(playRound(playerSelection, computerChoice));
//console.log("Your score = " + playerScore);
//console.log("Computer's score = " + computerScore);
//
//          }
          
        if(playerScore > computerScore){
            alert(`You have defeated the machines! ${playerScore} - ${computerScore}`)
        };
            if(computerScore > playerScore){
        alert(`You lose! The machines have taken over! ${computerScore} - ${playerScore}`)
            };
        

        const body = document.querySelector('body')    
        const container = document.getElementsByClassName('container');    
            body.append(container);
    
        const buttons = document.getElementsByTagName('button'); 
                buttons[0].addEventListener ('click', function(){
                buttons[0].style.backgroundColor = 'red';
                console.log('button clicked');
            });

            buttons[1].addEventListener ('click', function(){
                buttons[1].style.backgroundColor = 'blue';
                console.log(' 2nd button clicked');
            });

            
            
            


        const btnB = document.getElementsByClassName('B'); 
        const btnC = document.getElementsByClassName('C');    

       

