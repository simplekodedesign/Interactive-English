<?php
  //asegurarse que la sesion fue iniciada
  session_start();

  require("php/controller/db_connection.php");
  include("php/controller/challenge.php");

  //Asegurarse del https
  /*if( !isset($_SERVER['HTTPS'] ) )
      echo "<script>location = 'https://".$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"]."'</script>";*/

  //Realizar conexion a base de datos
  Connection::connect();


//  echo "<script>alert('".$_SESSION["user"]."')</script>";

  if (!isset($_SESSION['user'])){
    echo "<script>window.location='index.php'</script>";
  }

  //url para botones anterior y siguiente
  if(!empty($_GET["co"])){
    $results=Connection::request("select Les_Ant , Les_Sig from p070_orden where Co_Orden=".$_GET["co"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $lant=$res["Les_Ant"];
        $lsig=$res["Les_Sig"];
      }
    }
    $results=Connection::request("select Les_Ant from p070_orden where Co_Orden=".($_GET["co"]+1));
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $lact=$res["Les_Ant"];
      }
    }
    if(!isset($_SESSION["reto"])){
      $lsig=urlBtnSig($_GET["co"],$lsig);
    }else if(!empty($_GET["ini"])&&!empty($_GET["end"])){
      $lsig="php/views/challenge.php?ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"];
    }else{
      if(isset($_SESSION["reto"]))unset($_SESSION["reto"]);
      if(isset($_SESSION["reto_aplicado"]))unset($_SESSION["reto_aplicado"]);
    }
  }else{
    $lant="#";
    $lsig="#";
    $lact="#";
  }

  //variable para recargar los js y css
  $q=rand();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Interactive English</title>
    <link href="https://fonts.googleapis.com/css?family=Mali|Roboto&display=swap" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="css/mainCss.css?q=<?php echo $q?>">
    <link rel="stylesheet" href="css/themes.css?q=<?php echo $q?>">
