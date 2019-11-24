<?php
    include_once("./conexao.php");

    $nome = $_POST["nomecfr"];
    $telefone = $_POST["Telcfr"];
    $rua = $_POST["ruacfr"];
    $numero = $_POST["numcfr"];
    $bairro = $_POST["bairrocfr"];
    $cidade = $_POST["cidadecfr"];
    $cep = $_POST["cepcfr"];

    if ($conexao) {

        $insert = "select cadastrar_Fornecedor_Endereco('".$nome."','".$telefone."',
        '".$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."');";
        
        if ($res = pg_send_query($conexao, $insert)) {
            $res1 = pg_get_result($conexao);
            $rows = pg_num_rows($res1);
            echo "$res1 has $rows records\n\n";
        }
        else {
            echo "Algo inesperado ocorreu!";
        }

    }
    
?>