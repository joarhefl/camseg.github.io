var carouselItems = document.querySelectorAll('.carousel-item');
var currentSlide = 0;

function showSlide(index) {
    carouselItems.forEach(function(item) {
        item.classList.remove('active');
    });

    carouselItems[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentSlide);
}

// Mostrar el primer slide
showSlide(currentSlide);

// Avanzar al siguiente slide cada 3 segundos
setInterval(nextSlide, 3000);
