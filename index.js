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
            top: element.offsetTop - 100
        });
    }

    for (var i = 0; i < navLinks.length; i++){
        navLinks.item(i).classList.remove("active-link")
    }
}
  
var navLinks = document.getElementsByClassName("nav-link");
  
  var selectedLink = 'home'
  
  //Chevron Button
  document.getElementById("chevron-link").addEventListener('click', () => {
    scrollTo(document.getElementById("services-content"));
    document.getElementById("services-link").classList.add("active-link")
  });
  
  //Navbar Link Buttons
  document.getElementById("home-link").addEventListener('click', () => {
      scrollTo(document.getElementById("home-content"));
      document.getElementById("home-link").classList.add("active-link")
  });
  
  document.getElementById("services-link").addEventListener('click', () => {
    scrollTo(document.getElementById("services-content"));
    document.getElementById("services-link").classList.add("active-link")
  });
  
  document.getElementById("about-link").addEventListener('click', () => {
    scrollTo(document.getElementById("about-content"));
    document.getElementById("about-link").classList.add("active-link")
  });
  
  document.getElementById("projects-link").addEventListener('click', () => {
      scrollTo(document.getElementById("projects-content"));
      document.getElementById("projects-link").classList.add("active-link")
  });
  
  document.getElementById("contact-link").addEventListener('click', () => {
    scrollTo(document.getElementById("contact-content"));
    document.getElementById("contact-link").classList.add("active-link")
  });


var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHNwaC1kZXZzIiwiYSI6ImNrbXlvYW14czA1d20ycHBrd3c2cTB2eHcifQ.y3jPEQo_tl2ga0l8U9SCkw'
}).addTo(mymap);