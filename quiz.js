console.log('teams.js loaded. Total teams:', teams.length);

let currentTeam = null;
let showingAnswer = false;

function newTeam() {
    showingAnswer = false;
    document.getElementById('answer').classList.add('hidden');

    // Pick random team
    currentTeam = teams[Math.floor(Math.random() * teams.length)];
    console.log('Picked team:', currentTeam.name);

    // Clear all positions first
    const positions = ['cf', 'lf', 'rf', 'ss', 'b2', 'b3', 'ace', 'b1', 'dh', 'c', 'team'];
    positions.forEach(pos => {
        const el = document.getElementById(pos);
        if (el) {
            const num = el.querySelector('.number');
            const label = el.querySelector('.label');
            if (num) num.textContent = pos === 'team'? '?' : '#';
            if (label && pos!== 'team') label.textContent = el.dataset.posLabel || pos.toUpperCase();
        }
    });

    // Fill in jersey numbers
    currentTeam.roster.forEach(player => {
        const el = document.getElementById(player.pos);
        if (el) {
            el.querySelector('.number').textContent = player.number;
            el.querySelector('.label').textContent = player.label;
        }
    });

    document.getElementById('team').querySelector('.number').textContent = '?';
}

function revealAnswer() {
    if (!currentTeam || showingAnswer) return;
    showingAnswer = true;

    document.getElementById('team-name').textContent = currentTeam.name;

    const rosterDiv = document.getElementById('roster');
    rosterDiv.innerHTML = '';

    currentTeam.roster.forEach(player => {
        const div = document.createElement('div');
        div.className = 'roster-item';
        div.innerHTML = `<strong>${player.label} ${player.number}</strong><br>${player.player}`;
        rosterDiv.appendChild(div);
    });

    document.getElementById('answer').classList.remove('hidden');
    document.getElementById('team').querySelector('.number').textContent = currentTeam.name.split(' ')[1].substring(0,3).toUpperCase();
}

// Add data-pos-label for mobile reset
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.pos.label').forEach(el => {
        el.dataset.posLabel = el.textContent;
    });
    newTeam();
});
