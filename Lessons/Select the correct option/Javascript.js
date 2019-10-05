var pos=0;
var opt = document.getElementsByClassName("lessonButton");
var l = opt.length;

var buttons = document.getElementById("buttons");


window.addEventListener("load",function(){
	for(var i=0; i < l; i++){
		opt[i].addEventListener("click", check);
	}

	actual();
});

function actual(){
	console.log(options);
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
	console.log(option);
	option.forEach(function(e){
		document.getElementById("buttons").innerHTML+="<span class='lessonButton'>"+e.toLowerCase()+"</span>";
	});
}

function  check () {
	if(this.innerHTML.toLowerCase()==compare[pos].toLowerCase()){
		pos++;
		if(pos >= total){
			for (var i = 0; i < l; i++) {
				opt[i].removeEventListener("click", check);
			}
			victoryMessage();
		}else{
			 actual();
		}
	}
}

function createButtons (text) {
	let span = document.createElement("span");
	span.classList.add("lessonButton");
}
