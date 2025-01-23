import { showHide } from "./lessons/button-show-hide.js";

document.getElementById("toggle-button").addEventListener("click", () => {
  showHide("element");
});

import { modal, openModal, closeModal } from "./lessons/modal.js";

openModal.addEventListener("click", () => {
  modal.showModal()
})

closeModal.addEventListener("click", () => {
  modal.close()
})