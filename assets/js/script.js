"use strict";
///////////////////////////////////////////////////
// Global

///////////////////////////////////////////////////
// Navigation & Hamburger Menu

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("menu-open");
  menuItems.forEach((item) => item.classList.toggle("hidden"));

  document.querySelector("html").classList.toggle("menu-open");
});

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

// btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
