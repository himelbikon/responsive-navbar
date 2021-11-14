var menuOpen = false;
const mobileMenu = document.querySelector(".main-menu");

const menuHandler = () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.style.transform = "translateX(-100%)";
    mobileMenu.style.boxShadow = "-5px 5px 20px black";
  } else {
    mobileMenu.style.transform = "translateX(0%)";
    mobileMenu.style.boxShadow = "0 0 0";
  }
};

//box-shadow: -5px 5px 20px black;
