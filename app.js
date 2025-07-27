//Funcionalidad para el menu desplegable
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const btnSvgIcon = document.querySelector(".btn-svg");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  btnSvgIcon.classList.toggle("rotate-90");
  btnSvgIcon.classList.add("duration-300", "transition-transform");
});

//Funcionalidad para las pregunas FAQ
document.querySelectorAll(".toggle-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector("svg");
          content.classList.toggle("hidden");
          icon.classList.toggle("rotate-180");
        });
      });
