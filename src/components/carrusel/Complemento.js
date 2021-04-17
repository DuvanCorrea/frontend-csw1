import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', () => { 
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 50,
        dist: 0,
        shift: 5,
        padding: 30,
        numVisible: 5,
        indicators: true
    });
});