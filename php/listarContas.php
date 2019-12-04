<?php
    include_once("./conexao.php");

    if ($conexao) {
            $select = "select descricao, to_char(vencimento, 'DD/MM/YYYY') as vencimento, valor, pago from contas";

        include_once("./retornoAtualiza.php");
    }
?>