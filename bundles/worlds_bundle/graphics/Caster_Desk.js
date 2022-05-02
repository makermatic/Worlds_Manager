const LCasterRep = nodecg.Replicant('leftCaster');
const RCasterRep = nodecg.Replicant('rightCaster');

const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');

const LOther = document.getElementById('leftOther')
const ROther = document.getElementById('rightOther')

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    RCaster.innerHTML = data.rightCaster

    LOther.innerHTML = data.leftOther
    ROther.innerHTML = data.rightOther
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster

    LOther.innerHTML = data.rightOther
    ROther.innerHTML = data.leftOther
})