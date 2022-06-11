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

// Team Name Shifter Listener
document.addEventListener('keydown', (event) => {
    // Log the key that's been pressed
    console.log(event.key + " has been pressed.")

    // Move text based on designated key

    // Team 1
    if (event.key == '1') {
        nodecg.sendMessage('resetTeam1Shift');
    }

    if (event.key == '2') {
        nodecg.sendMessage('shiftTeam1Left');
    }

    if (event.key == '3') {
        nodecg.sendMessage('shiftTeam1Right');
    }

    // Team 2
    if (event.key == '8') {
        nodecg.sendMessage('resetTeam2Shift');
    }

    if (event.key == '9') {
        nodecg.sendMessage('shiftTeam2Left');
    }

    if (event.key == '0') {
        nodecg.sendMessage('shiftTeam2Right');
    }
})