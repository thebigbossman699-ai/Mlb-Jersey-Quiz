// ======================================================
// MLB Roster Quiz
// script.js - Part 1 (Initialization & Game Setup)
// ======================================================

// ---------- Game State ----------
let teams = [];
let remainingTeams = [];
let currentTeam = null;

let guessedPlayers = [];
let revealed = false;

let score = 0;
let totalCorrect = 0;
let totalGuesses = 0;
let teamsCompleted = 0;

// ---------- DOM ----------
const teamName = document.getElementById("teamName");

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");

const scoreDisplay = document.getElementById("score");
const correctDisplay = document.getElementById("correct");
const remainingDisplay = document.getElementById("remaining");
const accuracyDisplay = document.getElementById("accuracy");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const message = document.getElementById("message");

const correctList = document.getElementById("correctList");
const missedList = document.getElementById("missedList");

const revealButton = document.getElementById("revealButton");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");

const gameOver = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");
const finalCorrect = document.getElementById("finalCorrect");
const finalAccuracy = document.getElementById("finalAccuracy");
const restartButton = document.getElementById("restartButton");

// ---------- Startup ----------
window.addEventListener("DOMContentLoaded", initGame);

async function initGame() {

    try {

        if (typeof loadTeams === "function") {
            // Live API version
            teams = await loadTeams();
        } else {

            // Local JSON version
            const response = await fetch("teams.json");
            teams = await response.json();

        }

  catch(error){
    console.error(error);
    showMessage(error.message);
}
    remainingTeams = [...teams];

    shuffle(remainingTeams);

    loadNextTeam();

}

// ---------- Shuffle ----------
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

// ---------- Load Team ----------
function loadNextTeam() {

    if (remainingTeams.length === 0) {

        endGame();

        return;

    }

    currentTeam = remainingTeams.pop();

    guessedPlayers = [];

    revealed = false;

    correctList.innerHTML = "";

    missedList.innerHTML = "";

    guessInput.value = "";

    message.textContent = "";

    teamName.textContent = currentTeam.team;

    updateProgress();

    updateScoreboard();

    guessInput.focus();

}

// ---------- Update Scoreboard ----------
function updateScoreboard() {

    scoreDisplay.textContent = score;

    correctDisplay.textContent = totalCorrect;

    remainingDisplay.textContent = currentTeam.players.length - guessedPlayers.length;

    if (totalGuesses === 0) {

        accuracyDisplay.textContent = "100%";

    } else {

        accuracyDisplay.textContent =
            Math.round((totalCorrect / totalGuesses) * 100) + "%";

    }

}

// ---------- Progress ----------
function updateProgress() {

    const total = currentTeam.players.length;

    const guessed = guessedPlayers.length;

    progressText.textContent = `${guessed} / ${total} Players`;

    progressFill.style.width = `${(guessed / total) * 100}%`;

}

// ---------- Keyboard ----------
guessInput.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        submitGuess.click();

    }

});
// ======================================================
// MLB Roster Quiz
// script.js - Part 2 (Guess Checking & Scoring)
// ======================================================

// ---------- Button Events ----------
submitGuess.addEventListener("click", checkGuess);

revealButton.addEventListener("click", revealAnswers);

nextButton.addEventListener("click", function () {

    if (!revealed) {

        if (!confirm("You haven't revealed the answers yet. Continue?")) {
            return;
        }

    }

    teamsCompleted++;

    loadNextTeam();

});

skipButton.addEventListener("click", function () {

    revealAnswers();

});

