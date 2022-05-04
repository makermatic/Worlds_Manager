const LCasterRep = nodecg.Replicant('leftCaster');
const RCasterRep = nodecg.Replicant('rightCaster');

const LCaster = document.getElementById('leftCaster');
const LTwitter = document.getElementById('leftTwitter');

const RCaster = document.getElementById('rightCaster');
const RTwitter = document.getElementById('rightTwitter')

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    LTwitter.innerHTML = data.leftTwitter

    RCaster.innerHTML = data.rightCaster
    RTwitter.innerHTML = data.rightTwitter
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster

    LTwitter.innerHTML = data.rightTwitter
    RTwitter.innerHTML = data.leftTwitter
})