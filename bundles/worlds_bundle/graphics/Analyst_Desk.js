const leftAnalyst = document.getElementById('leftAnalyst');
const leftTwitter = document.getElementById('leftTwitter');

const midAnalyst = document.getElementById('midAnalyst');
const midTwitter = document.getElementById('midTwitter');

const rightAnalyst = document.getElementById('rightAnalyst');
const rightTwitter = document.getElementById('rightTwitter');

nodecg.listenFor('updateAnalysts', (data) => {
    leftAnalyst.innerHTML = data.leftAnalyst
    leftTwitter.innerHTML = data.leftTwitter

    midAnalyst.innerHTML = data.midAnalyst
    midTwitter.innerHTML = data.midTwitter

    rightAnalyst.innerHTML = data.rightAnalyst
    rightTwitter.innerHTML = data.rightTwitter
})

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Analyst_Desk/Analyst_Desk_Base.png")';
    leftTwitter.style.color = '#460000'
    midTwitter.style.color = '#460000'
    rightTwitter.style.color = '#460000'
})

// Style Listeners
nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Analyst_Desk/Analyst_Desk_Base.png")';
    leftTwitter.style.color = '#d99500'
    midTwitter.style.color = '#d99500'
    rightTwitter.style.color = '#d99500'
})

// Style Listeners
nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Analyst_Desk/Analyst_Desk_Base.png")';
    leftTwitter.style.color = '#256154'
    midTwitter.style.color = '#256154'
    rightTwitter.style.color = '#256154'
})