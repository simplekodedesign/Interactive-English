var pos=-1;
window.addEventListener("load",function(){
	actual(true);
	document.getElementById("btnIzq").addEventListener("click",function(){actual(false)});
	document.getElementById("btnDer").addEventListener("click",function(){actual(true)});
	document.getElementById("img").style.cursor="pointer";
	document.getElementById("img").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
})

function actual(dir){
	if(dir){
		pos++;
		if(pos<total){
			document.getElementById("img").src=urlImg[pos];
			document.getElementById("aud").src=urlAud[pos];
			document.getElementById("es").innerHTML=es[pos];
			document.getElementById("en").innerHTML=en[pos];
		}
	}else{
		if(pos-1>=0){
			pos--;
			document.getElementById("img").src=urlImg[pos];
			document.getElementById("aud").src=urlAud[pos];
			document.getElementById("es").innerHTML=es[pos];
			document.getElementById("en").innerHTML=en[pos];
		}
	}
	if(pos==total-1){
		document.getElementById("btnDer").innerHTML="Finish";
	}else{
		
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
}
