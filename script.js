function menuHamb() {
  const btn = document.querySelector(".js-nav-btn");
  const navBar = document.querySelector(".js-navbar");

  if (btn && navBar) {
    function ativarMenu() {
      navBar.classList.toggle("active");
    }
    btn.addEventListener("click", ativarMenu);
  }
}
menuHamb();