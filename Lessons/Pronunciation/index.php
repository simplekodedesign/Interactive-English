<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
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
  echo "
    <link rel='stylesheet' href='../../Lessons/Pronunciation/style.css?q=".$q."'>
    <div class='theme'>
      <span id='said'>Listen and talk</span>
      <div class='cont_abc' id='cont_all'>
        <div class='letra 0 active' id='A'>A</div>
        <div class='letra 1' id='B'>B</div>
        <div class='letra 2' id='C'>C</div>
        <div class='letra 3' id='D'>D</div>
        <div class='letra 4' id='E'>E</div>
        <div class='letra 5' id='F'>F</div>
        <div class='letra 6' id='G'>G</div>
        <div class='letra 7' id='H'>H</div>
        <div class='letra 8' id='I'>I</div>
        <div class='letra 9' id='J'>J</div>
        <div class='letra 10' id='K'>K</div>
        <div class='letra 11' id='L'>L</div>
        <div class='letra 12' id='M'>M</div>
        <div class='letra 13' id='N'>N</div>
        <div class='letra 14' id='O'>O</div>
        <div class='letra 15' id='P'>P</div>
        <div class='letra 16' id='Q'>Q</div>
        <div class='letra 17' id='R'>R</div>
        <div class='letra 18' id='S'>S</div>
        <div class='letra 19' id='T'>T</div>
        <div class='letra 20' id='U'>U</div>
        <div class='letra 21' id='V'>V</div>
        <div class='letra 22' id='W'>W</div>
        <div class='letra 23' id='X'>X</div>
        <div class='letra 24' id='Y'>Y</div>
        <div class='letra 25' id='Z'>Z</div>
      </div>
      <div class='buttons'>
        <a class='lessonButton' id='btnSpeak'>Speak</a>
      </div>
    </div>
    <audio src='' id='letterAud'></audio>
    <script type='text/javascript' src='../../Lessons/Pronunciation/Javascript.js?q=".$q."'></script>
  ";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
  var co_tema = <?php echo $co_tema?>;
</script>
