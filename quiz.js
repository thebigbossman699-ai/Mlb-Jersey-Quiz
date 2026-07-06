let currentTeam = null;

function loadRandomTeam() {
    currentTeam = TEAMS[Math.floor(Math.random() * TEAMS.length)];
    
    // Set numbers on diamond
    document.querySelectorAll('.pos').forEach(pos => {
        const position = pos.dataset.pos;
        pos.querySelector('.number').textContent = currentTeam.numbers[position];
    });
    
    // Hide answer
    document.getElementById('answer').classList.add('hidden');
}

function revealAnswer() {
    if (!currentTeam) return;
    
    document.getElementById('team-name').textContent = currentTeam.team;
    
    const rosterDiv = document.getElementById('roster');
    rosterDiv.innerHTML = '';
    
    Object.keys(currentTeam.numbers).forEach(pos => {
        const item = document.createElement('div');
        item.className = 'roster-item';
        item.innerHTML = `<strong>${pos} #${currentTeam.numbers[pos]}</strong><br>${currentTeam.players[pos]}`;
        rosterDiv.appendChild(item);
    });
    
    document.getElementById('answer').classList.remove('hidden');
}

document.getElementById('new-team').addEventListener('click', loadRandomTeam);
document.getElementById('reveal').addEventListener('click', revealAnswer);

// Load first team on page load
loadRandomTeam();
