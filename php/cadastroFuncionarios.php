<?php
    include_once("./conexao.php");

    include_once("./funcionarios.php");

    //Tratamento de mascaras.
    include_once("./excluiMascara.php");

    if ($conexao) {
        $insert = "select cadastrar_Funcionario_Endereco('".$cpf."','".$nome."', '".$telefone."','"
        .$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."','".$cargo."',".$valor.",'"
        .$dataNascimento."','".$dataInicio."',".$cargaHoraria.",'".$contaCorrente."');";
        $res = pg_query($conexao, $insert);
        if ($res) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>