

var _btn = document.querySelector("[data-js=\"navbtn\"]");

_btn.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});



// header animation

var hdrData = {
    element: document.querySelector('[data-js=header]'),
    scrollPosition: 0,
    ticking: false,
    state: 'top'
};

if( hdrData.element ){
    window.addEventListener('scroll', function onScroll(){

        hdrData.scrollPosition = window.pageYOffset;

        if (!hdrData.ticking) {
            window.requestAnimationFrame(function() {
                scrollCallback(hdrData.scrollPosition);
                hdrData.ticking = false;
            });
            hdrData.ticking = true;
        }
    });
}



//slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



var form_el = document.querySelector("[data-js=\"form\"]"),
    formBtn = document.querySelector("[data-js=\"formBtn\"]");
    
form_el.onsubmit = function(event){
    event.preventDefault();

    // base js send post
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert('form send');

        form_el.classList.remove('is-submitted');
        form_el.reset();
        
        // tu pokazanie wiadomości o pomyślnym wysłaniu
      }
    };
    xhttp.open("POST", "https://httpstat.us/200", true);
    
   
    console.log("wysyłam");
};

formBtn.addEventListener('click', function(){
    form_el.classList.add('is-submitted');
});

// scroll fade (do dołu)

function scrollCallback(position){
    //console.log("scrollCallback:", position);
    if( position > 1 ){
        if( hdrData.state !== 'moving' ){
            hdrData.state = 'moving';
            hdrData.element.classList.add('compact');
        }
    }
    else {
        if( hdrData.state !== 'top' ){
            hdrData.state = 'top';
            hdrData.element.classList.remove('compact');
        }
    }
}