var src;
// var src = ["../../img/C21logo.svg", "../../img/categories/a an the/cup.webp", "../../img/categories/a an the/eraser.webp", "../../img/rocket.svg"]
var ask = ["0", "1", "2", "3"]
// var compare = [...src];
var container = document.getElementById('cont_all')
var field = document.getElementsByClassName('field')
const length = src != undefined ? src.length : ask.length

window.addEventListener("load", function () {
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

function cleaningurl(these) {
  let src = these.split("/")
  let source =  src[src.length - 1].split(".")
  return source[0]
}

function constWorld(){
  var source
  var div
  for (let i = 0; i < length; i++) {
    let card = document.createElement("div")

    if (src != undefined) {
      source = cleaningurl(src[i])
      div = document.createElement("img")
      div.setAttribute("src", src[i])
      div.setAttribute("class", "item")

      let cardF = document.createElement("p")
      cardF.innerHTML= source
      card.appendChild(cardF)
    }else{
      source = ask[i]
      div = document.createElement("div")
      div.setAttribute("class", "item")
      div.innerHTML= ask[i]
    }

    card.setAttribute("class", "itemField")
    card.setAttribute("id", source)
    container.appendChild(div)
    field[0].appendChild(card)
  }
}

function dropItem() {
  var boundsBefore, boundsAfter

  if (src != undefined) {
    let src = this.target.getAttribute("src")
    source = cleaningurl(src)
  }else{
    source = this.target.innerHTML
  }

  if (this.hitTest("#"+source)){
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo('#'+source);
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
