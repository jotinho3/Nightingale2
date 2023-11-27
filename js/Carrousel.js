let slides = document.querySelectorAll('.slide');
let currentSlide = 0; //variavel de contador

function nextSlide() {
  slides[currentSlide].classList.remove('active'); //remover o active da imagem que esta mostrando
  currentSlide = (currentSlide + 1) % slides.length; 
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);



