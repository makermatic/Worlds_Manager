const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

nodecg.listenFor('updateTeams', (data) => {
    team1Name.innerHTML = data.team1Name
    team2Name.innerHTML = data.team2Name
        // changeTeam1Image()
        // changeTeam2Image()
})

nodecg.listenFor('swapTeams', (data) => {
    team2Name.innerHTML = data.team1Name
    team1Name.innerHTML = data.team2Name
        // changeTeam1Image()
        // changeTeam2Image()
})