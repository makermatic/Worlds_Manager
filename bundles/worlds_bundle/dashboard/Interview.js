const nameInput = document.getElementById('name')
const twitterInput = document.getElementById('twitter')

function updateInfo() {
    const data = { name: nameInput.value, twitter: twitterInput.value }
    nodecg.sendMessage('updateInfo', data);
}

function update() {
    const data = { name: nameInput.value, twitter: twitterInput.value }
    nodecg.sendMessage('showLowerthird', data);
}