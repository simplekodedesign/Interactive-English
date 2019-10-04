
var src = ["../../img/C21logo.svg", "../../img/categories/a an the/cup.webp", "../../img/categories/a an the/eraser.webp"]
var ask = ["0", "1", "2", "3"]
var compare = [...src];
var container = document.getElementById('cont_all')
var field = document.getElementsByClassName('field')

window.addEventListener("load", function () {
  constWorld()


  Draggable.create(".item",{
    type:"x,y",
    onRelease: dropItem,
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

    let card = document.createElement("div")
    card.setAttribute("class", "itemField")
    card.setAttribute("id", source)
    field[0].appendChild(card)
  }
}


function dropItem() {
  let src = this.target.firstElementChild.getAttribute("src")
  var boundsBefore, boundsAfter
  source = cleaningurl(src)
  if (this.hitTest("#"+src[0])){
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo('#'+src[0]);
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
