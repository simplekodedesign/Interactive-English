<?php
  class Data {
    public $urlImg = [];
    public $urlAud = [];
    public $compare = [];
    public $options = [];
  }

  $data = new Data();

  echo "<link rel='stylesheet' href='../../Lessons/Drag to the box/style.css?".$q."'>
  <div class='cont_abc' id='cont_all'>";
    $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        echo "<div class='titles' id='titles'>
          <h1>Arrastra hacia la caja que corresponda</h1>
        </div>";
        $co_juego=$res["Co_Juego"];
      }
    }
      echo "<div class='itemContainer'>

      </div>
      <div id='boxesContainer'></div>
      <audio id='audio'></audio>
  </div>";

  $results=Connection::request("select Tx_Help from p050_juego where Co_Juego=".$co_juego);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $gift=$res["Tx_Help"];
    }
  }
  $total=0;
  $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
  if($results->rowCount() > 0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $new = array_push($data->options, $res["Nb_Ask"]); //Opciones
      // $options[]=$res["Nb_Ask"]; //opciones
      $new = array_push($data->compare, $res["Nb_Comparar"]); //Validaciones a comparar
      // $compare[]=$res["Nb_Comparar"]; //validacion a comparar
      $results2=Connection::request("select Tx_Url from p090_imagenes where Nb_imagenes like '".$res["Nb_imagenes"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $new = array_push($data->urlImg, $res2["Tx_Url"]); // Imágenes
          // $urlImg[]=$res2["Tx_Url"]; //imagenes
        }
      }
      $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $new = array_push($data->urlAud, $res2["Tx_Url"]);
          // $urlAud[]=$res2["Tx_Url"]; //audios;
        }
      }
      $total+=1; //total de elementos
    }
  }

  $datajson = json_encode($data);

  echo "<script>
    var data = ".json_encode($data).";
    console.log(data);
    var cord=  ".$_GET['co'].";
  </script>";

  echo "<script src='../../Lessons/Drag to the box/script.js?q=".$q."' type='text/javascript'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js?q=".$q."' type='text/javascript'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.0/utils/Draggable.min.js?q=".$q."' type='text/javascript'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js?q=".$q."' type='text/javascript'></script>
  ";
?>
