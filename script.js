//toggle icon navbar
 let menuIcon = document.querySelector("#menu-icon");
 let navbar = document.querySelector(".navbar");

 menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
 })

 //remove toggle icon and navbar links when window on scroll
 //nav active color add 
 let sections = document.querySelectorAll("section");
 let navLinks = document.querySelectorAll(".header nav a");
 
 window.onscroll = () =>{
   menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
    sections.forEach(sec =>{
       let top = window.scrollY;
       let offset = sec.offsetTop - 100;
       let height = sec.offsetHeight;
       let id = sec.getAttribute("id");
 
       if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
             links.classList.remove("active");
             document.querySelector(".header nav a[href*=" + id + "]").classList.add("active")
          })
       }
    })
 }
