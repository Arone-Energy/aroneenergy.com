document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const division = document.querySelectorAll('.slider div');
    const size = division[0].offsetWidth;

    let counter = 1;

    setInterval(() => {
        counter++;
        if (counter === division.length) {
            counter = 0;
            slider.style.transition = 'none';
        }
        slider.style.transform = `translateX(${-size * counter}px)`;
        counter++;
    }, 5000); // Change slide every 3 seconds (adjust as needed)
});
