let startingBid;
let gameMoney;
let rolls = 0;
let highestMoney;
let highestMoneyRolls;

// Roll two six-sided dice.
function roll() {
    rolls++;
    let diceRoll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    if (diceRoll === 7) {
        gameMoney = gameMoney + 4.00;
        if (gameMoney > highestMoney) {
            highestMoney = gameMoney;
            highestMoneyRolls = rolls;
        }
    }
    else {
        gameMoney = gameMoney - 1.00;
    }
}

// Begin game.
function play() {
    startingBid = parseInt(document.getElementById("bet-input").value);
    highestMoney = document.getElementById("bet-input").value;
    highestMoneyRolls = rolls;
    document.getElementById("bet-input").disabled = true;
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

        // When money is gone, display final results.
        document.getElementById("results").setAttribute("style","");
        document.getElementById("play-button").setAttribute("style","display:none");
        document.getElementById("results-starting-bet").innerHTML = `$${startingBid}`;
        document.getElementById("results-total-rolls").innerHTML = `${rolls}`;
        document.getElementById("results-highest-amount").innerHTML = `$${highestMoney}`;
        document.getElementById("results-highest-rolls").innerHTML = `${highestMoneyRolls}`;
    }
}