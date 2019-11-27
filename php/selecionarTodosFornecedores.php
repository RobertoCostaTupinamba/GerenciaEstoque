<?php
    include_once("./conexao.php");

    if ($conexao) {
        $select = "select id, nome from Fornecedores_Local;";
        $resultado = pg_query($conexao, $select);
        $resultadoArray = pg_fetch_all($resultado);
        $arrayJson = json_encode($resultadoArray);
        echo $arrayJson;
    }
?>