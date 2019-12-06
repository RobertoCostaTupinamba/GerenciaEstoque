<?php
    include_once("./conexao.php");


    if ($conexao) {
        $select = "select * from venda where pago = false";

        include_once("./retornoAtualiza.php");
    }

?>