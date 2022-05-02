const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

team1Rep.on('change', (newVal) => {
    team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
    team2El.innerHTML = newVal;
})

nodecg.listenFor('updateTeams', (data) => {
    team1Name.innerHTML = data.team1Name
    team2Name.innerHTML = data.team2Name
    changeTeam1Image()
    changeTeam2Image()
})

nodecg.listenFor('swapTeams', (data) => {
    team2Name.innerHTML = data.team1Name
    team1Name.innerHTML = data.team2Name
    changeTeam1Image()
    changeTeam2Image()
})

// Team 1 Images
function changeTeam1Image() {
    var t1Image = document.getElementById('team1Image')

    // AOE
    if (team1Name.innerHTML.includes("AOE")) {
        t1Image.src = './teamLogos/AOE.png'
    }

    // 4M1C
    else if (team1Name.innerHTML === "4M1C") {
        t1Image.src = './teamLogos/4 Monkeys One Coach.png'
    }

    // Degenerates Spawn
    else if (team1Name.innerHTML === "Degenerates Spawn") {
        t1Image.src = './teamLogos/Degenerates Spawn.png'
    }

    // Lotus
    else if (team1Name.innerHTML === "Lotus") {
        t1Image.src = './teamLogos/Lotus.png'
    }

    // MG Infusion
    else if (team1Name.innerHTML === "MG Infusion") {
        t1Image.src = './teamLogos/MG Infusion.png'
    }

    // SDC Death Cards
    else if (team1Name.innerHTML === "SDC Death Cards") {
        t1Image.src = './teamLogos/SDC Death Cards.png'
    }

    console.log('Team 1 image: ', t1Image.src)
}

// Team 1 Images
function changeTeam2Image() {
    var t2Image = document.getElementById('team2Image')

    // AOE
    if (team2Name.innerHTML.includes("AOE")) {
        t2Image.src = './teamLogos/AOE.png'
    }

    // 4M1C
    else if (team2Name.innerHTML === "4M1C") {
        t2Image.src = './teamLogos/4 Monkeys One Coach.png'
    }

    // Degenerates Spawn
    else if (team2Name.innerHTML === "Degenerates Spawn") {
        t2Image.src = './teamLogos/Degenerates Spawn.png'
    }

    // Lotus
    else if (team2Name.innerHTML === "Lotus") {
        t2Image.src = './teamLogos/Lotus.png'
    }

    // MG Infusion
    else if (team2Name.innerHTML === "MG Infusion") {
        t2Image.src = './teamLogos/MG Infusion.png'
    }

    // SDC Death Cards
    else if (team2Name.innerHTML === "SDC Death Cards") {
        t2Image.src = './teamLogos/SDC Death Cards.png'
    }

    console.log('Team 1 image: ', t1Image.src)
}