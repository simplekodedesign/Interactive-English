var sn=false;
var pos=0;
var text="";
var aud=document.getElementById("letterAud");

window.addEventListener("load",function(){
	if(!("webkitSpeechRecognition" in window)){
		alert("Su navegador no soporta la api para el reconocimiento de voz");
	}else{
		letters=document.querySelectorAll("#cont_all div");

		for(var i=0;i<letters.length;i++){
			letters[i].addEventListener("click",function(let){
				aud.src="../../aud/categories/abc/"+let.target.id.toLowerCase()+".mp3";
				aud.play();
			});
		}

		speak=new webkitSpeechRecognition();
		speak.interimResults=true;
		speak.lang="en-US";

		speak.onstart=function(){
			sn=true;
		}

		speak.onresult=function(e){
			text="";
			for (var i = e.resultIndex; i < e.results.length; i++) {
				if(e.results[i].isFinal)
					text = e.results[i][0].transcript;
			}
		}

		speak.onend=function(){
			sn=false;
			document.getElementById("btnSpeak").innerHTML="Speak";
			text=text.toLowerCase();
			validate();
			document.getElementById("said").innerHTML="<b>You Said: </b>"+text;
			if(letters[pos].id.toLowerCase()==text.toLowerCase()){
				letters[pos].style.transform="scale(0,0)";
				pos++;
				if(pos>=5){
					if (victoryMessage !== null) {
						victoryMessage();
					}
				}else{
					setTimeout(function(){
						letters[pos].style.transform="scale(1,1)";
					},1500);
				}
			}
		}
	}

	document.getElementById("btnSpeak").addEventListener("click",function(){
			if (sn == false) {
				speak.start();
				sn = true;
				document.getElementById("btnSpeak").innerHTML="Wait";
			} else {
				speak.stop();
				sn = false;
				document.getElementById("btnSpeak").innerHTML="Speak";
			}
	})
})

function validate(){
	if(text=="hey"&&pos==0)text='A';
	if(text=="hi"&&pos==2)text='I';
	if(text=="oh"&&pos==3)text='O';
	if(text=="you"&&pos==4)text='U';
}
