<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Translate</span>
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
  $compare=array();
  $message=array();
  $total=0;
  $results=Connection::request("select Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $message[]=$res["Nb_Ask"]; //mensaje
      $compare[]=$res["Nb_Comparar"]; //validacion a comparar
      $total+=1; //total de elementos
    }
  }

  echo"<link rel='stylesheet' href='Lessons/Translate into spanish/style.css?q=".$q."'>
  <div class='theme'>
    <div class='cont_abc' id='cont_all'>
      <div class='letra 0 active' id='phrase'></div>
    </div>
  </div>
  <div class='buttons'>
    <div class='input'>
      <input type='text' placeholder='Write here' class='write' id='write'>
      <i class='fa fa-pencil' aria-hidden='true'></i>
    </div>
    <span class='lessonButton' id='btnCheck'>check</span>
  </div>
  <script type='text/javascript' src='Lessons/Translate into spanish/Javascript.js?q=".$q."'></script>";
?>

<script type="text/javascript">
  var total=<?php echo $total?>;
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
var message=<?php
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
</script>
