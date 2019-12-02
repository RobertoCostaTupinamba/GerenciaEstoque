<?php
    include_once("./conexao.php");
    
    $id_func = $_GET["cdg"];

    if ($conexao) {
        $select = "select * from retornaDadosFuncionarios
        where cpf = '".$id_func."';";

        include_once("./retornoAtualiza.php");
    }
    else
        echo "3" // Problema na conexao com o banco.
?>