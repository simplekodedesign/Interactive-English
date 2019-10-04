var pos=0;

window.addEventListener("load",function(){
	actual();
	document.getElementById("btnListen").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
	document.getElementById("write").addEventListener("keyup", key);

	document.getElementById("btncheck").addEventListener("click",validate_with_split);
})

function key (e) {
	if(e.keyCode == 13){
		validate_with_split();
	}
}

function actual(){
	document.getElementById("number").innerHTML=text[pos];
	document.getElementById("aud").src=urlAud[pos];
	document.getElementById("write").value="";
	document.getElementById("aud").play();
}

function validate_with_split(){
	comp=compare[pos].split("/",15);
	var b=0;
	comp.forEach(function(e){
		if(e==document.getElementById("write").value&&document.getElementById("write").value!=""){
			pos++;
			b=1;
			if(pos>=text.length){
				document.getElementById("write").removeEventListener("keyup", key);
				document.getElementById("btncheck").removeEventListener("click",validate_with_split);
				victoryMessage();
			}else{
				actual();
			}
		}
	});
}
