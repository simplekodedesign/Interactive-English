<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>Pulsa y escucha</h1>
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
    <link rel='stylesheet' href='../../Lessons/ABC/style.css?q=".$q."'>
    <div class='theme'>
      <div class='cont_abc' id='cont_all'>
        <div class='letra 1' id='A'>A<audio src='../../aud/categories/abc/a.mp3'></audio></div>
        <div class='letra 2' id='B'>B<audio src='../../aud/categories/abc/b.mp3'></audio></div>
        <div class='letra 3' id='C'>C<audio src='../../aud/categories/abc/c.mp3'></audio></div>
        <div class='letra 4' id='D'>D<audio src='../../aud/categories/abc/d.mp3'></audio></div>
        <div class='letra 5' id='E'>E<audio src='../../aud/categories/abc/e.mp3'></audio></div>
        <div class='letra 6' id='F'>F<audio src='../../aud/categories/abc/f.mp3'></audio></div>
        <div class='letra 7' id='G'>G<audio src='../../aud/categories/abc/g.mp3'></audio></div>
        <div class='letra 8' id='H'>H<audio src='../../aud/categories/abc/h.mp3'></audio></div>
        <div class='letra 9' id='I'>I<audio src='../../aud/categories/abc/i.mp3'></audio></div>
        <div class='letra 10' id='J'>J<audio src='../../aud/categories/abc/j.mp3'></audio></div>
        <div class='letra 11' id='K'>K<audio src='../../aud/categories/abc/k.mp3'></audio></div>
        <div class='letra 12' id='L'>L<audio src='../../aud/categories/abc/l.mp3'></audio></div>
        <div class='letra 13' id='M'>M<audio src='../../aud/categories/abc/m.mp3'></audio></div>
        <div class='letra 14' id='N'>N<audio src='../../aud/categories/abc/n.mp3'></audio></div>
        <div class='letra 15' id='O'>O<audio src='../../aud/categories/abc/o.mp3'></audio></div>
        <div class='letra 16' id='P'>P<audio src='../../aud/categories/abc/p.mp3'></audio></div>
        <div class='letra 17' id='Q'>Q<audio src='../../aud/categories/abc/q.mp3'></audio></div>
        <div class='letra 18' id='R'>R<audio src='../../aud/categories/abc/r.mp3'></audio></div>
        <div class='letra 19' id='S'>S<audio src='../../aud/categories/abc/s.mp3'></audio></div>
        <div class='letra 20' id='T'>T<audio src='../../aud/categories/abc/t.mp3'></audio></div>
        <div class='letra 21' id='U'>U<audio src='../../aud/categories/abc/u.mp3'></audio></div>
        <div class='letra 22' id='V'>V<audio src='../../aud/categories/abc/v.mp3'></audio></div>
        <div class='letra 23' id='W'>W<audio src='../../aud/categories/abc/w.mp3'></audio></div>
        <div class='letra 24' id='X'>X<audio src='../../aud/categories/abc/x.mp3'></audio></div>
        <div class='letra 25' id='Y'>Y<audio src='../../aud/categories/abc/y.mp3'></audio></div>
        <div class='letra 26' id='Z'>Z<audio src='../../aud/categories/abc/z.mp3'></audio></div>
      </div>
    </div>
    <script src='../../Lessons/ABC/Javascript.js?q=".$q."'></script>
  ";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
</script>
