document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(function(carousel) {
        let slideIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        function showSlide(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            slides[slideIndex].style.display = 'block';
        }

        function moveSlide(n) {
            slideIndex += n;
            showSlide(slideIndex);
        }

        showSlide(slideIndex);

        prevButton.addEventListener('click', function() {
            moveSlide(-1);
        });

        nextButton.addEventListener('click', function() {
            moveSlide(1);
        });
    });
});
