<?php
    include_once("./conexao.php");

    $id_conta = $_GET['cdg'];

    if ($conexao) {
            $select = "select descricao, to_char(vencimento, 'DD/MM/YYYY') as vencimento, valor, pago from contas 
            where id ='".$id_conta."';";

        include_once("./retornoAtualiza.php");
    }
?>