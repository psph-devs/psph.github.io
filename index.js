const btnMobileMenu = document.querySelector('#btnMobileMenu');
const btnCloseMenu = document.querySelector('#btnClose');
const pnlMobileMenu = document.querySelector('#pnlMobile');

//Mobile View

btnMobileMenu.addEventListener('click', () => {
    pnlMobileMenu.classList.toggle('hidden');
});

btnCloseMenu.addEventListener('click', () => {
    pnlMobileMenu.classList.toggle('hidden');
});



//Default View

const navLinks = document.getElementsByClassName("nav-link");
var selectedLink = 'home'

function scrollTo(element) {
    if (element.id === 'home-content') {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    } else {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - 80
        });
    }

    for (var i = 0; i < navLinks.length; i++){
        navLinks.item(i).classList.remove("text-yellow-400")
    }
}

function removeClass(cls) {
    for (var i = 0; i < navLinks.length; i++){
        navLinks.item(i).classList.remove(cls)
    }
}

 //Chevron Button
document.querySelector("#btnDown").addEventListener('click', () => {
    scrollTo(document.querySelector("#services-content"));
    document.querySelector("#services-link").classList.toggle("text-yellow-400")
});
  

 //Navbar Link Buttons
document.querySelector("#home-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#home-content"));
    removeClass('text-yellow-400')
    document.querySelector("#home-link").classList.toggle("text-yellow-400")
    document.querySelector("#m-home-link").classList.toggle("text-yellow-400")
});

document.querySelector("#m-home-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#home-content"));
    removeClass('text-yellow-400')
    document.querySelector("#home-link").classList.toggle("text-yellow-400")
    document.querySelector("#m-home-link").classList.toggle("text-yellow-400")
    pnlMobileMenu.classList.toggle('hidden');
});

document.querySelector("#services-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#services-link").classList.toggle("text-yellow-400")
});

document.querySelector("#m-services-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#services-link").classList.toggle("text-yellow-400")
    document.querySelector("#m-services-link").classList.toggle("text-yellow-400")
    pnlMobileMenu.classList.toggle('hidden');
});

document.querySelector("#about-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#about-link").classList.toggle("text-yellow-400")
});

document.querySelector("#m-about-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#about-link").classList.toggle("text-yellow-400")
    document.querySelector("#m-about-link").classList.toggle("text-yellow-400")
    pnlMobileMenu.classList.toggle('hidden');
});

document.querySelector("#projects-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#projects-link").classList.toggle("text-yellow-400")
});

document.querySelector("#m-projects-link").addEventListener('click', () => {
    //scrollTo(document.querySelector("#services-content"));
    removeClass('text-yellow-400')
    document.querySelector("#projects-link").classList.toggle("text-yellow-400")
    document.querySelector("#m-projects-link").classList.toggle("text-yellow-400")
    pnlMobileMenu.classList.toggle('hidden');
});



//MAP

var mymap = L.map('mapid').setView([14.5794, 121.0359], 13);
L.marker([14.5794, 121.035]).addTo(mymap);
  
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHNwaC1kZXZzIiwiYSI6ImNrbXlvMG14ajA1b3Eybm1vemNvanRpYmwifQ.5ehL0GvynbdciEq4HyTvIw'
}).addTo(mymap);