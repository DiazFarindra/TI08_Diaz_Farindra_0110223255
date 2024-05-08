<?php 
  $host = 'localhost';
  $port = 3307;
  $db = 'rumahsakit';
  $user = 'root';
  $pass = 'root';
  $charset='utf8mb4';

  $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

  $opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
  ];

  $dbh =  new PDO($dsn,$user,$pass,$opt);
