"use strict";
///////////////////////////////////////////////////
// Global

///////////////////////////////////////////////////
// Navigation & Hamburger Menu

const html = document.querySelector("html");
const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".toggle");
const btnHamburger = document.querySelector(".go-to-form");

function navClick() {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("menu-open");
  menuItems.forEach((item) => item.classList.toggle("hidden"));
  html.classList.toggle("menu-open");
}

hamburger.addEventListener("click", navClick);
btnHamburger.addEventListener("click", navClick);

///////////////////////////////////////////////////
// Reveal Sections

const splide = new Splide(".splide", {
  arrows: false,
  classes: {},
});
splide.mount();

///////////////////////////////////////////////////
// Reveal Sections

const allSections = document.querySelectorAll(".section");
const imgsTop = document.querySelectorAll(".img-top");
const imgsBottom = document.querySelectorAll("img-bottom");

function revealSection(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  imgsTop.forEach((img) => img.classList.remove("from-bottom"));
  imgsBottom.forEach((img) => img.classList.remove("from-top"));
  observer.unobserve(entry.target);
}

const sectionObserer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserer.observe(section);
  section.classList.add("section-hidden");
});

///////////////////////////////////////////////////
// Lazy Loading Images

const imgTargets = document.querySelectorAll("img[data-src]");

function loadImg(entries, obsrever) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  obsrever.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////////////////
// Form Validation

const validation = new JustValidate(".form", {
  errorFieldCssClass: "is-invalid",
});

validation
  // validdacja radio button?????
  // ???????????????????????????????????????
  // ???????????????????????????????????????
  // ???????????????????????????????????????
  // ???????????????????????????????????????
  // .addField(".sex:checked", [
  //   {
  //     rule: "required",
  //   },
  // ])
  .addField("#input-name", [
    {
      rule: "required",
      errorMessage: "Field is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#input-surname", [
    {
      rule: "required",
      errorMessage: "Field is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#input-email", [
    {
      rule: "required",
      errorMessage: "Field is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField("#input-phone", [
    {
      rule: "required",
      errorMessage: "Field is required",
    },
    {
      rule: "minLength",
      value: 9,
      errorMessage:
        "Phone number is invalid! Please type in specified format: 123456789",
    },
    {
      rule: "maxLength",
      value: 9,
      errorMessage:
        "Phone number is invalid! Please type in specified format: 123456789",
    },
    {
      rule: "number",
      errorMessage:
        "Phone number is invalid! Please type in specified format: 123456789.",
    },
  ]);

///////////////////////////////////////////////////
// Modal Window

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");
const form = document.querySelector(".form");

function openModal() {
  modal.classList.remove("hidden");

  document.querySelector("html").classList.add("menu-open");
}

function closeModal() {
  modal.classList.add("hidden");

  document.querySelector("html").classList.remove("menu-open");
}

form.addEventListener("submit", (event) => {
  openModal();
  event.preventDefault();
});

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

///////////////////////////////////////////////////
// Date

const yearPlaceholder = document.querySelector(".year");

const year = new Date().getFullYear();

yearPlaceholder.innerHTML = `${year}`;
