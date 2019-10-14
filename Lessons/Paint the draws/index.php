<?php 

$results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
if($results->rowCount()>0){
  while($res=$results->fetch(PDO::FETCH_ASSOC)){
    echo "<div class='titles' id='titles'>
    <h1>".$res["Nb_Lesson"]."</h1>
    </div>";
    $co_juego=$res["Co_Juego"];
  }
}

echo "<link rel='stylesheet' href='../../Lessons/Paint the draws/style.css?q=".$q."'>
<div class='container'>
  <div id='colorsContainer'></div>
  <div id='drawsContainer'></div>
</div>
<script src='../../Lessons/Paint the draws/javascript.js?q=".$q."'></script>";

?> 
  <!-- <section class="main">
    <link rel="stylesheet" href="../../Lesssons/Paint the draws/style.css">
    <div class="container">
      <div id="colorsContainer"></div>
      <div id="drawsContainer"></div>
    </div>
    <script src="../../Lesssons/Paint the draws/javascript.js"></script>
  </section>

</body>
</html> -->