</head>
<body class="theme1">
      <div class="menuIcon" onclick="fullmenu(this)">
          <div class="line" id="b1"></div>
          <div class="line" id="b2"></div>
          <div class="line" id="b3"></div>
      </div>
      <div id="Lessons">
        <h1 id="maintTitle">Themes</h1>
        <div class="GridLessons">
          <a href="home.php" class="start"><h1>Start</h1></a>
          <div id="nada"></div>
          <div id="nada1"></div>
          <div id="nada2"></div>
          <div id="nada3"></div>
          <div id="nada4"></div>
          <div class="themeRoad" id="theme1">
            <div class="svgContainer">
              <img src="img/themes/the_letters.svg" alt="The Alphabet"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme2">
            <div class="svgContainer">
              <img src="img/themes/the_greetings.svg" alt="The Greetings"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme3">
            <div class="svgContainer">
              <img src="img/themes/numbers.svg" alt="Numbers"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme4">
            <div class= "svgContainer">
              <img src="img/themes/personal_information.svg" alt="Personal Information"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme5">
            <div class= "svgContainer">
              <img src="img/themes/a_an_the.svg" alt="Articles (a, an, the)"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme6">
            <div class= "svgContainer">
              <img src="img/themes/animals.svg" alt="Animals"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme7">
            <div class= "svgContainer">
              <img src="img/themes/food_and_drinks.svg" alt="Food And Drinks"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme8">
            <div class= "svgContainer">
              <img src="img/themes/the_body.svg" alt="Parts Of The Body"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme9">
            <div class= "svgContainer">
              <img src="img/themes/plurals.svg" alt="Plurals"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme10">
            <div class= "svgContainer">
              <img src="img/themes/this_these.svg" alt="This - These"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme11">
            <div class= "svgContainer">
              <img src="img/themes/that_those.svg" alt="That - Those"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme12">
            <div class= "svgContainer">
              <img src="img/themes/colors.svg" alt="Colors"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme13">
            <div class= "svgContainer">
              <img src="img/themes/to_be_occupations.svg" alt="To Be and Occupations"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme14">
            <div class= "svgContainer">
              <img src="img/themes/sports.svg" alt="Sports"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme15">
            <div class= "svgContainer">
              <img src="img/themes/prepositions.svg" alt="Prepositions"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme16">
            <div class= "svgContainer">
              <img src="img/themes/directions.svg" alt="Locations"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme17">
            <div class= "svgContainer">
              <img src="img/themes/family.svg" alt="Family"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="themeRoad" id="theme18">
            <div class= "svgContainer">
              <img src="img/themes/time.svg" alt="Time"
              height = "100%"
              width="auto"
              >
            </div>
          </div>
          <div class="end"><h1>Finish</h1></div>
        </div>

        <div class="fondo_aqua">
          <img src="img/pet/fondo_oceano.webp" alt="">
        </div>
      </div>

      <div id="profile">
          <div class="profile" onclick="dropdown(this)">
            <div class="usericon">
              <img src="<?php echo $_SESSION["user_icon"]?>" width='70%' alt="<?php echo $_SESSION["user_icon"]?>" id="userIcon">
            </div>
            <div id="b4"><</div>
          </div>
          <ul id="dropdown">
              <li><a href="home.php?url=php/views/profile.php">Profile</a></li>
              <!-- <li><a href="#">Settings</a></li> -->
              <li><a href="php/controller/exit.php">Exit</a></li>
          </ul>
      </div>


  <section class="welcome" id="main">
    <?php
      if(empty($_GET)){
        // .round((($_SESSION["te_actual"]*100)/18),0).
        echo "<link rel='stylesheet' href='css/progress.css'>
        <div class='titles' id='welcome'><h1> Hi ".$_SESSION["name"]." ".$_SESSION["surname"]." <br> Welcome to:</h1></div>

        <div class='home' id='cont_all'>

          <img src='img/c21_v2.webp' width='10%' height='auto' class='logo' alt='Interactive English'>

          <div class='progress'>
            <div class='myAnimation'>
              <div class='percentage'></div>
              <div class='value'>
                  <p>".round((($_SESSION["te_actual"])*100)/18,0)."%</p>
              </div>
              <div class='infContainer'>
                  <p class='inf'>Progreso total</p>
              </div>
            </div>
          </div>

          <div class='helpButton'>
            <div id='helpVideo'><img src='img/lessons/pregunta.svg' width='100%' height='100%' alt='help'></div>
          </div>
          <!--<div class='play'>
            <button class='lessonButton' id ='start'>Go to current lesson</button>
          </div>-->
          <div id='helpgif'>
            <div class='x' id='close'>
              <div class='line' id='b6'></div>
              <div class='line' id='b7'></div>
            </div>
            <div class='flexcont' id='video'>
              <video width='90%' height='auto' controls controlsList='nodownload'>
                   <source src='video/intro.mp4' type='video/mp4'>
                     Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
        <!--  <script>
          var test = ".$_SESSION["se_actual"].";
          </script>
          Tu progreso: ".$_SESSION["progreso"]."
          <br>
          Leccion actual: ".$_SESSION["se_actual"]."
          <br>
          Tema actual: ".$_SESSION["te_actual"]."
          <br>
          Codigo usuario: ".$_SESSION["co_usuario"]."-->
      ";
      }else{
        include($_GET["url"]);
        echo "<div id='helpgif'>
          <div class='x' id='close'>
            <div class='line' id='b6'></div>
            <div class='line' id='b7'></div>
          </div>
          <div class='flexcont'>
            <img src='".$gift."' width='70%' height='auto' alt='Help'>
          </div>
        </div>";
      }
    ?>
    <?php $par="'".$_GET["url"]."',".$_GET["co"];?>
    <button type="button" name="button" id="reset" onclick="reload()" style="<?php if(!isset($_GET["co"]))echo 'display:none';?>">Reiniciar Actividad</button>
    </section>
  <div id="victoryScreen">
      <div class="victoryDiv">
          <div class="victoryMessage">
              <h2>YOU WON</h2>
              <img src="img/pet/octopus.webp" alt="Pet Octopus">
              <audio src="" id="victoryAud"></audio>
          </div>
          <!-- <div class="victorybuttons">
              <div class="victoryButton" id="victoryNext"><a href="<php echo $lact?>">Repeat Lesson</a></div>
              <div class="victoryButton" id="victorycontinue"><a href="php echo $lsig"?>Next Lesson</a></div>
          </div> -->
      </div>
  </div>
  <div class="helpButton" style="<?php if(!isset($_GET["co"]))echo 'display:none';?>">
    <div id="help" onclick="helpmenu(this)">
      <img src="img/lessons/more.svg" width="100%" height="100%" alt="more">
    </div>
    <div id="helpVideo"><img src="img/lessons/pregunta.svg" width="100%" height="100%" alt="help"></div>
    <div id="translator"><img src="img/lessons/translate.svg" width="100%" height="100%" alt="Translator"></div>
  </div>
  <div class="NavButtons" style="<?php if($lant!=''&&$lant!='#'&&!isset($_SESSION["reto"]))echo 'display:flex';?>" id="last">
    <div class="navbutton">
      <a href="<?php echo $lant?>"><span><</span></a>
    </div>
  </div>
  <div class="NavButtons" style="<?php if($lsig!=''&&$lsig!='#'&&$_SESSION["se_actual"]>$_GET["co"]&&!isset($_SESSION["reto"]))echo 'display:flex';?>" id="next">
    <div class="navbutton">
      <a href="<?php echo $lsig?>"><span>></span></a>
    </div>
  </div>
  <div class="translatorScreen" id="translatorScreen">
    <div class="menuIcon exitButton">
        <div class="line" id="b8"></div>
        <div class="line" id="b9"></div>
        <div class="line" id="b10"></div>
    </div>

    <div class="translateDiv">
      <div class="areasContainer">
        <textarea name="" id="txtFrom"></textarea>
        <textarea name="" id="txtTo"></textarea>
      </div>
      <div class="radiobut">
        <input type="radio" name="option" id="checkEsEn" value="es-en">Español a Inglés
      </div>
      <div class="radiobut">
        <input type="radio" name="option" id="checkEnEs" value="en-es" checked>Inglés a Español
      </div>
      <button onclick="getTranslate()">Traducir/Translate</button>
    </div>
  </div>

  <footer class="footer">
    <div class="logo">
      <img src="img/logo c21.webp" width="50px" height="50px" alt="Capacitese21">
      <p>Diviertete y aprende cuando quieras y desde cualquier dispositivo</p>
      <p>© 2019 Capacitese21 SAS. Todos los derechos reservados.</p>
    </div>
  </footer>
    <script>
      var loc;
      loc=window.location.href;
      history.pushState({ foo: "home" },"","home.php");
      window.oncontextmenu = function() {
        return false;
      }
    </script>
    <script src="js/mainJS.js?q=<?php echo $q?>"></script>
    <script src="js/routing.js?q=<?php echo $q?>"></script>
</body>
</html>
