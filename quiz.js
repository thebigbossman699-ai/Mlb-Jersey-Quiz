let currentTeam = null;

function getRandomTeam() {
    if (typeof teams === 'undefined') {
        console.error('teams.js not loaded');
        return null;
    }
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
}

function loadTeam(team) {
    if (!team) return;
    currentTeam = team;
    team.roster.forEach(player => {
        const numElement = document.getElementById(`${player.pos}-num`);
        if (numElement) numElement.textContent = player.number;
    });
    document.getElementById('team-num').textContent = '?';
    document.getElementById('answer').classList.add('hidden');
}

function revealAnswer() {
    if (!currentTeam) return;
    document.getElementById('team-num').textContent = currentTeam.name.split(' ').pop().substring(0, 3).toUpperCase();
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

document.getElementById('reveal-btn').addEventListener('click', revealAnswer);
document.getElementById('new-btn').addEventListener('click', () => {
    loadTeam(getRandomTeam());
});

document.addEventListener('DOMContentLoaded', () => {
    loadTeam(getRandomTeam());
});
