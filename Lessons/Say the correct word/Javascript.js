var sn=false;
var pos=0;
var text="";

window.addEventListener("load",function(){
	if(!("webkitSpeechRecognition" in window)){
		alert("Su navegador no soporta la api para el reconocimiento de voz");
	}else{
		document.getElementById("img").src=urlImg[pos];
		document.getElementById("aud").src=urlAud[pos];
		document.getElementById("message").innerHTML=message[pos];
		document.getElementById("btnSpeak").addEventListener("click",speakStart);
		document.getElementById("btnListen").addEventListener("click",sound);
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
				case 8:
					validate_cord_8();
					break;
				case 41:
					validate_cord_41();
					break;
				case 48:
					validate_cord_48();
					break;
				case 56:
					validate_cord_56();
					break;
				case 63:
					validate_cord_63();
					break;
				case 78:
					validate_cord_78();
					break;
				case 80:
					validate_cord_80();
					break;
				case 85:
					validate_cord_85();
					break;
				case 87:
					validate_cord_85();
					break;
				case 98:
					validate_cord_98();
					break;
				case 110:
					validate_cord_110();
					break;
				case 119:
					validate_cord_119();
					break;
				case 123:
					validate_cord_123();
					break;
				case 132:
					validate_cord_132();
					break;
				case 141:
					validate_cord_141();
					break;
				case 145:
					validate_cord_145();
					break;
			}
			document.getElementById("btnListen").addEventListener("click",sound);
			document.getElementById("said").innerHTML="<b>You said: </b> "+text.toLowerCase();
			validate_with_split();
		}
	}

});

function sound(){
	document.getElementById("btnSpeak").removeEventListener("click",speakStart);
	document.getElementById("aud").play();
}

