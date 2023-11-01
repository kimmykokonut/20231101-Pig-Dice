Math.floor(Math.random() * 6) + 1; //to return ranInt 1-6

// Test: It will create blueprint for player stats with name and running total - PASS
// Test: It will add player to PlayerStats and set runTotal to zero - PASS

function Players(name, currentScore) {
    this.name = name;
    this.currentScore = currentScore;
}

let playerOne = new Players("p1", 0);
let playerTwo = new Players("p2", 0);


