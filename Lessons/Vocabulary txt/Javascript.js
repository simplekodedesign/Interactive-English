var pos=-1;
var texto = document.getElementById("text")
var aud = document.getElementById("aud")
const btnIzq = document.getElementById("btnIzq")
const btnDer = document.getElementById("btnDer")

window.addEventListener("load",function(){

	actual(true);
	btnIzq.addEventListener("click", () => actual(false));
	btnDer.addEventListener("click", () => actual(true));

	texto.addEventListener("click", () => aud.play())
})

function actual(dir){
	if(dir){
		pos++;
		if(pos < total){
			texto.innerHTML= text[pos];
			aud.src= urlAud[pos];
			if (isNaN(text[pos])) {
				document.getElementById("es").innerHTML= text2[pos];
			} else {
				document.getElementById("es").innerHTML= text2[pos].split("/",2)[1];
			}
		}
	}else{
		pos--;
		if(pos >= 0){
			texto.innerHTML= text[pos];
			aud.src= urlAud[pos];
			if (isNaN(text[pos])) {
				document.getElementById("es").innerHTML= text2[pos];
			} else {
				document.getElementById("es").innerHTML= text2[pos];
			}
		}
	}


	if(pos == total){
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
	aud.play();
}
