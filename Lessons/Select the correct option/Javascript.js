var pos=0;

var buttons = document.getElementById("buttons");


window.addEventListener("load",function(){
	actual();
});

function actual(){
	document.getElementById("img").src= urlImg[pos];

	document.getElementById("img").addEventListener("click", function(){
		if(pos < total){
			document.getElementById("aud").src = urlAud[pos];
			document.getElementById("aud").play();
		}
	});

	option = options[pos].split("/",15);
	option.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	var b=0;
	document.getElementById("buttons").innerHTML="";
	createButtons(option);
}

function  check () {
	if(this.innerHTML.toLowerCase() == compare[pos].toLowerCase()){
		pos++;
		mistake("correct")

		if(pos >= total){
			var opt = document.getElementsByClassName("lessonButton");
			var l = opt.length;
			for (var i = 0; i < l; i++) {
				opt[i].removeEventListener("click", check);
			}
			if (victoryMessage !== null) {
				victoryMessage();
			}
		}else{
			 actual();
		}
	} else {
		mistake();
	}
}

function createButtons (arrayTexts) {
	while(buttons.firstElementChild)buttons.removeChild(buttons.firstElementChild);
	let l = arrayTexts.length;
	let span;
	for (var i = 0; i < l; i++) {
		span = document.createElement("span");
		span.classList.add("lessonButton");
		span.innerHTML = arrayTexts[i];
		span.addEventListener("click", check);
		buttons.appendChild(span);
	}
}
