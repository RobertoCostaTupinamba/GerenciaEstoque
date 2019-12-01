<?php
    include_once("./conexao.php");

    $id_cliente = $_GET["cdg"];

    if ($conexao) {
        $select = "select * from cliente, endereco, pessoas
        where cliente.cpf ='".$id_cliente."';";

        include_once("./retornoAtualiza.php");
    }

?>