var shops = document.getElementsByClassName("img");
var rand;
var question = document.getElementById("question");
var resps = document.getElementsByClassName("resp");
/*Variables provenientes de PHP para el control de selección de respuestas*/
var correctOptcion;

var turns = options.length;
window.addEventListener("load", function() {
    
  for (var i = 0; i < shops.length; i++) {
    rand = parseInt(getRandomArbitrary(0, 7));        
    shops[i].parentElement.style.setProperty("background-color", color[rand]);
    shops[i].addEventListener("click", audplay);
  }

  question.addEventListener("click", qaudplay);

  for (var i = 0; i < resps.length; i++) {
    resps[i].addEventListener("click", checkgame);
  }
  (document.getElementsByClassName("street"))[0].addEventListener("click", function() {
    this.lastElementChild.play();
  });

  checkgame();
});

var audplay = function () {
  this.parentElement.lastElementChild.play();
}

var qaudplay = function () {
  this.lastElementChild.play();
}

var checkgame = function () {
  if (turns == options.length) {
    turns--;
    options[turns].opc = options[turns].opc.split("/");
    options[turns].opc.sort(function (a,b) {
      return 0.5 - Math.random();
    });
    let opclength = options[turns].opc.length;
    for (var i = 0; i < opclength; i++) {
      resps[i].innerHTML = options[turns].opc[i];
    }

    question.firstElementChild.src = (options[turns]).img;
    question.lastElementChild.src = (options[turns]).aud;
    correctOptcion = (options[turns]).rightop;
  } else {
    var data = this;
    if(turns >= 0){
      if (data.innerHTML == correctOptcion) {
        turns--;
        this.style.backgroundColor = "green";
        if(turns < 0){
          if (victoryMessage !== null) {
            victoryMessage();
          }
          // alert("YOU WON");
          return;
        }
        setTimeout(function() {
          options[turns].opc = options[turns].opc.split("/");
          options[turns].opc.sort(function (a,b) {
            return 0.5 - Math.random();
          });
          let opclength = options[turns].opc.length;
          for (var i = 0; i < opclength; i++) {
            resps[i].innerHTML = options[turns].opc[i];
          }
          question.firstElementChild.src = (options[turns]).img;
          question.lastElementChild.src = (options[turns]).aud;
          correctOptcion = (options[turns]).rightop;
          data.style.backgroundColor = "rgb(136, 189, 233)";
        }, 500);
      } else {
        mistake();
        data.style.backgroundColor = "red";
        data.style.transform = "translate(20px, 0px)";
        setTimeout(function () {
          data.style.transform = "translate(-20px, 0px)";
          setTimeout(function () {
            data.style.backgroundColor = "rgb(136, 189, 233)";
            data.style.transform = "translate(0px, 0px)";
          }, 250);
        }, 250);
      }
    }
  }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
