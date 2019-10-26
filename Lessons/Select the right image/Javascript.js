var pos=0;
window.addEventListener("load",function(){
	actual();
	for(var i=0;i<document.getElementsByClassName("cont_abc")[0].getElementsByTagName("div").length;i++){
		document.getElementsByClassName("cont_abc")[0].getElementsByTagName("div")[i].addEventListener("click",function(e){
			if(e.target.innerHTML.toLowerCase() == compare[pos].toLowerCase()){
				if(pos+1<total){
					pos++;
					actual();
				}else{
					victoryMessage();
				}
			} else {
				mistake();
			}
		})
	}
	document.getElementById("btnListen").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
})

function actual(){
	let textos = txt[pos].split("/", 2);
	textos.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	document.getElementsByClassName("cont_abc")[0].firstElementChild.innerHTML = textos[0];
	document.getElementsByClassName("cont_abc")[0].lastElementChild.innerHTML = textos[1];
	document.getElementById("aud").src=urlAud[pos];
	document.getElementById("aud").play();
}
