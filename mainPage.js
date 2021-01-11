import {} from '/home.js';
window.onload = () => {
    //header
    document.querySelector('body').innerHTML = '<div id="header"></div>';
    header.innerHTML = "<ul id='nav'></ul>";
    nav.innerHTML = "<li id='leftNav'></li>";
    nav.innerHTML += "<li id='chatBtn'></li>";
    leftNav.innerHTML = "<i id='logo' class='fas fa-align-left'></i>";
    leftNav.innerHTML += "<a id='homeBtn' href='index.html'>jamberu.siman-tov</a>";
    chatBtn.innerHTML = "<div id='greenDotChatBtn'></div> ONLINE"
    nav.innerHTML += '<li class="rightNav"></li>';
    document.getElementsByClassName('rightNav')[0].innerHTML = "<a href=''>CONTACT</a>";
    nav.innerHTML += "<li class='rightNav'></li>";
    document.getElementsByClassName('rightNav')[1].innerHTML = "<a href='portfolio.html'>PORTFOLIO</a>";
    nav.innerHTML += "<li class='rightNav'></li>";
    document.getElementsByClassName('rightNav')[2].innerHTML = "<a href=''>ABOUT</a>";
    nav.innerHTML += "<li id='menuBtn'></li>";
    header.innerHTML += "<div id='time'></div>";
    menuBtn.innerHTML = "<i class='material-icons'>menu</i>";
    //chat
    document.querySelector('body').innerHTML += "<div id='chatIcon'></div>";
    chatIcon.innerHTML = "<img id='icon' src='./assets/icon.jpeg'>";
    chatIcon.innerHTML += "<div id='greenDotIcon'></div>";
    //headerDecoration
    document.getElementById('home').innerHTML += "<div id='intro'></div>";
    intro.innerHTML = " <h1 id='inspirational'></h1>";
    inspirational.innerHTML = "<span id='insipreLine1'>YOU ONLY LIVE ONCE</span><br>";
    inspirational.innerHTML += "<span id='insipreLine2'>BUT IF YOU DO IT RIGHT</span><br>";
    inspirational.innerHTML += "<span id='insipreLine3'>ONCE IS ENOUGH</span>";
    intro.innerHTML += " <img id='navImg' src='./assets/main-bg-low.jpg'>";
    //slider
    document.getElementById('home').innerHTML += "<div id='slider'></div>";
    document.getElementById('home').innerHTML += "<div id='sliderDescriptionContainer'></div>";
    sliderDescriptionContainer.innerHTML += "<div id='sliderDescription'></div>";
    slider.innerHTML = "<i id='previousBtn' class='material-icons'> keyboard_arrow_left</i>";
    slider.innerHTML += "<div id='sliderContainer'></div>";
    for (let i = 0; i < 3; i++) {
        sliderContainer.innerHTML += `<div class='sliderBox' id='sliderBox${i + 1}'>box${i + 1}</div>`;
        document.getElementsByClassName('sliderBox')[i].innerHTML = `<img id='sliderImg${i + 1}' src='./assets/${i + 1}.jpg'><br>`;
        sliderDescription.innerHTML += `<div class='sliderDescriptionBox' id='sliderDescriptionBox${i + 1}'>box${i + 1}</div>`;
        document.getElementsByClassName('sliderDescriptionBox')[i].innerHTML = `<p class="sliderSpan" id='sliderSpan${i + 1}'></p><br>`;
        document.getElementsByClassName('sliderDescriptionBox')[i].innerHTML += `<p class="sliderPg" id='sliderPg${i + 1}'></p>`;
    }
    slider.innerHTML += "<i id='nextBtn' class='material-icons'> keyboard_arrow_right</i>";
    //events
    document.getElementById('previousBtn').addEventListener('click', () => { sliderChanger(); });
    document.getElementById('nextBtn').addEventListener('click', () => { sliderChanger(1); });
}