<?php
    include_once("./conexao.php");
    include_once("./funcionarios.php");


    if ($conexao) {
        $insert = "select cadastrar_Funcionario_Endereco('".$cpf."','".$nome."', '".$telefone."','"
        .$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."','".$cargo."',".$valor.",'"
        .$dataNascimento."','".$dataInicio."',".$cargaHoraria.",'".$contaCorrente."');";
        
        if ($res = pg_query($conexao, $insert)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>