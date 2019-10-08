var mainLetter = document.getElementById("mainLetter");
var letters = ["A", "B", "C", "D"];
var lettersLength = letters.length;
var posLetter = 0;
var mainLetter = document.getElementById("mainLetter");
var optionsLetters = document.getElementById("optionsLetters");
var appear, appearInit;

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
  console.log(optionsLetters.firstElementChild);
  if(posLetter == 0) {
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
      optionsLetters[j].style.setProperty("color", "unset");
      optionsLetters[j].innerHTML = "0";
    }
  }

  let i = 0;

  mainLetter.innerHTML =  letters[posLetter];
  while (i < appearInit) {
    let randPos = parseInt(getRandomArbitrary(0, optionsLength));
    console.log(randPos);
    if(optionsLetters[randPos].innerHTML == "0") {
      optionsLetters[randPos].innerHTML = letters[posLetter];
      // optionsLetters[randPos].style.setProperty("color", "red");
      console.log(optionsLetters[randPos].innerHTML);
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
    optionsLetters[j].style.setProperty("color", "unset");
  }
  appear = appearInit;
}

function check () {
  if (mainLetter.innerHTML == this.innerHTML) {
    this.style.setProperty("color", "green");
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
      alert("YOU WON");
      // victoryMessage();
    }
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}