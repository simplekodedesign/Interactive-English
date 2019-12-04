<?php 

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

echo "<link rel='stylesheet' href='../../Lessons/Paint the draws/style.css?q=".$q."'>
<div class='container'>
  <div id='colorsContainer'></div>
  <div id='drawsContainer'></div>
</div>
<script type='text/javascript'>
    var cord=".$_GET["co"].";
</script>
<script src='../../Lessons/Paint the draws/javascript.js?q=".$q."'></script>";

?> 

<script type="text/javascript">
  var co_tema = <?php echo $co_tema?>;
</script>
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