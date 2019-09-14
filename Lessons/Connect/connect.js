
var texts = document.getElementsByClassName("text");
var c1, c2 ;
c1 = {idText: undefined , idcol: undefined};
c2 = {idText: undefined , idcol: undefined};

var container = document.getElementById("container");


for(var i = 0; i<texts.length; i++) {
    texts[i].addEventListener("click", function() {

        this.style.color = "white";
        this.style.backgroundColor = "rgb(12, 13, 104)";
        if (c1.idText == undefined) {
            c1.idText = (this.classList)[1];
            c1.idcol = this.parentElement.id;
        } else {
            c2.idText = (this.classList)[1];
            c2.idcol = this.parentElement.id;
        }

        this.parentElement.lastElementChild.style.zIndex = 5;

        if (c1.idText != undefined && c2.idText != undefined){
            check(c1,c2);
        }
    });
}

function check (t1,t2) {
    if(t1.idText == t2.idText) {
        for(var i = 0 ; i<texts.length ; i++) {
            if(((texts[i].classList)[1] == t1.idText && (texts[i].parentElement.id == t1.idcol)) || (texts[i].classList)[1] == t2.idText && (texts[i].parentElement.id == t2.idcol)) {
                desanimar(texts[i], 1);
            }
        }
        tot--;
    } else {
        for(var i = 0 ; i<texts.length ; i++) {
            if((texts[i].classList)[1] == t1.idText && (texts[i].parentElement.id == t1.idcol)) {
                desanimar(texts[i], 0);
            }

            if((texts[i].classList)[1] == t2.idText && (texts[i].parentElement.id == t2.idcol)) {
                desanimar(texts[i], 0);
            }
        }
    }
    c1.idText = c1.idcol = c2.idText = c2.idcol = undefined;

    if(tot==0)victoryMessage();
}


function desanimar (data, n) {

    if(n == 1) {
        data.style.backgroundColor = "green";
        data.style.transform = "translate(0px, 20px)";

        setTimeout(function() {
            data.style.transform = "translate(0px, -20px)"
            setTimeout(function() {
                data.style.transform = "translate(0px, 0px)"
                // data.style.color = "black";
                // data.style.backgroundColor = "rgba(12, 13, 104, 0)";

                setTimeout(function() {
                    data.style.transform = "scale(0,0)";
                }, 1000);
            }, 250);
        }, 250);

        data.parentElement.lastElementChild.style.zIndex = -1;
    }

    if(n == 0) {
        data.style.backgroundColor = "red";
        data.style.transform = "translate(20px, 0px)";

        setTimeout(function() {
            data.style.transform = "translate(-20px, 0px)"
            setTimeout(function() {
                data.style.transform = "translate(0px, 0px)"
                data.style.color = "white";
                data.style.backgroundColor = "#1C89DB";
            }, 250);
        }, 250);

        data.parentElement.lastElementChild.style.zIndex = -1;

    }
}
