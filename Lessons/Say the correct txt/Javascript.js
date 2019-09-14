var sn=false;
var pos=0;
var text="";
window.addEventListener("load",function(){
	if(!("webkitSpeechRecognition" in window)){
		alert("Su navegador no soporta la api para el reconocimiento de voz");
	}else{

		document.getElementById("text").innerHTML=txt[pos];
		document.getElementById("aud").src=urlAud[pos];
		document.getElementById("message").innerHTML=compare[pos];
		document.getElementById("aud").addEventListener("ended",function(){
			document.getElementById("btnSpeak").addEventListener("click",speakStart);
		});
		sound();

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
			switch (cord) {
				case 19:
					validate_cord_19();
					break;
				case 26:
					validate_cord_26();
					break;
			}
			document.getElementById("said").innerHTML="<b>You said:</b> "+text.toLowerCase();

			if(text==compare[pos]){
				pos++;
				if(pos<txt.length){
					document.getElementById("text").innerHTML=txt[pos];
					document.getElementById("aud").src=urlAud[pos];
					document.getElementById("message").innerHTML=compare[pos];
					sound();
				}else{
					victoryMessage();
				}
			}
		}
	}

	document.getElementById("btnSpeak").addEventListener("click",speakStart);
})

function speakStart(){
		if (sn == false) {
			speak.start();
			sn = true;
			document.getElementById("btnSpeak").innerHTML="Wait";
		} else {
			speak.stop();
			sn = false;
			document.getElementById("btnSpeak").innerHTML="Speak";
		}
}

function sound(){
	document.getElementById("btnSpeak").removeEventListener("click",speakStart);
	document.getElementById("aud").play();
}

//the greetings
function validate_cord_19(){
	if(text=="daycare"||text=="10k"||text=="take cave"||text=="fake food"||text=="think game"||text=="tay k"||text=="state game")text="take care";
	if(text=="k")text="hey";
	if(text=="nothing much")text="not much";
	if(text=="cu")text="see you";
	if(text=="believe meaning")text="good evening";
	if(text=="trying")text="fine";
}

//numbers
function validate_cord_26(){
	if(text=="mp4")text="24";
	if(text=="90 c")text="96";
	if(text=="dude")text="2";
	if(text=="aga")text="88";
}
