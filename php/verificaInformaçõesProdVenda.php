<?php
    include_once("./conexao.php");

    $id_prod = $_POST["codigo"];
    $array = json_decode($id_prod);
    echo "$id_prod"."\n"."$array";
    
?>