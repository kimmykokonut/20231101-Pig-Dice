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


function handleRollPlus(event) {
    rollAgain();
    // const p1Stats = gamePlayers.findPlayer(event.target.id);
    // document.querySelector("#rollCount1").innerText = player.roll;
    // console.log(p1Stats);
    // console.log(player.roll);
    // const p1StatsDiv = document.querySelector("div#player1Display"); 
    // p1StatsDiv.innerText = null;
    // const ul =document.createElement("ul");
    // Object.keys(gamePlayers.)
}

window.addEventListener("load", function() {
    let button = document.querySelector('button#startBtn');
    let rollP1 = this.document.querySelector('button#roll1');
    let rollP2 = this.document.querySelector('button#roll2');
    let holdP1 = this.document.querySelector('button#hold1');
    // button.addEventListener("click", handleRoll1); needs a new job for start button
    rollP1.addEventListener("click", handleRoll1);
    rollP2.addEventListener("click", handleRoll1);
    holdP1.addEventListener("click", holdChange);
    //show roll# and turntotal and current score to DOM
})

// function holdPassTurn() { //attached to "click " el for "hold/pass"
function holdChange() {
    playerOne.currentScore += turnScore;
    console.log(playerOne.currentScore);
    updatePlayer1SC();
    turnScore = 0;
    document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
}

function updatePlayer1SC() {
    document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
    document.querySelector('p#currentTotal1').innerText = "Current total " + playerOne.currentScore;

}

function updatePlayerTotal(player, turnScore) { //param 1= playerOne or playerTwo
    player.currentScore += turnScore;
    console.log(player.currentScore);
    if (player.currentScore > 99) {
        return "You've won!"
    } else return "Roll again?"
}