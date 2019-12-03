var pos=-1;
var img = document.getElementById("img")
var aud = document.getElementById("aud")
window.addEventListener("load", function(){
	actual(true);
	document.getElementById("btnIzq").addEventListener("click", () => actual(false))
	document.getElementById("btnDer").addEventListener("click", () =>	actual(true))

	img.addEventListener("click", () => aud.play())
})

function actual(dir){
	if(dir){
		pos++;
		if(pos<total){
			img.src=urlImg[pos];
			aud.src=urlAud[pos];
			document.getElementById("es").innerHTML=es[pos];
			document.getElementById("en").innerHTML=en[pos];
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
	if(pos==total-1){
		document.getElementById("btnDer").innerHTML="Finish";
	}
	if(pos==total){
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
	img.addEventListener("load", () => aud.play())
}
