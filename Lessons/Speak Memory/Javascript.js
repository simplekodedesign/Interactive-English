var cards = document.getElementsByClassName("card");
var c1, c2 ;
c1 = c2 = undefined;
var container = document.getElementById("container");
var sn=false;
var text="";

window.addEventListener("load",function(){
  if(!("webkitSpeechRecognition" in window)){
		alert("Su navegador no soporta la api para el reconocimiento de voz");
	}else{
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
      text=text.toLowerCase();

      switch(cord){
        case 46:
          validate_cord_46();
          break;
        case 53:
          validate_cord_53();
          break;
        case 60:
          validate_cord_60();
          break;
        case 92:
          validate_cord_92();
          break;
        case 128:
          validate_cord_128();
          break;
        case 135:
          validate_cord_135();
          break;
      }
      check(text, c1);
      c1 = undefined;
		}
	}
  for(var i = 0; i<cards.length; i++) {
      cards[i].addEventListener("click", evento);
  }
})



var evento = function() {
  this.firstElementChild.style.transform = "scale(0,0)";
  this.parentElement.lastElementChild.style.zIndex = "10";
  c1 == undefined ? c1 = this : c1=undefined;
  if (sn == false) {
    speak.start();
    sn = true;
  } else {
    speak.stop();
    sn = false;
  }
}

var check = function (text, data) {
  if(text == data.lastElementChild.alt){
    tot--;
    if(tot<=0) {
      if (victoryMessage !== null) {
        victoryMessage();
      }
    }
    data.firstElementChild.firstElementChild.play();
    for(var i = 0; i < cards.length; i++){
      if(cards[i].lastElementChild.alt == data.lastElementChild.alt && cards[i].lastElementChild.id != data.lastElementChild.id){
        cards[i].firstElementChild.style.transform = "scale(0,0)";
        data.removeEventListener("click", evento);
        cards[i].removeEventListener("click", evento);
      }
    }
  } else {
    data.firstElementChild.style.transform = "scale(1,1)";
  }
  data.parentElement.lastElementChild.style.zIndex = "-1";
}

//animals
function validate_cord_46(){
  if(text=="robbie"||text=="driving"||text=="private"||text=="ravi"||text=="gravid"||text=="crabby")text="rabbit";
  if(text=="what is a mapi spider"||text=="by there"||text=="binder")text="spider";
  if(text=="banda")text="panda";
  if(text=="horror"||text=="hud")text="horse";
  if(text=="no")text="dog";
}

//food and drinks
function validate_cord_53(){
  if(text=="carro"||text=="gyro"||text=="therap"||text=="gaara"||text=="taro"||text=="tucarro")text="carrot";
  if(text=="bye")text="pie";
  if(text=="crackhead"||text=="tractors"||text=="caracas"||text=="guy pearce")text="crackers";
  if(text=="d")text="tea";
  if(text=="shay"||text=="shaved"||text=="shape")text="shake";
  if(text=="bing")text="beans";
  if(text=="sada")text="salad";
  if(text=="what if"||text=="weather"||text=="what are")text="water";
}

//parts of the body
function validate_cord_60(){
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

function validate_cord_92() {
  if(text == "begin" || text == "beam" || text == "bing")text = "pink";
  if(text == "blah")text = "black";
  if(text == "bread" || text == "dread" || text == "rhett" || text == "rate" || text == "great" || text == "tourette")text = "red";
  if(text == "jell-o")text = "yellow";
  if(text == "food play" || text == "wordplay" || text == "foreplay") text = "purple";
  if(text == "witty" || text == "why" || text == "wheat")text = "white";
  if(text == "grain")text = "green";
}


//PREPOSITIONS

function validate_cord_128() {
  if(text == "nam" || text == "lamb")text = "lamp";
  if(text == "tablet" || text == "babel")text = "table";
  if(text == "bob casey" || text == "bukis")text = "bookcase";
  if(text == "carpe" || text == "cafe")text = "carpet";
  if(text == "dosh" || text == ".")text = "door";
  if(text == "i'm jake" || text == "rchain" || text == "ask jade" || text == "adam saleh")text = "armchair";
  if(text == "christine" || text == "good time" || text == "court time" || text == "girl thing" || text == "gardens" || text == "clark things" || text == "card games" || tenxt == "guard things" || text == "cartoons")text = "curtains";
}

//DIRECTIONS

function validate_cord_135() {
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
