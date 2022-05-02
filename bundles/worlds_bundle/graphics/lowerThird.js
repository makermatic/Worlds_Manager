import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')
const twitterEl = document.getElementById('twitter')

nodecg.listenFor('showLowerthird', (newVal) => {
    nameEl.innerHTML = newVal.name;
    twitterEl.innerHTML = newVal.twitter;

    const tl = gsap.timeline();

    tl.from([nameplateEl, nameEl, twitterEl], { duration: 1, ease: "power3.inOut", width: 0 });

    tl.to([nameplateEl, nameEl, twitterEl], { duration: 1, ease: "power3.inOut", width: 0 }, "+=5");

    tl.call(() => {
        nameEl.innerHTML = "";
        twitterEl.innerHTML = "";
    })
    tl.set([nameplateEl, nameEl, twitterEl], { width: "" })
})