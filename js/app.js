let button = document.getElementById("icon");
let enlaces = document.getElementById("nav-group");
let contador = 0;


document.addEventListener("click", function(event) {
    let insideclick = button.contains(event.target);
    if(insideclick){
        enlaces.classList.replace("oculto","visible");
        button.style.display = "none";
    }
    if(!insideclick){
        enlaces.classList.replace("visible", "oculto");
        button.style.display = "block";
    }
})


let slideIndex = 0;
showSlides();

// Next / Previus controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mosaic");
    let dots = document.getElementsByClassName("dot");

    /*if (n > slides.length) {
        slideIndex = 1;
    } if (n < 1) {
        slideIndex = slides.length;
    }*/

    for (i = 0;  i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /*for (i = 0;  i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change Every 2 Second
}
