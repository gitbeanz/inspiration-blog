var topButton = document.getElementById("top-btn");
window.onscroll = function() {scrollFunction()};

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('links')[0]
toggleButton.addEventListener('click',()=>{
    links.classList.toggle('active');
})

let slideIndex = [1,1,1,1,1,1,1,1,1];
let slideId = ["slide1", "slide2","slide3","slide4","slide5", "slide6","slide7","slide8","slide9"];
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);
showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);
showSlides(1,8);

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

function addContactInfo(){
    console.log("TEST");
    var number = document.getElementById("number").value;
    console.log(number);
    var subject = document.getElementById("subject").value;
    console.log(subject);
    var message = document.getElementById("message").value;
    console.log(message);
    document.getElementById("message").value =  'Subject: ' + subject + '\n' + 'Phone: ' + number + '\n' + message;

}

function scrollFunction(){
    console.log("HI");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}