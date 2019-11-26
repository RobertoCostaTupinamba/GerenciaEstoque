<?php
    include_once("./conexao.php");

    $id = $_POST['codcfr'];
    $nome = $_POST["nomecfr"];
    $telefone = $_POST["Telcfr"];
    $rua = $_POST["ruacfr"];
    $numero = $_POST["numcfr"];
    $bairro = $_POST["bairrocfr"];
    $cidade = $_POST["cidadecfr"];
    $cep = $_POST["cepcfr"];

    if ($conexao) {

        $insert = "select cadastrar_Fornecedor_Endereco('".$id."','".$nome."','".$telefone."',
        '".$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."');";
        
        if ($res = pg_send_query($conexao, $insert)) {
            echo "$res";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>