

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

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''


    
    function playRound(){
        
       if(player === computer){
        
        return "You Draw!"
       }
       else if(player === "rock"){
        playerScore ++
        return(computer=== "scissors")? "You win!" : "You lose!"
       }
       else if(player === "paper"){
        playerScore ++
        return(computer === "rock") ? "You Win!" : "You lose!"
       }
       else if(player === "scissors"){
        playerScore ++
        return(computer === "paper") ? "You win!" :  "You lose!"
       }
       else computerScore ++ 
       console.log(playerScore)
       console.log(computerScore)
    }
   


    const scorePlayer = document.querySelector(".playerScore");



    //if(
    //    (player === 'rock'     && computer ===  'scissors')||
    //    (player === 'paper'    && computer === 'rock')||
    //    (player === 'scissors' && computer === 'paper')
    //){  
    //    
    //    alert(`you win! ${player} beats ${computer}`)
    //    playerScore ++
    //    roundWinner = 'Player'
    //    console.log(`You're score is ${playerScore}`)
    //}   
    //else if (
    //    (player === 'rock'     && computer === 'paper')||
    //    (player === 'paper'    && computer === 'scissors')||
    //    (player === 'scissors' && computer === 'rock')
    //){
    //    alert (` You lose ${computer} beats ${player}`)
    //    computerScore ++
    //    roundWinner = 'Computer'
    //    console.log(`Computers score: ${computerScore}`)
    //}
    

    //if (player !== 'rock' && 
    //player !== 'paper' && 
    //player !== 'scissors'){
    //    alert('ERROR! Select a valid weapon!') 
//
    //}

//    if(player === computer){
//        alert (`You draw`)
//    }
//    if (playerScore === 5 || computerScore === 5)
//           alert('GAME OVER')
//    
//}  
    
            
            ////// connecting DOM and adding event listener /////////////////
            
            const playerText = document.querySelector('#playerText')
            const computerText = document.querySelector('#computerText')
            const resultText = document.querySelector('#resultText')
            const choiceButton = document.querySelectorAll('.choiceButton')
            let player;
            let computer = getComputerChoice();
            let result ; 


            choiceButton.forEach(button =>{
                button.addEventListener('click', ()=>{
                    player = button.textContent;
                    getComputerChoice(); 
                    playerText.textContent = `Player: ${player}`;
                    computerText.textContent = `Computer: ${computer}`;
                    resultText.textContent = playRound();

                    
                })
            })
       
        
//////////////   Five Rounds  /////////////////////

        //for(let i =0; i < 5; i++){
//playerSelection = prompt ('choose rock, paper or scissors');  ///////    input tied to this prompt   //////////
//playerSelection = playerSelection.toLowerCase();
//const computerChoice = getComputerChoice();
console.log(playRound(player, computer));
//console.log("Your score = " + playerScore);
//console.log("Computer's score = " + computerScore)
//}

            
          
        //if(playerScore > computerScore){
        //    alert(`You have defeated the machines! ${playerScore} - ${computerScore}`)
        //};
        //    if(computerScore > playerScore){
        //alert(`You lose! The machines have taken over! ${computerScore} - ${playerScore}`)
        //    };
            
        

        const body = document.querySelector('body')    
        const container = document.getElementsByClassName('container');   

            
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

       

