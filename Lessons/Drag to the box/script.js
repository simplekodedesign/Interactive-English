
const container = document.getElementById('cont_all')
const field = document.getElementsByClassName('field')
var ask = ["A", "B", "C", "D"]
var compare = ["vowel", "consonant", "consonant", "consonant"]
var type;
var arrayLength = ask.length

window.addEventListener("load", function () {

  var words = []
  words.push(compare[0]);
  for (let i = 0; i < arrayLength; i++) {
    if (words.indexOf(compare[i]) == -1) {
      words.push(compare[i])
    }
  }

  constWorld()

  Draggable.create(".item",{
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
  })
})

// function cleaningurl(these) {
//   let src = these.split("/")
//   let source =  src[src.length - 1].split(".")
//   return source[0]
// }

function constWorld(){
  for (let i = 0; i < arrayLength; i++) {
    // var source = cleaningurl(src[i])
    var img = document.createElement("img")
    // img.setAttribute("src", src[i])
    img.setAttribute("class", "item")
    container.appendChild(img)

    console.log(container);

    // let card = document.createElement("div")
    // let cardF = document.createElement("p")
    // card.setAttribute("class", "itemField")
    // card.setAttribute("id", source)
    // cardF.innerHTML= source
    // card.appendChild(cardF)
    // field[0].appendChild(card)
  }
}

function dropItem() {
  let src = this.this.getAttribute('Type')
  var boundsBefore, boundsAfter
  if (this.hitTest("#")){
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo('#'+src);
      boundsAfter = this.target.getBoundingClientRect();
      TweenMax.fromTo(this.target, 0.3, {
        x:"+=" + (boundsBefore.left - boundsAfter.left),
        y:"+=" + (boundsBefore.top - boundsAfter.top)
      }, {
        x:0,
        y:0
      });
  } else {
      TweenMax.to(this.target,0.5,{x:0,y:0});
  }
}
