<?php

  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Listen the letter</span>
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

?>
<link rel="stylesheet" href="../../Lessons/Click the right letters/style.css?q=<?php echo $q;?>">
<div class="container">
  <div class="mainLetter" id="mainLetter">
    <audio src="" id="mainAud"></audio>
  </div>
  <div id="optionsLetters"></div>
</div>

<script>
// var numero_leccion = 1;
</script>

<script src="../../Lessons/Click the right letters/Javascript.js?q=<?php echo $q;?>"></script>