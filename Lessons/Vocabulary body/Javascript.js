
// const side = svg[1].contentDocument
// const back = svg[2].contentDocument

window.addEventListener("load", function () {
  var select = document.getElementById('select')
  var audio = document.getElementById('audio')
  var en = document.getElementById('en')
  var es = document.getElementById('es')
  god(1)
  select.addEventListener("change", function(){
    god(this.value)
  })
})

function god (who) {
  var svg = document.getElementById('svg'+who).contentDocument
  let svgdoc = (svg.getElementsByTagName('svg'))[0]

  var child = svgdoc.children
  const childLength = child.length

  var items

  for (let i = 0; i < childLength; i++) {
    let id = child[i].getAttribute('id');
    if (id){
      if (id.indexOf('item') != -1) {
        child[i].classList.add('item')
      }
    }
  }

  items = svg.getElementsByClassName('item')
  const itemsLength = items.length

  for (let i = 0; i < itemsLength; i++) {
    items[i].addEventListener("click", spotlight)
  }
}

function spotlight (e) {
  let root = document.documentElement
  //seteando posición de los spans con variables css
  root.style.setProperty('--x', e.clientX + "px")
  root.style.setProperty('--y', e.clientY + "px")


  //Retorna el id[1] = ingles, id[2] = español. id[0] realmente no importa
  let id = this.id.split("-")
  en.innerHTML = id[1].replace(/_/g, " ")
  es.innerHTML = id[2].replace(/_/g, " ")

  audio.setAttribute('src', "../../aud/categories/the body/"+id[1]+".mp3")
  audio.play();
  this.classList.remove("item")
}
