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
    document.getElementsByTagName("body")[0].classList.toggle("open");
    hamburguer.classList.toggle("open");
    nav_links.classList.toggle("open");
    source = logo.src;
    if (source.includes("images/Atom/Icon/Logo/WhiteLogo.svg")) {
      logo.src = "../images/Atom/Icon/Logo/BlackLogo.svg";
    } else {
      logo.src = "../images/Atom/Icon/Logo/WhiteLogo.svg";
    }
  });
};

/**
 * Displays blurred images while loading
 */
function blurry(){
  const images = document.querySelectorAll(".blurry-load");
  for (let image of images) {
    const currentImage = new Image();
    currentImage.src = image.getAttribute("data-large");
  
    currentImage.onload = () => {
      image.src = currentImage.src;
      image.classList.add("blur-out");
      image.classList.remove("blurry-load")
    }
  }
}

hamburguerMenu();
blurry();