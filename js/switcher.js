
const themeLink = document.getElementById("theme-stylesheet");
const themeButton =document.getElementById("theme-toggle");
const texts = document.querySelectorAll("[data-sith]");
const images = document.querySelectorAll("img[data-sith-src]");

texts.forEach(function (element) {
  element.dataset.jedi = element.textContent;
});
images.forEach(function (image) {
  image.dataset.jediSrc = image.getAttribute("src");
  image.dataset.jediAlt = image.getAttribute("alt");
});

function applyTheme(theme) {
  const sith = theme === "dark";

  themeLink.setAttribute("href", sith ? "css/dark-side.css" : "css/light-side.css");
  themeButton.textContent = sith ? "Restaurer l'Ordre Jedi" : "Exécuter l'Ordre 66";
  texts.forEach(function (element) {
    element.textContent = sith ? element.dataset.sith : element.dataset.jedi;
  });

  images.forEach(function (image) {
    image.setAttribute("src", sith ? image.dataset.sithSrc : image.dataset.jediSrc);
    image.setAttribute("alt", sith ? image.dataset.sithAlt : image.dataset.jediAlt);
  });
}
applyTheme(localStorage.getItem("theme"));
themeButton.addEventListener("click", function () {
  let newTheme = "dark";
  if (localStorage.getItem("theme") === "dark") {
    newTheme = "light";
  }
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
