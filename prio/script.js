var hamburger = document.querySelector(".ham");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("hover", function(){
    this.classList.Toggle("hover");
    navlist.classList.Toggle("display");
});