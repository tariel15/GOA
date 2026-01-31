
const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg",
    "http://www.sololearn.com/uploads/slider/2.jpg",
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
let currentIndex = 0;
const sl = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    sl.src = images[currentIndex];
});
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    sl.src = images[currentIndex];
});
