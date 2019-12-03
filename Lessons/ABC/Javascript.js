var bletter=[];
var finish=26;
var cordLec=1,cordAct=1;

window.addEventListener("load",function(){
		letters=document.querySelectorAll(".cont_abc>div");
		for(var i=0;i<letters.length;i++)bletter[i]=0;
		for(var i=0;i<letters.length;i++)letters[i].addEventListener("click",function(ev){
			if(!bletter[ev.target.classList[1]]){
				finish--;
				if(finish<=0){
					if (victoryMessage !== null) {
						victoryMessage();
					}
				}
				if(cordLec==cordAct)ev.target.style.transform="scale(0,0)";
				bletter[ev.target.classList[1]]=1;
			}
			document.querySelector("#"+ev.target.id+" audio").play();
		})
})
