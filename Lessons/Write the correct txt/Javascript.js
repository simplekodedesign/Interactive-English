var pos=0;
var write = document.getElementById("write");
var aud = document.getElementById("aud")

window.addEventListener("load",function(){
	description(CORD)
	actual();
	document.getElementById("btnListen").addEventListener("click",function(){
		aud.play();
	})
	write.addEventListener("keyup", key);

	document.getElementById("btncheck").addEventListener("click", validate_with_split);
})

function key (e) {
	if(e.keyCode == 13){
		validate_with_split();
	}
}

function actual(){
	document.getElementById("number").innerHTML = text[pos];
	aud.src = urlAud[pos];
	write.value="";
	aud.play();
}

function validate_with_split(){
	console.log("GG");
	comp = compare[pos].split("/", 15);
	var b = 0;
	comp.forEach(function(e){
		if(e.toLowerCase() == write.value.toLowerCase() && write.value != ""){
			pos++;
			b = 1;
			if(pos >= text.length){
				write.removeEventListener("keyup", key);
				document.getElementById("btncheck").removeEventListener("click", validate_with_split);
				if (victoryMessage !== null) {
					victoryMessage();
				}
			}else{
				actual();
			}
		}
	});
	if (b === 0) {
		mistake();
	}
}


const description = cord => {
  let title = document.getElementById("titles").firstElementChild
  switch (cord) {
    case 79:
      title.innerHTML = "Escribe This / These según corresponda";
		break
		
		case 86:
      title.innerHTML = "Escribe That / Those según corresponda";
    break
  }
}