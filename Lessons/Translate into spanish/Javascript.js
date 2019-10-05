var pos=0;
var cad = "";
var cad2 = "";
var cad3 = "";
text=document.getElementById("write");
window.addEventListener("load",function(){
		actual();
		document.getElementById("btnCheck").addEventListener("click", validate_with_split);

		text.addEventListener("keyup",key);
})

function key (e) {
  if(text.value.length>0){
    cad=text.value.substr(0,text.value.length-1);
    cad2=text.value.substr(text.value.length-1,text.value.length);
    text.value=cad + cad2.toLowerCase();
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

  }else if(text.value[0]=="i"&&text.value.length==1){
    text.value="I";
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

function actual(){
	document.getElementById("phrase").innerHTML=message[pos];
	text.value="";
}

function validate_with_split () {
	comp=compare[pos].split("/",15);
	var b=0;
	comp.forEach(function(e){
		if(e==text.value&&text.value!=""){
			pos++;
			b=1;
			if(pos >= total){
        text.removeEventListener("keyup", key);
				victoryMessage();
			}else{
				actual();
			}
		}
	});
}
