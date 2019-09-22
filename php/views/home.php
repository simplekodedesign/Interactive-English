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
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Main</title>
    <link rel="stylesheet" href="../../css/master.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="../../css/home.css?q=<?php echo $q?>">
  </head>
  <body>
    <header>
      <img src="../../img/English21.svg" alt="Logo">
      <div class="navbar">
        <a href="home.php"><span class="hButton B_lecciones">LESSONS</span></a>
        <span class="hButton B_herr">
          <span>TRANSLATOR</span>
          <!-- <ul>
            <li>INSTRUCTIONS</li>
            <li>TRANSLATOR</li>
          </ul> -->
        </span>
        <a href="#"><span class="hButton B_ayuda">HELP</span></a>

        <span class="hButton B_perfil">
          <img src="<?php echo $_SESSION["user_icon"]?>" class="avatar" alt=" Pic">
          <ul>
            <li id="btnProfile">PROFILE</li>
            <li class="B_exit" id="btnExit">EXIT</li>
          </ul>
        </span>

      </div>
    </header>
    <!-- <img src="../../img/C21logowhite.svg" alt="Logo"> -->

    <section>
      <?php
        if(empty($_GET)){
          // .round((($_SESSION["te_actual"]*100)/18),0).
          echo '
          <div class="titles">
            <h1 class="roadTitle">LESSONS</h1>
          </div>
          <!--<div class="navbar">
            <a hrhef="#" class="button">1 Instructions</a>
            <a hrhef="#" class="button">2 My ID</a>
            <a hrhef="#" class="button">3 My Program</a>
          </div> -->

          <div class="container" id="road">
            <div id="lessons">
            <div  class="roadicon" id="theme1"><img src="../../img/lessons/background/abc.svg" width="100%" alt="The Alphabet"></div>
            <div  class="roadicon" id="theme2"><img src="../../img/lessons/background/greetings.svg" height="100%" alt="The Greetings"></div>
            <div  class="roadicon" id="theme3"><img src="../../img/lessons/background/thenumbers.svg" height="100%" alt="The Numbers"></div>
            <div  class="roadicon" id="theme4"><img src="../../img/lessons/background/personalinformation.svg" height="60%" alt="Personal information"></div>
            <div  class="roadicon" id="theme5"><img src="../../img/lessons/background/articles.svg" height="100%" alt="Articles (a, an, the)"></div>
            <div  class="roadicon" id="theme6"><img src="../../img/lessons/background/animals.svg" height="100%" alt="Animals"></div>
            <div  class="roadicon" id="theme7"><img src="../../img/lessons/background/foodanddrinks.svg" height="100%" alt="Food and drinks"></div>
            <div  class="roadicon" id="theme8"><img src="../../img/lessons/background/body.svg" height="100%" alt="Parts of the body"></div>
            <div  class="roadicon" id="theme11"><img src="../../img/lessons/background/plurals.svg" height="100%" alt="plurals"></div>
            <div  class="roadicon" id="theme9"><img src="../../img/lessons/background/thisthese.svg" height="100%" alt="This-These"></div>
            <div  class="roadicon" id="theme10"><img src="../../img/lessons/background/thatthose.svg" height="100%" alt="That-thosea"></div>
            <div  class="roadicon" id="theme12"><img src="../../img/lessons/background/thecolors.svg" height="70%" alt="Colors"></div>
            <div  class="roadicon" id="theme13"><img src="../../img/lessons/background/occupations.svg" height="100%" alt="To be and occupations"></div>
            <div  class="roadicon" id="theme14"><img src="../../img/lessons/background/sports.svg" height="100%" alt="Sports"></div>
            <div  class="roadicon" id="theme15"><img src="../../img/lessons/background/prepositions.svg" height="100%" alt="Prepositions"></div>
            <div  class="roadicon" id="theme16"><img src="../../img/lessons/background/directions.svg" height="80%" alt="Directions"></div>
            <div  class="roadicon" id="theme17"><img src="../../img/lessons/background/family.svg" height="80%" alt="Family"></div>
            <div  class="roadicon" id="theme18"><img src="../../img/lessons/background/hours.svg" height="70%" alt="The hours"></div>
            <div id="start"><img src="../../img/lessons/background/start.svg" height="100%" alt="Start"></div>
            <div id="end"><img src="../../img/lessons/background/end.svg" height="100%" alt="END"></div>
            <img src="../../img/lessons/background/Recorrido.svg" alt="camino" width="100%">
            </div>
          </div>

        ';
        }else{
          include($_GET["url"]);
          // echo "<div id='helpgif'>
          //   <div class='x' id='close'>
          //     <div class='line' id='b6'></div>
          //     <div class='line' id='b7'></div>
          //   </div>
          //   <div class='flexcont'>
          //     <img src='".$gift."' width='70%' height='auto' alt='Help'>
          //   </div>
          // </div>";
        }
      ?>
    </section>
    <?php
      if($lant != "" && $lant != "#"){
        echo "<div class='navigationButtons' id='lPrev'><a href='".$lant."'><span></span></a></div>";
      }
      if($lact != "" && $lact != "#"){
        echo "<div><a href='".$lact."'>Actual</a></div>";
      }
      if($lsig != "" && $lsig != "#"){
        echo "<div class='navigationButtons' id='lSigu'><a href='".$lsig."'><span></span></a></div>";
      }
       $par="'".$_GET["url"]."',".$_GET["co"];
    ?>
    <script type="text/javascript">
      var se_actual = <?php echo $_SESSION["se_actual"];?>;
      var te_actual = <?php echo $_SESSION["te_actual"];?>;
    </script>
    <script src="../../js/routing.js"></script>
    <script src="../../js/master.js"></script>
  </body>
</html>
