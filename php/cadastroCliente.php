<?php
    include_once("./conexao.php");

    include_once("./cliente.php");

    if ($conexao) {
        $insert = "select cadastrar_Cliente_Endereco('".$cpf."','".$nome."','".$telefone."','".$rua."',".$numero.",
        '".$bairro."','".$cidade."','".$cep."')";

        $res = pg_query($conexao, $insert);
        

        if ($res) {
            echo "1"; // Tudo Certo.
        }
        else {
            echo "2"; // Pode ser que seja erro de repetição de chave primaria.
        }
    }
    else {
        echo "3"; // Erro não conhecido.
    }
    pg_close($conexao);
?>