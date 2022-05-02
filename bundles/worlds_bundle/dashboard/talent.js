const leftCaster = document.getElementById('leftCaster')
const rightCaster = document.getElementById('rightCaster')

const analyst1 = document.getElementById('analyst1')
const analyst2 = document.getElementById('analyst2')

const leftOther = document.getElementById('leftCasterOther')
const rightOther = document.getElementById('rightCasterOther')
const analystOther1 = document.getElementById("analystOther1")
const analystOther2 = document.getElementById("analystOther2")

var swapTog = !true;

function update() {
    const data = {
        leftCaster: leftCaster.value,
        rightCaster: rightCaster.value,
        analyst1: analyst1.value,
        analyst2: analyst2.value,
        leftOther: leftOther.value,
        rightOther: rightOther.value,
        analystOther1: analystOther1.value,
        analystOther2: analystOther2.value
    }
    nodecg.sendMessage('updateCasters', data)
}

function swap() {
    if (swapTog != true) {
        const data = {
            leftCaster: leftCaster.value,
            rightCaster: rightCaster.value,
            analyst1: analyst1.value,
            analyst2: analyst2.value,
            leftOther: leftOther.value,
            rightOther: rightOther.value,
            analystOther1: analystOther1.value,
            analystOther2: analystOther2.value
        }
        nodecg.sendMessage('swapCasters', data)
        swapTog = true;
    } else {
        update() //call the method THEN flip the switch off
        swapTog = false;
    }
}