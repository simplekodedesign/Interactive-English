<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
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
  echo "
  <link rel='stylesheet' href='../../Lessons/Pronunciation of Vowels/style.css?q=".$q."'>
  <span id='said'>Listen and talk</span>
  <div class='theme'>
    <div class='cont_abc' id='cont_all'>
      <div class='letra 0 active' id='A'>A</div>
      <div class='letra 1' id='E'>E</div>
      <div class='letra 2' id='I'>I</div>
      <div class='letra 3' id='O'>O</div>
      <div class='letra 4' id='U'>U</div>
    </div>
  </div>
  <div class='buttons'>
      <a class='lessonButton' id='btnSpeak'>Speak</a>
  </div>
  <audio src='' id='letterAud'></audio>
  <script type='text/javascript' src='../../Lessons/Pronunciation of Vowels/Javascript.js?q=".$q."'></script>
  ";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
</script>
