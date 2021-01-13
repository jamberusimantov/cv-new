let currentTime, imgAdressArray, imgDescriptionSpan, imgDescriptionPg, sliderInterval, timeInterval;
let sliderIterator = 0;
window.onload = () => {
    set_header();
    set_chat();
    decorateHeader();
    set_slider();
    sliderInterval = setInterval(auto_slider, 3000);
    timeInterval = setInterval(updateTime, 1000);
    previousBtn.addEventListener('click', sliderChanger);
    nextBtn.addEventListener('click', auto_slider);
}

function set_header() {
    homePage.innerHTML = '<div id="header"></div>';
    header.innerHTML = "<ul id='nav'></ul>";
    header.innerHTML += "<div id='time'></div>";
    nav.innerHTML = "<li id='leftNav'></li>";
    nav.innerHTML += "<li id='chatBtn'></li>";
    nav.innerHTML += `<li class="rightNav" id="contact"></li>`;
    nav.innerHTML += `<li class='rightNav' id="portfolio"></li>`;
    nav.innerHTML += `<li class='rightNav' id="about"></li>`;
    nav.innerHTML += "<li id='menuBtn'></li>";
    leftNav.innerHTML = "<i id='logo' class='fas fa-align-left'></i>";
    leftNav.innerHTML += "<a id='homeBtn' href='index.html'>jamberu.siman-tov</a>";
    chatBtn.innerHTML = "<div id='greenDotChatBtn'></div> ONLINE"
    contact.innerHTML = "<a href=''>CONTACT</a>";
    portfolio.innerHTML = "<a href='portfolio.html'>PORTFOLIO</a>";
    about.innerHTML = "<a href=''>ABOUT</a>";
    menuBtn.innerHTML = "<i class='material-icons'>menu</i>";
}

function set_chat() {
    homePage.innerHTML += "<div id='chatIcon'></div>";
    chatIcon.innerHTML = "<img id='icon' src='./assets/icon.jpeg'>";
    chatIcon.innerHTML += "<div id='greenDotIcon'></div>";
}

function decorateHeader() {
    homePage.innerHTML += "<div id='intro'></div>";
    intro.innerHTML = " <h1 id='inspirational'></h1>";
    inspirational.innerHTML = "<span id='insipreLine1'>YOU ONLY LIVE ONCE</span><br>";
    inspirational.innerHTML += "<span id='insipreLine2'>BUT IF YOU DO IT RIGHT</span><br>";
    inspirational.innerHTML += "<span id='insipreLine3'>ONCE IS ENOUGH</span>";
    intro.innerHTML += " <img id='navImg' src='./assets/main-bg-low.jpg'>";
}

function set_slider() {
    let sliderBoxDiv, sliderBoxFlexDiv, picDiv, descriptionDiv;
    set_sliderArrays();
    homePage.innerHTML += "<div id='slider'></div>";
    slider.innerHTML = "<i id='previousBtn' class='material-icons'> keyboard_arrow_left</i>";
    slider.innerHTML += "<div id='sliderContainer'></div>";
    slider.innerHTML += "<i id='nextBtn' class='material-icons'> keyboard_arrow_right</i>";
    for (let i = 0; i < 3; i++) {
        let index = i + 1;
        sliderContainer.innerHTML += `<div class='sliderBox' id='sliderBox${index}'>box${index}</div>`;
        sliderBoxDiv = document.getElementById(`sliderBox${index}`);
        sliderBoxDiv.innerHTML = `<div class="sliderBoxFlex" id="sliderBoxFlex${index}"></div>`;
        sliderBoxFlexDiv = document.getElementById(`sliderBoxFlex${index}`);
        sliderBoxFlexDiv.innerHTML = `<div class="pic" id="pic${index}"></div>`;
        sliderBoxFlexDiv.innerHTML += `<div class="description" id="description${index}"></div>`;
        picDiv = document.getElementById(`pic${index}`)
        picDiv.innerHTML = `<img id='sliderImg${index}' class='sliderImg' src='${imgAdressArray[i]}'>`;
        descriptionDiv = document.getElementById(`description${index}`)
        descriptionDiv.innerHTML = `<p class="sliderSpan" id='sliderSpan${index}'></p>`;
        descriptionDiv.innerHTML += `<p class="sliderPg" id='sliderPg${index}'></p>`;
    }
}

function auto_slider() {
    sliderChanger(1);
}

function sliderChanger(param) {
    let action = (param == 1) ? next() : previous();
    for (let i = 0; i < 3; i++) {
        let index = (action + i) % imgAdressArray.length;
        let img = document.getElementById(`sliderImg${i + 1}`);
        let span = document.getElementById(`sliderSpan${i + 1}`);
        let p = document.getElementById(`sliderPg${i + 1}`);
        img.src = `${imgAdressArray[index]}`;
        span.innerHTML = `${imgDescriptionSpan[index]}`;
        p.innerHTML = `${imgDescriptionPg[index]}`;
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

function set_sliderArrays() {
    imgAdressArray = [];
    for (let i = 1; i <= 4; i++) {
        imgAdressArray[i - 1] = (i < 2) ? `./assets/${i}.jpg` : `./assets/2.jpg`;
    }
    imgDescriptionSpan = ['anime search', 'Lorem2', 'Lorem3', 'Lorem4'];
    imgDescriptionPg = ['search for new anime and related gifs',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!'
    ];
}

function twoDigitsTime(num) {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}

function getTime() {
    return `${twoDigitsTime(new Date().getHours())}:${twoDigitsTime(new Date().getMinutes())}:${twoDigitsTime(new Date().getSeconds())}`;
}

function getDate() {
    return `${twoDigitsTime(new Date().getDate())}/${twoDigitsTime(new Date().getMonth() + 1)}/${new Date().getUTCFullYear()}`;
}

function updateTime() {
    currentTime = `${getTime()}  ${getDate()}`;
    time.innerText = currentTime;
}