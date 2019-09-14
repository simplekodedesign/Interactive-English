<?php
  if(!isset($_GET["cu"])){
    echo "<script>location='../../index.php'</script>";
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/login.css">
    <title>Document</title>
</head>
<body>
    <h1>Nueva contraseña</h1>

    <section class="mainLog">
        <h2 class="title">
            Establecer contraseña
        </h2>
        <div class="form">
            <div>
                <label for="password" id="passwordLabel">Contraseña</label>
                <input type="password" name="password" id="password" class="formInput">
            </div>
            <div>
                <label for="repPassword" id="repPasswordLabel">Repetir Contraseña</label>
                <input type="password" name="repPassword" id="repPassword" class="formInput">
            </div>

            <button id="submit" onclick="update()">Continue</button>
        </div>
    </section>

    <script src="passJavascript.js"></script>
    <script type="text/javascript">
      function update(){
        if(document.getElementById("password").value==document.getElementById("repPassword").value){
          location="../controller/newpass.php?np="+document.getElementById("password").value+"&cu="+<?php echo $_GET["cu"]?>;
        }
      }
    </script>
</body>
</html>
