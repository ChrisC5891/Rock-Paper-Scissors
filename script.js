

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


let playerScore= 0;
let computerScore= 0;
let roundWinner = ''


    //function playRound(){
    //    
    //   if(player === computer){
    //    
    //    return "You Draw!"
    //   }
    //   else if(player === "rock"){
    //    playerScore = ++playerScore 
    //    return(computer=== "scissors")? "You win!" : "You lose!"
    //   }
    //   else if(player === "paper"){
    //    playerScore = ++playerScore 
    //    return(computer === "rock") ? "You win!" : "You lose!"
    //   }
    //   else if(player === "scissors"){
    //    playerScore = ++playerScore 
    //    return(computer === "paper") ? "You win!" :  "You lose!"
    //   }
    //   else return computerScore = ++computerScore  
    //}

            //let player;
            //let computer = getComputerChoice();
            //let result; 
            
   // console.log(playRound(player, computer));

    function playRound(){
        game()
        
        if(player === computer){
                    return (`Draw! ${player} & ${computer}`)
                }
                
    if(
        (player === 'rock'     && computer ===  'scissors')||
        (player === 'paper'    && computer === 'rock')||
        (player === 'scissors' && computer === 'paper')
    ){  
        
        
        playerScore ++
        roundWinner = 'Player'
        playerResult.textContent = `Your score: ${playerScore}`;
        console.log(`You're score: ${playerScore}`)
        return (`You win! ${player} beats ${computer}`)
    }   
    else if (
        (player === 'rock'     && computer === 'paper')||
        (player === 'paper'    && computer === 'scissors')||
        (player === 'scissors' && computer === 'rock')
    ){
        
        computerScore ++
        roundWinner = 'Computer'
        computerResult.textContent = `Computers score: ${computerScore}`;
        console.log(`Computers score: ${computerScore}`)
        return(` You lose! ${computer} beats ${player}`)
        
    }
    
    }


    //if(playerScore < 5 || computerScore < 5){
    //    roundWinner === 0
    //}
    //if(playerScore >= 5 && playerScore > computerScore){
    //    roundWinner === 1
    //    console.log('You win')
    //}
    //else if(computerScore >= 5 && computerScore > playerScore){
    //    roundWinner === 1
    //    console.log('you lose')
    //}

    function game(){
        
            
        //playerResult.textContent = ("Your score: " + playerScore);
        //computerResult.textContent = ("Computer's score: " + computerScore);
        if(playerScore >= 5 && playerScore > computerScore){
            finalResult.textContent = ('You win the game!');
            alert('You win the game!')
        }
        else if(computerScore >= 5 && computerScore > playerScore){
             finalResult.textContent = ('Computer wins the game!');
             alert('Computer wins the game!')
        }
    //}
    
    }

    const gameResults = document.querySelectorAll('.gameResults');
    const playerResult = document.querySelector('#playerResult');
    const computerResult = document.querySelector('#computerResult');
    const finalResult = document.querySelector('#finalResult');
    const resultTally = document.querySelector('#resultTally')

    
    
          
         
    
                    //playerResult.textContent = `Player Score: ${playerScore}`;
                    //computerResult.textContent = `Computer Score: ${computerScore}`;
                    //finalResult.textContent;
       
                    
const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiceButton = document.querySelectorAll('.choiceButton')
                    
                    
                  
                    choiceButton.forEach(button =>{
                        button.addEventListener('click', ()=>{
                            player = button.textContent;
                            computer = getComputerChoice(); 
                            playerText.textContent = `Player: ${player}`;
                            computerText.textContent = `Computer: ${computer}`;
                            resultText.textContent = playRound();
                             
        
                            
                        })
                    })

    
    //function game(){
    //    for(let i = 0; i < 5; i++){
    //        //const computer = getComputerChoice();
    //        if (playerScore === 5 || computerScore === 5)
    //                  alert('GAME OVER')
    //    //console.log(playRound(player, computer));
    //    //console.log("Your score = " + playerScore);
    //    //console.log("Computer's score = " + computerScore)    
    //        
    //        return game()
    //    }
    //
    //}
    
    const scorePlayer = document.querySelector(".playerScore");



    
    

    //if (player !== 'rock' && 
    //player !== 'paper' && 
    //player !== 'scissors'){
    //    alert('ERROR! Select a valid weapon!') 
//
    //}

        //if(playerScore > computerScore){
        //    result = (`You have defeated the machines! ${playerScore} - ${computerScore}`)
        //};
        //if(computerScore > playerScore){
        //    result.textContent = (`You lose! The machines have taken over! ${computerScore} - ${playerScore}`)
        //};
    
            
            ////// connecting DOM and adding event listener /////////////////
            
          
        
        
//////////////   Five Rounds  /////////////////////

        //for(let i =0; i < 5; i++){
//playerSelection = prompt ('choose rock, paper or scissors');  ///////    input tied to this prompt   //////////
//playerSelection = playerSelection.toLowerCase();
//const computerChoice = getComputerChoice();
//console.log(playRound(player, computer));
//console.log("Your score = " + playerScore);
//console.log("Computer's score = " + computerScore)
//}

            
          
        
            
        

          

            
    ///////////////////////   UI    ////////////////////////////////////////////////

          //const options = document.querySelectorAll('.options');
//
          //options.forEach((option) => {
          //  option.addEventListener('click', function(){
          //      alert('clicked')
          //  })
          //})
//
          //let pInput = this.textContent;
        

        //const buttons = document.getElementsByTagName('button'); 
        //        const rockBtn = buttons[0]
        //            rockBtn.addEventListener ('click', function(){
        //            console.log('rock button clicked');
        //    });
        //        const paperBtn = buttons[1]
        //            paperBtn.addEventListener ('click', function(){
        //            console.log(' paper button clicked');
        //    });
//
        //        const scissorsBtn = buttons[2]
        //            scissorsBtn.addEventListener ('click', function(){
        //            console.log(' scissors button clicked');
        //    });

            
            //buttons.forEach(button =>{
            //    button.addEventListener('click', function(){
            //        playRound(playerSelection)
            //    })
            //})

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

       

