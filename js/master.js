const color = [
  "rgb(248, 206, 0)",
  "rgb(237, 112, 41)",
  "rgb(233, 79, 136)",
  "rgb(0, 184, 231)",
  "rgb(0, 123, 191)",
  "rgb(148, 145, 198)",
  "rgb(0, 172, 146)"
];

var road = document.getElementById("road");
var profileScreen = document.getElementById("profileScreen");
if (!road && !profileScreen) {
  var svgcolor = numero_leccion-1;
  if (svgcolor >= 7) {
    svgcolor%= 7;
  }

  document.documentElement.style.setProperty('--lessons', color[svgcolor]);
}

// if(numero_leccion != null) {
// }

var translator = document.getElementById("translator");
var extibutton = document.getElementById("exitButton");
var extibuttonGif = document.getElementById("exitButtonGif");
var helpgif = document.getElementById("helpgif");
var gifButton = document.getElementById("gifButton");
var menu = document.getElementById('showmenu')
var navbar = document.getElementById('navbarNav')

window.addEventListener("load", function () {
  if(translator) {
    translator.addEventListener("click", translate);
    extibutton.addEventListener("click", translate);
  }

  if(helpgif) {
    gifButton.style.setProperty("display", "inline-block");
    gifButton.addEventListener("click", showGif);
    extibuttonGif.addEventListener("click", showGif);
  }
});

/*---------------------------------------Translator----------------------------------*/


var translatescreen = document.getElementById("translatorScreen");
function translate () {
  translatescreen.classList.toggle("translator-activated");
  if(translatescreen.classList[1] == 'translator-activated') {
    translatescreen.parentElement.style.overflow = "hidden";
  } else {
    translatescreen.parentElement.style.overflow = "auto";
  }
}

function getTranslate(){
  var xhttp = new XMLHttpRequest();
  if(document.getElementById("checkEnEs").checked){
    var from="en";
    var to="es";
  }else if(document.getElementById("checkEsEn").checked){
    var from="es";
    var to="en";
  }
  var txt=document.getElementById("txtFrom").value;
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
     document.getElementById("txtTo").value=this.responseText;
    }
  };
  xhttp.open("GET", "../controller/translate.php?from="+from+"&to="+to+"&txt="+txt, true);
  xhttp.send();
}



//-------------------------------------GIF--------------------------------------

function showGif () {
  helpgif.classList.toggle("helpgif-activated");
}
