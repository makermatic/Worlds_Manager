const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');

const a1 = document.getElementById('analyst1');
const a2 = document.getElementById('analyst2');

const LOther = document.getElementById('leftOther')
const ROther = document.getElementById('rightOther')

const a1Other = document.getElementById('analystOther1')
const a2Other = document.getElementById('analystOther2')

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    RCaster.innerHTML = data.rightCaster
    a1.innerHTML = data.analyst1
    a2.innerHTML = data.analyst2

    LOther.innerHTML = data.leftOther
    ROther.innerHTML = data.rightOther

    a1Other.innerHTML = data.analystOther1
    a2Other.innerHTML = data.analystOther2
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster
    a2.innerHTML = data.analyst1
    a1.innerHTML = data.analyst2

    LOther.innerHTML = data.rightOther
    ROther.innerHTML = data.leftOther

    a1Other.innerHTML = data.analystOther2
    a2Other.innerHTML = data.analystOther1
})