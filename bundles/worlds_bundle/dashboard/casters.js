const leftCaster = document.getElementById('leftCaster')
const leftTwitter = document.getElementById('leftTwitter')

const rightCaster = document.getElementById('rightCaster')
const rightTwitter = document.getElementById('rightTwitter')

var swapTog = !true;

function update() {
    const data = { leftCaster: leftCaster.value, leftTwitter: leftTwitter.value, rightCaster: rightCaster.value, rightTwitter: rightTwitter.value }
    nodecg.sendMessage('updateCasters', data)
}

function swap() {
    if (swapTog != true) {
        const data = { leftCaster: leftCaster.value, leftTwitter: leftTwitter.value, rightCaster: rightCaster.value, rightTwitter: rightTwitter.value }
        nodecg.sendMessage('swapCasters', data)
        swapTog = true;
    } else {
        update() //call the function THEN flip the switch off
        swapTog = false;
    }
}