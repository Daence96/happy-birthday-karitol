const slideshow = document.getElementById("slideshow");
const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".nav-dot"));

function updateActiveDot(activeIndex) {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
    dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
  });
}

function scrollToSlide(slideIndex) {
  const target = slides[slideIndex];
  if (!target || !slideshow) {
    return;
  }

  slideshow.scrollTo({
    top: target.offsetTop,
    behavior: "smooth",
  });

  updateActiveDot(slideIndex);
}

function getCurrentSlideIndex() {
  if (!slideshow) {
    return 0;
  }

  const middlePoint = slideshow.scrollTop + window.innerHeight / 2;
  let activeSlide = 0;

  slides.forEach((slide, index) => {
    const slideTop = slide.offsetTop;
    const slideBottom = slideTop + slide.offsetHeight;

    if (middlePoint >= slideTop && middlePoint < slideBottom) {
      activeSlide = index;
    }
  });

  return activeSlide;
}

function handleScroll() {
  updateActiveDot(getCurrentSlideIndex());
}

function handleKeyboardNavigation(event) {
  if (!slideshow || slides.length === 0) {
    return;
  }

  const currentIndex = getCurrentSlideIndex();

  if (event.key === "ArrowDown" || event.key === " ") {
    event.preventDefault();
    if (currentIndex < slides.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  }
}

function bindDotNavigation() {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slide);
      scrollToSlide(slideIndex);
    });
  });
}

function init() {
  if (!slideshow) {
    return;
  }

  bindDotNavigation();
  slideshow.addEventListener("scroll", handleScroll);
  document.addEventListener("keydown", handleKeyboardNavigation);
  updateActiveDot(0);
}

document.addEventListener("DOMContentLoaded", init);
