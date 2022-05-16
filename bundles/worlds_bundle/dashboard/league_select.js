function update() {
    const leagueSelect = document.getElementById("league");

    if (leagueSelect.value === "ibs") {
        nodecg.sendMessage('IBS')
    } else if (leagueSelect.value === "gold") {
        nodecg.sendMessage('Gold')
    } else if (leagueSelect.value === "plat") {
        nodecg.sendMessage('Plat')
    }

    console.log("The current league is " + leagueSelect.value);
}