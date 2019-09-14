var pos=0;
window.addEventListener("load",function(){
	actual();
	for(var i=0;i<document.getElementsByClassName("cont_abc")[0].getElementsByTagName("div").length;i++){
		document.getElementsByClassName("cont_abc")[0].getElementsByTagName("div")[i].addEventListener("click",function(e){
			if(e.target.innerHTML==compare[pos]){
				if(pos+1<total){
					pos++;
					actual();
				}else{
					victoryMessage();
				}
			}
		})
	}
	document.getElementById("btnListen").addEventListener("click",function(){
		document.getElementById("aud").play();
	})
})

function actual(){
	document.getElementsByClassName("cont_abc")[0].firstElementChild.innerHTML=txt[pos].split("/",2)[0];
	document.getElementsByClassName("cont_abc")[0].lastElementChild.innerHTML=txt[pos].split("/",2)[1];
	document.getElementById("aud").src=urlAud[pos];
	document.getElementById("aud").play();
}
