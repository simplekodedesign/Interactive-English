var pos = 0;
var cad = "";
var cad2 = "";
var cad3 = "";
var text = document.getElementById("write");
var letra = document.getElementById("letra");

window.addEventListener("load",function(){
  actual();
	document.getElementById("btnListen").addEventListener("click", audListen);

	text.addEventListener("keyup", key);
  letra.addEventListener("click", audListen);
})

  function audListen () {
    let audio = document.getElementById("aud");
    audio.play();
  }

  function key (e)  {
    if(text.value.length > 0){
      cad= text.value.substr(0, text.value.length - 1);
      cad2=text.value.substr(text.value.length-1,text.value.length);
      // text.value=cad + cad2.toLowerCase();
    }
    if(text.value.indexOf(" i ")>-1){
      cad=text.value.substr(0,text.value.indexOf(" i "));
      cad2=text.value.substr(text.value.indexOf(" i "),text.value.indexOf(" i ")+3);
      cad3=text.value.substr(text.value.indexOf(" i ")+3,text.value.length);
      text.value=cad+cad2.toUpperCase()+cad3;
    }else if(text.value.indexOf("i ")>-1&&text.value.length==2){
      cad=text.value.substr(0,text.value.indexOf("i "));
      cad2=text.value.substr(text.value.indexOf("i "),text.value.indexOf(" i ")+3);
      cad3=text.value.substr(text.value.indexOf("i ")+3,text.value.length);
      text.value=cad+cad2.toUpperCase()+cad3;
    }

  if(e.keyCode == 13){
    if(text.value[text.value.length-1]=="i"&&text.value[text.value.length-2]==" "){
      cad=text.value.substr(0,text.value.length-1);
      text.value=cad + "I";
    }else if(text.value[text.value.length-1]=="?"&&text.value[text.value.length-2]=="i"&&text.value[text.value.length-3]==" "){
      cad=text.value.substr(0,text.value.length-2);
      text.value=cad + "I?";
    }
    validate_with_split();
  }
}

function actual () {
  let audio = document.getElementById("aud");
  document.getElementById("img").src=urlImg[pos];
  document.getElementById("aud").src=urlAud[pos];
  text.value="";
  audListen();
}

function validate_with_split(){
  comp=compare[pos].split("/",15);
	var b=0;
	comp.forEach(function(e){
		if(e.toLowerCase() == (text.value).toLowerCase() && text.value != ""){
			pos++;
			b=1;
			if(pos >= total){
        text.removeEventListener("keyup", key);
        victoryMessage();
			}else{
				actual();
			}
		} else {
      mistake();
    }
	});
}
