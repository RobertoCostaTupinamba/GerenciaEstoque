<?php
    include_once("./conexao.php");
    
    $id_prod = $_GET["cdg"];


    if($conexao) {
        $select = "select * from produtos
        where id = '".$id_prod."';";

        include_once("./retornoAtualiza.php");
    }
    pg_close($conexao);
?>
