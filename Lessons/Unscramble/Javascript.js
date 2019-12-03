var pos=0;
var sound=document.getElementById("aud");
window.addEventListener("load",function(){
	document.getElementById("text").innerHTML=text[pos];
	document.getElementById("check").addEventListener("click",validate);
	document.getElementById("write").addEventListener("keyup", key);
	document.getElementById("text").addEventListener("click",function(){
		sound.src=urlAud[pos];
		sound.play();
	});
})

function key (e) {
	if(e.keyCode == 13){
		validate();
	}
}

function validate(){
	if(document.getElementById("write").value.toLowerCase()==compare[pos]){
		if((pos + 1) < total){
			pos++;
			document.getElementById("text").innerHTML=text[pos];
		}else{
			document.getElementById("write").removeEventListener("keyup", key);
			document.getElementById("check").removeEventListener("click",validate);
			if (victoryMessage !== null) {
				victoryMessage();
			}
		}
	} else {
		mistake();
	}
	document.getElementById("write").value="";
}
