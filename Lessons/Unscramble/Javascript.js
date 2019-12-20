var pos = 0;
const sound = document.getElementById("aud");
const unscrambleText = document.getElementById("text")
const unscrambleWrite = document.getElementById("write")
const unscrambleCheck = document.getElementById('check')

window.addEventListener("load",function(){
	sound.src= urlAud[pos]
	unscrambleText.innerHTML=text[pos];
	unscrambleCheck.addEventListener("click",validate);
	unscrambleWrite.addEventListener("keyup", key);
	unscrambleText.addEventListener("click",() => sound.play());
	document.getElementById("listen").addEventListener("click", () => sound.play())
})

function key (e) {
	if(e.keyCode == 13){
		validate();
	}
}

function validate(){
	if(unscrambleWrite.value.toLowerCase()==compare[pos]){
		if((pos + 1) < total){
			pos++;
			unscrambleText.innerHTML=text[pos];
			sound.src = urlAud[pos];
		}else{
			unscrambleWrite.removeEventListener("keyup", key);
			unscrambleCheck.removeEventListener("click",validate);
			if (victoryMessage !== null) {
				victoryMessage();
			}
		}
	} else {
		mistake();
	}
	unscrambleWrite.value="";
	sound.play();
}
