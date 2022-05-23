const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');


nodecg.listenFor('updateTeams', (data) => {
    team1Name.innerHTML = data.team1Name
    team2Name.innerHTML = data.team2Name
})

nodecg.listenFor('swapTeams', (data) => {
    team2Name.innerHTML = data.team1Name
    team1Name.innerHTML = data.team2Name
})

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    RCaster.innerHTML = data.rightCaster
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster
})


// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Draftlol.png")';
    team1Name.style.color = '#460000'
    team2Name.style.color = '#460000'
})

nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Draftlol.png")';
    team1Name.style.color = '#d99500'
    team2Name.style.color = '#d99500'
})

nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Draftlol.png")';
    team1Name.style.color = '#256154'
    team2Name.style.color = '#256154'
})