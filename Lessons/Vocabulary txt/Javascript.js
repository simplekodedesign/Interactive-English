var pos=-1;
window.addEventListener("load",function(){
	actual(true);
	document.getElementById("btnIzq").addEventListener("click",function(){actual(false)});
	document.getElementById("btnDer").addEventListener("click",function(){actual(true)});
	document.getElementById("text").style.cursor="pointer";
	document.getElementById("text").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
})

function actual(dir){
	if(dir){
		pos++;
		if(pos<total){
			document.getElementById("text").innerHTML=text[pos];
			document.getElementById("aud").src=urlAud[pos];
			if (isNaN(text[pos])) {
				document.getElementById("en").innerHTML=text2[pos];
				document.getElementById("es").innerHTML=text2[pos];
			} else {
				document.getElementById("en").innerHTML=text2[pos].split("/",2)[0];
				document.getElementById("es").innerHTML=text2[pos].split("/",2)[1];
			}
		}
	}else{
		pos--;
		if(pos>=0){
			document.getElementById("text").innerHTML=text[pos];
			document.getElementById("aud").src=urlAud[pos];
			if (isNaN(text[pos])) {
				document.getElementById("en").innerHTML=text2[pos];
				document.getElementById("es").innerHTML=text2[pos];
			} else {
				document.getElementById("en").innerHTML=text2[pos].split("/",2)[0];
				document.getElementById("es").innerHTML=text2[pos].split("/",2)[1];
			}
		}
	}
	// if(pos==total-1){
	// 	document.getElementById("btnDer").innerHTML="Finish";
	// }else{
	// 	document.getElementById("btnDer").innerHTML=">";
	// }
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
}
