<?php

  $img = "img/categories/";
  $aud = "aud/categories/";
  $video = "video/";

  listar_directorios_ruta("../../".$video);

  function listar_directorios_ruta($ruta){
     if (is_dir($ruta)) {
        if ($dh = opendir($ruta)) {
           while (($file = readdir($dh)) !== false) {
              if(is_dir($ruta . $file)&&$file!="." && $file!=".."){
                listar_directorios_ruta($ruta . $file . "/");
              }else if ($file!="." && $file!=".."){
                   echo "<p>".$ruta."".$file."</p>";
                }
           }
        closedir($dh);
        }
     }else{
       echo "<br>No es ruta valida";
     }
  }
?>
