function GamePlayers() {
    this.players = {};
    this.currentId = 0;
}

GamePlayers.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

GamePlayers.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

GamePlayers.prototype.holdP1 = function () {
    currentTotal = turnTotal + currentScore;
}

GamePlayers.prototype.holdP2 = function () {
    currentTotal = turnTotal + currentScore;
}

function Player(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}
let gamePlayers = new GamePlayers();
let playerOne = new Player("Player 1", 0);
let playerTwo = new Player("Player 2", 0);
gamePlayers.addPlayer(playerOne);
gamePlayers.addPlayer(playerTwo);

let currentPlayer = playerOne;

function changePlayer() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        console.log(currentPlayer);
    } else {
        currentPlayer = playerOne;
        console.log(currentPlayer);
    }
}

let turnScore = 0;

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

function turnTotal(roll) {
    turnScore += roll;
    console.log(turnScore);
    return turnScore;
}
function rollAgain() { 
    rollDice();
}

// UI Logic
function handleRoll() {
    document.querySelector("h2#p1First").innerText = "";
    document.querySelector('p#error1').innerText = "";
    let rollValue = rollDice()
    document.querySelector('p#rollCount1').innerText = currentPlayer.name + "Dice Value: " + rollValue;
    if (rollValue === 1) {
        turnScore = 0
        changePlayer();
        document.querySelector('p#error1').innerText = "You rolled a 1! Turn OVER! Click Hold";
    } else {
        turnTotal(rollValue);
    }
    document.querySelector('p#turnTotal1').innerText = currentPlayer.name + "Turn total: " + turnScore;
    document.querySelector('p#whoseTurn').innerText = "It is " + currentPlayer.name + " turn! Click Hold to end turn and other player click Roll";
}

function holdChange() {
    currentPlayer.currentScore += turnScore;
    console.log(currentPlayer.currentScore);
    updatePlayerScoreTotal();
    turnScore = 0;
    changePlayer();
    // document.getElementById('p1Turn').style.display = currentPlayer === playerOne ? 'block' : 'none';
    // document.getElementById('p2Turn').style.display = currentPlayer === playerTwo ? 'block' : 'none';
}

function updatePlayerScoreTotal() {
    if (currentPlayer === playerOne) {
        document.querySelector('p#currentTotal1').innerText = "Current total " + playerOne.currentScore;
    }
    if (currentPlayer === playerTwo) {
        document.querySelector('p#currentTotal2').innerText = "Current total " + playerTwo.currentScore;
    }
    if (currentPlayer.currentScore > 99) {
        let showWin = document.querySelector("div.finalHidden");
        showWin.removeAttribute("class");
        document.querySelector('h3#winner').innerText = currentPlayer.name + " wins!";
    }
}

    window.addEventListener("load", function () {
        const startButton = document.getElementById('startBtn');
        startButton.addEventListener("click", function (event) {
            event.preventDefault();
            let showScoreCard = document.querySelector("div#scoreSheet");
            showScoreCard.removeAttribute("class");
        });
        const rollP1 = this.document.querySelector('button#roll1');
        const holdP1 = this.document.querySelector('button#hold1');  
        rollP1.addEventListener("click", handleRoll);
        holdP1.addEventListener("click", holdChange);
        const resetButton = document.getElementById('reset');
        resetButton.addEventListener("click", function() {
            window.location.reload(true);
        });
    });