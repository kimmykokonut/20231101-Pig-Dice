function GamePlayers() {
    this.players = {};
    this.currentId = 0;
}

GamePlayers.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

GamePlayers.prototype.addPlayer = function(player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

GamePlayers.prototype.findPlayer = function(id) {
    if (this.players[id] !== undefined) {
      return this.players[id];
    }
    return false;
  };

GamePlayers.prototype.holdP1 = function() {
    currentTotal = turnTotal + currentScore;
}

GamePlayers.prototype.holdP2 = function() {
    currentTotal = turnTotal + currentScore;
}

function Player(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}
let gamePlayers = new GamePlayers();
let playerOne = new Player("p1", 0);
let playerTwo = new Player("p2", 0);
gamePlayers.addPlayer(playerOne);
gamePlayers.addPlayer(playerTwo);

let turnScore = 0;

function rollDice() {
    // console.log("dice is rolling");
    let roll = Math.floor(Math.random() * 6) + 1; 
    return roll;
}
 
function turnTotal(roll) {
    turnScore += roll;
    console.log(turnScore);
    return turnScore;
}
function rollAgain() { //attached to "click" EL for "roll again button"
    rollDice();
}


// UI Logic
function handleRoll1(event) {
    event.preventDefault ();
    let rollValue = rollDice()
    document.querySelector('p#rollCount1').innerText = "Dice Value: " + rollValue;
    if (rollValue === 1) {
        turnScore = 0
    } else {
        turnTotal(rollValue);   
    }
    document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
}

function handleRoll2() {
    let rollValue = rollDice()
    document.querySelector('p#rollCount2').innerText = "Dice Value: " + rollValue;
    if (rollValue === 1) {
        turnScore = 0
    } else {
        turnTotal(rollValue);   
    }
    document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
}

function holdChange1() {
    playerOne.currentScore += turnScore;
    console.log(playerOne.currentScore);
    updatePlayer1SC();
    turnScore = 0;
    document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
}

function holdChange2() {
    playerTwo.currentScore += turnScore;
    console.log(playerTwo.currentScore);
    updatePlayer2SC();
    turnScore = 0
    document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
}

function updatePlayer1SC() {
    document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
    document.querySelector('p#currentTotal1').innerText = "Current total " + playerOne.currentScore;
    if (playerOne.currentScore > 99) {
        window.alert("Player 1 wins!");
    }
}

function updatePlayer2SC() {
    document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
    document.querySelector('p#currentTotal2').innerText = "Current total " + playerTwo.currentScore;
    if (playerTwo.currentScore > 99) {
        window.alert("Player 2 wins!");
    }
}

function updatePlayerTotal(player, turnScore) { //param 1= playerOne or playerTwo
    player.currentScore += turnScore;
    console.log(player.currentScore);
    if (player.currentScore > 99) {
        return "You've won!"
    } else return "Roll again?"
}


// function playerTurnString()

window.addEventListener("load", function(e) {
    e.preventDefault();
    let startButton = document.getElementById('startBtn');
    let rollP1 = this.document.querySelector('button#roll1');
    let rollP2 = this.document.querySelector('button#roll2');
    let holdP1 = this.document.querySelector('button#hold1');
    let holdP2 = this.document.querySelector('button#hold2');
    startButton.addEventListener("click", function() {
        let showTurn = document.querySelector("div#showTurn");
        showTurn.removeAttribute("class");
    });
    startButton.addEventListener("click", function() {
        let showScoreCard = document.querySelector("div#scoreSheet")
        showScoreCard.removeAttribute("class");
    });
    rollP1.addEventListener("click", handleRoll1);
    rollP2.addEventListener("click", handleRoll2);
    holdP1.addEventListener("click", holdChange1);
    holdP2.addEventListener("click", holdChange2);
});


// document.querySelector('.hidden').addEventListener('click', function(event) {
//     event.preventDefault();
//     var target = document.querySelector('.hidden');
//     if (hidden.classList.contains('active')) {
//       target.classList.remove('active');