var nb_usuario = document.getElementById("nb_usuario");
const submitButton = document.getElementById("submit");

nb_usuario.addEventListener("keydown",(e) => {
  e.keyCode == 32 ? e.preventDefault() : 0
})

var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function(){
  if(this.readyState == 4){
    if (this.status == 200) {
      console.log(this.responseText)
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
          submitButton.removeAttribute("disabled")
        }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error con la conexión',
        text: 'Intenta recargar la pagina o contacta a soporte',
      })
      submitButton.removeAttribute("disabled")
    } 
  }
}

document.getElementById("formLogin").addEventListener("submit", e => {
  e.preventDefault()
  var data = new FormData(document.getElementById("formLogin"))
  submitButton.setAttribute("disabled", true)
  xhttp.open("POST", "../controller/registro.php", true)
  xhttp.send(data)
})