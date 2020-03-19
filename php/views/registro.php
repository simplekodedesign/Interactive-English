<!DOCTYPE html>
<html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="shortcut icon" type="image/ico" href="img/favicon.ico">
      <link rel="stylesheet" href="../../css/login.css?q=<?php echo $q?>">
      <link rel="stylesheet" href="../../css/background.css?q=<?php echo $q?>">
      <link rel="stylesheet" href="../../css/signUp.css?q=<?php echo $q?>">
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
      <a href="../../index.php" class='regresar'><span id="close"><span id="closeA"></span></span> Regresar</a>
      <form action="/action_page.php" class="loginForm" id="formLogin">
        <fieldset class='loginForm'>
          <legend>Datos de la Institución</legend>
            <div>
                <input type="password" name="pin" id="pin" placeholder="&nbsp;" class="formInput" required>
                <label for="pin" class="inputLabel">PIN</label>
            </div>
          </fieldset>

          <fieldset class='loginForm'>
            <legend>Datos del acudiente</legend>
            <div>
              <input type="text" name="primer_nombre_repre" id="primer_nombre_repre" placeholder="&nbsp;" class="formInput" required>
              <label for="primer_nombre_repre" class="inputLabel">Primer Nombre</label>
            </div>
            <div>
              <input type="text" name="primer_apellido_repre" id="primer_apellido_repre" placeholder="&nbsp;" class="formInput" required>
              <label for="primer_apellido_repre" class="inputLabel">Primer Apellido</label>
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="&nbsp;" class="formInput" required>
              <label for="email" class="inputLabel">Email</label>
            </div>
            <div>
              <input type="email" name="email2" id="email2" placeholder="&nbsp;" class="formInput" required>
              <label for="email2" class="inputLabel">Confirmar email</label>
            </div>
          </fieldset>
          <fieldset class='loginForm'>
            <legend>Datos del estudiante</legend>
            <div>
              <input type="text" name="primer_nombre_est" id="primer_nombre_est" placeholder="&nbsp;" class="formInput" required>
              <label for="primer_nombre_est" class="inputLabel">Primer Nombre</label>
            </div>
            <div>
              <input type="text" name="primer_apellido_est" id="primer_apellido_est" placeholder="&nbsp;" class="formInput" required>
              <label for="primer_apellido_est" class="inputLabel">Primer apellido</label>
            </div>
            <div>
              <input type="text" name="nb_usuario" id="nb_usuario" placeholder="&nbsp;" class="formInput" required>
              <label for="nb_usuario" class="inputLabel">Nombre de usuario</label>
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="&nbsp;" class="formInput" required>
              <label for="password" class="inputLabel">Contraseña</label>
            </div>
            <div>
              <input type="password" name="password2" id="password2" placeholder="&nbsp;" class="formInput" required>
              <label for="password2" class="inputLabel">Confirmar contraseña</label>
            </div>
          </fieldset>
          <div class='row'>
            <img src="../../img/English21.svg" alt="English 21 logo">
            <input type="submit" id='submit' class='button' value="Crear mi cuenta">
          </div>
      </form>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <script src="../../js/registro.js"></script>
  </body>
</html>