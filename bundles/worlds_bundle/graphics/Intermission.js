const timer = document.getElementById('timer');

nodecg.listenFor('setTimer', (data) => {
    // timer.innerHTML = data.minutes;
    startingMinutes = parseInt(data.minutes);
    updateTimer(startingMinutes);
})

function updateTimer(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var timer = document.getElementById("timer");
        var current_minutes = mins - 1
        seconds--;
        timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
    }
    tick();
}

nodecg.listenFor('reload', () => {
    location.reload();
})

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Intermission.png")';
})

// Style Listeners
nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Intermission.png")';
})

// Style Listeners
nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Intermission.png")';
})