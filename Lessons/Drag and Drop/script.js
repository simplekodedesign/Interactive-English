
var src = ["../../img/C21logo.svg", "../../img/categories/a an the/cup.webp", "../../img/categories/a an the/eraser.webp", "../../img/rocket.svg"]
var ask = ["0", "1", "2", "3"]
var compare = [...src];
var container = document.getElementById('cont_all')
var field = document.getElementsByClassName('field')

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
  for (let i = 0; i < src.length; i++) {
    var source = cleaningurl(src[i])
    var img = document.createElement("img")
    img.setAttribute("src", src[i])
    img.setAttribute("class", "item")
    container.appendChild(img)

    console.log(container);

    let card = document.createElement("div")
    let cardF = document.createElement("p")
    card.setAttribute("class", "itemField")
    card.setAttribute("id", source)
    cardF.innerHTML= source
    card.appendChild(cardF)
    field[0].appendChild(card)
  }
}

function dropItem() {
  let src = this.target.getAttribute("src")
  var boundsBefore, boundsAfter
  source = cleaningurl(src)
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
