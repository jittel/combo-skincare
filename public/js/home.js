// automatic slideshow
let slideIndex = 0;

function carousel() {

  let i;
  let slides = document.getElementsByClassName("mySlides");

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}

  if (slideIndex === 1) {
    slides[slides.length - 1].style.opacity = "0";
    slides[0].style.opacity = "1";
  } else {
    slides[slideIndex - 2].style.opacity = "0";
    slides[slideIndex - 1].style.opacity = "1";
  }

  setTimeout(carousel, 4000); // Change image every 4 seconds

}

carousel();