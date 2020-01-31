var pos=-1;
var img = document.getElementById("img")
var aud = document.getElementById("aud")
const btnDer = document.getElementById("btnDer")
const btnIzq = document.getElementById("btnIzq")

window.addEventListener("load", function(){
	actual(true);
	btnIzq.addEventListener("click", () => actual(false))
	btnDer.addEventListener("click", () =>	actual(true))

	img.addEventListener("click", () => aud.play())
})

function actual(dir){
	if(dir){
		pos++;
		if(pos < total){
			img.src = urlImg[pos];
			aud.src = urlAud[pos];
			document.getElementById("es").innerHTML = es[pos];
			document.getElementById("en").innerHTML = en[pos];
		}
	}else{
		if(pos-1>=0){
			pos--;
			img.src=urlImg[pos];
			aud.src=urlAud[pos];
			document.getElementById("es").innerHTML=es[pos];
			document.getElementById("en").innerHTML=en[pos];
		}
	}
	if(pos==total){
		btnDer.style.transform="scale(0,0)";
		if (victoryMessage !== null) {
			victoryMessage();
		}
	}else{
		btnDer.style.transform="scale(1,1)";
	}
	if(pos==0){
		btnIzq.style.transform="scale(0,0)";
	}else{
		btnIzq.style.transform="scale(1,1)";
	}
	img.addEventListener("load", () => aud.play())
}
