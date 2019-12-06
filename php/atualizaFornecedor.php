<?php
    include_once("./conexao.php");

    $id_fornecedor = $_GET['cdg'];

    if ($conexao) {
        if (empty($id_fornecedor) == false) {
            $select = "select f.id, f.nome, f.telefone, e.rua, e.numero, e.bairro, e.cidade, e.cep 
            from fornecedores_local f, endereco e
            where f.id_Endereco = e.id and
            f.id = '".$id_fornecedor."';";
            
            include_once("./retornoAtualiza.php");
        }
        else {
            echo "1"; //Error;
        }
    }
?>