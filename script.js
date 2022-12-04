

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



        for(let i =0; i < 5; i++){
playerSelection = prompt ('choose rock, paper or scissors');  ///////    input tied to this prompt   //////////
playerSelection = playerSelection.toLowerCase();
const computerChoice = getComputerChoice();
console.log(playRound(playerSelection, computerChoice));
console.log("Your score = " + playerScore);
console.log("Computer's score = " + computerScore)
}
          
        if(playerScore > computerScore){
            alert(`You have defeated the machines! ${playerScore} - ${computerScore}`)
        };
            if(computerScore > playerScore){
        alert(`You lose! The machines have taken over! ${computerScore} - ${playerScore}`)
            };
        

        const body = document.querySelector('body')    
        const container = document.getElementsByClassName('container');    
            
    ///////////////////////   UI    ////////////////////////////////////////////////

        const buttons = document.getElementsByTagName('button'); 
                const rockBtn = buttons[0]
                    rockBtn.addEventListener ('click', function(){
                        
                    console.log('rock button clicked');
            });
                const paperBtn = buttons[1]
                    paperBtn.addEventListener ('click', function(){
                    console.log(' paper button clicked');
            });

                const scissorsBtn = buttons[2]
                    scissorsBtn.addEventListener ('click', function(){
                    console.log(' scissors button clicked');
            });

        //    const rockSelection = 'rock';
        //    const paperSelection = 'paper';
        //    const scissorsSelection = 'scissors'

             
            
            
            
            
           
        //const rockBtn = document.getElementsByClassName('rock'); 
        //rockBtn.addEventListener ('click', function(){
        //                console.log('button clicked');
        //})
        //
        //const paperBtn = document.getElementsByClassName('paper'); 
        //const scissorsBtn = document.getElementsByClassName('scissors');    

       

