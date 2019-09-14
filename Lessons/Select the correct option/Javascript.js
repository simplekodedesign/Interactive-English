var pos=0;
window.addEventListener("load",function(){
	actual();
});

function actual(){
	document.getElementById("img").src=urlImg[pos];

	document.getElementById("img").addEventListener("click",function(){
		if(pos<total){
			document.getElementById("aud").src=urlAud[pos];
			document.getElementById("aud").play();
		}
	});

	option=options[pos].split("/",15);
	var b=0;
	document.getElementById("buttons").innerHTML="";
	option.forEach(function(e){
		document.getElementById("buttons").innerHTML+="<span class='lessonButton'>"+e.toLowerCase()+"</span>";
	});
	opt=document.getElementsByClassName("lessonButton");
	for(var i=0;i<opt.length;i++){
		opt[i].addEventListener("click",function(){
			if(this.innerHTML==compare[pos].toLowerCase()){
				pos++;
				if(pos>=total){
					victoryMessage();
				}else{
					 actual();
				}
			}
		});
	}
}