// ---------- Guess Checking ----------
function checkGuess() {

    if (!currentTeam) return;

    const guess = guessInput.value.trim().toLowerCase();

    if (guess === "") return;

    totalGuesses++;

    // Duplicate guess?
    if (
        guessedPlayers.some(
            p => p.name.toLowerCase() === guess
        )
    ) {

        message.textContent = "Already guessed!";
        guessInput.value = "";
        updateScoreboard();
        return;

    }

    // Find player
    const player = currentTeam.players.find(
        p => p.name.toLowerCase() === guess
    );

    if (player) {

        guessedPlayers.push(player);

        score++;
        totalCorrect++;

        message.textContent = "✅ Correct!";

        addCorrectPlayer(player);

    } else {

        message.textContent = "❌ Incorrect";

    }

    guessInput.value = "";

    updateProgress();
    updateScoreboard();

    // Finished the roster?
    if (guessedPlayers.length === currentTeam.players.length) {

        revealed = true;

        message.textContent = "🎉 Team completed!";

        revealButton.disabled = true;

    }

    guessInput.focus();

}

// ---------- Correct List ----------
function addCorrectPlayer(player) {

    const li = document.createElement("li");

    li.textContent = `${player.name} — ${player.position}`;

    correctList.appendChild(li);

}

// ---------- Remaining Players ----------
function getRemainingPlayers() {

    return currentTeam.players.filter(player => {

        return !guessedPlayers.some(g =>

            g.name.toLowerCase() === player.name.toLowerCase()

        );

    });

}

// ---------- Flash Message ----------
function flashMessage(text, color) {

    message.textContent = text;

    message.style.color = color;

    setTimeout(() => {

        message.style.color = "";

    }, 1200);

}

// Replace message text with colored version
const oldCheckGuess = checkGuess;

checkGuess = function () {

    if (!currentTeam) return;

    const guess = guessInput.value.trim().toLowerCase();

    if (guess === "") return;

    totalGuesses++;

    if (guessedPlayers.some(p => p.name.toLowerCase() === guess)) {

        flashMessage("Already guessed!", "#facc15");

        guessInput.value = "";

        updateScoreboard();

        return;

    }

    const player = currentTeam.players.find(

        p => p.name.toLowerCase() === guess

    );

    if (player) {

        guessedPlayers.push(player);

        score++;

        totalCorrect++;

        flashMessage("Correct!", "#22c55e");

        addCorrectPlayer(player);

    } else {

        flashMessage("Incorrect", "#ef4444");

    }

    guessInput.value = "";

    updateProgress();

    updateScoreboard();

    if (guessedPlayers.length === currentTeam.players.length) {

        revealed = true;

        revealButton.disabled = true;

        flashMessage("Roster Complete!", "#3b82f6");

    }

    guessInput.focus();

};
// ===============================
// PART 3: Reveal, Next Team, Restart,
// Statistics, and Helper Functions
// ===============================


// Reveal all answers
function revealAnswers() {
    const answerBox = document.getElementById("answerBox");

    if (!currentTeam || !currentRoster.length) {
        answerBox.innerHTML = "No answers available.";
        return;
    }

    let html = `
        <h3>${currentTeam.name} Lineup</h3>
        <div class="answers">
    `;

    currentRoster.forEach(player => {
        html += `
            <div class="answer-card">
                <strong>${player.position}</strong>
                <p>${player.name}</p>
            </div>
        `;
    });

    html += "</div>";

    answerBox.innerHTML = html;
    answerBox.style.display = "block";

    gameStats.reveals++;

    saveStats();
}


// Move to next team
function nextTeam() {

    if (teamsCompleted >= totalTeams) {
        endGame();
        return;
    }

    loadRandomTeam();

    document.getElementById("guessInput").value = "";

    document.getElementById("answerBox").style.display = "none";

    updateProgress();

    updateScoreDisplay();
}


// Skip current team
function skipTeam() {

    if (!currentTeam) return;


    missedPlayers.push({
        team: currentTeam.name,
        players: currentRoster
    });


    gameStats.skips++;

    saveStats();

    nextTeam();
}



// Restart game
function restartGame() {

    score = 0;

    correctGuesses = 0;

    wrongGuesses = 0;

    teamsCompleted = 0;

    guessedPlayers = [];

    missedPlayers = [];

    gameStats = {
        gamesPlayed: gameStats.gamesPlayed + 1,
        totalQuestions: 0,
        correct: 0,
        wrong: 0,
        reveals: 0,
        skips: 0
    };


    saveStats();


    document.getElementById("answerBox").style.display = "none";


    loadRandomTeam();


    updateScoreDisplay();

    updateProgress();
}



