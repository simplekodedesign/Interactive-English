var mainLetter = document.getElementById("mainLetter");
const audioURL = cord == 26? "../../aud/categories/numbers/" : "../../aud/categories/abc/";
const type = data.urlImg[0]? 1 : 0;
if (type == 1) {
  var lettersInit = 0;
  var lettersLength = data.urlImg.length;
} else {
  var lettersInit = cord == 26? 1 : 65;
  var lettersLength = cord == 26? lettersInit + 22 : lettersInit + 26;
}

const mistakeAud = document.getElementById("mistakeAud");
var posLetter = lettersInit;
var mainLetter = document.getElementById("mainLetter");
var optionsLetters = document.getElementById("optionsLetters");
var appear, appearInit;
var mainAud = document.getElementById("mainAud");

var optionsLength = data.urlImg[0]? 10 : 20;

window.addEventListener("load", function() {
  if(type == 1) {
    createGame(2);
  } else {
    cord == 26? createGame(0) : createGame(1);
  }
});

function createGame (num) {
  var div;
  var img;
  appearInit = parseInt(getRandomArbitrary(4, 7));
  appear = appearInit;
  if(posLetter == lettersInit) {
    if(num == 2) {
      img = document.createElement("img");
      mainLetter.insertBefore(img, mainLetter.firstElementChild);
      console.log(mainLetter);
    
    for (let h = 0; h < optionsLength; h++) {
      div = document.createElement("div");
      img = document.createElement("img");
      div.classList.add("letter");
      img.setAttribute("src", "nothing");
      img.setAttribute("alt", "0");
      console.log(img);
      div.appendChild(img);
      div.addEventListener("click", check);
      optionsLetters.appendChild(div);
    }

      optionsLetters = document.getElementsByClassName("letter");
      console.log(optionsLetters);

    } else {
      for (let i = 0; i < optionsLength; i++) {
        div = document.createElement("div");
        div.classList.add("letter");
        div.innerHTML = "0";
        div.addEventListener("click", check);
        optionsLetters.appendChild(div);
        console.log(div);
      }
      optionsLetters = document.getElementsByClassName("letter");
    }
  } else {
    if (num == 2) {
      // for (var j = 0; j < optionsLength; j++) {
      //   optionsLetters[j].firstElementChild.removeAttribute('style');
      //   optionsLetters[j].firstElementChild.src = "";
      //   optionsLetters[j].firstElementChild.alt = "0";
      // }
    } else {
      for (var j = 0; j < optionsLength; j++) {
        optionsLetters[j].removeAttribute('style');
        optionsLetters[j].innerHTML = "0";
      }
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
  } else if (num == 2) {
    mainLetter.firstElementChild.src =  data.urlImg[posLetter];
    mainLetter.firstElementChild.alt =  data.compare[posLetter];
    mainAud.src = data.urlAud;
    while (i < appearInit) {
      let randPos = parseInt(getRandomArbitrary(0, optionsLength));
      if(optionsLetters[randPos].firstElementChild.alt == "0") {
        optionsLetters[randPos].firstElementChild.src = mainLetter.firstElementChild.src;
        optionsLetters[randPos].firstElementChild.alt = mainLetter.firstElementChild.alt;
        i++;
      }
    }
    for (let k = 0; k < optionsLength; k++) {
      var char;
      do {
        char = parseInt(getRandomArbitrary(lettersInit, lettersLength));
      }while (data.compare[char] == mainLetter.firstElementChild.alt);
  
      if(optionsLetters[k].firstElementChild.alt == "0") {
        optionsLetters[k].firstElementChild.alt = data.compare[char];
        optionsLetters[k].firstElementChild.src = data.urlImg[char];
      }
    }
  }

}

function clearGame () {
  if (type == 1) {
    for (var j = 0; j < optionsLength; j++) {
      optionsLetters[j].firstElementChild.removeAttribute('style');
      optionsLetters[j].addEventListener("click", check);
    }
  } else {
    for (var j = 0; j < optionsLength; j++) {
      optionsLetters[j].removeAttribute('style');
      optionsLetters[j].addEventListener("click", check);
    }
  }
  appear = appearInit;
}

function check () {
  console.log("CHECK");

  if (type == 1) {
    if (mainLetter.firstElementChild.alt == this,firstElementChild.alt) {
      this.firstElementChild.setProperty("opacity", ".7");
    }
  }

  
  if (mainLetter.innerHTML == this.innerHTML) {
    if (type == 1) {
      
    } else {
      this.style.setProperty("color", "green");
    }
    this.removeEventListener("click", check);
    mainAud.play();
    appear--;
  } else {
    if (type != 1) {
      this.style.setProperty("color", "red");
    }
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
