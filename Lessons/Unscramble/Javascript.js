var pos=0;
var sound=document.getElementById("aud");
window.addEventListener("load",function(){
	document.getElementById("text").innerHTML=text[pos];
	document.getElementById("check").addEventListener("click",validate);
	document.getElementById("write").addEventListener("keyup",function(e){
		if(e.keyCode == 13){
			validate();
		}
	})
	document.getElementById("text").addEventListener("click",function(){
		sound.src=urlAud[pos];
		sound.play();
	})
})

function validate(){
	if(document.getElementById("write").value.toLowerCase()==compare[pos]){
		if(pos+1<total){
			pos++;
			document.getElementById("text").innerHTML=text[pos];
		}else{
			victoryMessage();
		}
	}
	document.getElementById("write").value="";
}
