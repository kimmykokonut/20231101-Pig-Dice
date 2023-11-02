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
// THIS FUNCTION NEVER CALLED
// GamePlayers.prototype.findPlayer = function (id) {
//     if (this.players[id] !== undefined) {
//         return this.players[id];
//     }
//     return false;
// };

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

function rollDice() {//?need param or not?
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

// function changePlayer() {
//     switch (playerOne.id) {
//         case 1:
//           playerTwo.id = 2;
//           break;
//         case 2:
//           playerOne.id = 1;
//           break;
// }

// UI Logic
function handleRoll() {
    let rollValue = rollDice()
    document.querySelector('p#whoseTurn').innerText = "It is " + currentPlayer.name + "turn!";
    document.querySelector('p#rollCount1').innerText = currentPlayer.name + " Dice Value: " + rollValue;
    if (rollValue === 1) {
        turnScore = 0
        changePlayer();
        window.alert("You rolled a 1! Turn over");
        document.querySelector('p#error1').innerText = "You rolled a 1! Turn OVER";
    } else {
        turnTotal(rollValue);
    }
    document.querySelector('p#turnTotal1').innerText = currentPlayer.name + "Turn total " + turnScore;
}

// function handleRoll2() {
//     let rollValue = rollDice()
//     document.querySelector('p#rollCount2').innerText = "Dice Value: " + rollValue;
//     if (rollValue === 1) {
//         turnScore = 0
//     } else {
//         turnTotal(rollValue);   
//     }
//     document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
// }

function holdChange() { //?param needed?
    currentPlayer.currentScore += turnScore;
    console.log(currentPlayer.currentScore);
    updatePlayerScoreTotal();
    turnScore = 0;
    changePlayer();
    document.getElementById('p1Turn').style.display = currentPlayer === playerOne ? 'block' : 'none';
    document.getElementById('p2Turn').style.display = currentPlayer === playerTwo ? 'block' : 'none';
}
// function holdChange2() {
//     playerTwo.currentScore += turnScore;
//     console.log(playerTwo.currentScore);
//     updatePlayer2SC();
//     turnScore = 0
//     document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
// }

function updatePlayerScoreTotal() {
    if (currentPlayer === playerOne) {
        document.querySelector('p#currentTotal1').innerText = "Current total " + playerOne.currentScore;
    }
    if (currentPlayer === playerTwo) {
        document.querySelector('p#currentTotal2').innerText = "Current total " + playerTwo.currentScore;
    }
    if (currentPlayer.currentScore > 99) {
        window.alert(currentPlayer + " wins!");
    }
}

    // function updatePlayer1SC() {
    //     document.querySelector('p#turnTotal1').innerText = "Turn total " + turnScore;
    //     document.querySelector('p#currentTotal1').innerText = "Current total " + playerOne.currentScore;
    //     if (playerOne.currentScore > 99) {
    //         window.alert("Player 1 wins!");
    //     }
    // }

    // function updatePlayer2SC() {
    //     document.querySelector('p#turnTotal2').innerText = "Turn total " + turnScore;
    //     document.querySelector('p#currentTotal2').innerText = "Current total " + playerTwo.currentScore;
    //     if (playerTwo.currentScore > 99) {
    //         window.alert("Player 2 wins!");
    //     }
    // }
    //THIS FUNCTION NECESSARY?
    // function updatePlayerTotal(currentPlayer, turnScore) { //param 1= playerOne or playerTwo
    //     currentPlayer.currentScore += turnScore;
    //     console.log(currentPlayer.currentScore);
    //     if (currentPlayer.currentScore > 99) {
    //         return "You've won!" //??
    //     } else return "Roll again?"
    // }

    window.addEventListener("load", function () {
        let startButton = document.getElementById('startBtn');
        startButton.addEventListener("click", function (event) {
            event.preventDefault();
            let showScoreCard = document.querySelector("div#scoreSheet");
            showScoreCard.removeAttribute("class");
        });
        let rollP1 = this.document.querySelector('button#roll1');
        // let rollP2 = this.document.querySelector('button#roll2');
        let holdP1 = this.document.querySelector('button#hold1');
        // let holdP2 = this.document.querySelector('button#hold2');
        // startButton.addEventListener("click", function () {
        //     let showTurn = document.querySelector("div#showTurn");
        //     showTurn.removeAttribute("class");
        rollP1.addEventListener("click", handleRoll);
        // rollP2.addEventListener("click", handleRoll2);
        holdP1.addEventListener("click", holdChange);
        // holdP2.addEventListener("click", holdChange2);
    });