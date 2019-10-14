
var ask = data.options;
var compare = data.compare;
var container = document.getElementById('cont_all');
var field = document.getElementsByClassName('field');
var boxContainer = document.getElementById("boxesContainer");
var item = document.getElementById("item");
var audio = document.getElementById('audio')
var currentItem = 0;
var arrayLength;
var type;
var words = [];

window.addEventListener("load", function () {

  if(!data.urlImg[0] && !data.options[1] && !data.urlAud[0]) {
    createForABC();
    arrayLength = ask.length;
  }else if(!data.urlImg[0] && !data.options[1]){
    data.urlImg[0] = "../../img/default.svg"
    arrayLength = compare.length
  }

  words.push(compare[0]);
  for (let i = 0; i < arrayLength; i++) {
    if (words.indexOf(compare[i]) == -1) {
      words.push(compare[i]);
    }
  }

  itemCreator();

  item.innerHTML = ask[currentItem];
  item.setAttribute("type", compare[currentItem]);

  Draggable.create("#item",{
    type:"x,y",
    edgeResistance:0.65,
    bounds: container,
    throwProps:true,
    autoScroll:true,
    onDrag: setAudio,
    onRelease: dropItem,
    snap: {
      x: function(endValue) {
          return Math.round(endValue / gridWidth) * gridWidth;
      },
      y: function(endValue) {
          return Math.round(endValue / gridHeight) * gridHeight;
      }
    }
  });
})

function cleaningurl(these) {
  let src = these.split("/")
  let source =  src[src.length - 1].split(".")
  return source[0]
}

function setAudio() {
  if (data.urlAud[0]) {
    audio.src = data.urlAud[currentItem]
  }
}

function itemCreator(){
  let boxesLength = words.length;
  var div, text;

  if (data.urlImg[0] != undefined) {
    item = document.createElement("img")
    item.setAttribute("src", data.urlImg[0])
  }else{
    item = document.createElement("div")
    item.setAttribute("class", "item")
    item.innerHTML = ask[i]
  }

  for (let i = 0; i < boxesLength; i++) {
    div = document.createElement("div");
    div.classList.add("itemField");
    div.id = words[i];
    text = document.createElement("p");
    text.innerHTML = words[i];

    div.appendChild(text);
    boxContainer.appendChild(div);
  }
}

function dropItem() {
  let src = this.target.getAttribute('type');
  var boundsBefore, boundsAfter;
  audio.play();
  if (this.hitTest("#" + src)){
    currentItem++;
    boundsBefore = this.target.getBoundingClientRect();
    boundsAfter = this.target.getBoundingClientRect();

    if (currentItem < arrayLength) {
      TweenMax.to(this.target,0.0,{x:0,y:0});
      refreshgame();
    } else {
      $(this.target).appendTo('#'+src);
      alert("YOU WON");
      // victoryMessage();
      TweenMax.fromTo(this.target, 0.3, {
        x:"+=" + (boundsBefore.left - boundsAfter.left),
        y:"+=" + (boundsBefore.top - boundsAfter.top)
      }, {
        x:0,
        y:0
      });
    }
  } else {
    TweenMax.to(this.target,0.5,{x:0,y:0});
  }
}

function refreshgame () {

  if (data.url[0] == "../../img/default.svg") {

  }else if(data.urlImg[0] != undefined){
    item.src = data.urlImg[currentItem]
  }else{
    item.innerHTML = ask[currentItem];
  }
  item.setAttribute("type", compare[currentItem]);

}

function createForABC () {
  ask = [];
  compare = [];
  let newChar;
  for (var i = 0; i < 15; i++) {
    newChar = parseInt(getRandomArbitrary(65, 91));
    ask.push(String.fromCharCode(newChar));
    if (newChar == 65 || newChar == 69 || newChar == 73 || newChar == 79 || newChar == 85) {
      compare.push("Vowel");
    } else {
      compare.push("Consonant");
    }
  }

  console.log(ask);
  console.log(compare);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
