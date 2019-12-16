
var ask
var compare
const container = document.getElementById('cont_all')
const boxContainer = document.getElementById("boxesContainer")
const audio = document.getElementById('audio')
const itemContainer = (document.getElementsByClassName('itemContainer'))[0]
var currentItem = 0
var arrayLength
var type
var item
var constIMG = 0
var words = []

window.addEventListener("load", function () {

  constIMG = data.options[0]== "" && !data.urlImg[0] ? 1 : 0;
  if(!data.options[1] && !data.urlImg[0] && data.options.length < 2){
    createForABC();
    if (data.compare[0] != "") {
      constIMG = 1;
    }
  }else{
    ask = data.options;
    compare = data.compare;
    arrayLength = data.compare.length;
  }
  console.log(data);

  words.push(compare[0]);
  for (let i = 0; i < arrayLength; i++) {
    if (words.indexOf(compare[i]) == -1) {
      words.push(compare[i]);
    }
  }

  words = words.sort((a,b) => {
    return 0.5 - Math.random();
  })

  itemCreator();

  if(constIMG === 0)item.innerHTML = ask[currentItem];
  item.setAttribute("type", compare[currentItem]);
  audio.src = data.urlAud[currentItem];

  Draggable.create("#item",{
    type:"x,y",
    edgeResistance:0.65,
    bounds: container,
    throwProps:true,
    autoScroll:true,
    onDragStart: setAudio,
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
  document.getElementById("item").addEventListener("click", setAudio);
})

function setAudio() {
  if (data.urlAud[0]) {
    audio.play();
  }
}

function itemCreator(){
  let boxesLength = words.length;
  var div, text, innerText;
  let object

  if (data.urlImg[0] != undefined) {  //|| constIMG
    item = document.createElement("img")
    item.setAttribute("src", data.urlImg[0]);
    item.setAttribute("id", "item");
  }else{
    item = document.createElement("div");
    if (constIMG == '1') {
      item.innerHTML = "?";
    }
    item.setAttribute("id", "item");
  }

  for (let i = 0; i < boxesLength; i++) {
    div = document.createElement("div");
    div.classList.add("itemField");
    div.id = words[i];
    text = document.createElement("p");
    innerText = words[i];
    while (innerText.search("-") != -1) {
      innerText = innerText.replace("-", " ");
    }
    text.innerHTML = innerText;

    div.appendChild(text);
    boxContainer.appendChild(div);
  }
  itemContainer.appendChild(item);
}

function dropItem() {
  let src = this.target.getAttribute('type');
  var boundsBefore, boundsAfter;
  if (this.hitTest("#" + src)){
    currentItem++;
    boundsBefore = this.target.getBoundingClientRect();
    boundsAfter = this.target.getBoundingClientRect();

    if (currentItem < arrayLength) {
      TweenMax.to(this.target,0.0,{
        x:0,
        y:0,
      });
      refreshgame();
    } else {
      $(this.target).appendTo('#' + src);
      if (victoryMessage !== null) {
        victoryMessage();
      }
      TweenMax.fromTo(this.target, 1, {
        x:"+=" + (boundsBefore.left - boundsAfter.left),
        y:"+=" + (boundsBefore.top - boundsAfter.top),
        backgroundColor: "green"
      }, {
        x:0,
        y:0,
        backgroundColor: "transparent"
      });
    }
  } else {
    mistake();
    TweenMax.to(this.target, 0.5, {
      x:0,
      y:0,
      backgroundColor: "red"
    });
    TweenMax.to(this.target, 0.5, {
      backgroundColor: "transparent"
    });
  }
}

function refreshgame () {
  if(data.urlImg[1] != undefined){
    item.src = data.urlImg[currentItem]
  }else{
    if (constIMG) {
      item.innerHTML = "?";
    }else{
      console.log(currentItem);
      item.innerHTML = ask[currentItem];
    }
  }
  item.setAttribute("type", compare[currentItem]);
  audio.src = data.urlAud[currentItem];
}

function createForABC () {
  ask = [];
  compare = [];
  let newChar;
  let url = data.options[0];
  let letter;
  for (var i = 0; i < 15; i++) {
    newChar = parseInt(getRandomArbitrary(65, 91));
    letter = String.fromCharCode(newChar);
    ask.push(letter);
    data.urlAud.push(url + letter.toLowerCase() + ".mp3");
    if (newChar == 65 || newChar == 69 || newChar == 73 || newChar == 79 || newChar == 85) {
      compare.push("Vowel");
    } else {
      compare.push("Consonant");
    }
  }

  ask.push("U");
  data.urlAud.push(url + "u" + ".mp3");
  compare.push("Vowel");

  arrayLength = compare.length;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
