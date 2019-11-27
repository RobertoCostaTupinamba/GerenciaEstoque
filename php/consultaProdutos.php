<?php
    include_once("./conexao.php");

    $id_prod = $_POST["cdg"];
    
    if ($conexao) {
        $select  = "select * from proutos where id = '".$id_prod."');";
        $resultado = pg_query($conexao, $select);
        $resultadoArray = pg_fetch_all($resultado);
        $arrayJson = json_encode($resultadoArray);
        echo $arrayJson;
    }
?>
