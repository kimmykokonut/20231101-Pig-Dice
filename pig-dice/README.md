#Pig Dice Pair Prompt
_by Grant Abel & Kim Robinson_

####Description
Write a program where two users can play Pig Dice against each other

##TDD Testing

Describe constructor function for PlayerStats

Test: It will create blueprint for player stats with name/id and running total
Code: function PlayerStats(name, runTotal)
Expected Output: PlayerStats {name: , runTotal: }

Test: It will add player to PlayerStats and set runTotal to zero
Code: let player1 = newPlayerStats("Player 1", 0)
Expected Output: player1 = {name: "Player 1", runTotal: 0}

Describe rollDice()

Test: It will output a random number 1-6 and return result as turnScore
Code: rollDice(Math.floor(Math.random() * 6) + 1;)
Expected Output: number between 1 and 6

Describe turnTotal()

Test: It will take roll and add to turnTotal
Code: function turnTotal(roll) 

Describe rollAgain()

Test: It will give player option to roll again if result is 2-6
Code: rollAgain,
Expected Output: trigger rollDice() again

Test: It will give player option to "hold", pass turn to player 2
Code: rollAgain() 
Expected Output: hold? y/n

Test: If player rolls 1, turnScore = 0, playerTurn switch
Code: rollAgain()
Expected Output: 1, go to playerTurn()

Describe updatePlayerTotal()

XTest: It will take result of final turnTotal()  and add to Player*.currentScore
Code: updatePlayerTotal(playerOne, 5)
Expected Output: player1 = {name: "player 1", currentScore: 5}

Test: It will trigger gameEnd() when playerTotal reaches > 99
Code: 
Expected Output:

Describe playerTurn()

Test: It will decide who is active player and score will be added to their runTotal
Code: playerTurn()
Expected Output: ?

Describe gameEnd()

Test: It will determine winner based on runTotal >99
Code: gameEnd()
Expected Output: ?

Describe: OnClick of Start button, player 1 prompted for first roll

Test: Click event listener for start button
Code: Initialize gameplay and complete roll 1
Expected output: rollDice()

Test: Didsplay roll points for player 1
Code: 
Result: 

#TODO:
give start button a job
git play again button a job
hide game until start button pushed and announce P1 turn first.
hide play again until winner announced

make player turn switches for action and alert on page for whose turn it is
refactor functions so p1 p2 could do either. turn? switch? bolean?
