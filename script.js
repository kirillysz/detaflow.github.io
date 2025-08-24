document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider__item");
  const viewport = document.querySelector(".slider__viewport");
  const prevBtn = document.querySelector(".slider__control--prev");
  const nextBtn = document.querySelector(".slider__control--next");
  const dotsContainer = document.querySelector(".slider__dots");

  let currentSlide = 0;

  viewport.style.width = `${slides.length * 100}%`;

  slides.forEach((slide) => {
    slide.style.width = `${100 / slides.length}%`;
    slide.style.flexShrink = "0";
  });

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("slider__dot");
    if (index === 0) dot.classList.add("slider__dot--active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".slider__dot");

  function updateSlider() {
    viewport.style.transform = `translateX(-${
      currentSlide * (100 / slides.length)
    }%)`;
    dots.forEach((dot) => dot.classList.remove("slider__dot--active"));
    dots[currentSlide].classList.add("slider__dot--active");
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

  document.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll(".fade-up-on-scroll");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elems.forEach(el => observer.observe(el));
  });


  const element = document.getElementById('hero__title');
let textArray = [
  "Мы формируем детали"
];

let index = 0;
let currentTextIndex = 0;
let animating = false;

function type() {
    if (currentTextIndex < textArray.length) {
        if (index < textArray[currentTextIndex].length) {
            element.innerHTML += textArray[currentTextIndex][index];
            index++;
            setTimeout(type, 50);
        } else {
            animating = false;
            index = 0;
            currentTextIndex++;

            element.innerHTML += "<br>";
            setTimeout(type, 1000);
        }
    }
}

type();