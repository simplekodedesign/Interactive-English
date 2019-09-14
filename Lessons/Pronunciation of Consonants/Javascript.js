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
				aud.src="aud/categories/abc/"+let.target.id.toLowerCase()+".mp3";
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
				if(pos>=26){
					victoryMessage();
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
	if((text=="be"||text=="me")&&pos==0)text='B';
	if((text=="see"||text=="she"||text=="cheese")&&pos==1)text='C';
	if(text=="be"||text=="B"&&pos==2)text='D';
	if((text=="if"||text=="air"||text=="an"||text=="")&&pos==3)text='F';
	if((text=="d")&&pos==4)text='G';
	if((text=="age"||text=="ace"||text=="hey")&&pos==5)text='H';
	if((text=="jay"||text=="gay"||text=="jade"||text=="jane")&&pos==6)text='J';
	if(text=="gay"&&pos==7)text='K';
	if((text=="air"||text=="al"||text=="in"||text=="end"||text=="and"||text=="")&&pos==8)text='L';
	if((text=="aim"||text=="saime")&&pos==9)text='M';
	if(text=="in"&&pos==10)text='N';
	if((text=="be"||text=="b")&&pos==11)text='P';
	if((text=="you"||text=="doom"||text=="view"||text=="do you")&&pos==12)text='Q';
	if((text=="are" || text=="")&&pos==13)text='R';
	if((text=="is"||text=="and"||text=="if"||text=="see"||text=="")&&pos==14)text='S';
	if((text=="be"||text=="tea"||text=="d"||text=='e')&&pos==15)text='T';
	if(text=="be"&&pos==16)text='V';
	if(text=="eggs"&&pos==18)text='X';
	if(text=="why"&&pos==19)text='Y';
	if((text=="see"||text=="she"||text=="cheese"||text=="v")&&pos==20)text='Z';
}
