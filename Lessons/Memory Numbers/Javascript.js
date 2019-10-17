var cards = document.getElementsByClassName("card");
var c1, c2 ;
c1 = c2 = undefined;
var container = document.getElementById("container");
var aud=document.getElementById("cardAud");
var firstCard;


window.addEventListener("load", function() {
    var cardsLength = cards.length;

    window.addEventListener("keyup", function(e) {
    })
    for(var i = 0; i < cardsLength; i++) {
        cards[i].addEventListener("click", audio);
        cards[i].addEventListener("click", evento);

        if(cord == 6) {
            cards[i].lastElementChild.innerHTML = String.fromCharCode(cards[i].lastElementChild.innerHTML);
            cards[i].getElementsByTagName("audio")[0].src = "../../aud/categories/abc/"+cards[i].lastElementChild.innerHTML.toLowerCase()+".mp3";
        } else {
            cards[i].getElementsByTagName("audio")[0].src = "../../aud/categories/numbers/"+cards[i].lastElementChild.innerHTML+"c.mp3";
        }
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
        if(cord != 6)aud.src="../../aud/categories/numbers/"+this.lastElementChild.innerHTML+"c.mp3";
        if(cord == 6)aud.src="../../aud/categories/abc/"+this.lastElementChild.innerHTML.toLowerCase()+".mp3";
        aud.play();
        if (c1 != undefined && c2 != undefined){
            container.lastElementChild.style.zIndex  = "5";
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
