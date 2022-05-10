const leftAnalyst = document.getElementById('leftAnalyst');
const midAnalyst = document.getElementById('midAnalyst');
const rightAnalyst = document.getElementById('rightAnalyst');

nodecg.listenFor('updateAnalysts', (data) => {
    leftAnalyst.innerHTML = data.leftAnalyst

    midAnalyst.innerHTML = data.midAnalyst

    rightAnalyst.innerHTML = data.rightAnalyst
})