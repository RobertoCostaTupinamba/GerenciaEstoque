<?php
    include_once("./conexao.php");
    
    $id_func = $_GET["codigo"];

    if ($conexao) {
        $select = "select * from funcionarios
        where '".$id_func."';";

        include_once("./retornoAtualiza.php");
    }
    else
        echo "3" // Problema na conexao com o banco.
?>