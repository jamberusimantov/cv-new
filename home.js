let sliderIterator = 0;
const imgAdressArray = [];
for (let i = 0; i < 4; i++) {
    imgAdressArray[i] = `./assets/${i + 1}.jpg`;
}
const imgDescriptionSpan = ['anime search', 'second title', 'third title', 'forth title'];
const imgDescriptionPg = ['search for new anime and related gifs', 'slider description', 'slider description', 'slider description'];
let sliderInterval = setInterval(() => { sliderChanger(1); }, 2000);

let currentTime;
let timeInterval = setInterval(() => {
    currentTime = `${getTime()}  ${getDate()}`;
    document.getElementById('time').innerText = currentTime;
}, 1000);

function sliderChanger(param) {
    let action;
    if (param == 1) {
        action = next();
        //left box
        sliderImg1.src = `${imgAdressArray[action % imgAdressArray.length]}`;
        sliderSpan1.innerHTML = `${imgDescriptionSpan[action % imgDescriptionSpan.length]}`;
        sliderPg1.innerHTML = `${imgDescriptionPg[action % imgDescriptionPg.length]}`;
        //middle box
        sliderImg2.src = `${imgAdressArray[(action + 1) % imgAdressArray.length]}`;
        sliderSpan2.innerHTML = `${imgDescriptionSpan[(action + 1) % imgDescriptionSpan.length]}`;
        sliderPg2.innerHTML = `${imgDescriptionPg[(action + 1) % imgDescriptionPg.length]}`;
        //right box
        sliderImg3.src = `${imgAdressArray[(action + 2) % imgAdressArray.length]}`;
        sliderSpan3.innerHTML = `${imgDescriptionSpan[(action + 2) % imgDescriptionSpan.length]}`;
        sliderPg3.innerHTML = `${imgDescriptionPg[(action + 2) % imgDescriptionPg.length]}`;
    } else {
        action = previous();
        //left box
        sliderImg1.src = `${imgAdressArray[action % imgAdressArray.length]}`;
        sliderSpan1.innerHTML = `${imgDescriptionSpan[action % imgDescriptionSpan.length]}`;
        sliderPg1.innerHTML = `${imgDescriptionPg[action % imgDescriptionPg.length]}`;
        //middle box
        sliderImg2.src = `${imgAdressArray[(action + 1) % imgAdressArray.length]}`;
        sliderSpan2.innerHTML = `${imgDescriptionSpan[(action + 1) % imgDescriptionSpan.length]}`;
        sliderPg2.innerHTML = `${imgDescriptionPg[(action + 1) % imgDescriptionPg.length]}`;
        //right box
        sliderImg3.src = `${imgAdressArray[(action + 2) % imgAdressArray.length]}`;
        sliderSpan3.innerHTML = `${imgDescriptionSpan[(action + 2) % imgDescriptionSpan.length]}`;
        sliderPg3.innerHTML = `${imgDescriptionPg[(action + 2) % imgDescriptionPg.length]}`;
    }

}

function next() {
    return ++sliderIterator;
}

function previous() {
    if (sliderIterator == 0) {
        sliderIterator = imgAdressArray.length;
    }
    return --sliderIterator;
}

function twoDigitsTime(num) {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}
export function getTime() {
    return `${twoDigitsTime(new Date().getHours())}:${twoDigitsTime(new Date().getMinutes())}:${twoDigitsTime(new Date().getSeconds())}`;
}
export function getDate() {
    return `${twoDigitsTime(new Date().getDate())}/${twoDigitsTime(new Date().getMonth() + 1)}/${new Date().getUTCFullYear()}`;
}