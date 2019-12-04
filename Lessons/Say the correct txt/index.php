<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span id='said'>Listen and talk</span>
      </div>";
      $co_juego=$res["Co_Juego"];
      $co_tema = $res["Co_Tema"];
    }
  }
  $results=Connection::request("select Tx_Help from p050_juego where Co_Juego=".$co_juego);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $gift=$res["Tx_Help"];
    }
  }
  //Buscar los elementos a iterar
  $urlAud=array();
  $compare=array();
  $message=array();
  $total=0;
  $results=Connection::request("select Nb_audio , Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $message[]=$res["Nb_Ask"]; //mensaje
      $compare[]=$res["Nb_Comparar"]; //validacion a comparar
      $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $urlAud[]=$res2["Tx_Url"]; //audios;
        }
      }
      $total+=1; //total de elementos
    }
  }
  echo "<link rel='stylesheet' href='../../Lessons/Say the correct txt/style.css?q=".$q."'>
  <div class='theme'>
    <div class='cont_abc' id='cont_all'>
      <div class='letra 0 active' id='text'></div>
      <audio src='' id='aud'></audio>
    </div>
  </div>
  <span id='message'></span>
  <div class='buttons'>
      <span class='lessonButton' id='btnSpeak'>Speak</span>
  </div>
  <script type='text/javascript' src='../../Lessons/Say the correct txt/Javascript.js?q=".$q."'></script>
  ";
?>
<script type="text/javascript">
var urlAud=<?php
        echo "[";
        for ($i = 0; $i < $total; $i++) {
            if ($i != ($total - 1)) {
                echo '"' . $urlAud[$i] . '",';
            } else {
                echo '"' . $urlAud[$i] . '"';
            }
        }
        echo "]";
        ?>;
var compare=<?php
        echo "[";
        for ($i = 0; $i < $total; $i++) {
            if ($i != ($total - 1)) {
                echo '"' . $compare[$i] . '",';
            } else {
                echo '"' . $compare[$i] . '"';
            }
        }
        echo "]";
        ?>;
var txt=<?php
      echo "[";
      for ($i = 0; $i < $total; $i++) {
          if ($i != ($total - 1)) {
              echo '"' . $message[$i] . '",';
          } else {
              echo '"' . $message[$i] . '"';
          }
      }
      echo "]";
      ?>;
  var cord=<?php echo $_GET["co"]?>;
  var co_tema = <?php echo $co_tema?>;
</script>
