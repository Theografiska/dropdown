import "./styles.css";

// nav assignment
const allNavLinks = document.querySelectorAll(".nav-link");
const allDropdowns = document.querySelectorAll(".dropdown");

const dropdownOne = document.querySelector("#dropdown-one");
const dropdownTwo = document.querySelector("#dropdown-two");
const dropdownThree = document.querySelector("#dropdown-three");
const dropdownFour = document.querySelector("#dropdown-four");
const dropdownFive = document.querySelector("#dropdown-five");

allNavLinks.forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    switch (link.id) {
      case "link-one":
        dropdownOne.className = "dropdown visible";
        break;
      case "link-two":
        dropdownTwo.className = "dropdown visible";
        break;
      case "link-three":
        dropdownThree.className = "dropdown visible";
        break;
      case "link-four":
        dropdownFour.className = "dropdown visible";
        break;
      case "link-five":
        dropdownFive.className = "dropdown visible";
        break;
    }
  })

  link.addEventListener("mouseout", (event) => {
    allDropdowns.forEach((dropdown) => {
        dropdown.className = "dropdown hidden";
    })
  })
})

// carousel assignment
const prevSlideBtn = document.querySelector("#prev-slide-btn");
const nextSlideBtn = document.querySelector("#next-slide-btn");

const allSlides = document.querySelectorAll(".slide");
const firstSlide = document.querySelector("#first-slide");
const secondSlide = document.querySelector("#second-slide");
const thirdSlide = document.querySelector("#third-slide");
const fourthSlide = document.querySelector("#fourth-slide");
const fifthSlide = document.querySelector("#fifth-slide");

const allDots = document.querySelectorAll(".dot");

const firstDot = document.querySelector("#first-dot");
const secondDot = document.querySelector("#second-dot");
const thirdDot = document.querySelector("#third-dot");
const fourthDot = document.querySelector("#fourth-dot");
const fifthDot = document.querySelector("#fifth-dot");

let currentSlide = 1;

prevSlideBtn.addEventListener("click", () => {
    slideReceder();
    dotsHighlighter();
})

nextSlideBtn.addEventListener("click", () => {
    slideAdvancer();
    dotsHighlighter();
})

allDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        firstSlide.className = "slide hidden";
        secondSlide.className = "slide hidden";
        thirdSlide.className = "slide hidden";
        fourthSlide.className = "slide hidden";
        fifthSlide.className = "slide hidden";
        if (dot.id === "first-dot") {
            currentSlide = 1;
            firstSlide.className = "slide first-slide";
            dotsHighlighter();
        } else if (dot.id === "second-dot") {
            currentSlide = 2;
            secondSlide.className = "slide second-slide";
            dotsHighlighter();
        } else if (dot.id === "third-dot") {
            currentSlide = 3;
            thirdSlide.className = "slide third-slide";
            dotsHighlighter();
        } else if (dot.id === "fourth-dot") {
            currentSlide = 4;
            fourthSlide.className = "slide fourth-slide";
            dotsHighlighter();
        } else if (dot.id === "fifth-dot") {
            currentSlide = 5;
            fifthSlide.className = "slide fifth-slide";
            dotsHighlighter();
        }
    })
})

const dotsHighlighter = () => {
    firstDot.className = "dot pale";
    secondDot.className = "dot pale";
    thirdDot.className = "dot pale";
    fourthDot.className = "dot pale";
    fifthDot.className = "dot pale";
    // highlight the current slide
    if (currentSlide === 1) {
        firstDot.className = "dot";
    } else if (currentSlide === 2) {
        secondDot.className = "dot";
    } else if (currentSlide === 3) {
        thirdDot.className = "dot";
    } else if (currentSlide === 4) {
        fourthDot.className = "dot";
    } else if (currentSlide === 5) {
        fifthDot.className = "dot";
    }
}
const slideReceder = () => {
    if (currentSlide === 1) {
        firstSlide.className = "slide hidden";
        fifthSlide.className = "slide second-slide";
    } else if (currentSlide === 5) {
        fifthSlide.className = "slide hidden";
        fourthSlide.className = "slide third-slide";
    } else if (currentSlide === 4) {
        fourthSlide.className = "slide hidden";
        thirdSlide.className = "slide fourth-slide";
    } else if (currentSlide === 3) {
        thirdSlide.className = "slide hidden";
        secondSlide.className = "slide fifth-slide";
    } else if (currentSlide === 2) {
        secondSlide.className = "slide hidden";
        firstSlide.className = "slide first-slide";
    }

    if (currentSlide <= 5 && currentSlide > 1) {
        currentSlide -= 1;
    } else {
        currentSlide = 5;
    }

    console.log(currentSlide);
}

const slideAdvancer = () => {
    if (currentSlide === 1) {
        firstSlide.className = "hidden";
        secondSlide.className = "second-slide";
    } else if (currentSlide === 2) {
        secondSlide.className = "hidden";
        thirdSlide.className = "third-slide";
    } else if (currentSlide === 3) {
        thirdSlide.className = "hidden";
        fourthSlide.className = "fourth-slide";
    } else if (currentSlide === 4) {
        fourthSlide.className = "hidden";
        fifthSlide.className = "fifth-slide";
    } else if (currentSlide === 5) {
        fifthSlide.className = "hidden";
        firstSlide.className = "first-slide";
    }

    if (currentSlide < 5) {
        currentSlide += 1;
    } else {
        currentSlide = 1;
    }

    dotsHighlighter();
    console.log(currentSlide);
}

const autoAdvancer = () => {
    
}

dotsHighlighter();
setInterval(slideAdvancer, 5000);
