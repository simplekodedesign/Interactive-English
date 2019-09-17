<?php
  $co_orden= [];
  $co_juego= [];
  $url_img= [];
  $Nb_Lesson = [];
  //Buscar el nombre del tema
  $results=Connection::request("select Nb_Tema,Tx_Url_Aud from p040_temas where Co_Tema=".$_GET["th"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<section>";
      echo "<link rel='stylesheet' href='../../css/lessons.css?q=<?php echo $q?'>";
      $aud=$res["Tx_Url_Aud"];
    }
  }

  //Generar las lecciones del tema
  $totalLec=0;
  $iniTema=0;
  $b=false;
  $results=Connection::request("select * from p070_orden where Co_Tema=".$_GET["th"]);  //consulta para buscar el nombre de la leccion y el juego correspondiente
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $results2=Connection::request("select Tx_Url_Img from p050_juego where Co_Juego=".$res["Co_Juego"]);  //buscar icono de juego
      if($results2->rowCount()>0){
        while($res2 = $results2->fetch(PDO::FETCH_ASSOC)){
          $urlIcon = $res2["Tx_Url_Img"]; //icono del juego
          $new = array_push($url_img, $res2["Tx_Url_Img"]);
        }
      }

      //codigo que genera el html de las lecciones
      $event="";
      $op=80;
      if($res["Co_Orden"]<=$_SESSION["se_actual"]&&$res["Co_Tema"]<=$_SESSION["te_actual"]){
        $event = "rout(this)";
        $op=0;
      }
      $new = array_push($co_juego, $res["Co_Juego"]);
      $new = array_push($co_orden, $res["Co_Orden"]);
      $new = array_push($Nb_Lesson, $res["Nb_Lesson"]);
      if(!$b){
        $b=true;
        $iniTema=$res["Co_Orden"];
      }
      $totalLec=$res["Co_Orden"];
    }
  }

  //Buscar la informacion del reto para ese usuario en ese tema
  $results=Connection::request("select St_Reto,Co_Tema from t040_retos where Co_Usuario=".$_SESSION["co_usuario"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $stReto=$res["St_Reto"];
      $temaReto=$res["Co_Tema"];
    }
  }

  $op = 80;
  $url = "#";
  if($_SESSION["te_actual"]>$_GET["th"] || ($_SESSION["te_actual"]==$temaReto&&$_SESSION["se_actual"]>$totalLec&&$stReto=='A')){
      $op = 0;
      $url = "php/views/challenge.php?ini=".$iniTema."&end=".$totalLec."&th=".$_GET["th"];
  }

  echo "
  <div id='images'>
    <img src='../../img/lessons/abc.svg' alt='The ABC'>
    <object type='image/svg+xml' data='../../img/lessons/lessonsb.svg' alt='Lessons' id='svg'></object>
  </div>
    <div class='lessoncontainer'>
      <div class='column' id='left'></div>

      <div class='column' id='right'></div>
    </div>";


  echo "</section>";

  echo "<script type='text/javascript'>
    var nombre_lecciones = ".json_encode($Nb_Lesson).";
    var co_orden = ".json_encode($co_orden).";
    var co_juego = ".json_encode($co_juego).";
    var imagenes = ".json_encode($url_img).";
    var numero_leccion = ".$_GET["th"].";
    var nLessons = nombre_lecciones.length;
    console.log(numero_leccion);
  </script>";

  echo "<script type='text/javascript' src='../../js/lessons.js?q=<?php echo $q?>'></script>";
?>
