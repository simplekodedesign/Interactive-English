var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function(){
  if(this.readyState == 4){
    if (this.status == 200) {
      let resp = JSON.parse(this.responseText);
      if (resp.status === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Buen trabajo',
          text: 'Has sido registrado exitosamente'
        })}else{
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: resp.message,
          })
        }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error con la conexión',
        text: 'Intenta recargar la pagina o contacta a soporte',
      })
    } 
  }
}

var select = document.getElementById("nombre_inst")

window.addEventListener("load",() => {
  let xhttp2 = new XMLHttpRequest()
  xhttp2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let data = JSON.parse(this.responseText)
      data.map(inst => {
        let option = document.createElement("option")
        option.setAttribute("value",inst)
        option.appendChild(document.createTextNode(inst))
        select.appendChild(option)
      })
    }
  }
  xhttp2.open("GET","../controller/list_schools.php")
  xhttp2.send()
})

document.getElementById("formLogin").addEventListener("submit", e => {
  e.preventDefault()
  var data = new FormData(document.getElementById("formLogin"))
  xhttp.open("POST", "../controller/registro.php", true)
  xhttp.send(data)
})