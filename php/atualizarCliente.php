<?php
    include_once("./conexao.php");

    $id_cliente = $_GET["cdg"];

    if ($conexao) {
        $select = "select p.cpf, p.nome, p.telefone, e.rua, e.numero, e.bairro, e.cidade, e.cep from cliente c, endereco e, pessoas p
        where c.cpf = p.cpf and
        p.id_Endereco = e.id and
        c.cpf = '".$id_cliente."';";

        include_once("./retornoAtualiza.php");
    }

?>