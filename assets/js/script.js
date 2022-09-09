"use strict";
///////////////////////////////////////////////////
// Global
const bmwIx = document.querySelectorAll(".model");

bmwIx.forEach((item) => {
  console.log(item.innerHTML[0]);
  item.innerHTML[0].toLowerCase();
});

///////////////////////////////////////////////////
// Navigation & hamburger menu

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
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.querySelector("html").classList.add("menu-open");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  document.querySelector("html").classList.remove("menu-open");
}

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
