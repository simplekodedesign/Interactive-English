<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/ico" href="img/favicon.ico">
    <link rel="stylesheet" href="css/login.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/background.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/signUp.css?q=<?php echo $q?>">
    <title>C21 English: Aprende inglés fácilmente</title>
    <meta name="description" content="
      C21 English es una herramienta de aprendizaje del idioma inglés mediante juegos e interactividad,
      diseñada para divertirse mientras se aprende.
      ">
    <meta name="author" content="Capacitese 21">
</head>
<body>
  
  <div class="signUp" id="signUp">
    <h1 class='signUp__title'>Completa el siguiente formulario para registrarte en C21 English</h1>
    <form action="/action_page.php" class="loginForm" id="formLogin">
      <fieldset class='loginForm'>
        <legend>Datos de la Institución</legend>
          <div>
              <input type="text" name="nombre_institucion" id="nombre_institucion" placeholder="&nbsp;" class="formInput">
              <label for="nombre_institucion" class="inputLabel">Nombre de la Institución</label>
          </div>
          <div>
              <input type="password" name="pin" id="pin" placeholder="&nbsp;" class="formInput">
              <label for="pin" class="inputLabel">PIN</label>
          </div>
        </fieldset>

        <fieldset class='loginForm'>
          <legend>Datos del acudiente</legend>
          <div>
            <input type="text" name="primer_nombre" id="primer_nombre" placeholder="&nbsp;" class="formInput">
            <label for="primer_nombre" class="inputLabel">Primer Nombre</label>
          </div>
          <div>
            <input type="text" name="primer_apellido" id="primer_apellido" placeholder="&nbsp;" class="formInput">
            <label for="primer_apellido" class="inputLabel">Primer Apellido</label>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="&nbsp;" class="formInput">
            <label for="email" class="inputLabel">Email</label>
          </div>
          <div>
            <input type="email" name="confirmar_email" id="confirmar_email" placeholder="&nbsp;" class="formInput">
            <label for="confirmar_email" class="inputLabel">Confirmar email</label>
          </div>
        </fieldset>
        <fieldset class='loginForm'>
          <legend>Datos del estudiante</legend>
          <div>
            <input type="text" name="primer_nombre_estudiante" id="primer_nombre_estudiante" placeholder="&nbsp;" class="formInput">
            <label for="primer_nombre_estudiante" class="inputLabel">Primer Nombre</label>
          </div>
          <div>
            <input type="text" name="primer_apellido_estudiante" id="primer_apellido_estudiante" placeholder="&nbsp;" class="formInput">
            <label for="primer_apellido_estudiante" class="inputLabel">Primer apellido</label>
          </div>
          <div>
            <input type="text" name="nombre_usuario" id="nombre_usuario" placeholder="&nbsp;" class="formInput">
            <label for="nombre_usuario" class="inputLabel">Nombre de usuario</label>
          </div>
          <div>
            <input type="password" name="contraseña" id="contraseña" placeholder="&nbsp;" class="formInput">
            <label for="contraseña" class="inputLabel">Contraseña</label>
          </div>
          <div>
            <input type="password" name="confirmar_contraseña" id="confirmar_contraseña" placeholder="&nbsp;" class="formInput">
            <label for="confirmar_contraseña" class="inputLabel">Confirmar contraseña</label>
          </div>
        </fieldset>

        <input type="submit" id='submit' class='button' value="Crear mi cuenta">
    </form>
  </div>
</body>
</html>