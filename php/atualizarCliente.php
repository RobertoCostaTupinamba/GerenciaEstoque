<?php
    include_once("./conexao.php");

    $id_cliente = $_GET["cdg"];

    if ($conexao) {
        if (empty($id_cliente) == false) {
            $select = "select * from retornaDadosCliente
            where  cpf = '".$id_cliente."';";
            include_once("./retornoAtualiza.php");
        }
        else {
            echo "1"; //Error;
        }
    }

?>