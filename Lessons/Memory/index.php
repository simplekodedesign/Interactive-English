<?php
  //Buscar el titulo de la leccion
  //if(isset($_GET["aj"])&&$_GET["aj"]=1)require_once "../../php/controller/db_connection.php";
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Match the Image</span>
      </div>";
      $co_juego=$res["Co_Juego"];
    }
  }
  $results=Connection::request("select Tx_Help from p050_juego where Co_Juego=".$co_juego);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $gift=$res["Tx_Help"];
    }
  }

  echo "<link rel='stylesheet' href='Lessons/Memory/style.css?q=".$q."'>
  <div class='playground' id='container'>";

  for($k=0;$k<2;$k++){
    //Buscar los elementos a iterar
    $urlImg=array();
    $urlAud=array();
    $compare=array();
    $total=0;
    $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $compare[]=$res["Nb_Comparar"]; //validacion a comparar
        $results2=Connection::request("select Tx_Url from p090_imagenes where Nb_imagenes like '".$res["Nb_imagenes"]."'");
        if($results2->rowCount()>0){
          while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
            $urlImg[]=$res2["Tx_Url"]; //imagenes
          }
        }
        $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
        if($results2->rowCount()>0){
          while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
            $urlAud[]=$res2["Tx_Url"]; //audios;
          }
        }
        $total+=1; //total de elementos
      }
    }

    for($i=0;$i<$total;$i++){
      echo "  <div class='card'>
                    <div class='block'></div>
                    <img src='".$urlImg[$i]."' alt='".$urlAud[$i]."'>
                </div>";
    }
  }

  echo "<div class='guardian'></div>
  </div>
  <audio src='' id='cardAud' style='display:none;'></audio>
  <script type='text/javascript' src='Lessons/Memory/Javascript.js?q=".$q."'></script>
  <script type='text/javascript'>
    var cord=".$_GET["co"].";
    var tot=".$total.";
  </script>";
?>
