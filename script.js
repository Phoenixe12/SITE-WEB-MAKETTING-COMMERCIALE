let cap = document.getElementById("capt");
let menu = document.getElementById("aside");
let affiche = false;
cap.addEventListener("click", function () {
  if (affiche == false) {
    menu.style.left = "0";
    affiche = true;
  } else {
    menu.style.left = "-16vw";
    affiche = false;
  }
});
const modal = document.querySelector(".modal");
const menus = document.querySelector(".block");
addEventListener("scroll", (e) => {
  console.log(window.scrollY, modal.clientHeight);
  if (window.scrollY > modal.clientHeight) {
    //menus.style.display = "block";//
  } else {
   // menus.style.display = "none";
  }
});
