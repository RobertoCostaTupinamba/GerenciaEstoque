<?php
    include_once("./conexao.php");


    if ($conexao) {
        $select = "select * from retornaDadosCliente";

        include_once("./retornoAtualiza.php");
    }

?>