function speakStart(){
	document.getElementById("btnListen").removeEventListener("click",sound);
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

function validate_with_split(){
	comp=compare[pos].split("/",15);
	var b=0;
	comp.forEach(function(e){
		if(e.toLowerCase()==text.toLowerCase()&&text!=""){
			pos++;
			b=1;
			if(pos>=total){
				victoryMessage();
			}else{
				document.getElementById("img").src=urlImg[pos];
				document.getElementById("aud").src=urlAud[pos];
				document.getElementById("message").innerHTML=message[pos];
				sound();
			}
		}
	});
}

//fonetic abc
function validate_cord_8(){
	if(text=="trolls"||text=="bros"||text=="prose"||text=="close"||text=="pros"||text=="bro")text="rose";
	if(text=="goat"||text=="code"||text=="gold"||text=="call"||text=="colt")text="coat";
	if(text=="right"||text=="bright")text="write";
	if(text=="our"||text=="power")text="hour";
	if(text=="squeak"||text=="greek"||text=="week")text="quick";
	if(text=="do"||text=="dude"||text=="2"||text=="to")text="two";
	if(text=="use"||text=="june"||text=="you"||text=="g"||text=="two")text="juice";
	if(text=="weed"||text=="ween"||text=="win"||text=="queen")text="wing";
	if(text=="here"||text=="beer"||text=="kia")text="ear";
	if(text=="song")text="sun";
	if(text=="like"||text=="glide")text="light";
	if(text=="gallery"||text=="gary"||text=="gerd"||text=="go")text="girl";
	if(text=="music"||text=="e-cig")text="insect";
	if(text=="hello"||text=="mcdonald house"||text=="hi"||text=="how"||text=="halo"||text=="home")text="house";
	if(text=="no"||text=="what is a nose")text="nose";
	if(text=="d"||text=="he"||text=="ghee")text="key";
	if(text=="father father")text="father";
	if(text=="what are you")text="quiet";
	if(text=="adult")text="ice";
}

function validate_cord_41(){
	if(text=="steakhouse"||text=="the weather fall"||text=="they what the fug"||text=="the weather for"||text=="they're what the fun"||text=="they're wonderful")text="the house";
	if(text=="that university")text="the university";
	if(text=="pick up"||text=="jacob"||text=="makeup"||text=="backup")text="the cup";
	if(text=="the iceman"||text=="they iceberg"||text=="deactivate"||text=="de-ice")text="the iceberg";
	if(text=="ve day")text="the eraser";
	if(text=="defensive"||text=="davinci"||text=="dave benson"||text=="their pension"||text=="the benson"||text=="devonshire"||text=="they've been sealed")text="the pencil";
}

//animals
function validate_cord_48(){
	if(text=="be"||text=="me"||text=="b")text="bee";
	if(text=="beeg"||text=="speed"||text=="read"||text=="beef")text="pig";
	if(text=="oh"||text=="our")text="owl";
	if(text=="but"||text=="bod"||text=="map")text="bat";
	if(text=="carmel"||text=="camed"||text=="comed"||text=="tamil"||text=="camille")text="camel";
	if(text=="i'm"||text=="aunt"||text=="find"||text=="end")text="ant";
	if(text=="got"||text=="god"||text=="gods"||text=="dad")text="cat";
	if(text=="jeep"||text=="cheep"||text=="she"||text=="cheap")text="sheep";
	if(text=="ferret"||text=="ferrets"||text=="therap"||text=="borrowed"||text=="barrett"||text=="borrow")text="parrot";
	if(text=="go"||text=="call")text="cow";
	if(text=="bratz"||text=="brad"||text=="right")text="rat";
	if(text=="gold"||text=="cow"||text=="goal")text="goat";
	if(text=="mole")text="bull";
	if(text=="world")text="wolf";
	if(text=="duff"||text=="the"||text=="duh"||text=="no")text="dove";
	if(text=="brewster")text="rooster";
	if(text=="chad"||text=="shug"||text=="charter"||text=="sure")text="shark";
	if(text=="warm"||text=="warren"||text=="quorum"||text=="war")text="worm";
  if(text=="robbie"||text=="driving"||text=="private"||text=="ravi"||text=="gravid"||text=="crabby")text="rabbit";
	if(text=="miles")text="mouse";
	if(text=="sia"||text=="co")text="seal";
	if(text=="doug")text="duck";
	if(text=="weigher"||text=="wale"||text=="where are you"||text=="wait"||text=="wayfair"||text=="wayne"||text=="weather")text="whale";
	if(text=="american flag")text="dragonfly"
	if(text=="f***"||text=="books"||text=="4")text="fox";
	if(text=="up the booze")text="octopus";
	if(text=="what is a mapi spider"||text=="by there"||text=="binder")text="spider";
	if(text=="banda")text="panda";
	if(text=="read book")text="`peacock";
	if(text=="valium")text="lion";
	if(text=="beer")text="bird";
	if(text=="snake chain")text="snail";
	if(text=="uncrate")text="ostrich";
	if(text=="dang it")text="tiger";
	if(text=="flow"||text=="hello")text="frog";
	if(text=="horror"||text=="hud")text="horse";
}

//food and Drinks
function validate_cord_56(){
  if(text=="carro"||text=="gyro"||text=="therap"||text=="gaara"||text=="taro"||text=="tucarro")text="carrot";
	if(text=="bye")text="pie";
	if(text=="crackhead"||text=="tractors"||text=="caracas"||text=="guy pearce")text="crackers";
	if(text=="so"||text=="sue")text=="soup";
	if(text=="d")text="tea";
	if(text=="shay"||text=="shaved"||text=="shape")text="shake";
	if(text=="doona")text="tuna";
	if(text=="bing")text="beans";
	if(text=="sada")text="salad";
	if(text=="what if"||text=="weather"||text=="what are")text="water";
}

//parts of the body
function validate_cord_63(){
	if(text=="leap"||text=="leave")text="lip";
	if(text=="names"||text=="name"||text=="mail")text="nails";
	if(text=="dumb"||text=="phone"||text=="tongue"||text=="some"||text=="song")text="thumb";
	if(text=="food")text="foot";
	if(text=="nick")text="neck";
	if(text=="elmo")text="elbow";
	if(text=="iron")text="arm";
	if(text=="breathe"||text=="reese"||text=="read"||text=="ruin"||text=="ruiz")text="wrist";
	if(text=="huh")text="hand";
	if(text=="finger")text="fingers";


	/*Proveniente de Speak Memory*/

	if(text=="breathe"||text=="reese"||text=="read"||text=="ruin"||text=="ruiz")text="wrist";
	if(text=="nick" || text == "name")text="neck";
	if(text == "ham" || text == "hun" || text == "hond")text = "hand";
	if(text == "black")text = "back";
	if(text == "ugbo" || text == "able")text = "elbow";
	if(text == "greece" || text == "erased" || text == "worst" || text == "greased")text = "wrist";
	if(text == "waste" || text == "waze" || text == "wy'east" || text == "great")text = "waist";
	if(text == "chase" || text == "chess")text = "chest";
	if(text == "army" || text == "ireland" || text == "arie" || text == "ar" || text == "farm" || text == "art" || text == "arvin" ||text == "")text = "arm";
	if(text == "sheep" || text == "heap" || text == "keep")text = "hip";
	if(text == "mail" || text == "menus" || text == "miles" || text == "names")text = "nails";
	if(text == "florida")text = "forearm";
	if(text == "jordan" || text == "children" || text == "sheldon" || text == "charlotte")text = "shoulder";
	if(text == "benji bolton" || text == "reggie wooten" || text == "veggie bhutan")text = "belly button";
	if(text == "veggie" || text == "bg")text = "belly";
}

function validate_cord_78 () {
	if(text == "dese")text = "this";
}

function validate_cord_80 () {
	if(text == "dese")text = "this";
}

function validate_cord_85 () {
	if(text == "dubbed" || text == "."||text=="dad"||text=="not"||text=="god")text = "that";
	if(text == "dawson" || text == "dulce"||text=="lowe's"||text=="no")text = "those";
}

//PERSONAL PRONOUNS

function validate_cord_98() {
	if(text == "eat")text = "it";
	if(text == "hi")text = "i";
	if(text == "key" || text == "hey")text = "he";
	if(text == "date" || text == "d")text = "they";
	if(text == "chi")text = "she";
	if(text == "do")text = "you";
}

//Feelings and occupations
function validate_cord_110 () {
	if(text == "we are baker's we are not teachers")text = "we are bakers we are not teachers";
	if(text == "you are firefighters you are not police officers")text = "you are fire fighters you are not police officers";
	if(text=="you are mine you are not bored"||text=="you are my you are not bored"||text=="you are not you are not bored"||text=="you are mad you are not boring")text="you are mad you are not bored";
	if(text=="you are i know you are not arrested"||text=="you are a newly you are not a doctor"||text=="you are no you are not a doctor"||text=="you are an or you are not a doctor")text="you are a nurse you are not a doctor";
	if(text=="they are fine. they are not mechanic"||text=="they are pilot they are not mechanic"||text=="they are followed by another mechanic"||text=="they are fine. they are not make any")text="they are pilots they are not mechanic";
	if(text=="we are vacant we are not features")text="we are bakers we are not teachers";
}

//SPORTS

function validate_cord_119 () {
	if(text == "call" || text == "goals" || text == "goal")text = "golf";
	if(text == "denny's" || text == "benny's" || text == "benny")text = "tennis";
	if(text == "futbol")text = "football";
	if(text == "scheme")text = "skiing";
	if(text == "sucker" || text == "suck it" || text == "sookie" || text == "soca" || text == "sake")text = "soccer";
	if(text == "scatting")text = "skating";
	if(text == "singing" || text == "seeming")text = "swimming";
	if(text == "mazda alerts" || text == "matthew lillard" || text == "marsteller" || text == "marcella's")text = "martial arts";
	if(text == "oggy" || text == "pokey" || text == "okie" || text == "hokie")text = "hockey";
	if(text == "seeking")text = "cycling";
	if(text == "sofien")text = "surfing";
}

//PREPOSITIONS

function validate_cord_123 () {
	if(text == "today dry" || text == "to dry" || text == "to dairy" || text == "dewberry")text = "to the right";
	if(text == "wounded" || text == "hyundai" || text == "monday" || text == "gunday" )text = "under";
	if(text == "i've already" || text == "i will be" || text == "abu dhabi" || text == "ivo" || text == "abu" || text == "a boat" || text == "adobe")text = "above";
	if(text == "next door" || text == "med stop")text = "next to";
	if(text == "to delay")text = "to the left";
	if(text == "bohemian" || text == "machine" || text == "bay hill")text = "behind";
	if(text == "you fit enough" || text == "inferno" || text == "infront off")text = "in front of";
	if(text == "own" || text == "born" || text == "fun")text = "on";
}

//DIRECTIONS

function validate_cord_132 () {
	if(text == "finest otium" || text == "spine institute" || text == "fearless tattoo" || text == "fedex stadium")text = "fire station";
	if(text == "bang" || text == "bun" || text == "ban")text = "bank";
	if(text == "book story" || text == "books a story" || text == "book a story")text = "bookstore";
	if(text == "gene" || text == "jim")text = "gym";
	if(text == "pepsi")text = "taxi";
	if(text == "so" || text == "saw" || text == "sue" || text == "2")text = "zoo";
	if(text == "bait shop")text = "pet shop";
	if(text == "busch stadium" || text == "boost italian")text = "bus station";
	if(text == "skull" || text == "a school")text = "school";
	if(text == "toy story")text = "toy store";
	if(text == "mesquite rapper")text = "skyscraper";
	if(text == "destitute")text = "gas station";
	if(text == "george")text = "church";
	if(text == "subway in stockton" || text == "subway stockton")text = "subway station";
	if(text == "parking" || text == "bar" || text == "bobcat" || text == "bark" || text == "bart" || text == "bye")text = "park";
	if(text == "trait")text = "street";
	if(text == "back eddy")text = "bakery";
	if(text == "blog")text = "block";
	if(text == "boost" || text == "boss")text == "bus";
	if(text == "easy cream shop")text = "ice cream shop";
	if(text == "libra d")text = "library";
}

//FAMILY

function validate_cord_141 () {
	if(text == "ghosting" || text == "cussing" || text == "cozine" || text == "call scene" || text == "golfzing" || text == "closing" || text == "gotham" || text == "crossing")text = "cousin";
	if(text == "huntley" || text == "boomplay")text = "uncle";
	if(text == "darden")text = "daughter";
	if(text == "nice" || text == "nancy")text = "niece";
	if(text == "why")text = "wife";
	if(text == "sun" || text == "song")text = "son";
	if(text == "")text = "aunt";
}

//hour

function validate_cord_145(){
	if(text=="452")text="4:52";
	if(text=="505")text="5:05";
	if(text=="811")text="8:11";
	if(text=="415"||text=="4:15 a.m.")text="4:15";
	if(text=="430"||text=="ford city")text="4:30";
	if(text=="733")text="7:33";
	if(text=="6")text="6:00";
	if(text=="505")text="5:05";
	if(text=="130")text="1:30";
	if(text=="11")text="11:00";
	if(text=="730")text="7:30";
	if(text=="3")text="3:00";
	if(text=="601")text="6:01";
	if(text=="1159")text="11:59";
	if(text=="155")text="1:55";
	if(text=="206")text="2:06";
	if(text=="845")text="8:45";
	if(text=="521")text="5:21";
	if(text=="1054"||text=="dan 54")text="10:54";
	if(text=="303")text="3:03";
	if(text=="229")text="2:29";
	if(text=="250")text="2:50";
}
