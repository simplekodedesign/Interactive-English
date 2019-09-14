
var shops = document.getElementsByClassName("img");
var engname = document.getElementById("eng");
var espname = document.getElementById("esp");
var rand;
var img = document.getElementById("eximg");
var b = [];
window.addEventListener("load", function() {

    for (var i = 0; i < shops.length; i++) {
        b.push(0);
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
        shops[i].addEventListener("click", function() {
            b[this.parentElement.classList[2]]=1;
            b2=1;
            for(var j=0;j<shops.length;j++)if(b[j]!=1)b2=0;
            if(b2)victoryMessage();
            this.parentElement.lastElementChild.play();
            engname.innerHTML = this.parentElement.firstElementChild.alt
            espname.innerHTML = (this.parentElement.getElementsByTagName("span"))[0].innerHTML;

            img.src = this.parentElement.firstElementChild.src;
        });
    }

    (document.getElementsByClassName("street"))[0].addEventListener("click", function() {
        this.lastElementChild.play();
        engname.innerHTML = "Avenue";
        espname.innerHTML = "Avenida";
    });
});
