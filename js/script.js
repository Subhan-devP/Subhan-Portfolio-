// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('.header nav a[href*=' + id + ']').classList.add(".active");
            });

            //active section for animation scroll

            sec.classList.add('show-animate');


        } else {
            sec.classList.remove('show-animate');
        };
    });
    // sticky header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll

    let footer = document.querySelector(".footer");

    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}


// create new about widow

// let aboutDes = document.querySelector(".about");

// function readDes() {

//     //  get the about new window
//     let container = document.body;
//     let newAboutWindow = document.createElement("div");
//     newAboutWindow.setAttribute("onclick", "closeWindow()");
//     newAboutWindow.setAttribute("class", "about-container-window");

//     container.appendChild(newAboutWindow);

//     // animation span
//     let animateBox = document.createElement("span");
//     animateBox.setAttribute("class", "animate-box");
//     newAboutWindow.appendChild(animateBox);
//     // create about container

//     let aboutContainer = document.createElement("div");
//     aboutContainer.setAttribute("class", "about-container");
//     newAboutWindow.appendChild(aboutContainer);

//     // make h1 p
//     let textAbout = document.createElement("h1");
//     let paragraphAbout = document.createElement("p");

//     aboutContainer.appendChild(textAbout);
//     aboutContainer.appendChild(paragraphAbout);

//     textAbout.innerHTML = "I'm <span> Subhan Mohammed-Amin</span>";
//     paragraphAbout.innerHTML = "My name is <span>Subhan</span>, we're here to help you create the awesome website for your self it can be a personal web or any other type of it, many people ask - subhan we want a professionally styling for our website that's you create, Don't worry about style you can trust us, Entrust your ideas to us we gonna make it real. ";

// }


// // close the window

// function closeWindow() {
//     document.querySelector(".about-container-window").remove();
// }



// CLOCK

let numberHours = document.querySelector(".number-hours");
let barSeconds = document.querySelector(".bar-seconds");

let numberElement = [];
let barElement = [];

//  create number of houre

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        '<span class="number-clock-h" style="--index:' + i + '"> <p>' + i + '</p> </span>'
    );

}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// create bar seconds
for (let i = 1; i <= 60; i++){
    barElement.push(
        '<span style="--index:' + i + '"> <p></p> </span>'
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));


// clocking

let handHours = document.querySelector(".hand.hours");
let handMinutes = document.querySelector(".hand.minutes");
let handSeconds = document.querySelector(".hand.seconds");


function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = 'rotate(' + currentHours * 30 + currentMinutes / 2 + 'deg)';
    handMinutes.style.transform = 'rotate(' + currentMinutes * 6 + 'deg)';
    handSeconds.style.transform = 'rotate(' + currentSeconds * 6 + 'deg)';
}

// call getCurrentTime function on page load

getCurrentTime();

// call getCurrentTime to set clock hands every seconds

setInterval(getCurrentTime, 1000)//1000ms = 1s