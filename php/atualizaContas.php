<?php
    include_once("./conexao.php");

    $id_conta = $_GET['cdg'];

    if ($conexao) {
        $select = "select * from contas
        where id ='".$id_conta."';";

        include_once("./retornoAtualiza.php");
    }
?>