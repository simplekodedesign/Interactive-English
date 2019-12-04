<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Listen to the Vocabulary</span>
      </div>";
      $co_juego=$res["Co_Juego"];
      $co_tema = $res["Co_Tema"];
    }
  }
  echo "
  <link rel='stylesheet' href='../../Lessons\Vocabulary Directions\style.css?q=".$q."'>

    <div class='playgroundContainer'>
        <div class='playground' id='container'>
            <div class='col' id='col1'>
                <div class='block' id='c1b1'>
                    <div class='shop s1 0'>
                        <img src='../../img/categories/places/church.webp' class='img' alt='Church'>
                        <span>Iglesia</span>
                        <audio src='../../aud/categories/places/church.mp3'></audio>
                    </div>
                    <div class='shop s2 1'>
                        <img src='../../img/categories/places/supermarket.webp' class='img' alt='Supermarket'>
                        <span>Supermercado</span>
                        <div class='pasoP'>
                            <span>Paso peatonal</span>
                            <span>Pedestrian crossing</span>
                        </div>
                        <audio src='../../aud/categories/places/supermarket.mp3'></audio>
                    </div>
                    <div class='shop s3 2'>
                        <img src='../../img/categories/places/bookstore.webp' class='img' alt='Bookstrore'>
                        <span>Librería</span>
                        <audio src='../../aud/categories/places/bookstore.mp3'></audio>
                    </div>
                    <div class='shop s4 3'>
                        <img src='../../img/categories/places/restaurant.webp' class='img' alt='Restaurant'>
                        <span>Restaurant</span>
                        <i class='fas fa-bus-alt Bus'>
                            <span>Bus</span>
                        </i>
                        <audio src='../../aud/categories/places/restaurant.mp3'></audio>
                    </div>
                </div>

                <div class='block' id='c1b2'>
                    <div class='shop s1 4'>
                        <img src='../../img/categories/places/ice_cream_shop.webp' class='img' alt='Ice Cream Shop'>
                        <span>Heladería</span>
                        <audio src='../../aud/categories/places/ice_cream_shop.mp3'></audio>
                    </div>
                    <div class='shop s2 5'>
                        <img src='../../img/categories/places/school.webp' class='img' alt='School'>
                        <span>Escuela</span>
                        <i class='fas fa-taxi Taxi'>
                            <span>Taxi</span>
                        </i>
                        <audio src='../../aud/categories/places/school.mp3'></audio>
                    </div>
                    <div class='shop s3 6'>
                        <img src='../../img/categories/places/hospital.webp' class='img' alt='Hospital'>
                        <span>Hospital</span>
                        <audio src='../../aud/categories/places/hospital.mp3'></audio>
                    </div>
                    <div class='shop s4 7'>
                        <img src='../../img/categories/places/museum.webp' class='img' alt='Museum'>
                        <span>Museo</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/museum.mp3'></audio>
                    </div>
                </div>

                <div class='block' id='c1b3'>
                    <div class='shop s1 8'>
                        <img src='../../img/categories/places/zoo.webp' class='img' alt='Zoo'>
                        <span>Zoológico</span>
                        <audio src='../../aud/categories/places/zoo.mp3'></audio>
                    </div>
                    <div class='shop s2 9'>
                        <img src='../../img/categories/places/cinema.webp' class='img' alt='Cinema'>
                        <span>Cine</span>
                        <i class='fas fa-bus-alt Bus'>
                            <span>Bus</span>
                        </i>
                        <audio src='../../aud/categories/places/cinema.mp3'></audio>
                    </div>
                    <div class='shop s3 10'>
                        <img src='../../img/categories/places/bus_stop.webp' class='img' alt='Bus Station'>
                        <span>Parada de Bus</span>
                        <audio src='../../aud/categories/places/bus_station.mp3'></audio>
                    </div>
                    <div class='shop s4 11'>
                        <img src='../../img/categories/places/bakery.webp' class='img' alt='Bakery'>
                        <span>Panadería</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/bakery.mp3'></audio>
                    </div>
                </div>

                <div class='block endblock' id='c1b4'>
                    <div class='shop s1 12'>
                        <img src='../../img/categories/places/beauty_salon.webp' class='img' alt='Beauty Salon'>
                        <span>Salón de Belleza</span>
                        <audio src='../../aud/categories/places/beauty_salon.mp3'></audio>
                    </div>
                    <div class='shop s2 13'>
                        <img src='../../img/categories/places/gym.webp' class='img' alt='Gym'>
                        <span>Gimnasio</span>
                        <i class='fas fa-taxi Taxi'>
                            <span>Taxi</span>
                        </i>
                        <audio src='../../aud/categories/places/gym.mp3'></audio>
                    </div>
                    <div class='shop s3 14'>
                        <img src='../../img/categories/places/fire_station.webp' class='img' alt='Fire Station'>
                        <span>Estación de Bomberos</span>
                        <audio src='../../aud/categories/places/fire_station.mp3'></audio>
                    </div>
                    <div class='shop s4 15'>
                        <img src='../../img/categories/places/toy_store.webp' class='img' alt='Toy Store'>
                        <span>Juguetería</span>
                        <div class='pasoP' alt=''>
                            <span>Paso peatonal</span>
                            <span>Pedestrian crossing</span>
                        </div>
                        <audio src='../../aud/categories/places/toy_store.mp3'></audio>
                    </div>
                </div>
            </div>

            <div class='street'>
                <div class='blockst'></div>
                <div class='blockst'></div>
                <div class='blockst'></div>
                <div class='blockst'></div>
                <audio src='../../aud/categories/places/avenue.mp3'></audio>
            </div>

            <div class='col' id='col2'>
                <div class='block' id='c2b1'>
                    <div class='shop s1 16'>
                        <img src='../../img/categories/places/pharmacy.webp' class='img' alt='Pharmacy'>
                        <span>Farmacia/Droguería</span>
                        <audio src='../../aud/categories/places/pharmacy.mp3'></audio>
                    </div>
                    <div class='shop s2 17'>
                        <img src='../../img/categories/places/pet_shop.webp' class='img' alt='Pet Shop'>
                        <span>Tienda de Mascotas</span>
                        <audio src='../../aud/categories/places/pet_shop.mp3'></audio>
                    </div>
                    <div class='shop s3 18'>
                        <img src='../../img/categories/places/shopping_mall.webp' class='img' alt='Shopping Mall'>
                        <span>Centro Comercial</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/shopping_mall.mp3'></audio>
                    </div>
                    <div class='shop s4 19'>
                        <img src='../../img/categories/places/gallery.webp' class='img' alt='Gallery'>
                        <span>Galería</span>
                        <audio src='../../aud/categories/places/gallery.mp3'></audio>
                    </div>
                </div>

                <div class='block' id='c2b2'>
                    <div class='shop s1 20'>
                        <img src='../../img/categories/places/barber_shop.webp' class='img' alt='Barber Shop'>
                        <span>Barbería</span>
                        <i class='fas fa-taxi Taxi'>
                            <span>Taxi</span>
                        </i>
                        <audio src='../../aud/categories/places/barber_shop.mp3'></audio>
                    </div>
                    <div class='shop s2 21'>

                        <img src='../../img/categories/places/station.webp' class='img' alt='Subway Station'>
                        <span>Estación de Subterráneo</span>
                        <audio src='../../aud/categories/places/subway_station.mp3'></audio>
                    </div>
                    <div class='shop s3 22'>
                        <img src='../../img/categories/places/laundry.webp' class='img' alt='Laundry'>
                        <span>Lavandería</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/laundry.mp3'></audio>
                    </div>
                    <div class='shop s4 23'>
                        <img src='../../img/categories/places/police_station.webp' class='img' alt='Police Station'>
                        <span>Estación de Policia</span>
                        <audio src='../../aud/categories/places/police_station.mp3'></audio>
                    </div>
                </div>

                <div class='block' id='c2b3'>
                    <div class='shop s1 24'>
                        <img src='../../img/categories/places/park.webp' class='img' alt='Park'>
                        <span>Parque</span>
                        <div class='pasoP'>
                            <span>Paso peatonal</span>
                            <span>Pedestrian crossing</span>
                        </div>
                        <audio src='../../aud/categories/places/park.mp3'></audio>
                    </div>
                    <div class='shop s2 25'>
                        <img src='../../img/categories/places/university.webp' class='img' alt='University'>
                        <span>Universidad</span>
                        <i class='fas fa-bus-alt Bus'>
                            <span>Bus</span>
                        </i>
                        <audio src='../../aud/categories/places/university.mp3'></audio>
                    </div>
                    <div class='shop s3 26'>
                        <img src='../../img/categories/places/skyscraper.webp' class='img' alt='Skyscraper'>
                        <span>Rasca Cielos</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/skyscraper.mp3'></audio>
                    </div>
                    <div class='shop s4 27'>
                        <img src='../../img/categories/places/library.webp' class='img' alt='Library'>
                        <span>Biblioteca</span>
                        <audio src='../../aud/categories/places/library.mp3'></audio>
                    </div>
                </div>

                <div class='block endblock' id='c2b4'>
                    <div class='shop s1 28'>
                        <img src='../../img/categories/places/hotel.webp' class='img' alt='Hotel'>
                        <span>Hotel</span>
                        <i class='fas fa-bus-alt Bus'>
                            <span>Bus</span>
                        </i>
                        <audio src='../../aud/categories/places/hotel.mp3'></audio>
                    </div>
                    <div class='shop s2 29'>
                        <img src='../../img/categories/places/gas_station.webp' class='img' alt='Gas Station'>
                        <span>Estación de Servicio</span>
                        <i class='fas fa-taxi Taxi'>
                            <span>Taxi</span>
                        </i>
                        <audio src='../../aud/categories/places/gas_station.mp3'></audio>
                    </div>
                    <div class='shop s3 30'>
                        <img src='../../img/categories/places/bank.webp' class='img' alt='Bank'>
                        <span>Banco</span>
                        <i class='fas fa-traffic-light Traffic_light'>
                            <span>Semáforo</span>
                        </i>
                        <audio src='../../aud/categories/places/bank.mp3'></audio>
                    </div>
                    <div class='shop s4 31'>
                        <img src='../../img/categories/places/coffee_shop.webp' class='img' alt='Coffe Shop'>
                        <span>Cafetería</span>
                        <audio src='../../aud/categories/places/coffee_shop.mp3'></audio>
                    </div>
                </div>
            </div>
        </div>
        <audio id='streetElementsAud' src=''></audio>

        <div class='questionsContainer'>
            <p id='esp'>Ciudad</p>
            <p id='eng'>City</p>

            <img src='' alt='' id='eximg'>
        </div>
    </div>
  <script type='text/javascript' src='../../Lessons\Vocabulary Directions\Javascript.js?q=".$q."'></script>
  <script src='https://kit.fontawesome.com/4e8565b5f0.js'></script>
  ";
?>

<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
  var co_tema = <?php echo $co_tema?>;
</script>
