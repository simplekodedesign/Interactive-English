
const streetAudURL = "../../aud/categories/places/";
const streetImgURL = "../../img/categories/places/";
var streetElements = document.getElementsByClassName("fas");
var streetElementsAud = document.getElementById("streetElementsAud");
var pedestrianElements = document.getElementsByClassName("pasoP");
var shops = document.getElementsByClassName("img");
var l = shops.length;
var engname = document.getElementById("eng");
var espname = document.getElementById("esp");
var rand;
var img = document.getElementById("eximg");
var b = [];
window.addEventListener("load", function() {

    for (var i = 0; i < l; i++) {
        b.push(0);
        rand = parseInt(getRandomArbitrary(0, 7));
        shops[i].parentElement.style.setProperty("background-color", color[rand]);

        shops[i].addEventListener("click", setter);
    }

    (document.getElementsByClassName("street"))[0].addEventListener("click", function() {
        this.lastElementChild.play();
        engname.innerHTML = "Avenue";
        espname.innerHTML = "Avenida";
    });

    var elementsLength = streetElements.length;
    for (let j = 0; j < elementsLength; j++) {
        streetElements[j].addEventListener("click", elementSound);
    }

    var pedestrianLength = pedestrianElements.length;
    for (let k = 0; k < pedestrianLength; k++) {
        pedestrianElements[k].addEventListener("click", elementSound);
    }
});

function setter () {
    b[this.parentElement.classList[2]] = 1;
    b2 = 1;
    for(var j = 0; j < shops.length; j++)
    if(b[j] != 1)b2=0;
    if(b2) {
        for (var i = 0; i < l; i++) {
            shops[i].removeEventListener("click", setter);
        }

        victoryMessage();
    }
    this.parentElement.lastElementChild.play();
    engname.innerHTML = this.parentElement.firstElementChild.alt
    espname.innerHTML = (this.parentElement.getElementsByTagName("span"))[0].innerHTML;

    img.src = this.parentElement.firstElementChild.src;
}

function elementSound () {
    let text;
    if(this.classList[1]) {
        text = this.classList[this.classList.length - 1];
        streetElementsAud.src = streetAudURL + this.classList[this.classList.length-1] + ".mp3";
        streetElementsAud.play();
        espname.innerHTML = this.firstElementChild.innerHTML;
        if (text == "Taxi") {
            img.src = streetImgURL + "taxid.webp";
        } else if (text == "Bus") {
            img.src = streetImgURL + "busd.webp";
        } else {
            img.src = streetImgURL + text.toLowerCase() + ".webp";
        }
        console.log(img.src);
        while (text.indexOf("_") != -1) {
            text = text.replace("_", " ");
        }
        engname.innerHTML = text;
    } else {
        text = this.lastElementChild.innerHTML
        streetElementsAud.src = streetAudURL + "pedestrian_crossing" + ".mp3";
        streetElementsAud.play();
        engname.innerHTML = text;
        espname.innerHTML = this.firstElementChild.innerHTML;
        text = text.toLowerCase();
        while (text.indexOf(" ") != -1) {
            text = text.replace(" ", "_");
        }
        console.log(text);
        img.src = streetImgURL + text + ".webp";
        console.log(img.src);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
