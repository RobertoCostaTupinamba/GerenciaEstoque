<?php
    include_once("./conexao");
    
    $id_prod = ["codigo"];


    if($conexao) {
        $select = "select * from produtos
        where id = '".$id_prod."';";

        include_once("./retornoAtualiza.php");
    }
    pg_close($conexao);
?>
