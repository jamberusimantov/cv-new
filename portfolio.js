let currentTime, imgAdressArray, imgDescriptionSpan, imgDescriptionPg, timeInterval;
let sliderIterator = 0;
window.onload = () => {
    set_header();
    set_chat();
    set_portfolio_grid();
    timeInterval = setInterval(updateTime, 1000);
}

function set_portfolio_grid() {
    set_sliderArrays();
    portfolioPage.innerHTML += '<div id="portfolioGrid"></div>';
    imgAdressArray.forEach((adress, index) => {
        portfolioGrid.innerHTML += `<div id="flipbox${index}"class="flipbox"></div>`;
        document.getElementById(`flipbox${index}`).innerHTML += `<img id="flipboxImg${index}"class="flipboxImg" src="${adress}">`;
    })
}

function set_sliderArrays() {
    imgAdressArray = [];
    for (let i = 1; i <= 30; i++) {
        imgAdressArray[i - 1] = (i < 2) ? `./assets/${i}.jpg` : `./assets/2.jpg`;
    }
    imgDescriptionSpan = ['anime search', '2', '3', '4'];
    imgDescriptionPg = ['search for new anime and related gifs',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum!'
    ];
}

function set_header() {
    portfolioPage.innerHTML = '<div id="header"></div>';
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
    portfolioPage.innerHTML += "<div id='chatIcon'></div>";
    chatIcon.innerHTML = "<img id='icon' src='./assets/icon.jpeg'>";
    chatIcon.innerHTML += "<div id='greenDotIcon'></div>";
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