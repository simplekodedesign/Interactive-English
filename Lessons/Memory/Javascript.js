var cards = document.getElementsByClassName("card");
var c1, c2 ;
c1 = c2 = undefined;
var container = document.getElementById("container");
var audio=document.getElementById("cardAud");
var firstCard;

window.addEventListener("load", function () {
    for(var i = 0; i<cards.length; i++) {
        cards[i].addEventListener("click", evento);
    }
});

var evento = function () {
    this.firstElementChild.style.transform = "scale(0,0)";
    if(this != firstCard || c1 == undefined){
        c1 == undefined? c1 = this.lastElementChild.src : c2 = this.lastElementChild.src;
        firstCard = this;
        audio.src=this.lastElementChild.alt;
        audio.play();
        if (c1 != undefined && c2 != undefined){
            container.lastElementChild.style.zIndex = "5";
            setTimeout(check, 1500, c1, c2);
        }
    }
}

function check (t1,t2) {
    if(t1 == t2) {
        c1 = c2 = undefined;
        tot--;
        for(var i = 0 ; i<cards.length ; i++) {
            if (cards[i].lastElementChild.src == t1 || cards[i].lastElementChild.src == t2) {
                cards[i].removeEventListener("click", evento);
            }
        }
    } else {
        for(var i = 0 ; i<cards.length ; i++) {
            if (cards[i].lastElementChild.src == t1 || cards[i].lastElementChild.src == t2) {
                cards[i].firstElementChild.style.transform = "scale(1,1)";
            }
        }
        c1 = c2 = undefined;
    }
    container.lastElementChild.style.zIndex = "-1";
    if(tot==0) {
        if (victoryMessage !== null) {
            victoryMessage();
        }
    }
}
