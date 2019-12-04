<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>Observa, escucha y aprende</h1>
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

  //Buscar el archivo media asociado al video
  $results=Connection::request("select Nb_videos from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $nbMedia=$res["Nb_videos"];
    }
  }

  //buscar el url del video
  $results=Connection::request("select Tx_Url from p100_videos where Nb_videos like '".$nbMedia."'");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $urlVid=$res["Tx_Url"];
    }
  }

  //generar html de video
  echo "
    <link rel='stylesheet' href='../../Lessons/Video/style.css?q=".$q."'>
    <div class='cont_abc' id='cont_all'>
    <video width='90%' height='auto' controls autoplay controlsList='nodownload' onEnded='victoryMessage()' id='video'>
         <source src='".$urlVid."' type='video/mp4'>
           Your browser does not support HTML5 video.
      </video>
    </div>
    <script type='text/javascript'>
    video = document.getElementById('video')
    video.addEventListener('ended', () =>{
      video.addEventListener('click', () => setTimeout(() => {
        rocketMessage.style.setProperty('display', 'none')
        rocket.style.setProperty('display', 'none');
      }, 750))
    })
    </script>
  ";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
  var co_tema = <?php echo $co_tema?>;
</script>
