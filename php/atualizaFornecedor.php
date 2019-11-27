<?php
    include_once("./conexao.php");

    $id_fornecedor = 1425;

    if ($conexao) {
        $select = "select * from fornecedores_local, endereco
        where fornecedores_local.id = '".$id_fornecedor."';";
        
        include_once("./retornoAtualiza.php");
    }
?>