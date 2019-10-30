var premios = document.getElementsByClassName("premio");
const IMGURL = "../../img/categories/food and drinks/ice_cream.svg";

window.addEventListener("load", function () {
  createAwards();
})

function createAwards () {
  let nPremios = COTEMA > 9? 2 : 1;
  let temas = COTEMA;

  for (let i = 0; i < nPremios; i++) {
    let spans = premios[i].getElementsByTagName("span");
    let spansLength = spans.length;
    premios[i].firstElementChild.setAttribute("src", IMGURL);
    for (let j = 0; j < spansLength; j++) {
      spans[j].style.setProperty("background-color", color[parseInt(getRandomArbitrary(0, 7))]);
      if(j + 1 < temas) {
        spans[j].style.setProperty("opacity", "0");
      }
    }
    if (nPremios > 1) {
      temas -= 9;
    }
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}