<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/ico" href="img/favicon.ico">
    <!--<link rel="stylesheet" href="css/login.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/background.css?q=<?php echo $q?>"> -->
    <title>C21 English: Aprende inglés fácilmente</title>
    <meta name="description" content="
      C21 English es una herramienta de aprendizaje del idioma inglés mediante juegos e interactividad,
      diseñada para divertirse mientras se aprende.
      ">
    <meta name="author" content="Capacitese 21">
</head>
<style type="text/css">

  body{
    background: linear-gradient(45deg,  rgba(66, 183, 245,0.8) 0%,rgba(66, 245, 189,0.4) 10%);
  }

</style>
<body>
  <form id="my_form">
    <fieldset>
      <legend>Acceso/ Registro</legend>
      <h2>Completa el siguiente formulario para registrarme en C21ENGLISH en linea</h2>
      <h3>Datos de la Institución</h3>
      <label for="fname">Nombre</label>
      <input type="text" id="fname" name="nombre_inst"><br><br>
      <label for="lname">Pin</label>
      <input type="text" id="lname" name="pin"><br><br>
      <h3>Datos del acudiente</h3>
      <label for="fname">Primer Nombre</label>
      <input type="text" id="fname" name="primer_nombre_repre"><br><br>
      <label for="fname">Primer Apellido</label>
      <input type="text" id="fname" name="primer_apellido_repre"><br><br>
      <label for="email">Mi e-mail es</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="email">Confirmar mi e-mail</label>
      <input type="email" id="email" name="email2"><br><br>
      <h3>Datos del estudiante</h3>
      <label for="fname">Primer Nombre</label>
      <input type="text" id="fname" name="primer_nombre_est"><br><br>
      <label for="fname">Primer Apellido</label>
      <input type="text" id="fname" name="primer_apellido_est"><br><br>
      <label for="fname">Mi usuario será</label>
      <input type="text" id="fname" name="nb_usuario"><br><br>
      <label for="fname">Mi clave será</label>
      <input type="text" id="fname" name="password"><br><br>
      <label for="fname">Confimo mi clave</label>
      <input type="text" id="fname" name="password2"><br><br>
      <input type="submit" value="Crear mi cuenta">
 </fieldset>
</form>

<script type="text/javascript">
   var xhttp = new XMLHttpRequest()
   xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText)
    }
   }

   document.getElementById("my_form").addEventListener("submit",(e) => {
      e.preventDefault()
      var data = new FormData(document.getElementById("my_form"))
      xhttp.open("POST","../controller/registro.php",true)
      xhttp.send(data)
    })
 </script>
</body>
</html>