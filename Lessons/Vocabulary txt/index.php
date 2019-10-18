<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span id='said'>Listen to the Vocabulary</span>
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
  $urlAud=array();
  $text=array();
  $text2=array();
  $total=0;
  $results=Connection::request("select Nb_audio,Nb_Ask,Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $text[]=$res["Nb_Ask"];
      $text2[]=$res["Nb_Comparar"];
      $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $urlAud[]=$res2["Tx_Url"]; //audios;
        }
      }
      $total++;
    }
  }
  echo "<link rel='stylesheet' href='../../Lessons/Vocabulary txt/style.css?q=".$q."'>

    <div class='cont_abc' id='cont_all'>
      <span class='vocabulary' id='en'></span>
      <div class='letra 0 active' id='text'></div>
      <audio src='' id='aud'></audio>
      <span class='vocabulary' id='es'></span>
    </div>
    <div class='buttons'>
      <span class='lessonButton' id='btnIzq'>
        <div class='navigationButtons'></div>
      </span>
      <span class='lessonButton' id='btnDer'>
        <div class='navigationButtons'></div>
      </span>
    </div>

  <script type='text/javascript' src='../../Lessons/Vocabulary txt/Javascript.js?q=".$q."'></script>";
?>

<script type="text/javascript">
  var total=<?php echo $total?>;
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
  var text=<?php
          echo "[";
          for ($i = 0; $i < $total; $i++) {
              if ($i != ($total - 1)) {
                  echo '"' . $text[$i] . '",';
              } else {
                  echo '"' . $text[$i] . '"';
              }
          }
          echo "]";
          ?>;
var text2=<?php
        echo "[";
        for ($i = 0; $i < $total; $i++) {
            if ($i != ($total - 1)) {
                echo '"' . $text2[$i] . '",';
            } else {
                echo '"' . $text2[$i] . '"';
            }
        }
        echo "]";
        ?>;

  console.log(text);
  console.log(text2);
  var cord=<?php echo $_GET["co"]?>;
</script>
