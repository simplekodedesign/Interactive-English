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


//  echo "<script>alert('".$_SESSION["user"]."')</script>";

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
    }

    $lact = $_SESSION["le_actual"];

    if(!isset($_SESSION["reto"])){
      $lsig=urlBtnSig($_GET["co"],$lsig);
    }else if(!empty($_GET["ini"])&&!empty($_GET["end"])){
      $lsig="challenge.php?ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"];
    }else{
      if(isset($_SESSION["reto"]))unset($_SESSION["reto"]);
      if(isset($_SESSION["reto_aplicado"]))unset($_SESSION["reto_aplicado"]);
    }
  }else{
    $lant="#";
    $lsig="#";
    $lact="#";
  }

  //variable para recargar los js y css
  $q=rand();

  if(isset($_GET["th"])){
    echo "<script>const numero_leccion = ".$_GET["th"].";</script>";
  }else if(isset($co_tema)){
    echo "<script>const numero_leccion = ".$co_tema.";</script>";
  }

  //variable del reto recien activado
  if(isset($_SESSION["reto_actual"])){
    echo "<script>
            var reto_actual = ".$_SESSION["reto_actual"].";
          </script>";
  }
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Main</title>
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
            <a href="home.php"><span class="hButton B_lecciones">Lessons</span></a>
            <span class="hButton B_herr" id="translator">Translator</span>
            <span class="hButton B_ayuda">Help
              <ul>
                <li><a href="#" data-api="smartsupp" data-operation="open">Contact</a></li>
                <li id="gifButton">Instructions</li>
              </ul>
            </span>
          </span>
        </div>

        <span class="hButton B_perfil">
          <img src="<?php echo $_SESSION["user_icon"]?>" class="avatar" alt=" Pic">
          <ul>
            <li id="btnProfile">PROFILE</li>
            <li class="B_exit" id="btnExit">EXIT</li>
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
              <div class="roadicon" id="theme4"><img src="../../img/lessons/background/personalinformation.svg" height="60%" alt="Personal information"></div>
              <div class="roadicon" id="theme5"><img src="../../img/lessons/background/articles.svg" height="100%" alt="The articles"></div>
              <div class="roadicon" id="theme6"><img src="../../img/lessons/background/animals.svg" height="100%" alt="Animals"></div>
              <div class="roadicon" id="theme7"><img src="../../img/lessons/background/foodanddrinks.svg" height="100%" alt="Food and drinks"></div>
              <div class="roadicon" id="theme8"><img src="../../img/lessons/background/body.svg" height="100%" alt="Parts of the body"></div>
              <div class="roadicon" id="theme9"><img src="../../img/lessons/background/plurals.svg" height="100%" alt="Plurals"></div>
              <div class="roadicon" id="theme10"><img src="../../img/lessons/background/thisthese.svg" height="100%" alt="This-These"></div>
              <div class="roadicon" id="theme11"><img src="../../img/lessons/background/thatthose.svg" height="100%" alt="That-those"></div>
              <div class="roadicon" id="theme12"><img src="../../img/lessons/background/thecolors.svg" height="70%" alt="Colors"></div>
              <div class="roadicon" id="theme13"><img src="../../img/lessons/background/occupations.svg" height="100%" alt="To be and occupations"></div>
              <div class="roadicon" id="theme14"><img src="../../img/lessons/background/sports.svg" height="100%" alt="Sports"></div>
              <div class="roadicon" id="theme15"><img src="../../img/lessons/background/prepositions.svg" height="100%" alt="Prepositions"></div>
              <div class="roadicon" id="theme16"><img src="../../img/lessons/background/directions.svg" height="80%" alt="Directions"></div>
              <div class="roadicon" id="theme17"><img src="../../img/lessons/background/family.svg" height="80%" alt="Family"></div>
              <div class="roadicon" id="theme18"><img src="../../img/lessons/background/hours.svg" height="70%" alt="What time is it?"></div>
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
        }
      ?>
    </section>
    <?php
      if(empty($_GET["ini"])&&empty($_GET["end"])){
        if($lant != "" && $lant != "#"){
          echo "<div class='navigationButtons' id='lPrev'><a href='".$lant."'><span></span></a></div>";
        }
        if($lact != "" && $lact != "#"){
          echo "<div><a href='".$lact."'>Actual</a></div>";
        }
        if($lsig != "" && $lsig != "#"){
          if($_SESSION["se_actual"] > $_GET["co"]) {
            echo "<div class='navigationButtons' id='lSigu'><a href='".$lsig."'><span></span></a></div>";
          } else {
            echo "<div class='navigationButtons' style='display: none;'id='lSigu'><a href='".$lsig."'><span></span></a></div>";
          }
        }
      }else{
            echo "<div class='navigationButtons' style='display: none;'id='lSigu'><a href='".$lsig."'><span></span></a></div>";
      }
       $par="'".$_GET["url"]."',".$_GET["co"];
    ?>
    <div class="translatorScreen" id="translatorScreen">
      <div class="exitButton" id="exitButton">
          <div class="line"></div>
          <div class="line"></div>
      </div>

      <div class="translateDiv">
        <span class="hButton B_herr" id="from_toButton">ENG - ESP</span>
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

    <div class="rocket" id="rocket">
      <object data="../../img/rocket.svg" type="image/svg+xml" id="rocketSVG"></object>
      <span id="rocketMessage">You Won</span>
    </div>

    <script type="text/javascript">
      var se_actual = <?php echo $_SESSION["se_actual"];?>;
      var te_actual = <?php echo $_SESSION["te_actual"];?>;
    </script>
    <script src="../../js/routing.js?q=<?php echo $q?>"></script>
    <script src="../../js/master.js?q=<?php echo $q?>"></script>
    <script src="../../js/smartsupp.js?q=<?php echo $q?>"></script>
  </body>
</html>
