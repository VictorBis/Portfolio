const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".options");
const logo = document.getElementById("WhiteLogo");
const portfolioLink = document.getElementById("Portfolio");

/** Hamburguer menu */
[hamburguer, navLinks].forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        document.getElementsByTagName('body')[0].classList.toggle('open');
        hamburguer.classList.toggle('open');
        source = logo.src;
        if (source.includes("images/Atom/Icon/Logo/WhiteLogo.svg")) {
            logo.src = "images/Atom/Icon/Logo/BlackLogo.svg";
        } else {
            logo.src = "images/Atom/Icon/Logo/WhiteLogo.svg";
        }
    })
});