const team1Name = document.getElementById('team1Name')
const team2Name = document.getElementById('team2Name')

var swapTog = !true;

function update() {
    const data = { team1Name: team1Name.value, team2Name: team2Name.value }
    nodecg.sendMessage('updateTeams', data)
}

function swapTeams() {
    if (swapTog != true) {
        const data = { team1Name: team1Name.value, team2Name: team2Name.value }
        nodecg.sendMessage('swapTeams', data)
        swapTog = true;
    } else {
        update()
        swapTog = false;
    }
}