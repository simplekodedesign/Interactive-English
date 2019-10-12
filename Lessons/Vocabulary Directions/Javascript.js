
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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
