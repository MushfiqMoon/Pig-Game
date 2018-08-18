/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;

init()


/*========BUTTON ROLL
===================*/
document.querySelector(".btn-roll").addEventListener("click", function () {

    if (gamePlaying) {
        // 1. Rendom Number
        var dice = Math.floor(Math.random() * 6 + 1);

        // 2. Display the result
        var diceDom = document.querySelector(".dice");

        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";


        // 3. Update the round score if it isn,t one
        if (dice !== 1) {

            // Add score
            roundScore += dice;

            // Update the UI
            document.getElementById('current-' + activePlayer).textContent = roundScore;

        } else {

            // Next Player
            nextPlayer()
        }
    } //gamePlaying

})

/*========BUTTON HOLD
===================*/
document.querySelector(".btn-hold").addEventListener("click", function () {

    if (gamePlaying) {
        // Add Current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // Player won the Game or not
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!!"
            document.querySelector(".dice").style.display = 'none';

            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false; //gamePlaying FALSE
        } else {
            // Next Player
            nextPlayer()
            // setInterval(nextPlayer,2000)
        }
    } //gamePlaying

})


/*========BUTTON NEW
===================*/
document.querySelector(".btn-new").addEventListener("click", init)


/*======== All FUNCTIONS
===================*/

function nextPlayer() {
    // Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    // Update the UI
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = 'none';

}

function init() {

    scores = [0, 0];

    activePlayer = 0;

    roundScore = 0;

    gamePlaying = true;

    document.querySelector(".dice").style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById("name-0").textContent = "Player 1"
    document.getElementById("name-1").textContent = "Player 2"

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}














