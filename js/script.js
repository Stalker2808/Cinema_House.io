  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabContents = document.querySelectorAll(".tabcontent");

    function hideTabContents() {
      tabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
      });
    }

    function showTabContent(index = 0) {
      tabContents[index].style.display = "block";
    }

    hideTabContents();
    showTabContent();

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        hideTabContents();
        showTabContent(index);

        tabs.forEach((tab) => {
          tab.classList.remove("tabheader__item_active");
        });
        tab.classList.add("tabheader__item_active");
      });
    });
  });

// Modal
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".modal__close");
  const modalTriggerBtns = document.querySelectorAll("[data-modal]");

  modalTriggerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

// Countdown timer for promotion
  const countdownDate = new Date("2024-06-13 00:00:00").getTime();
  function updateTimer() {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  setInterval(updateTimer, 1000);

// Get elements
  const prevBtn = document.querySelector(".offer__slider-prev");
  const nextBtn = document.querySelector(".offer__slider-next");
  const currentSlide = document.getElementById("current");
  const totalSlides = document.getElementById("total");
  const slides = document.querySelectorAll(".offer__slide");

// Initialize slide index and total slides
  let slideIndex = 0;
  totalSlides.textContent = slides.length;

// Function to show current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
    currentSlide.textContent = index + 1;
  }

// Event listeners for previous and next buttons
  prevBtn.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  });

  nextBtn.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });

// Initial slide display
showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", function () {
  const genderButtons = document.querySelectorAll("#gender");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const ageInput = document.getElementById("age");
  const activityButtons = document.querySelectorAll(".calculating__choose-button");
  const totalCalories = document.querySelector(".calculating__result span");
  const calculate = document.querySelector(".calculating__button");
  let gender = "female";
  let height = 0;
  let weight = 0;
  let age = 0;
  let activity = "small";
  
  // Function to calculate total calories
  calculate.addEventListener("click", function () {
    let calories = 0
    if (gender && height && weight && age && activity) {
      if (gender === "female") {
        calories = Math.floor((447,6 + (9, 2 * weight) + (3, 1 * height) - (4, 3 * age)) * activity );
      } else {
        calories = Math.round((88,36 + (13, 4 * weight) + (4, 8 * height) - (5, 7 * age)) * activity);
      }
    }
    totalCalories.innerText = calories
  });

  // Event listeners for gender selection
  genderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      gender = `${button.innerText}`;
      genderButtons.forEach((btn) =>
        btn.classList.remove("calculating__choose-item_active")
      );
      this.classList.add("calculating__choose-item_active");
    });
  });

  activityButtons.forEach((button) => {
    button.addEventListener("click", function () {
      switch (this.id) {
        case "low":
          activity = 1.2;
          break;
        case "small":
          activity = 1.375;
          break;
        case "medium":
          activity = 1.55;
          break;
        case "high":
          activity = 1.725;
        case "high":
          activity = 1.725;
          break;
        default:
          activity = 1.375;
      }
      activityButtons.forEach((btn) =>
        btn.classList.remove("calculating__choose-item_active")
      );
      this.classList.add("calculating__choose-item_active");
    });
  });

  // Event listeners for height, weight, and age input
  heightInput.addEventListener("input", function () {
    height = this.value;
  });

  weightInput.addEventListener("input", function () {
    weight = this.value;
  });

  ageInput.addEventListener("input", function () {
    age = this.value;
  });

});