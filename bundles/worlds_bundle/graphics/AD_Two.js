const LCasterRep = nodecg.Replicant('leftCaster');
const RCasterRep = nodecg.Replicant('rightCaster');

const LCaster = document.getElementById('leftCaster');
const LTwitter = document.getElementById('leftTwitter');

const RCaster = document.getElementById('rightCaster');
const RTwitter = document.getElementById('rightTwitter')

nodecg.listenFor('updateAnalysts', (data) => {
    LCaster.innerHTML = data.leftAnalyst
    LTwitter.innerHTML = data.leftTwitter

    RCaster.innerHTML = data.midAnalyst
    RTwitter.innerHTML = data.midTwitter
})

nodecg.listenFor('swapAnalysts', (data) => {
    RCaster.innerHTML = data.leftAnalyst
    LCaster.innerHTML = data.midTwitter

    LTwitter.innerHTML = data.midAnalyst
    RTwitter.innerHTML = data.leftTwitter
})

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Caster_Desk.png")';
    LTwitter.style.color = '#460000'
    RTwitter.style.color = '#460000'
})

nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Caster_Desk.png")';
    LTwitter.style.color = '#d99500'
    RTwitter.style.color = '#d99500'
})

nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Caster_Desk.png")';
    LTwitter.style.color = '#256154'
    RTwitter.style.color = '#256154'
})