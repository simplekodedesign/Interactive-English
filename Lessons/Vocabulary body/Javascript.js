var svg
var select = []
var selectContainer = document.getElementById('buttonContainer')
var en = document.getElementById('en')
var es = document.getElementById('es')
var contSvg = 0
var items
const src = options.urlAud
const img = options.urlImg
const svgLength = options.urlImg.length
var theme = document.getElementById('theme')

window.addEventListener("load", function (){
  var audio = document.getElementById('audio')
  svg = document.getElementsByClassName('svg')

  godCreator()

  for (let i = 0; i < svgLength; i++) {
    god(i)
  }

  if (svgLength > 0) {
    for (let i = 0; i < svgLength; i++) {
      select[i] = document.createElement("div")
      select[i].setAttribute("class", "lessonButton")
      if (i == 0) {
        select[i].classList.add("color")
      }
      select[i].innerHTML = options.ask[i]
      selectContainer.appendChild(select[i])
      select[i].addEventListener("click", function(){
        show()
      })
    }
  }
})

function godCreator(){
  for (var i = 0; i < svgLength; i++) {
    let svg = document.createElement("object")
    svg.setAttribute("data", options.urlImg[i])
    svg.setAttribute("type", "image/svg+xml")
    svg.setAttribute("class", "svg")
    svg.setAttribute("alt", "SVG")
    if (i==0) {
      svg.classList.add("show")
    }
    theme.appendChild("svg");
  }
}

function god(who){
  var svgdoc = (svg[who].contentDocument.getElementsByTagName('svg'))[0]

  if (svgdoc.getElementsByClassName('item')) {
    var child = svgdoc.children
    const childLength = child.length

    var items

    for (let i = 0; i < childLength; i++) {
      let id = child[i].getAttribute('id')
      if (id){
        if (id.indexOf('item') != -1) {
          //La clase item por CSS tiene un filtro en el SVG, colocar la clase de
          //los elementos del SVG que se quieran usar
          child[i].classList.add('item')
        }
      }
    }
  }

  items = svgdoc.getElementsByClassName('item')
  const itemsLength = items.length

  contSvg += itemsLength

  for (let i = 0; i < itemsLength; i++) {
    items[i].addEventListener("click", spotlight)
  }
}

function show(){
  //Función para cambiar el display de cada SVG
  svg[0].classList.toggle('show')
  select[0].classList.toggle('color')
  svg[1].classList.toggle('show')
  select[1].classList.toggle('color')
}

function spotlight (e) {
  let root = document.documentElement

  var id = this.id
  if (en && es) {
    // seteando posición de los spans con variables css
    root.style.setProperty('--x', e.screenX + "px")
    root.style.setProperty('--y', e.clientY + "px")


    // Retorna el id[1] = ingles, id[2] = español. id[0] realmente no importa
    // Illustrator por defecto sustituye los espacios con _ por ello se limpia el string
    id.split("-")
    en.innerHTML = id[1].replace(/_/g, " ")
    es.innerHTML = id[2].replace(/_/g, " ")


    en.style.display = 'block';
    es.style.display = 'block';
    id = id[1];
  }

  // Añadiendo src y reproduciendo audio
  // audio.setAttribute('src', "../../aud/categories/family/"+id+".mp3")
  audio.setAttribute('src', src+id+".mp3")
  audio.play();

  //Al remover el Cl se quita el filtro sin embargo no es bueno quitar el evento
  this.classList.remove("item")
  contSvg--

  if (contSvg < 1) {
    victoryMessage()
  }
}
