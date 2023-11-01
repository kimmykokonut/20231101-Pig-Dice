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

function Player(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}
let playerOne = new Player("p1", 0);
let playerTwo = new Player("p2", 0);
GamePlayers.addPlayer(playerOne);
GamePlayers.addPlayer(playerOne);


let turnScore = 0;

function rollDice() {
    console.log("dice is rolling");
    let roll = Math.floor(Math.random() * 6) + 1; 
    console.log("Dice role is " + roll);
    if (roll === 1) {
        turnScore = 0
        return "Turn over."
    } else {
    return turnTotal(roll);   
    }
}
function turnTotal(roll) {
    turnScore += roll;
    return turnScore;
}
function rollAgain() { //attached to "click" EL for "roll again button"
    rollDice();
}
// function holdPassTurn() { //attached to "click " el for "hold/pass"
//     playerSwitch?
function updatePlayerTotal(player, turnScore) { //param 1= playerOne or playerTwo
    player.currentScore += turnScore;
    console.log(player.currentScore);
    if (player.currentScore > 99) {
        return "You've won!"
    } else return "Roll again?"
}

function playerSwitch()

window.addEventListener("load", function() {
    // this.document.querySelector("div#intro").addEventListener("submit", ***);
})