// End game screen
function endGame() {

    const accuracy = calculateAccuracy();


    document.getElementById("teamName").innerHTML =
        "Game Complete";


    document.getElementById("question").innerHTML =
        `
        Final Score: ${score}/${totalTeams}
        <br>
        Accuracy: ${accuracy}%
        `;


    document.getElementById("guessInput").disabled = true;


    saveStats();
}



// Calculate accuracy
function calculateAccuracy() {

    if (totalGuesses === 0) {
        return 0;
    }


    return Math.round(
        (correctGuesses / totalGuesses) * 100
    );
}



// Update statistics display
function updateStatsDisplay() {

    const statsBox =
        document.getElementById("stats");


    if (!statsBox) return;


    const accuracy =
        calculateAccuracy();


    statsBox.innerHTML =
    `
    <h3>Statistics</h3>
    Games Played: ${gameStats.gamesPlayed}
    <br>
    Correct: ${gameStats.correct}
    <br>
    Wrong: ${gameStats.wrong}
    <br>
    Accuracy: ${accuracy}%
    <br>
    Reveals: ${gameStats.reveals}
    <br>
    Skips: ${gameStats.skips}
    `;
}



// Save statistics
function saveStats() {

    localStorage.setItem(
        "mlbQuizStats",
        JSON.stringify(gameStats)
    );

}



// Load saved statistics
function loadStats() {

    const saved =
        localStorage.getItem("mlbQuizStats");


    if (saved) {

        gameStats =
            JSON.parse(saved);

    }

}



// Reset saved statistics
function clearStats() {

    localStorage.removeItem(
        "mlbQuizStats"
    );


    gameStats = {

        gamesPlayed: 0,

        totalQuestions: 0,

        correct: 0,

        wrong: 0,

        reveals: 0,

        skips: 0

    };


    updateStatsDisplay();

}



// Keyboard controls
document.addEventListener(
"keydown",
function(event){


    // Enter = submit guess

    if(event.key === "Enter"){

        const input =
            document.getElementById("guessInput");


        if(document.activeElement === input){

            checkGuess();

        }

    }


    // R = reveal answers

    if(event.key.toLowerCase() === "r"){

        revealAnswers();

    }


    // N = next team

    if(event.key.toLowerCase() === "n"){

        nextTeam();

    }


    // S = skip team

    if(event.key.toLowerCase() === "s"){

        skipTeam();

    }


});



// Capitalize names
function formatName(name){

    return name
    .toLowerCase()
    .replace(/\b\w/g, letter =>
        letter.toUpperCase()
    );

}



// Remove duplicate players
function removeDuplicates(players){

    return players.filter(
        (player,index,self)=>

        index === self.findIndex(
            p =>
            p.name === player.name
        )

    );

}



// Shuffle array helper
function shuffle(array){

    return array.sort(
        () => Math.random() - 0.5
    );

}



// Random number helper
function randomNumber(min,max){

    return Math.floor(
        Math.random() *
        (max-min+1)
    ) + min;

}



// Display missed players
function showMissedPlayers(){

    const box =
        document.getElementById(
            "missedPlayers"
        );


    if(!box) return;


    if(missedPlayers.length === 0){

        box.innerHTML =
        "No missed players.";

        return;

    }


    let html =
    "<h3>Missed Players</h3>";


    missedPlayers.forEach(team=>{


        html +=
        `
        <h4>${team.team}</h4>
        `;


        team.players.forEach(player=>{


            html +=
            `
            ${player.position} -
            ${player.name}
            <br>
            `;


        });


    });


    box.innerHTML = html;

}



// Initialize statistics on page load
window.addEventListener(
"load",
function(){

    loadStats();

    updateStatsDisplay();

});
