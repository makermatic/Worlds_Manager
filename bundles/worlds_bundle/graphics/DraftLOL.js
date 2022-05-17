const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

nodecg.listenFor('updateTeams', (data) => {
    team1Name.innerHTML = data.team1Name
    team2Name.innerHTML = data.team2Name
})

nodecg.listenFor('swapTeams', (data) => {
    team2Name.innerHTML = data.team1Name
    team1Name.innerHTML = data.team2Name
})

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Draftlol.png")';
    team1Name.style.color = '#460000'
    team2Name.style.color = '#460000'
})

// Style Listeners
nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Draftlol.png")';
    team1Name.style.color = '#d99500'
    team2Name.style.color = '#d99500'
})