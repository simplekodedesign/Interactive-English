var pos=-1;
var texto = document.getElementById("text")
var aud = document.getElementById("aud")

window.addEventListener("load",function(){

	actual(true);
	document.getElementById("btnIzq").addEventListener("click", () => actual(false));
	document.getElementById("btnDer").addEventListener("click", () => actual(true));

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
		document.getElementById("btnDer").style.transform="scale(0,0)";
		if (victoryMessage !== null) {
			victoryMessage();
		}
	}else{
		document.getElementById("btnDer").style.transform="scale(1,1)";
	}
	if(pos==0){
		document.getElementById("btnIzq").style.transform="scale(0,0)";
	}else{
		document.getElementById("btnIzq").style.transform="scale(1,1)";
	}
	aud.play();
}
