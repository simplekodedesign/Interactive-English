<?php
  if(isset($_GET["c"])&&$_GET["c"]==1){
    session_start();
    session_destroy();
  }

  if(isset($_GET["e"])){
    switch($_GET["e"]){
      case 1:
        echo "<script> error = 1</script>";
        break;
      case 2:
        echo "<script> error = 2</script>";
        break;
      case 3:
        echo "<script> error = 3</script>";
        break;
    }
  }
  //variable para recargar los js y css
  $q=rand();

  //variables de imagen y color de institucion
  $url = explode(".", $_SERVER['HTTP_HOST'])[0];
  echo "<script>var img_institucion = '".$url."'</script>";
  if(isset($_SESSION["img_institucion"]))echo "<script>var img_institucion = '".$_SESSION["img_institucion"]."'</script>";
  if(isset($_SESSION["color_institucion"]))echo "<script>var color_institucion = '".$_SESSION["color_institucion"]."'</script>";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/ico" href="img/favicon.ico">
    <link rel="stylesheet" href="css/login.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/background.css?q=<?php echo $q?>">
    <title>C21 English: Aprende inglés fácilmente</title>
    <meta name="description" content="
      C21 English es una herramienta de aprendizaje del idioma inglés mediante juegos e interactividad,
      diseñada para divertirse mientras se aprende.
      ">
    <meta name="author" content="Capacitese 21">
</head>
<body>
    <section class="main" id="main">
    <div class="firstHalf" id="firstHalf">
      <img src="" alt="Logo" id="logoImg">

      <form method="post" autocomplete="off" class="loginForm" id="formLogin">
        <h3>Plataforma de inglés:</h3>
        <h3 id="colName">C21English</h3>
        <div>
          <span class="barcolor"></span>
          <input type="text" name="user" id="username" placeholder="&nbsp;" class="formInput">
          <label for="username" id="usernameLabel" class="inputLabel">Nombre de Usuario</label>
        </div>
        <div>
          <span class="barcolor"></span>
          <input type="password" name="pass" id="password" placeholder="&nbsp;" class="formInput">
          <label for="password" id="usernamepass" class="inputLabel">Contraseña</label>
        </div>
        <input type="submit" value="Ingresar" id="submitButton" class="formButton">
        <p id="forgot">¿Olvidaste tú contraseña?</p>
      </form>

      <div id="forgotForm" display="none">

        <div class="forgotScreen">
          <div class="loginForm">
            <h3 class="title">Has olvidado la contraseña</h3>
            <div>
              <span class="barcolor"></span>
              <input type="text" name="user" id="usernamepassRec" class="formInput" placeholder="&nbsp;">
              <label for="usernamepassRec" id="usernamepassRecLabel" class="inputLabel">Nombre de Usuario</label>
            </div>

            <span class="formButton" id="siguiente">Aceptar</span>

            <div>
              <input type="text" name="codigo_generado" id="codigo_generado" style="display:none;">
              <span class="barcolor"></span>
              <input type="text" name="codigo" id="codigo" class="formInput" disabled placeholder="&nbsp;">
              <label for="codigo" id="usernameLabel" class="inputLabel">Código de reactivación</label>
            </div>
            <button class="formButton" id="btnAceptar">Introducir Código</button>
            <span id="close">
              <span id="closeA"></span>
            </span>
            <!-- <img src="img/arrow-back.svg" alt="Atrás"> -->
          </div>

        </div>
      </div>

      <div class="footer">
        <a href="./php/views/registro.php" class='signUp__link'>¿Aún no tienes tu cuenta? <span>Regístrate</span></a>
        <span>Copyright © 2020 Capacitese 21</span>
      </div>

    </div>
    <div class="welcome">
      <img src="img/welcome.svg" alt="Welcome" id="welcome">
    </div>
  </section>

  <div class="message" id="messageContainer" display="none">
    <p id="message">
      ERROR
    </p>
    <span id="messageClose">x</span>
  </div>

    <script src="js/login.js?q=<?php echo $q?>"></script>
    <script type="text/javascript">
      var error;
      history.pushState({ foo: "index" },"","index.php");
    </script>
</body>
</html>
