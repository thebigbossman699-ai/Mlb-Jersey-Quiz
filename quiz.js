let currentTeam = null;

const positions = ['cf', 'lf', 'rf', 'ss', 'b2', 'b3', 'ace', 'b1', 'dh', 'c'];

function getRandomTeam() {
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
}

function loadTeam(team) {
    currentTeam = team;
    
    // Fill in each position number
    team.roster.forEach(player => {
        const numElement = document.getElementById(`${player.pos}-num`);
        if (numElement) {
            numElement.textContent = player.number;
        }
    });

    // Reset team box to?
    document.getElementById('team-num').textContent = '?';
    
    // Hide answer
    document.getElementById('answer').classList.add('hidden');
}

function revealAnswer() {
    if (!currentTeam) return;
    
    // Show team name in TEAM box
    document.getElementById('team-num').textContent = currentTeam.name.split(' ').pop().substring(0, 3).toUpperCase();
    
    // Show answer section
    const answerDiv = document.getElementById('answer');
    const teamNameEl = document.getElementById('team-name');
    const rosterEl = document.getElementById('roster');
    
    teamNameEl.textContent = currentTeam.name;
    rosterEl.innerHTML = '';
    
    currentTeam.roster.forEach(player => {
        const div = document.createElement('div');
        div.className = 'roster-item';
        div.innerHTML = `<strong>${player.label} ${player.number}</strong> - ${player.player}`;
        rosterEl.appendChild(div);
    });
    
    answerDiv.classList.remove('hidden');
}

// Hook up buttons
document.getElementById('reveal-btn').addEventListener('click', revealAnswer);
document.getElementById('new-btn').addEventListener('click', () => {
    loadTeam(getRandomTeam());
});

// Load first team on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTeam(getRandomTeam());
});
