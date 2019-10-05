var items = document.getElementsByClassName("item");
var c1, c2 ;
c1 = {idText: undefined , idcol: undefined, type: undefined};
c2 = {idText: undefined , idcol: undefined, type: undefined};
var b;
var container = document.getElementById("container");

window.addEventListener("load", function() {
    for(var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", funclick);
    }
});

var funclick = function () {

    if(this.parentElement.id == "txts") {
        this.style.color = "white";
        this.style.backgroundColor = "#3DE851";
        b = true;
        this.lastElementChild.play();
    } else {
        this.parentElement.style.transform = "scale(1.2, 1.2)";
        b = false;
        this.parentElement.lastElementChild.play();
    }


    if (c1.idText == undefined) {
        if (b) {
            c1.idText = this.firstElementChild.innerHTML;
            c1.idcol = this.parentElement.id;
            this.parentElement.lastElementChild.style.display = "flex";
            c1.type = b;
        } else {
            c1.idText = this.alt;
            c1.idcol = this.parentElement.parentElement.id;
            this.parentElement.parentElement.lastElementChild.style.display = "flex";
            c1.type = b;
        }
    } else {
        if (b) {
            c2.idText = this.firstElementChild.innerHTML;
            c2.idcol = this.parentElement.id;
            c2.type = b;
            this.parentElement.lastElementChild.style.display = "flex";
        } else {
            c2.idText = this.alt;
            c2.idcol = this.parentElement.parentElement.id;
            c2.type = b;
            this.parentElement.parentElement.lastElementChild.style.display = "flex";
        }
    }
    if (c1.idText != undefined && c2.idText != undefined){
        check(c1,c2);
    }


}

var textos = document.getElementsByClassName("text");
var imagenes = document.getElementsByClassName("img");
function check (t1,t2) {
    if(t1.idText == t2.idText) {
        if (t1.type) {
            for (var i = 0; i < textos.length; i++) {
                if (textos[i].innerHTML == t1.idText) {
                    desanimar(textos[i].parentElement, 1);
                }
            }
            for(var i = 0; i < imagenes.length; i++ ) {
                if(imagenes[i].firstElementChild.alt == t2.idText) {
                    desanimar(imagenes[i], 1);
                }
            }

        } else {
            for(var i = 0; i < imagenes.length; i++ ) {
                if(imagenes[i].firstElementChild.alt == t1.idText) {
                    desanimar(imagenes[i], 1);
                }
            }
            for (var i = 0; i < textos.length; i++) {
                if (textos[i].innerHTML == t2.idText) {
                    desanimar(textos[i].parentElement, 1);
                }
            }
        }

        tot--;
    } else {
        if (t1.type) {
            for (var i = 0; i < textos.length; i++) {
                if (textos[i].innerHTML == t1.idText) {
                    desanimar(textos[i].parentElement, 0);
                }
            }
            for(var i = 0; i < imagenes.length; i++ ) {
                if(imagenes[i].firstElementChild.alt == t2.idText) {
                    desanimar(imagenes[i], 0);
                }
            }

        } else {
            for(var i = 0; i < imagenes.length; i++ ) {
                if(imagenes[i].firstElementChild.alt == t1.idText) {
                    desanimar(imagenes[i], 0);
                }
            }
            for (var i = 0; i < textos.length; i++) {
                if (textos[i].innerHTML == t2.idText) {
                    desanimar(textos[i].parentElement, 0);
                }
            }
        }
    }
    c1.idText = c1.idcol = c2.idText = c2.idcol = undefined;

    if(tot==0)victoryMessage();
}


function desanimar (data, n) {

    if(n == 1) {
        if(data.parentElement.id == "txts") {
            data.style.color = "black";
            data.style.backgroundColor = "rgb(0, 255, 0)";
            setTimeout(function () {
                data.style.transform = "scale(0,0)";
                data.parentElement.lastElementChild.style.display = "none";
            }, 1000);
        } else {
            data.firstElementChild.style.backgroundColor = "green";
            data.firstElementChild.style.transform = "scale(1, 1)";
            setTimeout(function () {
                data.firstElementChild.style.transform = "scale(0,0)";
                data.parentElement.lastElementChild.style.display = "none";
            }, 1000);
        }
    }

    if(n == 0) {

        if(data.parentElement.id == "txts") {
            data.style.color = "black";
            data.style.backgroundColor = "#FF4545";
            setTimeout(function () {
                data.style.backgroundColor = "var(--lessons)";
                data.style.color = "black";
                data.parentElement.lastElementChild.style.display = "none";
            }, 1000);
        } else {
            data.firstElementChild.style.transform = "scale(1, 1)";
            setTimeout(function () {
                data.firstElementChild.style.border = "none";
                data.style.transform = "scale(1,1)";
                data.parentElement.lastElementChild.style.display = "none";
            }, 1000);
        }
    }
}
