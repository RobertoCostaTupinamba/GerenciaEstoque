<?php
    include_once("./conexao.php");
    
    $id_func = $_GET["cdg"];

    if ($conexao) {
        if (empty($id_func) == false) {
            $select = "select * from retornaDadosFuncionarios
            where cpf = '".$id_func."';";
            include_once("./retornoAtualiza.php");
        }
        else {
            echo "1"; //Error
        }
    }
    else {
        echo "1"; // Problema na conexao com o banco.
    }
?>