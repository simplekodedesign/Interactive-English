<?php
  require_once ('../../vendor/autoload.php');
  use \Statickidz\GoogleTranslate;
  $trans = new GoogleTranslate();
  $result = $trans->translate($_GET["from"], $_GET["to"], $_GET["txt"]);
  echo $result;
?>
