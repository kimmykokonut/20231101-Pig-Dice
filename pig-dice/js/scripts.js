// Test: It will create blueprint for player stats with name and running total - PASS
// Test: It will add player to PlayerStats and set runTotal to zero - PASS

function Players(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}

let playerOne = new Players("p1", 0);
let playerTwo = new Players("p2", 0);

// Test: It will take roll and add to turnTotal PASS
// Test: If player rolls 1, turnScore = 0, playerTurn switch PASS
// Test: It will give player option to roll again if result is 2-6 - PASS 

let turnScore = 0;

function rollDice() {
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

function holdPassTurn() { //attached to "click " el for "hold/pass"
    playerSwitch?
}

function updatePlayerTotal(player, turnScore) { //param 1= playerOne or playerTwo
    player.currentScore += turnScore;
    console.log(player.currentScore);
}


Test: It will take result of final rollDice() when player chooses hold/1 and add to PlayerStats[1]
Code: updatePlayerTotal(5)
Expected Output: player1 = {name: "player 1", runTotal: 5}



// Test: It will give player option to "hold", pass turn to player 2

