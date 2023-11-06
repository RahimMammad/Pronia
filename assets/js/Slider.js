// let currentSlide = 0;
//         const slides = document.querySelectorAll('.slide');
//         const totalSlides = slides.length;

//         function nextSlide() {
//             currentSlide = (currentSlide + 1) % totalSlides;
//             updateSlider();
//         }

//         function prevSlide() {
//             currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//             updateSlider();
//         }

//         function updateSlider() {
//             const slider = document.querySelector('.slider');
//             const slideWidth = slider.clientWidth;
//             const targetX = -currentSlide * slideWidth;
//             slider.style.transform = `translateX(${targetX}px)`;
//         }

//         // Initial update
//         updateSlider();