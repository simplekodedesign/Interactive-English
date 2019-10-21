<?php

  /*
    este codigo genera las lineas para el archivo csv
    luego de compilar debe copiar todo lo que aparece en un bloc de notas
    y guardarlo con extension .csv para importarlo en base de datos
  */

  $img = "img/categories/";
  $aud = "aud/categories/";
  $video = "video/";

  //cambiar la variable por la que necesite
  //1 si es img, 2 si es aud, 3 si es video
  listar_directorios_ruta("../../".$img,1);

  function listar_directorios_ruta($ruta,$tmult){
     if (is_dir($ruta)){
        if ($dh = opendir($ruta)) {
           while (($file = readdir($dh)) !== false) {
              if(is_dir($ruta . $file)&&$file!="." && $file!=".."){
                listar_directorios_ruta($ruta . $file . "/",$tmult);
              }else if ($file!="." && $file!=".."){
                   echo "<div>".$tmult.";".explode(".",$file)[0].";".$ruta."".$file."</div>";
                }
           }
        closedir($dh);
        }
     }else{
       echo "<br>No es ruta valida";
     }
  }
?>
