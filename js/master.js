const color = [
  "rgb(248, 206, 0)",
  "rgb(237, 112, 42)",
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
var extibuttonContact = document.getElementById("exitButtonContact");
var helpgif = document.getElementById("helpgif");
var translatebutton = document.getElementById("translatebutton");
var gifButton = document.getElementById("gifButton");
var contactButton = document.getElementById("contactButton");
var contact = document.getElementById("contact");
var navbar = document.getElementById('navbarNav');
var reloadButton = document.getElementById("reloadButton");
var from_toButton = document.getElementById("from_toButton"); // Button for translateScreen
var svgRocket;
var linkElement;
var from_to = 0; // Variable for translation
var rocket = document.getElementById("rocket");
var rocketMessage = document.getElementById("rocketMessage");
var congratsAudio = document.getElementById("congratsAudio");
var win = document.getElementById("win")
var durationRocket = 5;
var mistakeAudio = document.getElementById("mAudio");

window.addEventListener("load", function () {
  if(reloadButton) {
    document.getElementById("reloadButton").addEventListener("click", function () {
      location.reload();
    });
  }

  mistakeAudio.src = "../../aud/mistake.mp3";

  var rocket = document.getElementById("rocketSVG");
  svgRocket = rocket.contentDocument;

  linkElement = svgRocket.createElementNS("http://www.w3.org/1999/xhtml", "link");
  linkElement.setAttribute("href", "../css/rocket.css");
  linkElement.setAttribute("type", "text/css");
  linkElement.setAttribute("rel", "stylesheet");
  svgRocket.getElementById("Capa_1").appendChild(linkElement);

  if (document.getElementById("road")) {
    navbarNav.firstElementChild.style.display = "none";
  }

  if(translator) {
    translator.addEventListener("click", translate);
    extibutton.addEventListener("click", translate);
  }

  if(helpgif) {
    gifButton.style.setProperty("display", "inline-block");
    gifButton.addEventListener("click", showGif);
    extibuttonGif.addEventListener("click", showGif);
  }
  translatebutton.addEventListener("click", getTranslate)
  from_toButton.addEventListener("click", from_to_function);

  rocket.addEventListener("animationend", function() {

  });
  if (contact) {
    contactButton.addEventListener("click", showContact)
    extibuttonContact.addEventListener("click", showContact);
  }

  /*-------Animacion de avance de tema------*/
  win.addEventListener("click", () => {
    win.classList.remove("winactive")
    document.getElementById("lSigu").firstElementChild.click()
  })
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

function from_to_function() {
  if (from_to == 0) {
    from_toButton.innerHTML = "ESP - ENG";
    from_to = 1;
  } else if (from_to == 1) {
    from_toButton.innerHTML = "ENG - ESP";
    from_to = 0;
  }
}

function getTranslate(){
  var xhttp = new XMLHttpRequest();
  if(from_to == 0){
    var from="en";
    var to="es";
  }else if(from_to == 1){
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

function showContact () {
  contact.classList.toggle("contact-activated");
}

//-------------------------------------GIF--------------------------------------

function showGif () {
  helpgif.classList.toggle("helpgif-activated");
}

//--------------------------------------VICTORY MESSAGE--------------------------

var victoryMessage = function() {
  document.getElementById("victoryAudio").play();
  if (location.href.indexOf("aTema") != -1) {
    win.classList.add("winactive")
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      rocket.style.setProperty("animation-duration", durationRocket + "s");
      rocket.style.setProperty("animation-name", "rocketAnimation1");
      setTimeout(() => {
        // rocketMessage.style.setProperty("opacity", "1");
        congratsMessage();
      }, (durationRocket*1000) + 500);
      document.getElementById("lSigu").style.display="flex";
    }
  };
  xhttp.open("GET", "../controller/continue.php?co="+cord, true);
  xhttp.send();
}

function mistake () {
  mistakeAudio.play();
}

function congratsMessage () {
  rocketMessage.style.setProperty("display", "flex");
  setTimeout(() => {
    rocketMessage.style.setProperty("opacity", "1");    
  }, 500);
  var rand = (Math.random())*10;

  if (rand < 2.5) {
      congratsAudio.src = "../../aud/congratulations/c1.mp3";
      congratsAudio.play();
      messageConstructor("Excellent!");
  }

  if (rand > 2.5 && rand < 5) {
      congratsAudio.src = "../../aud/congratulations/c2.mp3";
      congratsAudio.play();
      messageConstructor("Good job!");
  }

  if (rand > 5 && rand < 7.5) {
      congratsAudio.src = "../../aud/congratulations/c3.mp3";
      congratsAudio.play();
      messageConstructor("Very good!");
  }

  if (rand > 7.5) {
      congratsAudio.src = "../../aud/congratulations/c4.mp3";
      congratsAudio.play();
      messageConstructor("We are learning!");
  }
}


function messageConstructor (message) {
  let text = message.split("");
  console.log(text);
  let textLength = text.length;
  let span;

  for (let j = 0; j < textLength; j++) {
    span = document.createElement("span");
    if (text[j] == " ") {
      span.innerHTML = "_";
      span.style.setProperty("color", "transparent");
      span.style.setProperty("animation-name", "unset");
      span.style.setProperty("transform", "scale(0)");
    } else {
      span.innerHTML = text[j];
      span.style.setProperty("animation-delay", j/10 + "s");
    }


    rocketMessage.appendChild(span);
  }
}