// Test: It will create blueprint for player stats with name and running total - PASS
// Test: It will add player to PlayerStats and set runTotal to zero - PASS

function Players(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}

let playerOne = new Players("p1", 0);
let playerTwo = new Players("p2", 0);

// Test: It will take roll and add to turnTotal PASS
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


// Test: It will give player option to "hold", pass turn to player 2
// Test: If player rolls 1, turnScore = 0, playerTurn switch

