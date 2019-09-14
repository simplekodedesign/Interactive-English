<?php

  if(isset($_GET["c"])&&$_GET["c"]==1){
    session_start();
    session_destroy();
  }

  if(isset($_GET["e"])){
    switch($_GET["e"]){
      case 1:
        echo "<script>alert('Su contraseña ha sido actualizada con exito')</script>";
        break;
      case 2:
        echo "<script>alert('Usuario o contraseña incorrectos')</script>";
        break;
      case 3:
        echo "<script>alert('Su usuario no se encuentra activo')</script>";
        break;
    }
  }
  //variable para recargar los js y css
  $q=rand();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/login.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/background.css?q=<?php echo $q?>">
    <title>Interactive English</title>
</head>
<body>

  <section id="hi">
    <img src="img/welcome.svg" alt="Welcome" id="welcome">
    <span class="button" id="comenzar">COMENZAR</span>
  </section>

  <img src="img/C21logo.svg" alt="Logo" id="logo">

  
  <section id="login">
    <form action="php/controller/login.php" method="post" autocomplete="off">
      <h1>Ingresa</h1>
      <div>
        <span class="barcolor"></span>
        <input type="text" name="user" id="username" class="formInput">
        <label for="username" id="usernameLabel" class="inputLabel">Usuario</label>
      </div>
      <div>
        <span class="barcolor"></span>
        <input type="password" name="pass" id="password" class="formInput">
        <label for="password" id="usernamepass" class="inputLabel">Contraseña</label>
      </div>
      <input type="submit" value="Ingresar" id="submit">
    </form>
    <p id="forgot">¿Olvidaste tú contraseña?</p>
  </section>
  
  <div id="forgotForm">
    <div class="mainLog forgotScreen">
      <h2 class="title">Has olvidado la contraseña</h2>
      <div class="form">
        <div>
          <input type="text" name="user" id="usernamepassRec" class="formInput">
          <label for="usernamepassRec" id="usernamepassRecLabel" class="inputLabel">Nombre de Usuario</label>
          <span class="barcolor"></span>
        </div>
        
        <span class="siguiente span">Aceptar</span>
        
        <div>
          <input type="text" name="codigo" id="codigo" class="formInput" disabled>
          <label for="codigo" id="usernameLabel" class="inputLabel">Código de reactivación</label>
          <span class="barcolor"></span>
          <input type="text" name="codigo_generado" id="codigo_generado" style="display:none;">
        </div>
        <button class="siguiente" id="btnAceptar">Introducir Código</button>
      </div>

    </div>
  </div>

  <footer>
    <p><b>Capacitese 21 English</b> es una nueva forma fácil y sencilla que lo llevará de la mano a aprender inglés, le abrira muchas puertas en el futuro y lo paseará por nuevos mundos y posibilidades</p>
  </footer>

    <!-- <script src="mainJS.js"></script> -->
    <script src="js/login.js?q=<?php echo $q?>"></script>
    <script type="text/javascript">
      history.pushState({ foo: "index" },"","index.php");
    </script>
</body>
</html>
