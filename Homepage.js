// Function for back to top button/image
let topButton=document.getElementById("back-to-top");
topButton.addEventListener("click",function(){
    document.documentElement.scrollTop = 0,
    document.body.scrollTop = 0;
});
window.onscroll=function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }

}; 

// Function for the hamburger menu
let hamburger=document.getElementById("hamburger");
let close=document.getElementById("close");
hamburger.addEventListener("click",function(){
    let nav=document.getElementById("nav");
    if (nav.style.display==="none"){
        nav.style.display="block";
    }
    else{
        nav.style.display="none";
    }   
});
// Function to close the hamburger menu
close.addEventListener("click",function(){
    let nav=document.getElementById("nav");
    if (nav.style.display==="block"){
        nav.style.display="none";
    }
    else{
        nav.style.display="block";
    }   
});
// Function to close the hamburger menu when a link is clicked
let navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach(function(link){
    link.addEventListener("click",function(){
        let nav=document.getElementById("nav");
        if (nav.style.display==="block"){
            nav.style.display="none";
        }
    });
});

//Function to close mobile class and open desktop class
if (window.innerWidth > 768) {
    let mobile=document.getElementById("mobile");
    let desktop=document.getElementById("desktop");
    mobile.style.display="none";
    desktop.style.display="block";
}
else{
    let mobile=document.getElementById("mobile");
    let desktop=document.getElementById("desktop");
    mobile.style.display="block";
    desktop.style.display="none";
}

//Function to scroll images
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
