const contobox = document.querySelector(".contobox-container");
const modal = document.querySelector(".modal-outer");
const closeBtn = document.querySelector(".close-btn");
const dvd = document.querySelector(".dvd");
const text = document.querySelector(".text-1");
const bottom = document.querySelector(".content-bottom");
const plus = document.querySelector(".pre-order");

const mouseRollOver = () => {
  let mouseEnterTimer;
  contobox.addEventListener("mouseenter", () => {
    mouseEnterTimer = setTimeout(() => {
      console.log("mouse enter");
      modal.classList.add("open");
    }, 3000);
    // apply animations when opening modal
    dvd.style.animation = "ps3-ps4 3s linear 2s 1";
    text.style.animation = "slide-text 3s ease-in-out 5s 1 forwards";
    bottom.style.animation = "bottom 1s linear 8s 1 forwards";
    plus.style.animation = "plus 1s linear 8.5s 1 forwards";
  });
};

const closeModal = () => {
  modal.classList.remove("open");
};

contobox.addEventListener("mouseenter", mouseRollOver);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (ev) => {
  const isOutside = !ev.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    closeModal();
  }
});
