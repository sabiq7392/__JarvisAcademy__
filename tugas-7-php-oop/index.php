<?php
  include('animal.php');
  include('Frog.php');
  include('Ape.php');

  $animal = new Animal('sheep');
  echo 'Name: '.$animal->get_name();
  echo '<br>';
  echo 'legs: '.$animal->get_legs();
  echo '<br>';
  echo 'cold blooded: '.$animal->get_cold_blooded();
  echo '<br><br>';

  $kodok = new Frog('buduk');
  echo 'Name: '.$kodok->get_name(); 
  echo '<br>';
  echo 'legs: '.$kodok->get_legs();
  echo '<br>';
  echo 'cold blooded: '.$kodok->get_cold_blooded();
  echo '<br>';
  echo 'Jump: '.$kodok->jump();
  echo '<br><br>';

  $sungokong = new Ape('kera sakti');
  echo 'Name: '.$sungokong->get_name();
  echo '<br>';
  echo 'legs: '.$sungokong->get_legs();
  echo '<br>';
  echo 'cold blooded: '.$sungokong->get_cold_blooded();
  echo '<br>';
  echo 'Yell: '.$sungokong->yell();
?>