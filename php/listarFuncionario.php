<?php
    include_once("./conexao.php");
    

    if ($conexao) {
        $select = "select * from retornaDadosFuncionarios";

        include_once("./retornoAtualiza.php");
    }
    else
        echo "3" // Problema na conexao com o banco.
?>