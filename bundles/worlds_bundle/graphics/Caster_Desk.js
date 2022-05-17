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

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Caster_Desk.png")';
    LTwitter.style.color = '#460000'
    RTwitter.style.color = '#460000'
})

// Style Listeners
nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Caster_Desk.png")';
    LTwitter.style.color = '#d99500'
    RTwitter.style.color = '#d99500'
})

// Style Listeners
nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Caster_Desk.png")';
    LTwitter.style.color = '#256154'
    RTwitter.style.color = '#256154'
})