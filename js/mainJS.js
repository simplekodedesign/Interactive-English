var buttom = document.getElementById("submit");
var victoryScreen = document.getElementById("victoryScreen");
// var next = document.getElementById("win");
var animations = document.getElementsByClassName("myAnimation");
// var continueHere = document.getElementById("win");

var translator = document.getElementById("translator");
var i = 0;
var j = 0;
var k = 0;
var h = 0;
var value;
var close= document.getElementById('close');

window.addEventListener("load", function () {
  if(translator)translator.addEventListener("click", translate);

  if((document.getElementsByClassName("exitButton"))[0]) {
    (document.getElementsByClassName("exitButton"))[0].addEventListener("click", translate);
  }

  if(animations[0]){
    (document.getElementsByTagName("body"))[0].classList.add("home-background");
    // document.getElementById('start').addEventListener("click", help);
    for(var i = 0; i < animations.length; i++) {
      value = (animations[i].getElementsByClassName("value"))[0].firstElementChild.innerHTML;
      value = value.substr(0,value.length-1);
      if (value*1 < 50) {
        animations[i].classList.add("lessthan50");
      }
      value = ((value*360)/100)-180;
      animations[i].firstElementChild.style.transform = "rotate("+ value +"deg)";
    }
  }

  for (var i = 0; i < road.length; i++) {
    road[i].addEventListener("mouseenter", changeRoadTitle);
  }

  victoryScreen.addEventListener("click", victoryMessageOff);

  document.getElementById('helpVideo').addEventListener("click", help);    // onclick="help(this)"
  close.addEventListener("click", help);
});

function changeRoadTitle () {
  title.innerHTML = this.firstElementChild.firstElementChild.attributes.alt.value;
}

function fullmenu(data) {
    data.parentElement.classList.toggle('change');
}

// DNL.... Login

function helpmenu(data) {
  document.getElementById('help').parentElement.classList.toggle("fullmenu");
}

var road = document.getElementsByClassName('themeRoad');
var title = document.getElementById('maintTitle');


/*-----------------------------Help Button-----------------------------------*/

function help(data){
  if(h==0){
    close.parentElement.style.transform = "scale(1)";
    (document.getElementsByTagName('body'))[0].style.overflow = "hidden";
    if (close.parentElement.lastElementChild.id != 'video') {
      helpmenu();
    }
    h=1;
  }else{
    close.parentElement.style.transform = "scale(0)";
    (document.getElementsByTagName('body'))[0].style.overflow = "auto";
    h=0;
  }
}

/*-----------------------------New Code (Header)-----------------------------------*/

// function show() {
//     if (k==0) {
//       document.getElementById("list").style.width = "30vw";
//       document.getElementById("list").style.height = "auto";
//       k = 1;
//     }else {
//       document.getElementById("list").style.width = "0";
//       document.getElementById("list").style.height = "0";
//       k = 0;
//     }
// }


function dropdown(val){
  val.parentElement.classList.toggle('drop');
}

function theme(val){
  document.getElementsByTagName('body')[0].className = val;
}


/*-----------------------------------Victory Message--------------------*/

var victoryMessage = function() {
  var xhttp = new XMLHttpRequest();
  /*xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main").innerHTML = this.responseText;
    }
  };*/
  xhttp.open("GET", "../controller/continue.php?co="+cord, true);
  xhttp.send();
  victoryScreen.style.transform = "translate(-50px, 0)";
  document.getElementById("next").style.display="flex";

  var rand = (Math.random())*10;

  if (rand < 2.5) {
    document.getElementById("victoryAud").src = "../../../../aud/congratulations/c1.mp3";
    document.getElementById("victoryAud").play();
  }

  if (rand > 2.5 && rand < 5) {
    document.getElementById("victoryAud").src = "../../aud/congratulations/c2.mp3";
    document.getElementById("victoryAud").play();
  }

  if (rand > 5 && rand < 7.5) {
    document.getElementById("victoryAud").src = "../../aud/congratulations/c3.mp3";
    document.getElementById("victoryAud").play();
  }

  if (rand > 7.5) {
    document.getElementById("victoryAud").src = "../../aud/congratulations/c4.mp3";
    document.getElementById("victoryAud").play();
  }
}

var victoryMessageOff = function() {
    victoryScreen.style.transform = "translate(300px, 0)";
}


/*---------------------------------------Translator----------------------------------*/

var translatescreen = document.getElementById("translatorScreen");

//Functión para activar el traductor, cargada al evento load de Window
var translate = function () {
  translatescreen.classList.toggle("translator-activated");
  if(translatescreen.classList[1] == 'translator-activated') {
    translatescreen.parentElement.style.overflow = "hidden";
  } else {
    translatescreen.parentElement.style.overflow = "auto";
  }
}

//translator
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
  xhttp.open("GET", "php/controller/translate.php?from="+from+"&to="+to+"&txt="+txt, true);
  xhttp.send();
}

function resetAct(url,co){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
     document.getElementById("main").innerHTML=this.responseText;
    }
  };
  xhttp.open("GET",url+"?co="+co+"&aj=1", true);
  xhttp.send();
}

//Función para recargar la página de la actividad actual
function reload() {
  location.href=loc;
}

//funcion recargar
// window.addEventListener("",function(){
//   location.href=loc;
// });
