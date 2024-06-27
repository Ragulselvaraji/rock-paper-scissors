
const initGame=() => {
      const startGame= confirm("shall we play rock,paper, scissors");
      startGame ? playGame() : alert("Okay ,maybe next time");
};
// game flow


const playGame = () => {
    while(true){
    let  playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if(playerChoice ===""){
       invalidChoice();
       continue;
    }
       if(!playerChoice){
        decidedNotToPlay();
        break;
       }
       playerChoice = evaluatePlayerChoice(playerChoice);
       if(!playerChoice){
        invalidChoice();
       continue;
       }
       const computerChoice = getComputerChoice();
       const result = determineWinner(playerChoice,computerChoice);
       displayResult(result);
       if(askToPlayAgain()){
        continue;
       }
       else{
        thanksForPlaying();
        break;
       }

    }

    }

const getPlayerChoice = () =>{
    return  prompt("Enter your choice (rock , paper , scissors");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowercase();
    }
    else{
        return false;
    }
    };

const invalidChoice = () => {
    alert("Invalid choice ,please try again");
};

const decidedNotToPlay = () => {
    alert("I think you changed your mind , maybe next time");
};

const evaluatePlayerChoice = (playerChoice) => {
    if( 
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    )
    {
        return playerChoice;
    }
    else{
        return false;
    }
};

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random()*3);
    rpsArray = ["rock","paper","scissors"];
    return rpsArray[randomNumber];
};

const  determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };

  const displayResult = (result) => {
    return alert(result);
  };

  const askToPlayAgain = () => {
    return confirm("Lets play again");
  };

  const thanksForPlaying = () => {
    return alert("Thanks for playing");
  };

  initGame();



