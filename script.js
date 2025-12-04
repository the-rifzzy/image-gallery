const images = document.querySelectorAll(".masonry img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox on image click
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
