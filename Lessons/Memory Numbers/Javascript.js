var cards = document.getElementsByClassName("card");
var c1, c2 ;
c1 = c2 = undefined;
var tot = 15;
var container = document.getElementById("container");
var aud=document.getElementById("cardAud");
var firstCard;

window.addEventListener("load", function() {
    for(var i = 0; i<cards.length; i++) {
        cards[i].addEventListener("click", audio);
        cards[i].addEventListener("click", evento);
    }
});

var audio = function () {
    this.getElementsByTagName("audio")[0].play();
}
var evento = function  () {
    this.firstElementChild.style.transform = "scale(0,0)";
    if(this != firstCard || c1 == undefined){
        c1 == undefined? c1 = this.lastElementChild.innerHTML : c2 = this.lastElementChild.innerHTML;
        firstCard = this;
        aud.src="../../aud/categories/numbers/"+this.lastElementChild.innerHTML+"c.mp3";
        aud.play();
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
            if (cards[i].lastElementChild.innerHTML == t1 || cards[i].lastElementChild.innerHTML == t2) {
                cards[i].removeEventListener("click", evento);
            }
        }


    } else {
        for(var i = 0 ; i<cards.length ; i++) {
            if (cards[i].lastElementChild.innerHTML == t1 || cards[i].lastElementChild.innerHTML == t2) {
                cards[i].firstElementChild.style.transform = "scale(1,1)";
                // alert("POLLO");
            }
        }
        c1 = c2 = undefined;
    }
    container.lastElementChild.style.zIndex = "-1";
    if(tot==0)victoryMessage();
}
