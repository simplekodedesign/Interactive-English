var shops = document.getElementsByClassName("img");
var rand;
var question = document.getElementById("question");
var resps = document.getElementsByClassName("resp");
/*Variables provenientes de PHP para el control de selección de respuestas*/
var correctOptcion;

var turns = options.length;
window.addEventListener("load", function() {
    
    for (var i = 0; i < shops.length; i++) {
        rand = (Math.random())*10;

        if (rand < 2.5) {
            shops[i].parentElement.style.backgroundColor = "rgb(229, 255, 0)";
        }

        if (rand > 2.5 && rand < 5) {
            shops[i].parentElement.style.backgroundColor = "rgb(255, 115, 0)";
        }

        if (rand > 5 && rand < 7.5) {
            shops[i].parentElement.style.backgroundColor = "rgb(0, 102, 255)";
        }

        if (rand > 7.5) {
            shops[i].parentElement.style.backgroundColor = "rgb(30, 255, 0)";
        }
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
        for (var i = 0; i < 3; i++) {
            resps[i].innerHTML = (options[turns])["op" + (i+1)];
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
                    victoryMessage();
                    // alert("YOU WON");
                    return;
                }
                setTimeout(function() {
                    for (var i = 0; i < 3; i++) {
                        resps[i].innerHTML = (options[turns])["op" + (i+1)];
                    }
                    question.firstElementChild.src = (options[turns]).img;
                    question.lastElementChild.src = (options[turns]).aud;
                    correctOptcion = (options[turns]).rightop;
                    data.style.backgroundColor = "rgb(136, 189, 233)";
                }, 500);

            } else {
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
    if(turns < 0  )alert("YOU WON");
}
