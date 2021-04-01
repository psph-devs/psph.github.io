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