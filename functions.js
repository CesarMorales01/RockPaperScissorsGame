const myArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const scoreInfo=document.getElementById('scoreInfo');
const title_score_player=document.getElementById('score_player');
const title_score_pc=document.getElementById('score_pc');

function check_gameover() {
  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
    return
  }
}

function setFinalMessage() {
  const modal_title=document.getElementById("modal_title");
  if(playerScore > computerScore){
    modal_title.innerHTML = 'You won!';
  }else{
    modal_title.innerHTML = 'You lost!';
  }
}

function restart_game() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = '';
  title_score_player.textContent = '0';
  title_score_pc.textContent = '0';
  document.getElementById("player_choice").innerText='';
  document.getElementById("pc_choice").innerText='';
  openEndgameModal();
}


function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

  function openEndgameModal() {
    document.getElementById("btn_modal").click();
  } 

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function set_option(selected){
  let playerSelection=selected;
  let computerSelection=computerPlay();
  document.getElementById("player_choice").innerText=playerSelection;
  document.getElementById("pc_choice").innerText=computerSelection;
  playRound(playerSelection, computerSelection);
  updateScore();
  check_gameover();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
      }
      if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
      ) {
        playerScore++;
        roundWinner = 'player';
      }
      if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
        computerScore++;
        roundWinner = 'computer';
      }
      console.log("Your selection was "+playerSelection+". The computer selection was "+computerSelection+". The winner is "+roundWinner);
      console.log("Player: "+playerScore+". Computer: "+computerScore);
}

function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!';
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!';
    }
    title_score_player.innerHTML=playerScore;
    title_score_pc.innerHTML=computerScore; 
}
