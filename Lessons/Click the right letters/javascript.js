var mainLetter = document.getElementById("mainLetter");
const audioURL = "../../aud/categories/abc/";
const lettersInit = 65;
var lettersLength = lettersInit + 26;
var posLetter = lettersInit;
var mainLetter = document.getElementById("mainLetter");
var optionsLetters = document.getElementById("optionsLetters");
var appear, appearInit;
var mainAud = document.getElementById("mainAud");

var optionsLength = 20;

window.addEventListener("load", function() {
  for (let k = 0; k < optionsLength; k++) {
    let randPos = parseInt(getRandomArbitrary(65, 91));
  }

  createGame();
});

function createGame () {
  var div;
  // mainLetter.innerHTML = letters[i].toUpperCase();
  appearInit = parseInt(getRandomArbitrary(4, 7));
  appear = appearInit;

  if(posLetter == lettersInit) {
    for (let i = 0; i < optionsLength; i++) {
      div = document.createElement("div");
      div.classList.add("letter");
      div.innerHTML = "0";
      div.addEventListener("click", check);
      optionsLetters.appendChild(div);
    }
    optionsLetters = document.getElementsByClassName("letter");
  } else {
    for (var j = 0; j < optionsLength; j++) {
      optionsLetters[j].removeAttribute('style');
      optionsLetters[j].innerHTML = "0";
    }
  }

  let i = 0;

  mainLetter.innerHTML =  String.fromCharCode(posLetter);
  mainAud.src = audioURL + (String.fromCharCode(posLetter)).toLowerCase() + ".mp3";
  console.log(mainAud.src);
  while (i < appearInit) {
    let randPos = parseInt(getRandomArbitrary(0, optionsLength));
    if(optionsLetters[randPos].innerHTML == "0") {
      optionsLetters[randPos].innerHTML = mainLetter.innerHTML;
      // optionsLetters[randPos].style.setProperty("color", "red");
      i++;
    }
  }

  for (let k = 0; k < optionsLength; k++) {
    var char;
    do {
      char = String.fromCharCode(parseInt(getRandomArbitrary(65, 91)));
    }while (char == mainLetter.innerHTML);

    if(optionsLetters[k].innerHTML == "0") {
      optionsLetters[k].innerHTML = char;
    }
  }
}

function clearGame () {
  for (var j = 0; j < optionsLength; j++) {
    optionsLetters[j].removeAttribute('style');
  }
  appear = appearInit;
}

function check () {
  if (mainLetter.innerHTML == this.innerHTML) {
    this.style.setProperty("color", "green");
    console.log(mainAud);
    mainAud.play();
    appear--;
  } else {
    this.style.setProperty("color", "red");
    setTimeout(function () {
      clearGame();
    }, 100);
    return;
  }
  if(appear == 0) {
    posLetter++;
    if(posLetter < lettersLength) {
      createGame();
    } else {
      // alert("YOU WON");
      victoryMessage();
    }
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
