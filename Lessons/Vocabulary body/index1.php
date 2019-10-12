<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Listen to the Vocabulary</span>
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
  //Buscar los elementos a iterar
  $urlImg=array();
  $urlAud=array();
  $en=array();
  $es=array();
  $total=0;
  $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $es[]=$res["Nb_Ask"]; //mensaje
      $en[]=$res["Nb_Comparar"]; //validacion a comparar
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
  // ?q=".$q."
  // echo "";
  // ?q=".$q."
?>

<script type="text/javascript">
  // var total=<?php echo $total?>;
  // var urlImg=<?php
  //         echo "[";
  //         for ($i = 0; $i < $total; $i++) {
  //             if ($i != ($total - 1)) {
  //                 echo '"' . $urlImg[$i] . '",';
  //             } else {
  //                 echo '"' . $urlImg[$i] . '"';
  //             }
  //         }
  //         echo "]";
  //         ?>;
  // var urlAud=<?php
  //         echo "[";
  //         for ($i = 0; $i < $total; $i++) {
  //             if ($i != ($total - 1)) {
  //                 echo '"' . $urlAud[$i] . '",';
  //             } else {
  //                 echo '"' . $urlAud[$i] . '"';
  //             }
  //         }
  //         echo "]";
  //         ?>;
  // var en=<?php
  //         echo "[";
  //         for ($i = 0; $i < $total; $i++) {
  //             if ($i != ($total - 1)) {
  //                 echo '"' . $en[$i] . '",';
  //             } else {
  //                 echo '"' . $en[$i] . '"';
  //             }
  //         }
  //         echo "]";
          // ?>;
  // var es=<?php
  //         echo "[";
  //         for ($i = 0; $i < $total; $i++) {
  //             if ($i != ($total - 1)) {
  //                 echo '"' . $es[$i] . '",';
  //             } else {
  //                 echo '"' . $es[$i] . '"';
  //             }
  //         }
  //         echo "]";
  //         ?>;
  // var cord=<?php echo $_GET["co"]?>;
</script>
