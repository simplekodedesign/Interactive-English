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
  <link rel='stylesheet' href='../../Lessons/Pronunciation of Consonants/style.css?q=".$q."'>
  <span id='said'>Listen and talk</span>
  <div class='theme'>
    <div class='cont_abc' id='cont_all'>
      <div class='letra 0 active' id='B'>B</div>
      <div class='letra 1' id='C'>C</div>
      <div class='letra 2' id='D'>D</div>
      <div class='letra 3' id='F'>F</div>
      <div class='letra 4' id='G'>G</div>
      <div class='letra 5' id='H'>H</div>
      <div class='letra 6' id='J'>J</div>
      <div class='letra 7' id='K'>K</div>
      <div class='letra 8' id='L'>L</div>
      <div class='letra 9' id='M'>M</div>
      <div class='letra 10' id='N'>N</div>
      <div class='letra 11' id='P'>P</div>
      <div class='letra 12' id='Q'>Q</div>
      <div class='letra 13' id='R'>R</div>
      <div class='letra 14' id='S'>S</div>
      <div class='letra 15' id='T'>T</div>
      <div class='letra 16' id='V'>V</div>
      <div class='letra 17' id='W'>W</div>
      <div class='letra 18' id='X'>X</div>
      <div class='letra 19' id='Y'>Y</div>
      <div class='letra 20' id='Z'>Z</div>
    </div>
  </div>
  <div class='buttons'>
      <a class='lessonButton' id='btnSpeak'>Speak</a>
  </div>
  <audio src='' id='letterAud'></audio>
  <script type='text/javascript' src='../../Lessons/Pronunciation of Consonants/Javascript.js?q=".$q."'></script>
  ";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
</script>
