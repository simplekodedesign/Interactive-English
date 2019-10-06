var sn=false;
var pos=0;
var count=0;
var text="";
var bLetters=[];
var aud=document.getElementById("letterAud");

window.addEventListener("load",function(){
	if(!("webkitSpeechRecognition" in window)){
		alert("Su navegador no soporta la api para el reconocimiento de voz");
	}else{
		for(var i=0;i<26;i++)bLetters[i]=0;

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
				count++;
				bLetters[pos]=1;
				do{
					pos=Math.round(Math.random()*25);
				}while(bLetters[pos]&&count<26);
				if(count>=26){
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
	window.addEventListener("click", function() {
		victoryMessage();
	})
})

function validate(){
	if(text=="hey"&&pos==0)text='A';
	if((text=="be"||text=="me")&&pos==1)text='B';
	if((text=="see"||text=="she"||text=="cheese")&&pos==2)text='C';
	if(text=="be"||text=="B"&&pos==3)text='D';
	if((text=="if"||text=="air"||text=="an"||text=="")&&pos==5)text='F';
	if((text=="d")&&pos==6)text='F';
	if((text=="age"||text=="ace"||text=="hey")&&pos==7)text='H';
	if(text=="hi"&&pos==8)text='I';
	if((text=="jay"||text=="gay"||text=="jade"||text=="jane")&&pos==9)text='J';
	if(text=="gay"&&pos==10)text='K';
	if((text=="air"||text=="al"||text=="in"||text=="end"||text=="and"||text=="")&&pos==11)text='L';
	if((text=="aim"||text=="saime")&&pos==12)text='M';
	if(text=="in"&&pos==13)text='N';
	if(text=="oh"&&pos==14)text='O';
	if((text=="be"||text=="b")&&pos==15)text='P';
	if((text=="you"||text=="doom"||text=="view"||text=="do you")&&pos==16)text='Q';
	if((text=="are" || text=="")&&pos==17)text='R';
	if((text=="is"||text=="and"||text=="if"||text=="see"||text=="")&&pos==18)text='S';
	if((text=="be"||text=="tea"||text=="d"||text=='e')&&pos==19)text='T';
	if(text=="you"&&pos==20)text='U';
	if(text=="be"&&pos==21)text='V';
	if(text=="eggs"&&pos==23)text='X';
	if(text=="why"&&pos==24)text='Y';
	if((text=="see"||text=="she"||text=="cheese"||text=="v")&&pos==25)text='Z';
}
