<?php
    include_once("./conexao.php");
    
    $id_func = $_GET["cdg"];

    if ($conexao) {
        $select = "select f.cpf,p.nome,p.telefone,e.rua, e.numero, e.bairro, e.cidade, e.cep,
        c.tipo, f.salario, f.data_nascimento, f.dt_inicio_trab, f.carga_horaria, f.conta_corrente 
        from funcionarios f, endereco e, pessoas p, cargo c
        where f.id_cargo = c.id and
        f.cpf = p.cpf and
        p.id_Endereco = e.id and
        f.cpf = '".$id_func."';";

        include_once("./retornoAtualiza.php");
    }
    else
        echo "3" // Problema na conexao com o banco.
?>