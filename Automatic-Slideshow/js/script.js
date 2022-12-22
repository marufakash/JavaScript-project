// finding elements
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");

let slideIndex = 0;

const slideShow = () => {
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(slideShow, 2000);
}

slideShow();
