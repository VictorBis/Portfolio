const hamburguer = document.querySelector(".hamburguer");
const nav_links = document.querySelector(".options");
const logo = document.getElementById("WhiteLogo");

/**
 * Hamburguer menu display
 * Checks if the screen size is for a mobile to display the
 * hamburguer menu
 */
function hamburguerMenu() {
  hamburguer.addEventListener("click", () => {
    nav_links.classList.toggle("open");
    document.getElementsByTagName("body")[0].classList.toggle("open");
    hamburguer.classList.toggle("open");
    source = logo.src;
    if (source.includes("images/Atom/Icon/Logo/WhiteLogo.svg")) {
      logo.src = "images/Atom/Icon/Logo/BlackLogo.svg";
    } else {
      logo.src = "images/Atom/Icon/Logo/WhiteLogo.svg";
    }
  });
};

hamburguerMenu();