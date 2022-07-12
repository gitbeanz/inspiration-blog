const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('links')[0]
toggleButton.addEventListener('click',()=>{
    links.classList.toggle('active');
})

let slideIndex = [1,1];
let slideId = ["slide1", "slide2"];
showSlides(1,0);
showSlides(1,1);

function showSlides(slidePage, no){
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    if (slidePage > slides.length){
        slideIndex[no] = 1;
    }
    if (slidePage < 1){
        slideIndex[no] = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex[no]-1].style.display = "block";
}

function plusSlides(n, no){
    showSlides(slideIndex[no] += n, no);
}

