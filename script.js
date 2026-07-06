const teams = [
    { name: "Diamondbacks", answer: 123 }, // Replace with actual logic
    // Add the other 29 teams here
];

const grid = document.getElementById('game-grid');

teams.forEach(team => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `<h3>${team.name}</h3>`;
    card.onclick = () => alert(`Guess the number for ${team.name}`);
    grid.appendChild(card);
});
