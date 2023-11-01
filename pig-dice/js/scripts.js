Math.floor(Math.random() * 6) + 1; //to return ranInt 1-6

// Test: It will create blueprint for player stats with name and running total - PASS
// Test: It will add player to PlayerStats and set runTotal to zero - PASS

function Players(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}

let playerOne = new Players("p1", 0);
let playerTwo = new Players("p2", 0);

// Describe rollDice()

// Test: It will output a random number 1-6 and return result as turnScore
// Code: rollDice(Math.floor(Math.random() * 6) + 1;)
// Expected Output: number between 1 and 6

// Test: It will give player option to roll again if result is 2-6
// Code: rollDice()=> 3,
// Expected Output: trigger rollDice() again

// Test: It will give player option to "hold", pass turn to player 2
// Code: rollDice()=> 
// Expected Output: hold? y/n

// Test: If player rolls 1, turnScore = 0, playerTurn switch
// Code: rollDice()
// Expected Output: 1, go to playerTurn()
let turnScore = 0;

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1; 
    console.log(roll);
    turnScore += roll;
    return turnScore;   
}
// function turnScore() {
//     let turnScore = 0;
//     turnScore += roll;
//     return turnScore;
// }
