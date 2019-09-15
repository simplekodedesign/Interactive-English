<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Select one card and then talk to find the partner</span>
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

  echo "<link rel='stylesheet' href='../../Lessons/Speak Memory/style.css?q=".$q."'>
  <div class='playground' id='container'>";

  $pos=0;
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
      $pos++;
      echo "  <div class='card'>
                    <div class='block'><audio src='".$urlAud[$i]."'></audio></div>

                    <img src='".$urlImg[$i]."' alt='".$compare[$i]."' id='pos".$pos."'>
                </div>";
    }
  }


  echo "<div class='guardian'></div>
  </div>
  <script type='text/javascript' src='../../Lessons/Speak Memory/Javascript.js?q=".$q."'></script>";
?>

<script type="text/javascript">
  var tot=<?php echo $total?>;
  var cord=<?php echo $_GET["co"]?>;
</script>
