const a1 = document.getElementById('analyst1');
const a2 = document.getElementById('analyst2');

const a1Other = document.getElementById('analystOther1')
const a2Other = document.getElementById('analystOther2')

nodecg.listenFor('updateCasters', (data) => {
    a1.innerHTML = data.analyst1
    a2.innerHTML = data.analyst2

    a1Other.innerHTML = data.analystOther1
    a2Other.innerHTML = data.analystOther2
})

nodecg.listenFor('swapCasters', (data) => {
    a2.innerHTML = data.analyst1
    a1.innerHTML = data.analyst2

    a1Other.innerHTML = data.analystOther2
    a2Other.innerHTML = data.analystOther1
})