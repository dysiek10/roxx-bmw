"use strict";

///////////////////////////////////////////////////
// Modal window

///////////////////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

btnOpenModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
