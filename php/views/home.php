<?php
  //asegurarse que la sesion fue iniciada
  session_start();

  require("../controller/db_connection.php");
  include("../controller/challenge.php");

  //Asegurarse del https
  /*if( !isset($_SERVER['HTTPS'] ) )
    echo "<script>location = 'https://".$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"]."'</script>";*/

  //Realizar conexion a base de datos
  Connection::connect();


  // echo "<script>alert('".$_SESSION["user"]."')</script>";

  if (!isset($_SESSION['user'])){
    echo "<script>window.location='index.php'</script>";
  }

  //url para botones anterior y siguiente
  $lant = "";
  $lsig = "";
  $lact = "";

  if(!empty($_GET["co"])){
    $results=Connection::request("select Co_Tema , Les_Ant , Les_Sig from p070_orden where Co_Orden=".$_GET["co"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $lant=$res["Les_Ant"];
        $lsig=$res["Les_Sig"];
        $co_tema = $res["Co_Tema"];
      }
      $lsig=urlBtnSig($_GET["co"],$lsig);
    }

    $lact = $_SESSION["le_actual"];

    if(!isset($_SESSION["reto"])){
      $lsig = urlBtnSig($_GET["co"],$lsig);
    }else if(!empty($_GET["ini"]) && !empty($_GET["end"])) {
      $lsig = "challenge.php?ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"];
    }else {
      if(isset($_SESSION["reto"]))unset($_SESSION["reto"]);
      if(isset($_SESSION["reto_aplicado"]))unset($_SESSION["reto_aplicado"]);
    }
  }else{
    $lant="#";
    $lsig="#";
    $lact="#";
  }

  //variable para recargar los js y css
  $q = rand();

  //variable del reto recien activado
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>C21 English: Aprende inglés fácilmente</title>
    <link rel="shortcut icon" type="image/ico" href="../../img/favicon.ico">
    <link rel="stylesheet" href="../../css/font.css">
    <link rel="stylesheet" href="../../css/master.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="../../css/lessons.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="../../css/home.css?q=<?php echo $q?>">
  </head>
  <body>
    <header>
      <a href="home.php"><img src="../../img/English21.svg" alt="Logo"></a>
      <div class="navbar">

        <div class="barContainer">
          <span id="showmenu"></span>
          <span id="navbarNav">
            <a href="home.php"><span class="hButton B_lecciones">Lecciones</span></a>
            <span class="hButton B_herr" id="translator">Traductor</span>
            <span class="hButton B_ayuda">Ayuda
              <ul>
                <li id="contactButton">Contáctanos</li>
                <li id="gifButton">Instrucciones</li>
              </ul>
            </span>
          </span>
        </div>

        <span class="hButton B_perfil">
          <img src="<?php echo $_SESSION["user_icon"]?>" class="avatar" alt=" Pic">
          <ul>
            <li id="btnProfile">Perfil</li>
            <li id="awards">Premios</li>
            <li class="B_exit" id="btnExit">Salir</li>
          </ul>
        </span>
      </div>
    </header>

    <section>
      <?php
        if(empty($_GET)){
          echo '
          <script src="../../js/home.js"></script>
          <div class="titles">
            <h1 class="roadTitle" id="lessonTitle">LESSONS</h1>
          </div>

          <div class="container" id="road">
            <div id="lessons">
              <div class="roadicon" id="theme1"><img src="../../img/lessons/background/abc.svg" width="100%" alt="The Alphabet"></div>
              <div class="roadicon" id="theme2"><img src="../../img/lessons/background/greetings.svg" height="100%" alt="The Greetings"></div>
              <div class="roadicon" id="theme3"><img src="../../img/lessons/background/thenumbers.svg" height="100%" alt="Numbers"></div>
              <div class="roadicon" id="theme4"><img src="../../img/lessons/background/personalinformation.svg" height="60%" alt="Personal Information"></div>
              <div class="roadicon" id="theme5"><img src="../../img/lessons/background/articles.svg" height="100%" alt="The Articles"></div>
              <div class="roadicon" id="theme6"><img src="../../img/lessons/background/animals.svg" height="100%" alt="Animals"></div>
              <div class="roadicon" id="theme7"><img src="../../img/lessons/background/foodanddrinks.svg" height="100%" alt="Food and Drinks"></div>
              <div class="roadicon" id="theme8"><img src="../../img/lessons/background/body.svg" height="100%" alt="Parts of the Body"></div>
              <div class="roadicon" id="theme9"><img src="../../img/lessons/background/plurals.svg" height="100%" alt="Plurals"></div>
              <div class="roadicon" id="theme10"><img src="../../img/lessons/background/thisthese.svg" height="100%" alt="This - These"></div>
              <div class="roadicon" id="theme11"><img src="../../img/lessons/background/thatthose.svg" height="100%" alt="That - Those"></div>
              <div class="roadicon" id="theme12"><img src="../../img/lessons/background/thecolors.svg" height="70%" alt="Colors"></div>
              <div class="roadicon" id="theme13"><img src="../../img/lessons/background/occupations.svg" height="100%" alt="To be and Occupations"></div>
              <div class="roadicon" id="theme14"><img src="../../img/lessons/background/sports.svg" height="100%" alt="Sports"></div>
              <div class="roadicon" id="theme15"><img src="../../img/lessons/background/prepositions.svg" height="100%" alt="Prepositions"></div>
              <div class="roadicon" id="theme16"><img src="../../img/lessons/background/directions.svg" height="80%" alt="Directions"></div>
              <div class="roadicon" id="theme17"><img src="../../img/lessons/background/family.svg" height="80%" alt="Family"></div>
              <div class="roadicon" id="theme18"><img src="../../img/lessons/background/hours.svg" height="70%" alt="What Time is it?"></div>
              <div id="start"><img src="../../img/lessons/background/start.svg" height="100%" alt="Start"></div>
              <div id="end"><img src="../../img/lessons/background/end.svg" height="100%" alt="END"></div>
            </div>
          </div>

        ';
        }else{
          include($_GET["url"]);
          if($_GET["co"]) {
            echo "<div class='helpgif' id='helpgif'>
              <div class='exitButton' id='exitButtonGif'>
                <div class='line'></div>
                <div class='line'></div>
              </div>
              <div class='flexcont'>
                <img src='".$gift."' width='70%' height='auto' alt='Help'>
              </div>
            </div>";
          }
          if($_GET["co"] && !isset($_GET["th"])) {
            echo "
            <div class='actionButtons'>
              <div id='goBackButton'>REGRESAR</div>
              <div id='reloadButton'>REINICIAR</div>
            </div>
            ";
          }
        }
        ?>
    </section>
    <?php
      // if(empty($_GET["ini"])&&empty($_GET["end"])){
      //   if($lant != "" && $lant != "#"){
      //     echo "<div class='navigationButtons' id='lPrev'><a href='".$lant."'><span></span></a></div>";
      //   }
      //   if($lsig != "" && $lsig != "#"){
      //     if($_SESSION["se_actual"] > $_GET["co"]) {
      //       echo "<div class='navigationButtons' id='lSigu'><a href='".$lsig."'><span></span></a></div>";
      //     } else {
      //       echo "<div class='navigationButtons' style='display: none;'id='lSigu'><a href='".$lsig."'><span></span></a></div>";
      //     }
      //   }
      // }else{
      //       echo "<div class='navigationButtons' style='display: none;'id='lSigu'><a href='".$lsig."'><span></span></a></div>";
      // }
       $par="'".$_GET["url"]."',".$_GET["co"];
    ?>
    <div class="translatorScreen" id="translatorScreen">
      <div class="exitButton" id="exitButton">
          <div class="line"></div>
          <div class="line"></div>
      </div>

      <div class="translateDiv">
        <span class="hButton B_herr current" id="from_toButton">ENG - ESP</span>
        <div class="areasContainer">
          <textarea name="" id="txtFrom"></textarea>
          <textarea name="" id="txtTo" disabled></textarea>
        </div>
        <!-- <div class="radiobut">
          <input type="radio" name="option" id="checkEsEn" value="es-en">Español a Inglés
        </div>
        <div class="radiobut">
          <input type="radio" name="option" id="checkEnEs" value="en-es" checked>Inglés a Español
        </div> -->
        <button id="translatebutton">Traducir/Translate</button>
      </div>
    </div>

    <div class="translatorScreen" id="contact">
      <div class="exitButton" id="exitButtonContact">
          <div class="line"></div>
          <div class="line"></div>
      </div>

      <form method="post" autocomplete="off" class="loginForm" id="formLogin">
        <div class="contactUs">
          <h1>Te responderemos lo más pronto posible</h1>
        </div>
        <div class="form">
          <!-- <div>
            <span class="barcolor"></span>
            <input type="email" name="email" id="email" placeholder="&nbsp;" class="formInput" disabled>
            <label for="email" id="email" class="inputLabel">supportc21@zoho.com</label>
          </div> -->
          <div class="categorie">
            <span class="barcolor"></span>
            <!-- <select name="subject" id="categorie" placeholder="&nbsp;" class="formInput">
              <option value="Support">Soporte técnico</option>
              <option value="Teacher">Consulta</option>
            </select> -->
            <label for="categorie" id="usernamepass" class="inputLabel">Categoría:</label>
            <div class="checkForm formActive">Consulta</div>
            <div class="checkForm">Soporte</div>
          </div>
          <div class="textarea">
            <span class="barcolor"></span>
            <textarea name="message" id="password" placeholder="Escribe aquí tu inquietud" class="txtarea"></textarea>
            <!-- <label for="password" id="usernamepass" class="">Escribe aquí tu inquietud</label> -->
          </div>
          <input type="submit" value="Enviar" id="submitButton" class="formButton">
        </div>
      </form>
    </div>

    <div class="rocket" id="rocket">
      <audio src="../../aud/victoryAudio.mp3" id="victoryAudio"></audio>
      <object data="../../img/rocket.svg" type="image/svg+xml" id="rocketSVG"></object>
      <audio src="" id="congratsAudio"></audio>
    </div>

    <div id="rocketMessage"></div>

    <div class="win" id= "win" >
      <audio src="" id="themeAudio"></audio>
      <img src="../../img/congratulations.svg" id="Congratulations"></img>
      <span id="winMessage"></span>
    </div>

    <audio src="" id="mAudio"></audio>

    <?php
      if(isset($_GET["th"])){
        echo "<script>var numero_leccion = ".$_GET["th"].";
        </script>";
      }else if(isset($co_tema)){
        echo "<script>var numero_leccion = ".$co_tema.";
        </script>";
      }

      if(isset($_SESSION["reto_actual"])){
        echo "<script>
                var reto_actual = ".$_SESSION["reto_actual"].";
              </script>";
      }

      if(isset($lsig) && isset($_GET["th"])) {
        echo "<script>
                var siguLesson = '".$lsig."';
                var th = ".$_GET["th"]."
              </script>";
      }
     ?>

    <script type="text/javascript">
      var se_actual = <?php echo $_SESSION["se_actual"];?>;
      var te_actual = <?php echo $_SESSION["te_actual"];?>;
    </script>
    <script src="../../js/routing.js?q=<?php echo $q?>"></script>
    <script src="../../js/master.js?q=<?php echo $q?>"></script>

  </body>
</html>
