<?php
  //asegurarse que la sesion fue iniciada
  session_start();

  require("php/controller/db_connection.php");
  include("php/controller/challenge.php");

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
  if(!empty($_GET["co"])){
    $results=Connection::request("select Les_Ant , Les_Sig from p070_orden where Co_Orden=".$_GET["co"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $lant=$res["Les_Ant"];
        $lsig=$res["Les_Sig"];
      }
    }
    $results=Connection::request("select Les_Ant from p070_orden where Co_Orden=".($_GET["co"]+1));
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $lact=$res["Les_Ant"];
      }
    }
    if(!isset($_SESSION["reto"])){
      $lsig=urlBtnSig($_GET["co"],$lsig);
    }else if(!empty($_GET["ini"])&&!empty($_GET["end"])){
      $lsig="php/views/challenge.php?ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"];
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
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Main</title>
    <link rel="stylesheet" href="../../css/master.css">
    <link rel="stylesheet" href="../../css/second.css">
  </head>
  <body>
    <header>
      <img src="../../img/English21.svg" alt="Logo">
      <img src="../../img/C21logowhite.svg" alt="Logo">
    </header>

    <section>
      <h1>LESSONS</h1>
      <div class="navbar">
        <a hrhef="#" class="button">1 Instructions</a>
        <a hrhef="#" class="button">2 My ID</a>
        <a hrhef="#" class="button">3 My Program</a>
      </div>

      <div class="container" id="road">
        <div id="lessons">
          <div  class="roadicon" id="theme1"><img src="../../img/lessons/abc.svg" width="100%" alt="The Alphabet"></div>
          <div  class="roadicon" id="theme2"><img src="../../img/lessons/greetings.svg" height="100%" alt="The Greetings"></div>
          <div  class="roadicon" id="theme3"><img src="../../img/lessons/thenumbers.svg" height="100%" alt="The Numbers"></div>
          <div  class="roadicon" id="theme4"><img src="../../img/lessons/personalinformation.svg" height="60%" alt="Personal information"></div>
          <div  class="roadicon" id="theme5"><img src="../../img/lessons/personalpronouns.svg" height="100%" alt="Personal pronouns"></div>
          <div  class="roadicon" id="theme6"><img src="../../img/lessons/animals.svg" height="100%" alt="Animals"></div>
          <div  class="roadicon" id="theme7"><img src="../../img/lessons/foodanddrinks.svg" height="100%" alt="Food and drinks"></div>
          <div  class="roadicon" id="theme8"><img src="../../img/lessons/body.svg" height="100%" alt="Parts of the body"></div>
          <div  class="roadicon" id="theme9"><img src="../../img/lessons/thisthese.svg" height="100%" alt="This-These"></div>
          <div  class="roadicon" id="theme10"><img src="../../img/lessons/thatthose.svg" height="100%" alt="That-thosea"></div>
          <div  class="roadicon" id="theme11"><img src="../../img/lessons/leccion 11.svg" height="100%" alt="That-those"></div>
          <div  class="roadicon" id="theme12"><img src="../../img/lessons/thecolors.svg" height="70%" alt="Colors"></div>
          <div  class="roadicon" id="theme13"><img src="../../img/lessons/occupations.svg" height="100%" alt="To be and occupations"></div>
          <div  class="roadicon" id="theme14"><img src="../../img/lessons/sports.svg" height="100%" alt="Sports"></div>
          <div  class="roadicon" id="theme15"><img src="../../img/lessons/leccion 16.svg" height="100%" alt="Sports"></div>
          <div  class="roadicon" id="theme16"><img src="../../img/lessons/directions.svg" height="80%" alt="Directions"></div>
          <div  class="roadicon" id="theme17"><img src="../../img/lessons/family.svg" height="80%" alt="Family"></div>
          <div  class="roadicon" id="theme18"><img src="../../img/lessons/hours.svg" height="70%" alt="The hours"></div>
          <div id="start"><img src="../../img/lessons/start.svg" height="100%" alt="Start"></div>
          <div id="end"><img src="../../img/lessons/end.svg" height="100%" alt="END"></div>
          <img src="../../img/lessons/Recorrido.svg" alt="camino" width="100%">
        </div>
      </div>
    </section>
  </body>
</html>
