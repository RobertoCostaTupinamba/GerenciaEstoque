<?php
    include_once("./conexao.php");

    if($conexao) {
        $select = "select p.*, f.id as id_fornecedor , f.nome from fornecedores_local f, compras c, produtos_compras pc, produtos p
            where c.fornecedor_id = f.id and
            pc.id_compras = c.id and
            p.id = pc.id_produtos";

        include_once("./retornoAtualiza.php");
    }
    pg_close($conexao);
?>