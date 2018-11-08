let startingBid;
let gameMoney;
let rolls = 0;

// Roll two six-sided dice.
function roll() {
    rolls++;
    console.log("rolls",rolls)
    let diceRoll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    console.log("diceroll",diceRoll)
    if (diceRoll === 7) {
        gameMoney = gameMoney + 4;
    }
    else {
        gameMoney = gameMoney - 1;
    }
    console.log("game money", gameMoney)
}

// Begin game.
function play() {
    startingBid = document.getElementById("bet-input").value;
    // Check that starting bid is positive.
    if (startingBid <= 0) {
        alert("Please enter a positive dollar amount as a starting bid.")
    }
    else {
        // Set current game money equal to the starting bid.
        gameMoney = startingBid;

        // Roll until money is gone.
        while(gameMoney > 0) {
            roll();
        }
        alert("gameover")
    }
}