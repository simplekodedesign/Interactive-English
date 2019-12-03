var select = []
var contSvg = 0
var svgLength
var src
var img
var items
var theme
var svg
var en
var es
var cont = document.getElementById('cont')

window.addEventListener("load", function (){
  window.addEventListener("click", function (e) {
    console.log(e.x + " " + window.innerWidth);
  })
  var selectContainer = document.getElementById('buttonContainer')
  var audio = document.getElementById('audio')
  en = document.getElementById('en')
  es = document.getElementById('es')
  src = data.urlAud
  img = data.urlImg
  svgLength = data.urlImg.length
  theme = document.getElementById('object')
  svg = document.getElementsByClassName(`svg`)

  godCreator()

  if (svgLength > 1) {
    for (let i = 0; i < svgLength; i++) {
      select[i] = document.createElement("div")
      select[i].setAttribute("class", "lessonButton")
      if (i == 0) {
        select[i].classList.add("color")
      }
      select[i].innerHTML = data.compare[i]
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
    svg.setAttribute("data", data.urlImg[i])
    svg.setAttribute("type", "image/svg+xml")
    svg.setAttribute("class", "svg")
    svg.setAttribute("alt", "SVG")
    svg.setAttribute("id", "svg"+[i])
    if (i==0) {
      svg.classList.add("show")
    }
    theme.appendChild(svg);
    god(i)
  }
}

function god(who){
  var svgdoc
  svg[who].addEventListener("load", function () {
    svgdoc = (svg[who].contentDocument.getElementsByTagName('svg'))[0]
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
    cont.innerHTML = contSvg;

    for (let i = 0; i < itemsLength; i++) {
      items[i].addEventListener("click", spotlight)
    }
  });
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

  var idS = this.id
  var id
  var aud
  if (svgLength > 1) {
    // seteando posición de los spans con variables css
    console.log(e.x + 20 + " " + window.innerWidth);
    if(e.x + 250 > window.innerWidth) {
      root.style.setProperty('--x', (e.x - 30) + "px")
    } else {
      root.style.setProperty('--x', (e.x+75) + "px")
    }
    
    root.style.setProperty('--y', e.y + "px")

    // Retorna el id[1] = ingles, id[2] = español. id[0] realmente no importa
    // Illustrator por defecto sustituye los espacios con _ por ello se limpia el string
    let aux = idS.split("-")
    en.innerHTML = aux[1].replace(/_/g, " ")
    es.innerHTML = aux[2].replace(/_/g, " ")
    id = aux[1]

    en.style.display = 'block';
    es.style.display = 'block';
    // Añadiendo src y reproduciendo audio
    // audio.setAttribute('src', "../../aud/categories/family/"+id+".mp3")
  }else{
    id = idS
  }

  let j = src[0].lastIndexOf("/")+1
  let str = src[0].slice(j, -4)
  aud = src[0].replace(str, id)

  audio.setAttribute('src', aud)
  audio.play()

  if (this.getAttribute("class").indexOf("item") != -1 ) {
    contSvg--
    cont.innerHTML = contSvg
  }
  //Al remover el Cl se quita el filtro sin embargo no es bueno quitar el evento
  this.classList.remove("item")

  if (contSvg < 1) {
    if (victoryMessage !== null) {
      victoryMessage();
    }
  }
}
