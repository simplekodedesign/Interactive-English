
// const side = svg[1].contentDocument
// const back = svg[2].contentDocument
var svg
var select = document.getElementsByClassName('lessonButton')
var items

window.addEventListener("load", function () {
  var audio = document.getElementById('audio')
  var en = document.getElementById('en')
  var es = document.getElementById('es')
  svg = document.getElementsByClassName('svg')

  for (let i = 0; i < svg.length; i++) {
    god(i)
  }

  for (var i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function(){
      show()
    })
  }
})

function god(who){
  var svgdoc = (svg[who].contentDocument.getElementsByTagName('svg'))[0]

  var child = svgdoc.children
  const childLength = child.length


  for (let i = 0; i < childLength; i++) {
    let id = child[i].getAttribute('id');
    if (id){
      if (id.indexOf('item') != -1) {
        //La clase item por CSS tiene un filtro en el SVG, colocar la clase de
        //los elementos del SVG que se quieran usar
        child[i].classList.add('item')
      }
    }
  }

  items = svgdoc.getElementsByClassName('item')
  const itemsLength = items.length

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

function check(){
  //Función para la condición victoria, se toman todos los elementos "item" de ambos SVG
  var svg1 = svg[0].contentDocument.getElementsByClassName('item').length
  var svg2 = svg[1].contentDocument.getElementsByClassName('item').length
  // let svg2 = 3;

  if (svg1+svg2 <= 1) { // && svg2
    return true
  }else{
    return false
  }
}

function spotlight (e) {
  let root = document.documentElement

  //seteando posición de los spans con variables css
  root.style.setProperty('--x', e.screenX + "px")
  root.style.setProperty('--y', e.clientY + "px")


  //Retorna el id[1] = ingles, id[2] = español. id[0] realmente no importa
  //Illustrator por defecto sustituye los espacios con _ por ello se limpia el string
  let id = this.id.split("-")
  en.innerHTML = id[1].replace(/_/g, " ")
  es.innerHTML = id[2].replace(/_/g, " ")


  en.style.display = 'block';
  es.style.display = 'block';
  //Añadiendo src y reproduciendo audio
  audio.setAttribute('src', "../../aud/categories/the body/"+id[1]+".mp3")
  audio.play();

  //Al remover el Cl se quita el filtro sin embargo no considero quitar el evento
  this.classList.remove("item")
  if (check() == true) {
    victoryMessage()
  }
}
