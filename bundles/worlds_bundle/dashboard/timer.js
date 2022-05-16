function sendTimerData(minutes) {
    var minutes = minutes;

    const data = { minutes: minutes }
    nodecg.sendMessage('setTimer', data)

    console.log("Timer has been set to" + minutes + " minutes.");
}

function reload() {
    nodecg.sendMessage('reload')
}