<?php
    include_once("./conexao.php");

    if ($conexao) {
        $select = "select f.id, f.nome, f.telefone, e.rua, e.numero, e.bairro, e.cidade, e.cep 
        from fornecedores_local f, endereco e
        where f.id_Endereco = e.id ";
        
        include_once("./retornoAtualiza.php");
    }
?>