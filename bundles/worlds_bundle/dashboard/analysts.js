const leftAnalyst = document.getElementById('leftAnalyst')
const leftTwitter = document.getElementById('leftTwitter')

const midAnalyst = document.getElementById('midAnalyst')
const midTwitter = document.getElementById('midTwitter')

const rightAnalyst = document.getElementById('rightAnalyst')
const rightTwitter = document.getElementById('rightTwitter')

function update() {
    const data = {
        leftAnalyst: leftAnalyst.value,
        leftTwitter: leftTwitter.value,

        midAnalyst: midAnalyst.value,
        midTwitter: midTwitter.value,

        rightAnalyst: rightAnalyst.value,
        rightTwitter: rightTwitter.value
    }
    nodecg.sendMessage('updateAnalysts', data)
}