import "./styles.css";

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