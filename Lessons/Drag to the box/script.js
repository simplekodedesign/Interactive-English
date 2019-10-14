
var ask = data.options;
var compare = data.compare;
var container = document.getElementById('cont_all');
var field = document.getElementsByClassName('field');
var boxContainer = document.getElementById("boxesContainer");
var item = document.getElementById("item");
var currentItem = 0;
var arrayLength = ask.length;
var type;
var words = [];

window.addEventListener("load", function () {

  if(!data.urlImg[0] && !data.options[1] && !data.urlAud[0]) {
    createForABC();
    arrayLength = ask.length;
  }
  
  words.push(compare[0]);
  for (let i = 0; i < arrayLength; i++) {
    if (words.indexOf(compare[i]) == -1) {
      words.push(compare[i]);
    }
  }

  item.innerHTML = ask[currentItem];
  item.setAttribute("type", compare[currentItem]);

  constWorld();

  Draggable.create("#item",{
    type:"x,y",
    edgeResistance:0.65,
    bounds: container,
    throwProps:true,
    autoScroll:true,
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

function constWorld(){
  let boxesLength = words.length;
  let div, text;
  for (let i = 0; i < arrayLength; i++) {
    // var source = cleaningurl(src[i])
    var img = document.createElement("img");
    // img.setAttribute("src", src[i])
    img.setAttribute("class", "item");
    container.appendChild(img);
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
  item.innerHTML = ask[currentItem];
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
