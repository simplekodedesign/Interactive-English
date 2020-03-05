var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
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
  }
 }


document.getElementById("formLogin").addEventListener("submit", e => {
  e.preventDefault()
  var data = new FormData(document.getElementById("formLogin"))
  xhttp.open("POST", "../controller/registro.php", true)
  xhttp.send(data)
})