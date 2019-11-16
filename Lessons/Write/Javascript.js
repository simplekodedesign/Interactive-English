var pos=0;

window.addEventListener("load",function(){
	actual();
	document.getElementById("btnListen").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
	document.getElementById("write").addEventListener("keyup",function(e){
		// alert(this.id);
		if(e.keyCode == 13){
			alert("HI");
			validate_with_split();
		}
	})

	document.getElementById("btncheck").addEventListener("click",validate_with_split);
})

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
		if(e.toLowerCase()==document.getElementById("write").value.toLowerCase()&&document.getElementById("write").value!=""){
			pos++;
			b=1;
			if(pos>=text.length){
				if (victoryMessage !== null) {
					victoryMessage();
				}
			}else{
				actual();
			}
		}
	});
}
