<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: content-type, authorization');

#$token = str_replace('Bearer', '', getallheaders()['authorization']);

#PDO
$dsn = "mysql:host=db;dbname=data";
$username ='root';
$password = 'password';
try{
    $mysql = new PDO($dsn, $username, $password);
}
catch(Exception $e){
    die('Erreur : '.$e->getMessage());
};

#REQUETE
$sql = 'SELECT * FROM elements';
$query = $mysql->prepare($sql);
$query->execute();
$query->setFetchMode(\PDO::FETCH_ASSOC);
$result = $query->fetchAll();

echo json_encode($result);

 #    echo json_encode(
 #        [
 #        'username' => $_SERVER['PHP_AUTH_USER'],
 #        'password' => $_SERVER['PHP_AUTH_PW'],
 #        ]
 #    );