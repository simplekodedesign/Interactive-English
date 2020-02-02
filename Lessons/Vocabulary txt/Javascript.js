var pos=-1;
var texto = document.getElementById("text")
var aud = document.getElementById("aud")
const btnIzq = document.getElementById("btnIzq")
const btnDer = document.getElementById("btnDer")
const es = document.getElementById("es")
var en;
const vocabulary = (document.getElementsByClassName('vocabulary'))[0]

window.addEventListener("load",function(){

	if(!isNaN(text[0])){
		en = document.createElement("span")
		let arrow = document.createElement("span")
		arrow.setAttribute('id', 'arrow')
		en.setAttribute('id', 'en')
		vocabulary.insertBefore(arrow, es)
		vocabulary.insertBefore(en, arrow)
	}

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
				es.innerHTML= text2[pos];
			} else {
				let text = text2[pos].split("/",2)
				en.innerHTML= text[0]
				es.innerHTML= text[1]
			}
		}
	}else{
		pos--;
		if(pos >= 0){
			texto.innerHTML= text[pos];
			aud.src= urlAud[pos];
			if (isNaN(text[pos])) {
				es.innerHTML= text2[pos];
			} else {
				let text = text2[pos].split("/",2)
				en.innerHTML= text[0]
				es.innerHTML= text[1]
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
