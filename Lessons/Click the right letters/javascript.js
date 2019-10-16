var mainLetter = document.getElementById("mainLetter");
const audioURL = cord == 26? "../../aud/categories/numbers/" : "../../aud/categories/abc/";
const lettersInit = cord == 26? 1 : 65;
const mistakeAud = document.getElementById("mistakeAud");
var lettersLength = cord == 26? lettersInit + 22 : lettersInit + 26;
var posLetter = lettersInit;
var mainLetter = document.getElementById("mainLetter");
var optionsLetters = document.getElementById("optionsLetters");
var appear, appearInit;
var mainAud = document.getElementById("mainAud");

var optionsLength = 20;

window.addEventListener("load", function() {
  // for (let k = 0; k < optionsLength; k++) {
  //   let randPos = parseInt(getRandomArbitrary(65, 91));
  // }
  cord == 26? createGame(0) : createGame(1);
});

function createGame (num) {
  var div;
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

  if (num == 1) {
    mainLetter.innerHTML =  String.fromCharCode(posLetter);
    mainAud.src = audioURL + (String.fromCharCode(posLetter)).toLowerCase() + ".mp3";
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
        char = String.fromCharCode(parseInt(getRandomArbitrary(lettersInit, lettersLength)));
      }while (char == mainLetter.innerHTML);
  
      if(optionsLetters[k].innerHTML == "0") {
        optionsLetters[k].innerHTML = char;
      }
    }
  } else if (num == 0) {

    mainLetter.innerHTML = posLetter;
    mainAud.src = audioURL + posLetter + "c.mp3";
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
        char = parseInt(getRandomArbitrary(lettersInit, lettersLength));
      }while (char == mainLetter.innerHTML);
  
      if(optionsLetters[k].innerHTML == "0") {
        optionsLetters[k].innerHTML = char;
      }
    }
  }

}

function clearGame () {
  for (var j = 0; j < optionsLength; j++) {
    optionsLetters[j].removeAttribute('style');
    optionsLetters[j].addEventListener("click", check);
  }
  appear = appearInit;
}

function check () {
  if (mainLetter.innerHTML == this.innerHTML) {
    this.style.setProperty("color", "green");
    this.removeEventListener("click", check);
    mainAud.play();
    appear--;
  } else {
    this.style.setProperty("color", "red");
    mistakeAud.play();
    setTimeout(function () {
      clearGame();
    }, 100);
    return;
  }
  if(appear == 0) {
    posLetter++;
    if(posLetter < lettersLength) {
      clearGame();
      cord == 26? createGame(0) : createGame(1);
    } else {
      // alert("YOU WON");
      victoryMessage();
    }
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
