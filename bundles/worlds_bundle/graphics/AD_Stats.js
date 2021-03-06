const leftAnalyst = document.getElementById('leftAnalyst');
const midAnalyst = document.getElementById('midAnalyst');
const rightAnalyst = document.getElementById('rightAnalyst');

nodecg.listenFor('updateAnalysts', (data) => {
    leftAnalyst.innerHTML = data.leftAnalyst

    midAnalyst.innerHTML = data.midAnalyst

    rightAnalyst.innerHTML = data.rightAnalyst
})

// Style Listeners
nodecg.listenFor('IBS', () => {
    document.body.style.backgroundImage = 'url("layouts/IBS/Analyst_Desk/AD_Stats.png")';
})

nodecg.listenFor('Gold', () => {
    document.body.style.backgroundImage = 'url("layouts/Gold/Analyst_Desk/AD_Stats.png")';
})

nodecg.listenFor('Plat', () => {
    document.body.style.backgroundImage = 'url("layouts/Platinum/Analyst_Desk/AD_Stats.png")';
})