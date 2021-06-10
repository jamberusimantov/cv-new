window.onload = () => {
    window.addEventListener('scroll', scrollHandler)
    hamburger.addEventListener('click', menuToggle)

    const intro = document.getElementById('intro')
    const sentences = document.getElementsByClassName('about-text-sentence')
    const sections = document.getElementsByClassName('section')
    const span = 'Coding is fun and at the end of the day, if I can say I had fun It was a good day.';
    const sentence = [
        'My name is Siman-tov, and I’m a Full Stack web developer.',
        'I’m self-motivated and enjoy expanding my knowledge.',
        'Recently I completed a 2000 hours of theoretic and practical studies in programming including HTML, CSS, Javascript, React, Redux, TypeScript, Nodejs, API Using Express, MongoDB, and... OOP, among others.',
        'I read a lot and consult professionals so I’m sure there’s no challenge I can’t face.',
        'I’m currently looking for a Full Stack position, but I’m open to other positions in this area for acquiring experience and broadening my knowledge.'
    ];
    const introWordsArray = span.split(" ");
    const sectionsArray = new Array()
    const interval = 50;
    let sentencesCounter = 0;
    let introCounter = 0;
    let aboutTextCounter = 0;
    let offsetCounter = 0;
    let sectionsIndex = 0;
    let sliderIndex = 0;
    let isFirstScroll = true;
    let isMenuOpen = false;
    let skillsCounter = 0;
    const myProjects = [
        ['users-portal', './assets/myProjects/mern- users.jpg', ''],
        ['jobOffers portal', './assets/myProjects/jobPortal_TechCareer.jpg', ''],
    ]
    const sliderPicsArray = [];
    for (const key in sections) {
        if (Object.hasOwnProperty.call(sections, key)) {
            const element = sections[key];
            const navRef = `nav${element.id.replace(element.id[0], element.id[0].toUpperCase())}`;
            sectionsArray.push([element.id, {
                index: sectionsIndex,
                section: element,
                nav: document.getElementById(navRef),
                height: offsetCounter
            }]);
            offsetCounter += element.offsetHeight;
            sectionsIndex += 1;
        }
    }
    for (let i = 0; i < 3; i++) {
        sliderPicsArray.push(`./assets/myPics/${i}.jpg`);
    }
    pushText(introWordsArray, interval, intro, introCounter, "intro-word")
    myProjects.forEach(fillProject)

    function menuToggle() {
        const burgers = document.getElementsByClassName('burger')
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            burgers.bar1.classList.add('bar1Open')
            burgers.bar2.classList.add('bar2Open')
            burgers.bar3.classList.add('bar3Open')
            navbar.style.display = 'block';
        } else {
            burgers.bar1.classList.remove('bar1Open')
            burgers.bar2.classList.remove('bar2Open')
            burgers.bar3.classList.remove('bar3Open')
            navbar.style.display = '';
        }
    }

    function fillProject(project) {
        const projectsContainer = document.getElementById('projects-container')
        projectsContainer.appendChild(document.createElement('div'))
        projectsContainer.lastElementChild.classList.add('flip-card')
        const flipCard = document.getElementsByClassName('flip-card')[document.getElementsByClassName('flip-card').length - 1]
        flipCard.appendChild(document.createElement('div'))
        flipCard.lastElementChild.classList.add('flip-card-inner')
        const flipCardInner = document.getElementsByClassName('flip-card-inner')[document.getElementsByClassName('flip-card-inner').length - 1]
        flipCardInner.appendChild(document.createElement('div'))
        flipCardInner.lastElementChild.classList.add('flip-card-front')
        flipCardInner.lastElementChild.classList.add('flex-column-wrap-center')
        flipCardInner.appendChild(document.createElement('div'))
        flipCardInner.lastElementChild.classList.add('flip-card-back')
        flipCardInner.lastElementChild.classList.add('flex-row-wrap-center')
        const flipCardFront = document.getElementsByClassName('flip-card-front')[document.getElementsByClassName('flip-card-front').length - 1]
        flipCardFront.appendChild(document.createElement('img'))
        flipCardFront.lastElementChild.classList.add('flip_img')
        flipCardFront.lastElementChild.src = project[1];
        const flipCardBack = document.getElementsByClassName('flip-card-back')[document.getElementsByClassName('flip-card-back').length - 1]
        flipCardBack.appendChild(document.createElement('h1'))
        flipCardBack.lastElementChild.appendChild(document.createTextNode(project[0]))
        flipCardBack.appendChild(document.createElement('p'))
        flipCardBack.lastElementChild.appendChild(document.createTextNode(project[2]))
    }

    function scrollHandler() {
        const currentHeight = window.scrollY;
        const getCurrentSection = (array) => {
            if (array.length === 1) return array[0][1].index;
            const arr0 = array.slice(0, Math.floor(array.length / 2))
            const arr1 = array.slice(Math.floor(array.length / 2))
            return currentHeight >= arr1[0][1].height ? getCurrentSection(arr1) : getCurrentSection(arr0)
        }
        const section = getCurrentSection(sectionsArray)
        const navRef = sectionsArray[section][1].nav;
        let nextNavRef;
        let previousNavRef;
        switch (true) {
            case (section === 0):
                {
                    previousNavRef = sectionsArray[sectionsArray.length - 1][1].nav;
                    nextNavRef = sectionsArray[1][1].nav;
                    break;
                }
            case (section === sections.length - 1):
                {
                    previousNavRef = sectionsArray[section - 1][1].nav;
                    break;
                }
            default:
                {
                    if (isFirstScroll) {
                        pushText(sentence[sentencesCounter].split(" "), interval, sentences[sentencesCounter], aboutTextCounter, "summery-word")
                        setInterval(changePic, 2000);
                        isFirstScroll = false;
                    }
                    nextNavRef = sectionsArray[section + 1][1].nav;
                    previousNavRef = sectionsArray[section - 1][1].nav;
                }
        }
        navRef.classList.add("emphasize");
        nextNavRef && nextNavRef.classList.remove("emphasize");
        previousNavRef.classList.remove("emphasize");
    }

    function pushText(arr, interval, node, counter, className) {
        const buzzWords = {
            fun: 'fun',
            coding: 'coding',
            day: 'day',
            good: 'good'
        }
        const skills = {
            html: 'HTML',
            css: 'CSS',
            javascript: 'Javascript',
            react: 'React',
            redux: 'Redux',
            typescript: 'TypeScript',
            nodejs: 'Nodejs',
            api: 'API',
            using: 'Using',
            express: 'Express',
            mongodb: 'MongoDB',
        };
        if (!arr.length && node.id === `sentence${sentencesCounter}` && sentencesCounter < sentences.length - 1) {
            setTimeout(() => {
                pushText(sentence[++sentencesCounter].split(" "), interval, sentences[sentencesCounter], aboutTextCounter, "summery-word")
            }, 500)
        }
        if (!arr.length) return;
        const word = arr.shift()
        const isBuzzWord = buzzWords[word.toLowerCase()]
        const isSkill = skills[word.toLowerCase()] || skills[word.toLowerCase().substr(0, word.length - 1)]
        if (isBuzzWord) {
            node.innerHTML += `<em class="${className}"></em>`
        } else if (isSkill) {
            if (!document.getElementById('skills')) {
                node.innerHTML += `<em id="skills"></em>`
            }
        } else {
            node.innerHTML += `<span class="${className}"></span>`
        }
        if (isSkill) {
            const sameElement = document.getElementById('skills')
            const pushTextInterval = setInterval(() => {
                let charToPush = word.charAt(counter++);
                if (!charToPush) {
                    sameElement.textContent = sameElement.textContent.trim() === skills.mongodb ||
                        sameElement.textContent.substr(0, sameElement.textContent.length - 1).trim() === skills.mongodb ?
                        `${sameElement.textContent} ` : ' ';
                    clearInterval(pushTextInterval);
                    counter = 0
                        // setTimeout(() => {
                    pushText(arr, 100, node, counter, className)
                        // }, 500)
                } else {
                    sameElement.textContent += charToPush;
                }
            }, interval)

        } else {
            // setInterval(() => {
            //     const { html, css, javascript, react, redux, typescript, nodejs, api, using, express, mongodb } = skills
            //     const skillsArray = [html, css, javascript, react, redux, typescript, nodejs, api, using, express, mongodb]
            //     sameElement.textContent = skillsCounter < skillsArray.length - 1 ? skillsArray[skillsCounter++] : skillsArray[0]
            //     console.log(skillsCounter);
            // }, 1000);
            const newElement = document.getElementsByClassName(className)[document.getElementsByClassName(className).length - 1]
            const pushTextInterval = word === '2000' ? setInterval(() => {
                if (counter !== 200) {
                    newElement.textContent = ++counter * 10;
                } else {
                    clearInterval(pushTextInterval);
                    counter = 0
                    newElement.textContent += ' ';
                    pushText(arr, interval, node, counter, className)
                }

            }, 0) : setInterval(() => {
                let charToPush = word.charAt(counter++);
                if (!charToPush) {
                    clearInterval(pushTextInterval);
                    counter = 0
                    newElement.textContent += ' ';
                    pushText(arr, interval, node, counter, className)
                }
                newElement.textContent += charToPush;
            }, interval)
        }
    }

    function changePic() {
        document.getElementById('slider_img').style.backgroundImage = `url(${sliderPicsArray[sliderIndex]})`;
        sliderIndex === sliderPicsArray.length - 1 ? sliderIndex = 0 : sliderIndex++
    }
}