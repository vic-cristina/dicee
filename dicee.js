// Before Clicking

let dice1 = document.getElementsByClassName("img1")[0];
let dice2 = document.getElementsByClassName("img2")[0];

dice1.setAttribute("src", "images/dice6.png");
dice2.setAttribute("src", "images/dice6.png");

let theWinnerIs = (document.getElementById("theWinnerIs").textContent = "Roll");

// onClick function call in HTML

/** *
 * This function rolls the dice
 */
function roll() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    theWinnerIs = document.getElementById("theWinnerIs").textContent =
      "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    theWinnerIs = document.getElementById("theWinnerIs").textContent =
      "Player 2 Wins!";
  } else {
    theWinnerIs = document.getElementById("theWinnerIs").textContent = "Draw!";
  }
}

/**Challenge dos devs
 * 1. 2 Roll buttons;
 * 2. 2 dice per player;
 */
